//Remove All
d3.select('.remove').on('click', () => {
  d3.selectAll('.note').remove();
})

//Lucky
d3.select('.lucky').on('click', () => {
  d3.selectAll('.note').style('font-size', () => {
    return Math.random() * 50 + 'px';
  })
})

//Preview
let input = d3.select('input');
let preview = d3.select('.preview');

input.on('input', () => {
  let note = d3.event.target.value;
  setPreview(note)
})

//Submit
d3.select('.new-note').on('submit', () => {
  d3.event.preventDefault();
  d3.select('.notes').append('p').classed('note', true).text(input.property('value'))
  input.property('value', '');
  setPreview('');
})


//Callback
let setPreview = (val) => {
  preview.text(val).classed("hide", val === "");
}