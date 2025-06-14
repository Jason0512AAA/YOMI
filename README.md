# YOMI 创意设计工作室

这是 YOMI 创意设计工作室的官方网站源代码。

## 项目结构

```
.
├── index.html          # 主页
├── about.html         # 关于页面
├── portfolio.html     # 作品集页面
├── project-detail.html # 项目详情页面
├── assets/           # 静态资源
│   └── images/       # 图片资源
└── admin/           # 管理后台
```

## 技术栈

- HTML5
- Tailwind CSS (通过 CDN)
- JavaScript
- AOS (Animate On Scroll)
- Google Fonts

## 部署说明

1. 确保所有图片资源已放置在 `assets/images/` 目录下
2. 在 GitHub Pages 设置中：
   - 选择 `main` 分支作为源
   - 选择 `/ (root)` 作为部署目录
3. 等待几分钟后访问 `https://[username].github.io/YOMI/`

## 本地开发

1. 克隆仓库
```bash
git clone https://github.com/[username]/YOMI.git
cd YOMI
```

2. 使用本地服务器运行（例如 VS Code 的 Live Server 插件）

## 维护说明

- 图片资源请保存在 `assets/images/` 目录下
- 所有页面均使用相对路径引用资源
- 保持文件结构整洁，遵循现有的命名规范 