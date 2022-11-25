# scq-succinct-ui

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### 打包命令解释：

--target lib 关键字 指定打包的目录

--name 打包后的文件名字

--dest 打包后的文件夹的名称

### npm 命令

- npm 查看当前源

```
npm get registry
```

- npm 设置淘宝镜像源：

```
npm config set registry http://registry.npm.taobao.org
```

- npm 设置官方源：

```
npm config set registry http://www.npmjs.org
```

### 上传 npm

> 上传时，package 版本须大于之前版本

1. 切换 npm 地址：npm config set registry https://registry.npmjs.org

2. 验证地址：npm config get registry

3. 命令注册，建立用户帐号：npm adduser

4. 登录：npm login（一般第五步，会提示输入账号）

5. 发布包，上传到 npm 服务器：npm publish

6. 删除 npm 包，后面是版本号：npm unpublish baoming@1.0.1
