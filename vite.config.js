import { defineConfig } from "vite";
import appConfig from "./robot/vite.config.js";

export default defineConfig({
  ...appConfig,
  root: "./robot",
});
