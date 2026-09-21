import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lookit: {
          black: '#000000',
          gold: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
}
export default config
