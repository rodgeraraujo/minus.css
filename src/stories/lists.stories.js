import '../../dist/minus.css';

export default {
  title: 'List Elements/Lists',
  argTypes: {},
  parameters: {
    options: {
      showPanel: true,
    }
  }
};

const Template = ({}) => {
  return `
<ul>
  <li>Small</li>
  <li>Works
      <ul>
          <li>Responsive</li>
          <li>Cross browser compatible</li>
          <li>CDN and NPM (comming soon)</li>
      </ul>
  </li>
  <li>Modules
      <ul>
          <li>
              Typography
              <ol>
                  <li>apple-system</li>
                  <li>Segoe UI</li>
                  <li>Roboto</li>
                  <li>Ubuntu</li>
                  <li>Cantarell</li>
                  <li>...and more</li>
              </ol>
          </li>
          <li>Grid</li>
          <li>Buttons</li>
          <li>Forms</li>
          <li>...and more</li>
      </ul>
  </li>
</ul>
`;
};

export const Lists = Template.bind({});

Lists.args = {
};
