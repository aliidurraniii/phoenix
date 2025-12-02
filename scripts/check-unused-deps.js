import depcheck from 'depcheck';

const options = {
  ignoreDirs: ['dist', 'build', 'scripts', 'node_modules'],
  ignoreMatches: ['@types/*'],
};

depcheck(process.cwd(), options, (unused) => {
  const unusedDeps = [...unused.dependencies, ...unused.devDependencies];

  if (unusedDeps.length > 0) {
    console.error(`❌ Unused dependencies found:\n- ${unusedDeps.join('\n- ')}`);
    process.exit(1); // Block commit
  } else {
    console.log('✅ No unused dependencies found.');
    process.exit(0);
  }
});
