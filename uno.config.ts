import {
  defineConfig,
  presetWind4,
  presetIcons,
  presetAttributify,
  presetWebFonts,
  presetTagify,
} from "unocss";
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons(),
    presetAttributify(),
    presetTagify({
      prefix: "a-",
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        libertinus: "Libertinus Keyboard",
        mono: "Fira Code",
      },
      processors: createLocalFontProcessor({
        cacheDir: "node_modules/.cache/unocss/fonts",
        fontAssetsDir: "public/assets/fonts",
        fontServeBaseUrl: "/assets/fonts",
        fetch: (url) => fetch(url),
      }),
    }),
  ],
});
