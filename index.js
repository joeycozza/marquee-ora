module.exports = function(options = {}) {
  const text = options.text || '';
  const interval = options.interval || 100;

  const frames = new Array(5);
  frames.fill(text);

  for (let i = 0; i <= text.length; i++) {
    frames.unshift(' '.repeat(i) + text.substring(0, text.length - i));
    frames.push(text.substring(i) + ' '.repeat(i));
  }

  return {
    interval,
    frames
  };
}
