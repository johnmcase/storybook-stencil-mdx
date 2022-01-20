import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../docs/docs.json';
import { defineCustomElements } from '../loader';

defineCustomElements();
if(docJson) setStencilDocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    hideNoControlsWarning: true
  },
}
