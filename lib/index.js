// src/index.ts
import { settingsNamespace } from "@deepseek-ai/dsh-settings";
import z from "@deepseek-ai/schemastery";
var FAVORITES_NAMESPACE = "my-favorites";
var SessionFavoriteSchema = z.object({
  id: z.string(),
  title: z.string()
});
var UrlFavoriteSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  icon: z.string().default(""),
  useFavicon: z.boolean().default(false)
});
var FavoritesSettingsSchema = z.object({
  sessions: z.array(SessionFavoriteSchema).default([]),
  urls: z.array(UrlFavoriteSchema).default([])
});
function apply(ctx) {
  ctx.inject(["settings"], (settingsCtx) => {
    settingsCtx.settings.register(
      settingsNamespace(FAVORITES_NAMESPACE),
      FavoritesSettingsSchema
    );
  });
}
export {
  FAVORITES_NAMESPACE,
  FavoritesSettingsSchema,
  apply
};
