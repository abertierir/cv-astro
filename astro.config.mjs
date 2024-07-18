import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
export default defineConfig({
  site: "https://portfolio-abertieri.netlify.app/",
  integrations: [preact()]
});