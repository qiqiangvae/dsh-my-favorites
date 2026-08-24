# DSH My Favorites

DSH Desktop 的本机收藏插件。

- 在会话标题栏 Preset 后用星标收藏或取消收藏会话。
- 侧栏「新会话」按钮下方的「收藏」入口提供会话收藏与网址收藏。
- 快捷键切换：快速按 `⌘+⌥+`` `（macOS）/ `Ctrl+`` `（其它平台）切回上一个收藏会话；长按弹出切换列表。
- 在 **设置 → 插件 → 插件配置 → 收藏** 中管理网址收藏。

## 安装

```bash
# 从 GitHub 安装（推荐）
dsh plugin --profile web add github:qiqiangvae/dsh-my-favorites

# 本机开发：本地路径软链接
dsh plugin --profile web add link:/path/to/dsh-my-favorites
```

并确认 `dsh-my-favorites` 已列入该 profile `package.json` 的 `dsh.profile.bundles`。

详情请参阅 [README.md](./README.md)。
