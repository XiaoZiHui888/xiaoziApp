步骤1 安装react-native 相关依赖软件
brew install node
brew install watchman
npx nrm use taobao
npm install -g yarn react-native-cli

步骤2 去mac应用市场下载 安装xcode

步骤3 安装相关依赖

npm install
或者
yarn (推荐使用)

步骤4 在iOS模拟上运行代码

react-native run-ios




react-native 功能点整理



1.图片缩放
cover模式只求在显示比例不失真的情况下填充整个显示区域。可以对图片进行放大或者缩小，超出显示区域的部分不显示， 也就是说，图片可能部分会显示不了。
contain模式是要求显示整张图片, 可以对它进行等比缩小, 图片会显示完整,可能会露出Image控件的底色。 如果图片宽高都小于控件宽高，则不会对图片进行放大。
stretch模式不考虑保持图片原来的宽,高比.填充整个Image定义的显示区域,这种模式显示的图片可能会畸形和失真。
center模式, contain模式基础上支持等比放大。

遇到的坑
1.native-base 中 Toast的使用 将路由使用<Root></Root>进行包裹