import '../../dist/minus.css';

export default {
  title: 'Form Elements/Checkbox',
  argTypes: {
    label: { control: 'text' },
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    }
  },
};

const Template = ({ label, disabled, checked }) => {
  return `
    <input type="checkbox"${disabled ? ' disabled': ''}${checked ? ' checked' : ''}><label>${label}</label>
  `;
};

export const Checkbox = Template.bind({});

Checkbox.args = {
  label: 'check me',
  disabled: false,
  checked: false,
};
