import { defineConfig } from 'vite';

export default defineConfig({
    base: '/js-vite-blackjack/',
    plugins: [],
    build: {
        outDir: 'docs', // <--- ESTA ES LA LÍNEA MÁGICA
    }
});
