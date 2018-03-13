module.exports = function({text = '', viewWidth = text.length, fill = ' ', interval = 100, fullTextFrames = 1} = {}) {

  if (text === '') {
    throw new Error('Must provide text to the marquee')
  }
  if (fullTextFrames > 1 && viewWidth < text.length) {
    throw new Error('Unable to show full text when viewWidth is smaller than text.length');
  }

  if (viewWidth > text.length) {
    const leftHalf = Math.floor((viewWidth - text.length) / 2);
    const rightHalf = Math.ceil((viewWidth - text.length) / 2);
    text = fill.repeat(leftHalf) + text + fill.repeat(rightHalf);
  }

  let frames = new Array(fullTextFrames);
  frames.fill(text);

  for (let i = 1; i <= text.length; i++) {
    frames.unshift(fill.repeat(i) + text.substring(0, text.length - i));
    frames.push(text.substring(i) + fill.repeat(i));
  }

  //truncate each frame if the viewWidth is shorter than text.length
  if (viewWidth < text.length) {
    frames = frames.map(frame => frame.substring(0, viewWidth));
  }

  removeRepeatEmptyFrames(frames);

  return {
    interval,
    frames
  };
};

/*
 * Useful for removing leading and trailing frames that are just fill created from a viewWidth that is larger than the text.length
 */
function removeRepeatEmptyFrames(frames) {
  while(frames[0] === frames[1]) {
    frames.shift();
  }
  while(frames[frames.length-1] === frames[frames.length-2]) {
    frames.pop();
  }
}
