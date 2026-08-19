# @tomjs/commitlint-config

![npm](https://img.shields.io/npm/v/@tomjs/commitlint-config) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/commitlint-config) ![NPM](https://img.shields.io/npm/l/@tomjs/commitlint-config)

[English](./README.md) | **中文**

> 项目 [commitlint](https://commitlint.js.org/) 代码提交规范配置。

## 使用

- 安装

```bash
pnpm add -D @commitlint/cli @tomjs/commitlint-config
```

- 修改 `commitlint.config.{js,mjs,ts,mts}` 配置

```js
export default {
  extends: ['@tomjs/commitlint-config'],
};
```

- 结合其他库

结合 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 和 [lint-staged](https://www.npmjs.com/package/lint-staged) 使用。

```bash
pnpm add -D simple-git-hooks lint-staged
```

`package.json` 的 `scripts` 增加 `prepare`

```json
{
  "scripts": {
    "prepare": "simple-git-hooks"
  }
}
```

## 版本依赖

| @tomjs/commitlint-config | @commitlint/cli | node      |
| ------------------------ | --------------- | --------- |
| ^1.0.0                   | ^21.2.2         | >=22.12.0 |
