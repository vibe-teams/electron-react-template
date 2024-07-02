/* eslint-disable import/no-unresolved */
import generouted from '@generouted/react-router/plugin';
import react from '@vitejs/plugin-react';
import type { ConfigEnv, UserConfig } from 'vite';
import { defineConfig } from 'vite';
import path from 'node:path';
import { pluginExposeRenderer } from './vite.base.config';

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<'renderer'>;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

  return {
    root,
    mode,
    base: './',
    build: {
      outDir: `.vite/renderer/${name}`,
    },
    plugins: [pluginExposeRenderer(name), react(), generouted()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      preserveSymlinks: true,
    },
    clearScreen: false,
  } as UserConfig;
});
