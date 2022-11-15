/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./build/**/*.{html,js}'],
  relative: true,
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      colors: {
        primary: {
          400: 'hsl(var(--clr-primary-400) / <alpha-value>)',
        },
        accent: {
          100: 'hsl(var(--clr-accent-100) / <alpha-value>)',
          400: 'hsl(var(--clr-accent-400) / <alpha-value>)',
        },
        'grayish-blue': {
          100: 'hsl(var(--clr-neutral-100) / <alpha-value>)',
          400: 'hsl(var(--clr-neutral-400) / <alpha-value>)',
          900: 'hsl(var(--clr-neutral-900) / <alpha-value>)'
        }
      },
      fontFamily: {
        'body': ['var(--ff-primary)'],
        'heading': ['var(--ff-primary)'],
      },
      fontSize: {
        '300': 'var(--fs-300)',
        '400': 'var(--fs-400)',
        '500': 'var(--fs-500)',
        '600': 'var(--fs-600)',
        '700': 'var(--fs-700)',
        '800': 'var(--fs-800)',
        '900': 'var(--fs-900)',
      },
      boxShadow: {
        'btn': 'var(--shadow-btn)'
      }
    },
  },
  plugins: [],
}
