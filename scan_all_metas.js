
const fs = require('fs');
const path = require('path');

const rootDir = 'src';
const validExtensions = ['.ts', '.tsx', '.js', '.jsx'];
const filesToCheck = [];

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next') {
                scanDir(fullPath);
            }
        } else if (validExtensions.includes(path.extname(file))) {
            filesToCheck.push(fullPath);
        }
    }
}

try {
    scanDir(rootDir);
} catch (e) {
    console.error("Error scanning directory:", e);
    process.exit(1);
}

console.log('Scanning ' + filesToCheck.length + ' files in src/ for descriptions > 170 chars...');

let foundIssues = 0;
const results = [];

filesToCheck.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');

    // Strategy 1: Look for key-value pair description: "..."
    const regex = /description:\s*(["'`])((?:(?=(\\?))\3.)*?)\1/g;

    let match;
    while ((match = regex.exec(content)) !== null) {
        const desc = match[2];
        const cleanDesc = desc.replace(/\s+/g, ' ').trim();

        if (cleanDesc.length < 10) continue;

        if (cleanDesc.length > 170) {
            results.push(`[LONG] ${filePath}: ${cleanDesc.length} chars\n"${cleanDesc.substring(0, 100)}..."`);
            foundIssues++;
        }
    }

    // Strategy 2: Look for HTML <meta> tags
    const metaTagRegex = /<meta\s+name=["']description["']\s+content=["']([^"']+)["']\s*\/?>/g;
    while ((match = metaTagRegex.exec(content)) !== null) {
        const desc = match[1];
        const cleanDesc = desc.replace(/\s+/g, ' ').trim();

        if (cleanDesc.length > 170) {
            results.push(`[LONG HTML META] ${filePath}: ${cleanDesc.length} chars\n"${cleanDesc.substring(0, 100)}..."`);
            foundIssues++;
        }
    }
});

const report = results.join('\n---\n');
fs.writeFileSync('scan_results.txt', report.length > 0 ? report : "No issues found.", 'utf8');
console.log(`Scan complete. Found ${foundIssues} issues. Wrote to scan_results.txt`);
