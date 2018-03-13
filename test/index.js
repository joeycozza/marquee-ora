const expect = require('chai').expect;
const marquee = require('../index');

describe('creating a valid ora spinner object', () => {
  it('should work fine with valid input', () => {
    const spinner = marquee({text: 'hello'});
    const expectedOutput = {
      interval: 100,
      frames: ['     ', '    h', '   he', '  hel', ' hell', 'hello', 'ello ', 'llo  ', 'lo   ', 'o    ', '     ']
    };

    expect(spinner).to.deep.equal(expectedOutput);
  });

  it('should work fine with pause time for full text', () => {
    const spinner = marquee({text: 'hello', interval: 50, fullTextFrames: 10});
    const expectedOutput = {
      interval: 50,
      frames: [
        '     ',
        '    h',
        '   he',
        '  hel',
        ' hell',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'ello ',
        'llo  ',
        'lo   ',
        'o    ',
        '     '
      ]
    };

    expect(spinner).to.deep.equal(expectedOutput);
  });

  it('should fill correctly if provided one', () => {
    const spinner = marquee({fill: '-', text: 'hello'});
    const expectedOutput = {
      interval: 100,
      frames: ['-----', '----h', '---he', '--hel', '-hell', 'hello', 'ello-', 'llo--', 'lo---', 'o----', '-----']
    };

    expect(spinner).to.deep.equal(expectedOutput);
  });

  it('should fill handle view width correctly if provided one larger than text width', () => {
    const spinner = marquee({fullTextFrames: 3, viewWidth: 7, fill: '-', text: 'hello'});
    const expectedOutput = {
      interval: 100,
      frames: [
        '-------',
        '------h',
        '-----he',
        '----hel',
        '---hell',
        '--hello',
        '-hello-',
        '-hello-',
        '-hello-',
        'hello--',
        'ello---',
        'llo----',
        'lo-----',
        'o------',
        '-------'
      ]
    };

    expect(spinner).to.deep.equal(expectedOutput);
  });

  it('should fill handle view width correctly if provided one larger and not an even size larger than text width', () => {
    const spinner = marquee({fullTextFrames: 5, viewWidth: 6, fill: '-', text: 'hello'});
    const expectedOutput = {
      interval: 100,
      frames: [
        '------',
        '-----h',
        '----he',
        '---hel',
        '--hell',
        '-hello',
        'hello-',
        'hello-',
        'hello-',
        'hello-',
        'hello-',
        'ello--',
        'llo---',
        'lo----',
        'o-----',
        '------'
      ]
    };

    expect(spinner).to.deep.equal(expectedOutput);
  });

  it('should fill handle view width correctly if provided one larger than text width', () => {
    const spinner = marquee({viewWidth: 7, fill: '-', text: 'hello'});
    const expectedOutput = {
      interval: 100,
      frames: [
        '-------',
        '------h',
        '-----he',
        '----hel',
        '---hell',
        '--hello',
        '-hello-',
        'hello--',
        'ello---',
        'llo----',
        'lo-----',
        'o------',
        '-------'
      ]
    };

    expect(spinner).to.deep.equal(expectedOutput);
  });

  it('should fill handle view width correctly if provided one larger and not an even size larger than text width', () => {
    const spinner = marquee({viewWidth: 6, fill: '*', text: 'hello'});
    const expectedOutput = {
      interval: 100,
      frames: [
        '******',
        '*****h',
        '****he',
        '***hel',
        '**hell',
        '*hello',
        'hello*',
        'ello**',
        'llo***',
        'lo****',
        'o*****',
        '******'
      ]
    };

    expect(spinner).to.deep.equal(expectedOutput);
  });

  it('should fill handle view width correctly if provided one smaller than text width', () => {
    const spinner = marquee({viewWidth: 4, fill: '-', text: 'hello'});
    const expectedOutput = {
      interval: 100,
      frames: ['----', '---h', '--he', '-hel', 'hell', 'ello', 'llo-', 'lo--', 'o---', '----']
    };

    expect(spinner).to.deep.equal(expectedOutput);
  });


  it('should fill handle view width correctly if provided one smaller than text width', () => {
    const spinner = marquee({viewWidth: 3, fill: '-', text: 'hello'});
    const expectedOutput = {
      interval: 100,
      frames: ['---', '--h', '-he', 'hel', 'ell', 'llo', 'lo-', 'o--', '---']
    };

    expect(spinner).to.deep.equal(expectedOutput);
  });
});

describe('error handling', () => {
  it('should throw if fullTextFrames is set and viewWidth is smaller than text.length', () => {
    expect(marquee).to.throw();
    expect(() => marquee({text: 'hi'})).to.not.throw();
    expect(() => marquee({text: 'hi', viewWidth: 1, fullTextFrames: 5})).to.throw();
  });
});
