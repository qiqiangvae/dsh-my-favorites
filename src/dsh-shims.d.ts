declare module '@deepseek-ai/dsh-home-paths' {
  /** 解析 $DSH_HOME（或 ~/.dsh）下路径：dshHomePath('storages', 'dsh-my-favorites.json')。 */
  export function dshHomePath(...segments: string[]): string;
  export function resolveDshHome(configured?: string, env?: Record<string, string | undefined>): string;
}

/**
 * DSH v0.1.2-alpha.1 起，原 `@deepseek-ai/dsh-client-runtime/client` 已被
 * 合并/重命名为 `@deepseek-ai/dsh-client-store`（`createSnapshotStore` 从包根导出）。
 * 该私有包尚未发布到 npm，此处按宿主编译产物（app.asar.unpacked）的实际签名垫类型。
 */
declare module '@deepseek-ai/dsh-client-store' {
  export interface SnapshotStore<T> {
    getSnapshot(): T;
    subscribe(fn: () => void): () => void;
    update(mutator: (draft: T) => void): void;
    set(next: T): void;
  }
  export function createSnapshotStore<T>(init: T, opts?: {
    flush?: 'raf' | 'sync';
    persist?: { name: string };
  }): SnapshotStore<T>;
  export function shallowEqual(a: unknown, b: unknown): boolean;
}
