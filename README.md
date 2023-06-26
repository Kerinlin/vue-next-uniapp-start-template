# uniapp-starter-template

uniapp 小程序启动模板

- vue3
- eslint + prettier
- vant
- pinia
- vite
- unocss
- husky + lint-staged
- pnpm
- echarts
- iconfont
- 简单封装request

### 安装依赖

```
pnpm i
```

### 启动

#### 方式1（推荐）
将项目导入至Hbuildx，使用Hbuildx编译启动小程序,使用cli命令编译启动容易报错，开发可以在vscode中开发


#### 方式2
具体需要打开哪一个，可看 package.json 中的 scripts

```
pnpm dev:mp-weixin
```
1. 在 src/manifest.json 中的 appid 字段填写自己的 appid
2. 将 dist/mp-weixin 目录添加进微信开发者工具


