const ora = require('ora');
const marquee = require('./index');

const spinner = ora({
  text: 'This is a scrolling marquee',
  spinner: marquee({
    text: 'Pause when fully in view',
    fullTextFrames: 15,
    interval: 50
  })
});

spinner.start();

setTimeout(() => {
  spinner.stop();
}, 99000);
