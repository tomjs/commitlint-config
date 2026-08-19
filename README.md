# @tomjs/commitlint-config

![npm](https://img.shields.io/npm/v/@tomjs/commitlint-config) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/commitlint-config) ![NPM](https://img.shields.io/npm/l/@tomjs/commitlint-config)

**English** | [中文](./README.zh_CN.md)

> Configuration for commit message conventions in projects using [commitlint](https://commitlint.js.org/).

## Usage

- Installation

```bash
pnpm add -D @commitlint/cli @tomjs/commitlint-config
```

- Modify `commitlint.config.{js,mjs,ts,mts}` configuration

```js
export default {
  extends: ['@tomjs/commitlint-config'],
};
```

- Combine with other libraries

Used in conjunction with [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) and [lint-staged](https://www.npmjs.com/package/lint-staged).

```bash
pnpm add -D simple-git-hooks lint-staged
```

`scripts` of `package.json` added `prepare`

```json
{
  "scripts": {
    "prepare": "simple-git-hooks"
  }
}
```

## Version Dependencies

| @tomjs/commitlint-config | @commitlint/cli | node      |
| ------------------------ | --------------- | --------- |
| ^1.0.0                   | ^21.2.2         | >=22.12.0 |
