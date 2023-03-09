/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend:
		{
			fontFamily: {
				'sans': ['Work Sans', 'sans-serif'],
				'spacemono': ['Space Mono', 'monospace'],
			},
		},
	},
	plugins: [],
}
