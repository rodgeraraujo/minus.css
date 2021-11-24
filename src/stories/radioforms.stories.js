import '../../dist/minus.css';

export default {
  title: 'Form Elements/Radio',
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
    <input name="radio" type="radio" class="radio"${disabled ? ' disabled' : ''}${checked ? ' checked="checked"' : ''}><label>${label}</label>
  `;
};

export const Radio = Template.bind({});

Radio.args = {
  label: 'check me',
  disabled: false,
  checked: false,
};
