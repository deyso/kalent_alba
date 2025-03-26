import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';


const config = {
	port: 3000,
	open: true
};

export default defineConfig({
	plugins: [sveltekit(),tailwindcss(),],
	preview: config
});
