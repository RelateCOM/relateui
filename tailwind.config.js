/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-Grotesk)"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#b600ff',
          'primary-content': '#f1daff',
          secondary: '#0000ff',
          'secondary-content': '#c6dbff',
          accent: '#92b600',
          'accent-content': '#080c00',
          neutral: '#09120b',
          'neutral-content': '#c7c9c7',
          'base-100': '#d9ffff',
          'base-200': '#bcdede',
          'base-300': '#a1bebe',
          'base-content': '#111616',
          info: '#00bdff',
          'info-content': '#000d16',
          success: '#00c296',
          'success-content': '#000e08',
          warning: '#d97300',
          'warning-content': '#110500',
          error: '#ff5176',
          'error-content': '#160205',
          '--rounded-box': '1.2rem',
          '--rounded-btn': '1.2rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
        },
        dark: {
          primary: '#7500ff',
          'primary-content': '#ded9ff',
          secondary: '#0058ff',
          'secondary-content': '#cee1ff',
          accent: '#0064e0',
          'accent-content': '#d0e2fc',
          neutral: '#2f292c',
          'neutral-content': '#d1d0d0',
          'base-100': '#182728',
          'base-200': '#132021',
          'base-300': '#0f1a1b',
          'base-content': '#cbcfcf',
          info: '#0086f3',
          'info-content': '#000614',
          success: '#19f65d',
          'success-content': '#001503',
          warning: '#af3f00',
          'warning-content': '#f3d9cf',
          error: '#ff4b73',
          'error-content': '#160205',
          '--rounded-box': '1.2rem',
          '--rounded-btn': '1.2rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
        },
      },
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: '*', // The element that receives theme color CSS variables
  },
  darkMode: ['class', '[data-mode="dark"]'],
};
