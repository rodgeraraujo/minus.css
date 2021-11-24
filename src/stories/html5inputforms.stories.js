import '../../dist/minus.css';

export default {
  title: 'HTML 5 Inputs/Inputs',
  argTypes: {},
  parameters: {
    options: {
      showPanel: true,
    }
  }
};

const Template = ({}) => {
  return `
<legend>HTML5 inputs</legend>
<p>
    <label for="ic">Color input</label>
    <input type="color" id="ic" value="#000000">
</p>
<p>
    <label for="in">Number input</label>
    <input type="number" id="in" min="0" max="10" value="5">
</p>
<p>
    <label for="ir">Range input</label>
    <input type="range" id="ir" value="10">
</p>
<p>
    <label for="idd">Date input</label>
    <input type="date" id="idd" value="1970-01-01">
</p>
<p>
    <label for="idm">Month input</label>
    <input type="month" id="idm" value="1970-01">
</p>
<p>
    <label for="idw">Week input</label>
    <input type="week" id="idw" value="1970-W01">
</p>
<p>
    <label for="idt">Datetime input</label>
    <input type="datetime" id="idt" value="1970-01-01T00:00:00Z">
</p>
<p>
    <label for="idtl">Datetime-local input</label>
    <input type="datetime-local" id="idtl" value="1970-01-01T00:00">
</p>
  `;
};

export const Inputs = Template.bind({});

Inputs.args = {
};
