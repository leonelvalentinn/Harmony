/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'blue-100': 'rgb(20, 28, 36)',
				'gold-200': 'rgb(140,92,36)',
				'gold-100': 'rgb(219,182,115)',
      },
			gridTemplateColumns: {
        // Simple 16 column grid
        'promo': 'repeat(2, minmax(0, 350px))',
				'promo2': 'repeat(4, minmax(0, 350px))',
      }
		},
	},
	plugins: [],
}
