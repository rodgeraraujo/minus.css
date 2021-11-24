import '../../dist/minus.css';

export default {
  title: 'Button Elements/Button',
  argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'radio' },
      options: ['submit', 'button', 'reset'],
    },
    disabled: {
      control: { type: 'boolean' },
    }
  },
};

const Template = ({ label, type, disabled }) => {
  return `<button type="${type}" ${disabled ? 'disabled' : ''}>${label}</button>`;
};

export const Button = Template.bind({});

Button.args = {
  label: 'hit me',
  type: 'button',
  disabled: false,
};