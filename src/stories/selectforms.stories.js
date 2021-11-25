import '../../dist/minus.css';

export default {
  title: 'Form Elements/Select',
  argTypes: {},
};

const Template = ({}) => {
  return `
    <label for="select">Select</label>
    <select id="select" style="width: 170px">
      <optgroup label="Option Group">
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </optgroup>
    </select>
  `;
};

export const Select = Template.bind({});

Select.args = {};
