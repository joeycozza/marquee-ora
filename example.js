const ora = require('ora');
const marquee = require('./index');

const spinner = ora({
  text: 'This is a scrolling marquee',
  spinner: marquee({
    text: 'I pause when fully in view',
    fullTextFrames: 8
  })
});

spinner.start();

setTimeout(() => {
  spinner.stop();
}, 99000);
