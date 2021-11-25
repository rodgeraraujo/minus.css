import '../../dist/minus.css';

export default {
  title: 'Form Elements/Input',
  argTypes: {
    value: { control: 'text' },
    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'url', 'email', 'tel', 'search', 'number'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'select' },
      options: ['', 'success', 'error'],
    },
  },
};

const Template = ({ value, type, disabled, color }) => {
  let placeholders = {
      url: 'http://yoursite.com',
      password: 'Type your Password',
      text: 'Text Input',
      email: 'name@email.com',
      tel: '+55 (99) 99999-9999',
      search: 'Enter Search     ',
      number: 'Enter a Number',
  }
  return `<input id="inputText" type="${type}" class="${color}" placeholder="${placeholders[type]}" value="${value}"${disabled ? ' disabled' : ''}>`;
};

export const Input = Template.bind({});

Input.args = {
  type: 'text',
  disabled: false,
  value: '',
  color: '',
};