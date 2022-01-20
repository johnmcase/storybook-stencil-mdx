import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'storybook-stencil-mdx',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-json',
      file: 'docs/docs.json'
    }
  ],
};
