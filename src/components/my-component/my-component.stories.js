import { html } from 'lit-html';

export default {
  title: 'My Component/JS Stories',
  component: 'my-component'
};

const Template = (args) => html`
  <my-component
    first="${args.first}"
    middle="${args.middle}"
    last="${args.last}"></my-component>
`;

export const Default = Template.bind({});
Default.args = {
  first: 'Peter',
  middle: 'Benjamin',
  last: 'Parker',
};
