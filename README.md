# DSH My Favorites

为 **DeepSeek Harness Desktop** 提供本机的会话与网址收藏功能。

## 功能

### 会话收藏

- 在会话标题栏中，紧邻 **Preset**（例如 `Coding 模式`）控件显示星标按钮。
- 点击 `☆` 收藏当前会话；点击 `★` 立即取消收藏。
- 在左侧侧栏 **“新会话”按钮正下方** 显示收藏区域：全部网址收藏以 icon/1–4 个字符的紧凑标签常驻显示，悬停可查看名称和 URL。
- `★ 会话 (N)` 为默认收起的会话收藏夹；点击展开或关闭，展开后点击会话会切换并自动收起。
- 在会话收藏夹中按住 `⌘ Command` 拖动会话项即可调整排序。
- 点击会话标签或完整收藏列表中的会话，即可切换到该会话。
- 会话标题变化后，侧栏和收藏列表优先显示最新标题；已删除或无法打开的会话可从收藏列表中移除。

### 网址收藏

- 侧栏“收藏”弹层同时展示已配置的网址收藏。
- 每个网址收藏包含名称、URL、可选自定义 icon 与“使用网站图标”开关；侧栏标签展示优先级固定为 **网站 favicon > 自定义 icon > 名称**。网站图标从 `{协议}://{域名}/favicon.ico` 加载，失败时自动回退。
- 点击网址会通过 DSH Desktop 的外部链接策略，在系统默认浏览器中打开。
- 仅允许 `http:`、`https:` 与 `mailto:` URL。

### 插件配置

在 **设置 → 插件 → 插件配置 → 收藏** 中可以：

- 新增网址收藏；
- 编辑名称、URL 和自定义字母徽标；
- 删除网址收藏；
- 调整网址收藏的显示顺序。

## 安装与构建

在插件目录执行：

```bash
pnpm install
pnpm run build
```

> 作为 DSH **profile bundle** 加载时，必须将 `dsh-my-favorites` 同时列入 profile 的 `dsh.profile.bundles`；只把它加入 `dependencies` 不会启用插件。

构建后的入口为：

- `lib/index.js`：Host 侧设置命名空间注册；
- `lib/client.js`：DSH Web 客户端 UI 扩展。

随后在 DSH 的插件管理中加载本地插件目录或构建后的插件包。

## DSH 扩展点

本插件通过稳定的 `sidebar.footer.action` 取得 React 挂载生命周期，再将收藏入口插入到宿主 **“新会话”按钮正下方**。DSH 当前没有该位置的公开 Slot，因此这个精确定位依赖侧栏的 DOM 结构；升级 DSH 后若该结构变化，可能需要重新适配。

| 功能 | DSH Slot / 宿主接口 |
| --- | --- |
| 会话标题栏收藏星标 | `conversation.session.header.actions` |
| 侧栏收藏入口 | `sidebar.footer.action` 生命周期 + 侧栏 DOM 桥接 |
| 插件配置页签 | `settings.plugins.tab` |

## 数据与限制

- 收藏数据保存在当前 DSH 本机用户的 `my-favorites` 插件设置命名空间中，不跨设备同步，也不提供导入/导出。
- 会话收藏保存的是当前 DSH 实例内的会话 ID，因此不适合跨机器、跨 DSH 数据目录迁移。
- 远程浏览器连接不具备宿主设置写入权限时，收藏设置不会持久化。
- 若已收藏的会话被删除或当前实例不再能识别该 ID，切换会话会失败；请从收藏列表移除该条目。

## 开发验证

本项目已通过以下本地验证：

```bash
pnpm run typecheck
node --check lib/client.js
node --check lib/index.js
```

> 本机若缺少 DSH 私有包的 pnpm 离线镜像元数据，`pnpm install --offline` 可能失败；可在具备 DSH 依赖源的环境中正常安装并构建。
