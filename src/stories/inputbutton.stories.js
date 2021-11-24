import '../../dist/minus.css';

export default {
  title: 'Button Elements/Input',
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['submit', 'button', 'reset'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = ({ label, type, disabled }) => {
  return `<input type="${type}" ${disabled ? 'disabled' : ''} value="<input type=${type}>"/>`;
};

export const Input = Template.bind({});

Input.args = {
  type: 'button',
  disabled: false,
};
