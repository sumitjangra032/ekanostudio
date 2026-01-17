
const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'components', 'icons', 'LocalIcons.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace Component Definition Signature
// From: export const Icon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
// To:   export const Icon = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (

const signatureRegex = /export const (\w+) = \({ size = 24, className = "" }: { size\?: number, className\?: string }\) => \(/g;
const signatureReplacement = 'export const $1 = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (';

content = content.replace(signatureRegex, signatureReplacement);

// 2. Add {...props} to <svg
const svgRegex = /<svg/g;
const svgReplacement = '<svg {...props}';

content = content.replace(svgRegex, svgReplacement);

fs.writeFileSync(filePath, content, 'utf8');
console.log('LocalIcons.tsx refactored successfully.');
