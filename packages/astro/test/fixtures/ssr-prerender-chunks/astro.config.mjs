import serverlessAdapter from '@test/serverless-test-adapter';
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  adapter: serverlessAdapter(),
  output: 'server',
  integrations: [react()]
});