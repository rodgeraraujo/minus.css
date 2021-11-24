import '../../dist/minus.css';

export default {
  title: 'Form Elements/Textarea',
  argTypes: {},
};

const Template = ({}) => {
  return `
    <textarea id="textarea" rows="8" style="width: 700px" placeholder="Enter your message here"></textarea>
  `;
};

export const Textarea = Template.bind({});

Textarea.args = {};