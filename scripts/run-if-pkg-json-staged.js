// scripts/run-if-pkg-json-staged.js

import { execSync } from 'child_process';

try {
  const staged = execSync('git diff --cached --name-only', { encoding: 'utf8' });

  if (staged.includes('package.json')) {
    console.log('📦 Detected change in package.json — generating reports...');
    execSync('npm run report:packages', { stdio: 'inherit', shell: true });
  } else {
    console.log('✅ package.json not changed — skipping report generation.');
  }
} catch (err) {
  console.error('❌ Error checking staged files or running report:', err);
  process.exit(1);
}
