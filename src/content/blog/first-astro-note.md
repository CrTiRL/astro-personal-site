---
title: 我的第一份 Astro 写作笔记
description: 用 Markdown 管理文章，让内容和页面各自保持简单。
date: 2026-11-05
tags: [技术, Astro]
---
> 示例教程，介绍本项目的日常写作方式。

## 新建一篇文章

在 `src/content/blog/` 下创建一个 Markdown 文件。文件名决定文章路径，例如 `hello.md` 对应 `/blog/hello/`。

```yaml
---
title: 我的新文章
description: 用一句话介绍这篇文章
date: 2026-11-07
tags: [学习笔记]
draft: false
---
```

在元数据后写下正文。可以使用标题、列表、链接、引用和代码块。

## 先存成草稿

将 `draft` 设置为 `true`，文章就不会出现在构建后的网站上。准备好后再改回 `false`。

## 在本地确认

```sh
npm run dev
```

在浏览器里检查文字和布局。发布前再运行 `npm run check` 和 `npm run build`，确认内容格式和构建通过。
