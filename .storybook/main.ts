import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  staticDirs: ['..\\public'],

  // Add viteFinal configuration to exclude problematic dependencies
  viteFinal: config => {
    // Initialize optimizeDeps if it doesn't exist
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = config.optimizeDeps.exclude || [];

    // Add problematic Storybook-related dependencies to exclude list
    const excludeDeps = [
      '@storybook/docs-tools',
      '@storybook/blocks',
      '@storybook/components',
      '@storybook/theming',
    ];

    config.optimizeDeps.exclude.push(...excludeDeps);

    return config;
  },
};

export default config;
