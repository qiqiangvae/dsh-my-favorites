import { settingsNamespace } from '@deepseek-ai/dsh-settings';
import z from '@deepseek-ai/schemastery';

export const FAVORITES_NAMESPACE = 'my-favorites';

const SessionFavoriteSchema = z.object({
  id: z.string(),
  title: z.string(),
});

const UrlFavoriteSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  icon: z.string().default(''),
  useFavicon: z.boolean().default(false),
});

export const FavoritesSettingsSchema = z.object({
  sessions: z.array(SessionFavoriteSchema).default([]),
  urls: z.array(UrlFavoriteSchema).default([]),
});

export function apply(ctx: any) {
  ctx.inject(['settings'], (settingsCtx: any) => {
    settingsCtx.settings.register(
      settingsNamespace(FAVORITES_NAMESPACE),
      FavoritesSettingsSchema,
    );
  });
}
