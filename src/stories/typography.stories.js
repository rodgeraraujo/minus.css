import '../../dist/minus.css';

export default {
  title: 'Typography/Text Elements',
  argTypes: {},
};

const Template = ({}) => {
  return `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
</div>
<a href="#link">Link content</a>
<p>This is some text in a paragraph.</p>
<hr>
<blockquote>
<p>Minus.css is a smallest and minimalistic CSS framework.</p>
<cite><a href="#!">— Said no one, ever.</a></cite>
</blockquote>`;
};

export const TextElements = Template.bind({});

TextElements.args = {};