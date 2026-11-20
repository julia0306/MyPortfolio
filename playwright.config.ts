
import { defineConfig, devices } from '@playwright/test';

declare const process: {
  env: Record<string, string | undefined>;
};

export default defineConfig({
  // Dossier contenant les tests E2E
  testDir: './e2e',

  // Exécution des tests en parallèle
  fullyParallel: true,

  // Empêche les test.only oubliés en CI
  forbidOnly: !!process.env['CI'],

  // Réexécute les tests échoués en CI
  retries: process.env['CI'] ? 2 : 0,

  // Limite le parallélisme en CI
  workers: process.env['CI'] ? 1 : undefined,

  // Rapport des tests
  reporter: 'html',

  use: {
    // URL de l'application Angular
    baseURL: 'http://127.0.0.1:4200',

    // Trace en cas d'échec (lors d'une nouvelle tentative)
    trace: 'on-first-retry',
  },

  // Navigateur utilisé pour les tests
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Démarre Angular automatiquement avant les tests
  webServer: {
    command: 'npm start -- --host 127.0.0.1',
    url: 'http://127.0.0.1:4200',
    reuseExistingServer: !process.env['CI'],
    timeout: 120_000,
  },
});