import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: 'testing/support/e2e.ts',
    specPattern: 'testing/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    supportFile: 'testing/support/component.ts',
    specPattern: 'testing/component/**/*.cy.{js,jsx,ts,tsx}',
  },
});
