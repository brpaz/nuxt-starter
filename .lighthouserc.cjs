const baseURL = process.env.NUXT_BASE_URL || 'http://localhost:3000';

module.exports = {
  ci: {
    collect: {
      url: [`${baseURL}/`],
      numberOfRuns: 2,
      startServerCommand: 'yarn preview',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'uses-long-cache-ttl': 'off',
        'csp-xss': 'off',
        'color-contrast': 'warn',
        'unused-javascript': 'warn',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './reports/lighthouseci',
    },
  },
};
