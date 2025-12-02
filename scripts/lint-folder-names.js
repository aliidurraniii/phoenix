import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const kebabCaseRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const ROOT_DIR = path.resolve(__dirname, '../src');

function checkFolderNames(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const folderName = entry.name;
      const fullPath = path.join(dir, folderName);

      if (!kebabCaseRegex.test(folderName)) {
        console.error(`❌ Invalid folder name: "${folderName}" in path: ${fullPath}`);
        process.exitCode = 1;
      }

      checkFolderNames(fullPath); // Recursive
    }
  }
}

console.log(`🔍 Checking folder names in ${ROOT_DIR}`);
checkFolderNames(ROOT_DIR);
console.log('✅ Folder name check complete.');
