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
        primary:'#475569',//bg-slate-600
        light:'#E0E7FF',// bg-indigo-100
        very_light:'#EFF6FF',// bg-indigo-50
        button:'#cbd5e1',
        light_accent:"#6495ED", //bg-slate-300
        accent:"#4169E1"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
