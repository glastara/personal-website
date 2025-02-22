import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				sans: ["Inter", "var(--font-inter)", "sans-serif"],
			},
			typography: {
				DEFAULT: {
					css: {
						fontSize: '0.875rem',
						h1: {
							fontSize: '1.5rem',
							lineHeight: '2rem',
						},
						h3: {
							fontSize: '1rem',
							lineHeight: '1.5rem',
						},
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;
