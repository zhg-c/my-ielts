#项目创建步骤
1. npm.cmd create vite@latest, 选择 Vue，TypeScript
2. 添加 vite.config.ts 中的根目录
3. 在 package.json 中的 scripts 下，添加 predeploy 和 deploy
4. npm.cmd install gh-pages, npm.cmd run deploy.

至此，项目可在线访问了

5. 配置自动导入，npm install unplugin-vue-components -D，npm install unplugin-auto-import -D，
   之后在 vite.config.ts 中导入保存，就会自动生成两个文件 auto-imports.d.ts,components.d.ts,
   将两个文件名包含到 tsconfig.app.json 。
