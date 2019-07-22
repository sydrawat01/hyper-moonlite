// standard ANSI Colors
const black = '#2b303b';
const red = '#bf616a';
const green = '#a3be8c';
const yellow = '#ebcb8b';
const blue = '#8fa1b3';
const magenta = '#b48ead';
const cyan = '#96b5b4';
const white = '#c0c5ce';
const lightBlack = '#2b303b';
const lightRed = '#bf616a';
const lightGreen = '#a3be8c';
const lightYellow = '#ebcb8b';
const lightBlue = '#8fa1b3';
const lightMagenta = '#b48ead';
const lightCyan = '#96b5b4';
const lightWhite = '#c0c5ce';

const accentColor = blue;

exports.decorateConfig = config =>
  Object.assign({}, config, {
    cursorColor: accentColor,
    cursorAccentColor: lightWhite,
    foregroundColor: white,
    backgroundColor: black,
    borderColor: 'rgba(255,255,255, 0.2)',
    selectionColor: 'rgba(255,255,255, 0.2)',
    css: `
    ${config.css || ''}
    .tab_tab {
      border: 0;
      background-color: rgba(255, 255, 255, 0.04);
    }
    .tab_text {
      background-color: rgba(255, 255, 255, 0.04);
    }
    .tab_active {
      background-color: ${black};
    }
    .tab_textActive {
      background-color: ${black};
      border-top: 2px solid ${accentColor} !important;
    }
  `,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite
    }
  });
