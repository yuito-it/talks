import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
if (args.length < 3) {
  console.error('使い方: node vercel.js <source> <destination> <statuscode>');
  process.exit(1);
}

const [source, destination, statuscode] = args;

const vercelJsonPath = path.resolve(process.cwd(), 'vercel.json');

let vercelConfig = {};
if (fs.existsSync(vercelJsonPath)) {
  vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf-8'));
}
if (!vercelConfig.redirects) {
  vercelConfig.redirects = [];
}

vercelConfig.redirects.push({
  source,
  destination,
  statusCode: Number(statuscode),
});

fs.writeFileSync(vercelJsonPath, JSON.stringify(vercelConfig, null, 2), 'utf-8');
console.log('[Success] Updated vercel.json with new redirect:', { source, destination, statusCode: statuscode });