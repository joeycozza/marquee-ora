[![Build Status](https://travis-ci.org/joeycozza/marquee-ora.svg?branch=master)](https://travis-ci.org/joeycozza/marquee-ora)
[![Maintainability](https://api.codeclimate.com/v1/badges/192675607b7e88b61e65/maintainability)](https://codeclimate.com/github/joeycozza/marquee-ora/maintainability)

# marquee-ora
A tool to create an ora compatible spinner object that behaves like a scrolling marquee

## Install
`npm install --save marquee-ora`

## Usage
This module is to be used in conjunction with [ora](https://github.com/sindresorhus/ora) the elegant terminal spinner.

```javascript
const ora = require('ora');
const marquee = require('marquee');

const spinner = ora({
  text: 'This is a scrolling marquee',
  spinner: marquee({text: 'This marquee rocks!!'})
});

spinner.start();

setTimeout(() => {
  spinner.stop();
}, 3000);
```
This gif looks really slow, but the default interval isn't this bad, this is just the gif appearing slow
![This marquee rocks!! Scrolling](https://github.com/joeycozza/marquee-ora/raw/master/gifs/thisMarqueeRocks.gif)

```javascript
const ora = require('ora');
const marquee = require('marquee');

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
}, 3000);
```

![Pause on Full Text](https://github.com/joeycozza/marquee-ora/raw/master/gifs/fullTextPause.gif)

## Options
### text
#### type: String *required
Required text to be scrolled in the marquee

### fill
#### type: String default=' '
The character to use for the empty space that isn't your text. Defaults to a single space, which looks pretty good.

### fullTextFrames
#### type: Integer default=1
The number of frames to have the full text pause in the marquee. This option isn't valid if the viewWidth is smaller than the text length. 
(It makes no sense because the full text cant be displayed in this case)

### viewWidth 
#### type: Integer default=text.length
The character width for the marquee. If larger than text length, you will get padding of the `fill`.
If smaller than `text` length, then you won't be able to see the full text at one time.

### interval
#### type: Integer default=100
Number of milliseconds for each "frame" to be active. This is passed directly to ora's `interval` option

## Example using All Options
```javascript
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
}, 3000);
```
![Using Many Options](https://github.com/joeycozza/marquee-ora/raw/master/gifs/usingManyOptions.gif)
