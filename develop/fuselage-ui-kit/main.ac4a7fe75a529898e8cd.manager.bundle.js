(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{319:function(module){module.exports=JSON.parse('{"name":"@rocket.chat/fuselage-ui-kit","private":true,"version":"11.0.0","description":"UiKit elements for Rocket.Chat Apps built under Fuselage design system","homepage":"https://rocketchat.github.io/Rocket.Chat.Fuselage/","author":{"name":"Rocket.Chat","url":"https://rocket.chat/"},"license":"MIT","repository":{"type":"git","url":"git+https://github.com/RocketChat/fuselage.git","directory":"packages/fuselage-ui-kit"},"bugs":{"url":"https://github.com/RocketChat/fuselage/issues"},"main":"dist/cjs/index.js","module":"dist/esm/index.js","types":"dist/esm/index.d.ts","files":["/dist"],"publishConfig":{"access":"public"},"scripts":{"dev":"tsc --watch --preserveWatchOutput -p tsconfig-esm.json","build":"run-s .:build:clean .:build:esm .:build:cjs",".:build:clean":"rimraf dist",".:build:esm":"tsc -p tsconfig.esm.json",".:build:cjs":"tsc -p tsconfig.cjs.json","test":"jest","lint":"eslint --ext .js,.jsx,.ts,.tsx .","testunit":"jest","typecheck":"tsc --noEmit","docs":"cross-env NODE_ENV=production build-storybook -o ../../static/fuselage-ui-kit","storybook":"cross-env TS_NODE_COMPILER_OPTIONS=\'{\\"module\\": \\"commonjs\\"}\' start-storybook -p 6006 --no-version-updates","build-storybook":"cross-env TS_NODE_COMPILER_OPTIONS=\'{\\"module\\": \\"commonjs\\"}\' NODE_ENV=production build-storybook","build-preview":"yarn build-storybook",".:build-preview-move":"mkdir -p ../../.preview/ && cp -r ./storybook-static ../../.preview/fuselage-ui-kit"},"peerDependencies":{"@rocket.chat/apps-engine":"*","@rocket.chat/eslint-config":"0.7.0","@rocket.chat/fuselage":"*","@rocket.chat/fuselage-hooks":"*","@rocket.chat/fuselage-polyfills":"*","@rocket.chat/icons":"*","@rocket.chat/prettier-config":"*","@rocket.chat/styled":"*","@rocket.chat/ui-avatar":"7.0.0","@rocket.chat/ui-contexts":"11.0.0","@rocket.chat/ui-kit":"*","@rocket.chat/ui-video-conf":"11.0.0","@tanstack/react-query":"*","react":"*","react-dom":"*"},"devDependencies":{"@babel/core":"~7.22.20","@babel/preset-env":"~7.22.20","@babel/preset-react":"~7.22.15","@babel/preset-typescript":"~7.22.15","@newhighsco/storybook-addon-transpile-modules":"^1.0.21","@rocket.chat/apps-engine":"workspace:^","@rocket.chat/core-typings":"workspace:^","@rocket.chat/eslint-config":"workspace:^","@rocket.chat/fuselage":"^0.59.1","@rocket.chat/fuselage-hooks":"^0.33.1","@rocket.chat/fuselage-polyfills":"~0.31.25","@rocket.chat/icons":"~0.38.0","@rocket.chat/jest-presets":"workspace:~","@rocket.chat/mock-providers":"workspace:^","@rocket.chat/prettier-config":"~0.31.25","@rocket.chat/styled":"~0.31.25","@rocket.chat/ui-avatar":"workspace:^","@rocket.chat/ui-contexts":"workspace:^","@rocket.chat/ui-kit":"workspace:~","@rocket.chat/ui-video-conf":"workspace:^","@storybook/addon-essentials":"~6.5.16","@storybook/addons":"~6.5.16","@storybook/react":"~6.5.16","@storybook/react-webpack5":"^8.3.5","@storybook/theming":"~6.5.16","@tanstack/react-query":"^4.16.1","@testing-library/react":"~16.0.1","@testing-library/user-event":"~14.5.2","@types/react":"~17.0.80","@types/react-dom":"~17.0.25","babel-loader":"~8.2.5","cross-env":"^7.0.3","eslint":"~8.45.0","i18next":"^23.10.1","jest":"~29.7.0","normalize.css":"^8.0.1","npm-run-all":"^4.1.5","prettier":"~2.8.8","react-docgen-typescript-plugin":"~1.0.8","react-dom":"^17.0.2","react-i18next":"~13.2.2","rimraf":"^3.0.2","storybook-dark-mode":"~2.1.1","typescript":"~5.5.4"},"dependencies":{"@rocket.chat/core-typings":"workspace:^","@rocket.chat/gazzodown":"workspace:^","@rocket.chat/ui-kit":"workspace:~"},"volta":{"extends":"../../package.json"}}')},479:function(module,exports,__webpack_require__){__webpack_require__(480),__webpack_require__(888),__webpack_require__(883),__webpack_require__(887),__webpack_require__(884),__webpack_require__(878),__webpack_require__(880),__webpack_require__(881),__webpack_require__(879),__webpack_require__(885),__webpack_require__(886),module.exports=__webpack_require__(882)},557:function(module,exports){},888:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(22);var colors=__webpack_require__(318),esm=__webpack_require__(98),dist_esm=__webpack_require__(1),package_0=__webpack_require__(319),logo=__webpack_require__.p+"static/media/logo.d570bdd1.svg";esm.a.setConfig({theme:Object(dist_esm.e)({base:"light",brandTitle:package_0.name,brandImage:logo,brandUrl:package_0.homepage,colorPrimary:colors.n500,colorSecondary:colors.p500})})}},[[479,3,4]]]);