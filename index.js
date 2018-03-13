module.exports = function(options = {}) {
  const text = options.text || '';
  const viewWidth = options.viewWidth || text.length;
  const fill = options.fill || ' ';
  const interval = options.interval || 100;
  const fullTextFrames = options.fullTextFrames || 1;

  if (fullTextFrames > 1 && viewWidth < text.length) {
    throw new Error('Unable to show full text when viewWidth is smaller than text.length');
  }

  //TODO: JOEY if viewWidth is set, then we need to change the text being added here
  let frames = new Array(fullTextFrames);
  frames.fill(text);

  for (let i = 1; i <= text.length; i++) {
    frames.unshift(fill.repeat(i) + text.substring(0, text.length - i));
    frames.push(text.substring(i) + fill.repeat(i));
  }

  frames = frames.map(frame => {
    if (viewWidth < text.length) {
      return frame.substring(0, viewWidth);
    }

    if (viewWidth > text.length) {
      return frame;
    }
    return frame;
  });

  if (viewWidth < text.length) {
    frames = frames.slice(text.length - viewWidth)
  }

  return {
    interval,
    frames
  };
};
