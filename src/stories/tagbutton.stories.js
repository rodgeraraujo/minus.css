import '../../dist/minus.css';

export default {
  title: 'Button Elements/Tag Button',
  argTypes: {
    label: { control: 'text' },
    level: {
      options: ['primary', 'secondary', 'dark', 'error', 'info', 'warning'],
      control: { type: 'radio' },
    },
    type: {
      options: ['', 'clear', 'outline'],
      control: { type: 'select' },
    },
  },
};

const Template = ({ label, type, level }) => {
  let classes = !!type ? ['button', level, type] : ['button', level];
  return `<a href="javascript:void(0)" class="${classes.join(' ')}">${label}</a>`;
};

export const TagButton = Template.bind({});

TagButton.args = {
  label: 'hit me',
  type: '',
  level: 'secondary',
};