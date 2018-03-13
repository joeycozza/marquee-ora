const ora = require('ora');
const marquee = require('./index');

const spinner = ora({
  text: 'This is a scrolling marquee',
  spinner: marquee({
    text: 'Using lots of options',
    fullTextFrames: 8,
    viewWidth: 29,
    fill: '-',
    interval: 20
  })
});

spinner.start();

setTimeout(() => {
  spinner.stop();
}, 99000);
