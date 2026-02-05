
const fs = require('fs');
const path = require('path');

const rootDir = 'src/lib/seo/pages';
const filesToCheck = [];

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDir(fullPath);
        } else if (file.endsWith('.ts') && file !== 'index.ts') {
            filesToCheck.push(fullPath);
        }
    }
}

scanDir(rootDir);

console.log('Checking ' + filesToCheck.length + ' files...');

filesToCheck.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    // Regex to find meta description
    // match: meta: { ... description: "..."
    // This is a simple regex, assuming standard formatting
    const match = content.match(/meta:\s*{[^}]*description:\s*"([^"]+)"/s);

    if (match && match[1]) {
        const desc = match[1].replace(/\s+/g, ' ').trim();
        const length = desc.length;
        if (length < 140 || length > 155) {
            console.log(`[FAIL] ${filePath}: ${length} chars`);
            console.log(`"${desc}"`);
            console.log('---');
        }
    } else {
        // Try to find it if it's not in the exact block structure (e.g. valid TS but different spacing)
        const altMatch = content.match(/description:\s*"([^"]+)"/);
        // This might match the service description too, so we need to be careful.
        // typically the second description is the meta one in these files, or inside meta object.
        // Let's rely on the first match if it looks like the meta block.
        // Actually, let's just look for the meta block specifically.

        const metaBlock = content.match(/meta:\s*{([\s\S]*?)}/);
        if (metaBlock) {
            const descMatch = metaBlock[1].match(/description:\s*"([^"]+)"/);
            if (descMatch) {
                const desc = descMatch[1].replace(/\s+/g, ' ').trim();
                const length = desc.length;
                if (length < 140 || length > 155) {
                    console.log(`[FAIL] ${filePath}: ${length} chars`);
                    console.log(`"${desc}"`);
                    console.log('---');
                }
                return;
            }
        }
        console.log(`[WARN] Could not find meta description in ${filePath}`);
    }
});
