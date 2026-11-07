# 山间来信 · Astro 个人主题

中文个人主页、博客与作品集。独立项目，保留上层目录原有的 VitePress 站点。本目录应作为新的 GitHub 仓库根目录。

## 本地运行

使用 Node.js 24.16.0（版本记录在 `.node-version`）。

```sh
npm ci
npm run dev
```

访问终端打印的本地地址。校验与生成静态文件：

```sh
npm run check
npm run build
npm run preview
```

## 替换内容

- `src/site.ts`：站名、姓名、简介、邮箱、GitHub 链接；空联系方式不会生成链接。
- `src/content/blog/*.md`：文章，包含标题、简介、日期、标签；`draft: true` 隐藏草稿。
- `src/content/projects/*.md`：作品，另外包含 `type`、`color`（green/sand/blue），可选 `url` 为真实项目地址。
- `src/pages/about.astro`：关于页。
- `src/styles/global.css`：颜色、排版和响应式布局。

首页、文章详情、关于页与作品说明中的“示例”提示应在填好真实内容后自行删除。当前所有文章、项目与个人资料都是模板示例，没有虚构实际经历。页面插画由 CSS 绘制，无外部图片依赖；中文标题使用 Google Fonts，可改为本地字体，加载失败时使用系统后备字体。

## GitHub

在 GitHub 创建一个空仓库，然后在**本目录**执行，替换仓库地址：

```sh
git init -b main
git add .
git commit -m "Build Astro personal website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

GitHub Actions 自动运行类型检查与构建。部署交由 Cloudflare Pages 的 Git 集成处理，无需在仓库中保存 Cloudflare 密钥。

## Cloudflare Pages

在 Cloudflare 的 Workers & Pages 中创建 Pages 项目，导入上面的 GitHub 仓库：

| 设置 | 值 |
| --- | --- |
| 生产分支 | `main` |
| 项目根目录 | 留空（本目录作为仓库根目录时） |
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| 环境变量 `NODE_VERSION` | `24.16.0` |
| 环境变量 `SITE_URL` | 实际的 `https://项目名.pages.dev` 或自定义域名 |

如果将整个上层项目上传到同一个仓库，则 Pages 根目录设为 `astro-portfolio`，并将本项目 CI 移到仓库根的 `.github/workflows/`，为 npm 步骤设置对应工作目录。

本项目为静态输出，无需 SSR adapter。首次部署获得域名后补充 `SITE_URL` 并重新部署，页面会生成规范 URL。后续每次推送都会由 Pages 自动构建；自定义域名在 Pages 项目设置中添加。

参考：[Astro 介绍](https://docs.astro.build/en/concepts/why-astro/)、[Cloudflare 官方部署指南](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)。

## 当前状态

目标仓库为 `https://github.com/CrTiRL/astro-personal-site`。Cloudflare 项目尚未绑定，完成上述 Pages 导入后即可自动部署。不要将本地预览地址当作公网地址。
