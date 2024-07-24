import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    permissions: ["storage", "tabs", "activeTab", "downloads", "scripts"],
    web_accessible_resources: [
      { resources: ["injected.js"], matches: ["<all_urls>"] },
    ],
  },
  runner: {
    disabled: true,
  },
});
