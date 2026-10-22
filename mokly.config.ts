import { defineConfig } from "@mokly/mokly";

export default defineConfig({
  colorSchemes: ["light", "dark"],
  mockupsDir: "specs/generated",
  renderer: "specs/renderer.tsx",
});
