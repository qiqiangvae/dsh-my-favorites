declare module '@deepseek-ai/dsh-home-paths' {
  /** 解析 $DSH_HOME（或 ~/.dsh）下路径：dshHomePath('storages', 'dsh-my-favorites.json')。 */
  export function dshHomePath(...segments: string[]): string;
  export function resolveDshHome(configured?: string, env?: Record<string, string | undefined>): string;
}
