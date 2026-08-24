import { settingsNamespace } from '@deepseek-ai/dsh-settings';
import z from '@deepseek-ai/schemastery';
import { FAVORITES_NAMESPACE, MIN_RECENT, MAX_RECENT, DEFAULT_RECENT } from './constants.js';

export { FAVORITES_NAMESPACE } from './constants.js';

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

export const SwitcherModeSchema = z.union([z.const('favorites'), z.const('recent')]);
export type SwitcherMode = 'favorites' | 'recent';

export const FavoritesSettingsSchema = z.object({
  sessions: z.array(SessionFavoriteSchema).default([]),
  urls: z.array(UrlFavoriteSchema).default([]),
  mode: SwitcherModeSchema.default('favorites'),
  recentCount: z.number().min(MIN_RECENT).max(MAX_RECENT).default(DEFAULT_RECENT),
});

export { MIN_RECENT, MAX_RECENT, DEFAULT_RECENT };

export function apply(ctx: any) {
  ctx.inject(['settings'], (settingsCtx: any) => {
    settingsCtx.settings.register(
      settingsNamespace(FAVORITES_NAMESPACE),
      FavoritesSettingsSchema,
    );
  });
}
