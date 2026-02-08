// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), tailwind({
		applyBaseStyles: false,
	}),
	sanity({
		projectId: "zu0udp1i",
		dataset: "production",
		useCdn: false, // for static builds
	}),
	],
});