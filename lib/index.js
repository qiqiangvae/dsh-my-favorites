// src/index.ts
import { settingsNamespace } from "@deepseek-ai/dsh-settings";
import z from "@deepseek-ai/schemastery";

// src/constants.ts
var FAVORITES_NAMESPACE = "my-favorites";
var MIN_RECENT = 5;
var MAX_RECENT = 20;
var DEFAULT_RECENT = 10;

// src/index.ts
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
var SwitcherModeSchema = z.union([z.const("favorites"), z.const("recent")]);
var FavoritesSettingsSchema = z.object({
  sessions: z.array(SessionFavoriteSchema).default([]),
  urls: z.array(UrlFavoriteSchema).default([]),
  mode: SwitcherModeSchema.default("favorites"),
  recentCount: z.number().min(MIN_RECENT).max(MAX_RECENT).default(DEFAULT_RECENT)
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
  DEFAULT_RECENT,
  FAVORITES_NAMESPACE,
  FavoritesSettingsSchema,
  MAX_RECENT,
  MIN_RECENT,
  SwitcherModeSchema,
  apply
};
