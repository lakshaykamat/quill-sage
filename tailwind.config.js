/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary:'#A5B4FC',//bg-indigo-300
        light:'#E0E7FF',// bg-indigo-100
        very_light:'#EFF6FF',// bg-indigo-50
        button:'#C7D2FE',//bg-indigo-200
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
