import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-header':'linear-gradient(170deg, rgba(167, 37, 246, 0.30) 0.37%, rgba(124, 58, 237, 0.00) 45.55%);',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
          'sm': '320px',         // Mobile (Portrait)
          'md': '768px',         // Mobile (Landscape)
          'lg': '1024px',        // Tablet
          'xl': '1280px',        // Small Desktop
          '2xl': '1440px',       // Medium Desktop
          '3xl': '1920px',       // Large Desktop
      }
     
    },
  },
  plugins: [],
}
export default config
