# Changelog

All notable changes to this project are documented in this file.

## [0.3.2] - 2026-08-25

### Changed

- 全部颜色收敛到 DSH 语义设计 token（`--dsw-alias-*`），插件样式随 UI 皮肤切换自动适配：
  - 删除不存在的 `--dsw-alias-brand-primary` / `bg-layer-1/2` token，主色改用 `--dsw-alias-state-business-primary`，浮层底色改用 `--dsw-specific-menu`（+ `border-inverted` + `shadow-lv3`）。
  - 危险色 → `state-error-primary`、警告/星标金 → `state-warn-primary`、反白前景 → `label-primary-inverted`、hover 背景 → `interactive-bg-hover`。
- 网址收藏 favicon 增加三重硬约束（`width/max-width/flex-basis` 固定 16px + `align-self`），杜绝超大 `.ico`（256×256）间歇性回退到固有尺寸撑破标签。
- 「★ 会话 (N)」折叠头与会话子项对齐 DSH 工作区 folder/row 观感：34px 分组头 / 32px 行高、8px 圆角、hover 高亮、16px 状态槽占位，展开箭头动画与字级对齐。
- 快捷键切换器弹框对齐 DSH 浮层菜单：面板底色随皮肤、列表项 reset `appearance`/`transparent`（修复浏览器默认 buttonface 灰底）、激活项改 `interactive-bg-hover`、底部提示弱化为 caption 字色 + 淡分隔线。

### Fixed

- 会话被宿主删除后，仅在会话列表「就绪」态下判定失效并清除收藏残留，避免列表 pending 期间误删有效收藏。

## [0.3.1] - 2026-08-24

### Fixed

- 侧边栏收起（折叠为 56px rail）后，收藏网址标签与「★ 会话 (N)」收藏夹仍以展开态渲染，文字横排挤压、与图标列错位。现改为消费宿主槽位下发的 `wide` 状态：折叠时不渲染任何收藏内容，并隐藏空容器避免残留间距；展开后恢复原样。

## [0.3.0] - 2026-08-24

### Added

- 会话切换器新增「最近模式」：在设置中可切换为「最近的 N 个会话」而非「收藏的会话」。
  - 排序源为浏览器内 LRU（最近访问），切换会话即时反映顺序；冷启动时以宿主 `updatedAt` 倒序兜底。
  - N 可配置（数字输入，范围 5–20，默认 10，失焦/回车自动 clamp 到边界）。
  - 过滤空会话（blank）与子 agent 会话（origin=subagent），仅保留可切换的顶层会话。
  - 边界场景（无目标可切）弹出短暂 toast 提示。

### Changed

- 设置页拆分为「会话切换」与「网址设置」两部分。
- 提取 `MIN_RECENT` / `MAX_RECENT` / `DEFAULT_RECENT` 常量到 `src/constants.ts`，作为边界值的单一事实来源。

### Removed

- 移除未使用的 `@deepseek-ai/cordis` 依赖（代码中无引用）。

## [0.2.0] - 2026-08-24

### Added

- 快捷键会话切换器：`⌘+⌥+`` `（macOS）或 `Ctrl+`` `（其它平台）。
  - 快速按：回溯到上一个收藏会话（不弹列表）。
  - 长按（约 0.25s）：弹出居中切换列表，继续按住循环高亮，松开确认切换，`Esc` 或点击遮罩取消。
  - 兼容死键（dead key）键盘：切换器不依赖 `` ` `` 的 keyup 事件。
- 侧栏收藏夹中，当前会话显示低调的激活标记（左侧品牌色竖条 + 品牌色标题）。

### Fixed

- 设置页“收藏网址”表单因缺少 `display:grid` 导致字段与“添加”按钮挤在一起。

## [0.1.0] - 2026-08-24

### Added

- 收藏或取消收藏当前 DSH 会话，并从侧栏收藏夹切换会话。
- 左侧侧栏“新会话”下方的可折叠会话收藏夹，支持 `⌘ Command` 拖动排序。
- 网址收藏：在系统浏览器打开、网站 favicon / 自定义 icon / 名称回退展示。
- 插件配置页中的网址收藏新增、编辑、删除和排序。
