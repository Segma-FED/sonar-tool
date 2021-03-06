# @segma/sonar-tool

## 简介

基于 `sonarqube` 的代码质量检测工具。

## 仓库地址

```
https://github.com/Segma-FED/sonar-tool
```

## 快速开始

### 安装

```bash
npm i @segma/sonar-tool --registry=http://npm.segma.tech/
```

### 添加命令

```json
// package.json
"scripts": {
    "sonar": "segma-sonar -s <server url> -t <token> -e <exclude path>"
}
```

### Options

#### -s

**[必填]** 服务器地址

```bash
segma-sonar -s <server url>
segma-sonar --server <server url>
```

#### -t

**[必填]** 令牌

```bash
segma-sonar -t <token>
segma-sonar --token <token>
```

#### -e

需要排除的文件目录，逗号分隔路径

```bash
segma-sonar -e <exclude path>
segma-sonar --exclude <exclude path>
```

## 参考

-   [sonarqube 前端使用手册](https://docs.qq.com/doc/DUmVNQ3JDSEZNRWlU)
-   [前端静态代码检测报告汇总表](https://docs.qq.com/sheet/DUlZrb1hac1dCWm51?tab=sy0040)
-   [前端静态代码检测报告规范](https://docs.qq.com/doc/DUkZPZkVTZEdrQk1x)
