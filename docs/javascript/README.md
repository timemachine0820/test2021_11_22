---
title: 介绍
---

# 插件
插件通常会为 VuePress 添加全局功能。插件的范围没有限制。你可以在 Awesome VuePress (opens new window)中找到更多的插件。

# 样例
以下是几种比较常见的插件：

拓展在编译期生成的页面元数据，如：@vuepress/plugin-last-updated；
在编译前后生成额外的文件，如：@vuepress/plugin-pwa；
注入全局的 UI, 如：@vuepress/plugin-back-to-top;
拓展 CLI 的指令，如：vuepress-plugin-export (opens new window)。
这里也有一个略微复杂的插件案例 @vuepress/plugin-blog (opens new window)，其使用了编译期的元数据来生成了一些动态模块，并在客户端使用 enhanceAppFiles 来初始化他们。

# 开箱即用
