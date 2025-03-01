module.exports = {
  // Lint and format TypeScript and JavaScript files
  '**/*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],
  // Format other files
  '**/*.{json,md,yml,yaml}': ['prettier --write'],
  // Typecheck TypeScript files
  '**/*.{ts,tsx}': () => 'pnpm exec tsc --noEmit',
};
