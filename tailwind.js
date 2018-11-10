const config = require('tailwindcss/defaultConfig')();

config.colors = {
  'bg-primary': 'var(--color-bg-primary)',
  'bg-primary-darker': 'var(--color-bg-primary-darker)',
  'bg-secondary': 'var(--color-bg-secondary)',
  'bg-secondary-darker': 'var(--color-bg-secondary-darker)',
  'bg-default': 'var(--color-bg-default)',
  'bg-default-darker': 'var(--color-bg-default-darker)',
  'bg-inverse': 'var(--color-bg-inverse)',
  'bg-inverse-darker': 'var(--color-bg-inverse-darker)',


  'text-primary': 'var(--color-text-primary)',
  'text-secondary': 'var(--color-text-secondary)',
  'text-default': 'var(--color-text-default)',
  'text-default-soft': 'var(--color-text-default-soft)',
  'text-inverse': 'var(--color-text-inverse)',
  'text-inverse-soft': 'var(--color-text-inverse-soft)',
};

config.textColors = {
  primary: config.colors['text-primary'],
  secondary: config.colors['text-secondary'],
  default: config.colors['text-default'],
  'default-soft': config.colors['text-default-soft'],
  inverse: config.colors['text-inverse'],
  'inverse-soft': config.colors['text-inverse-soft'],
};

config.backgroundColors = {
  primary: config.colors['bg-primary'],
  'primary-darker': config.colors['bg-primary-darker'],
  secondary: config.colors['bg-secondary'],
  'secondary-darker': config.colors['bg-secondary-darker'],
  default: config.colors['bg-default'],
  'default-darker': config.colors['bg-default-darker'],
  inverse: config.colors['bg-inverse'],
  'inverse-darker': config.colors['bg-inverse-darker'],

};

config.borderColors = {
  primary: config.colors['bg-primary'],
  'primary-darker': config.colors['bg-primary-darker'],
  secondary: config.colors['bg-secondary'],
  'secondary-darker': config.colors['bg-secondary-darker'],
  default: config.colors['bg-default'],
  'default-darker': config.colors['bg-default-darker'],
  inverse: config.colors['bg-inverse'],
  'inverse-darker': config.colors['bg-inverse-darker'],
};

config.fonts = {
  display: 'var(--font-display)',
  body: 'var(--font-body)',
};

config.fontWeights = {
  normal: 'var(--font-weight-normal)',
  display: 'var(--font-weight-display)',
  btn: 'var(--font-weight-btn)',
};

config.borderRadius = {
  none: '0',
  btn: 'var(--rounded-btn)',
};

config.shadows.theme = 'var(--shadow-theme)';

config.padding = Object.assign({}, config.padding, {
  16: '4rem',
});

module.exports = config;
