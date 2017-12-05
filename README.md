# chalk-animation

[![Build Status](https://travis-ci.org/bokub/chalk-animation.svg?branch=master)](https://travis-ci.org/bokub/chalk-animation)
[![npm](https://img.shields.io/npm/v/chalk-animation.svg)](https://www.npmjs.com/package/chalk-animation)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Code Climate](https://img.shields.io/codeclimate/github/bokub/chalk-animation.svg)](https://codeclimate.com/github/bokub/chalk-animation)

> 终端输出彩色动画


## 可用的动画及效果

|   名字    |                   效果                     |
|:---------:|:------------------------------------------:|
|  rainbow  | ![rainbow](http://i.imgur.com/napdxdn.gif) |
|   pulse   | ![rainbow](http://i.imgur.com/xdaETwr.gif) |
|   glitch  | ![rainbow](http://i.imgur.com/834FJU1.gif) |
|   radar   | ![rainbow](http://i.imgur.com/3bFrtRc.gif) |
|    neon   | ![rainbow](http://i.imgur.com/YdAAroI.gif) |


## 模块安装

```bash
$ npm i chalk-animation
```


## 语法

```javascript
const chalkAnimation = require('chalk-animation');

chalkAnimation.rainbow('Lorem ipsum dolor sit amet');
```

#### 开始和停止动画

1.可以使用stop()函数停止动画，start()函数开始（恢复）动画。

（创建时，chalkAnimation的实例会自动启动）

```javascript
const rainbow = chalkAnimation.rainbow('Lorem ipsum'); // 实例化一个动画，开始动画

setTimeout(() => {
    rainbow.stop(); // 停止动画
}, 1000);

setTimeout(() => {
    rainbow.start(); // 恢复动画
}, 2000);

```

#### 自动停止

1.打印到控制台上的内容会自动停止之前的动画

```javascript
chalkAnimation.rainbow('Lorem ipsum');
setTimeout(() => {
    // 停止"Lorem ipsum"动画，然后新写一句话
    console.log('dolor sit amet');
}, 1000);
```

#### 改变速度

1.使用该函数的第二个参数来改变动画速度。默认值是1，且大于0

```javascript
chalkAnimation.rainbow('Lorem ipsum', 2); // 比默认快两倍
```

#### 改变动画文字

1.使用replace()函数来无缝更改动画文字

```javascript
let str = 'Loading...';
const rainbow = chalkAnimation.rainbow(str);

//每秒添加一个新的字符
setInterval(() => {
	rainbow.replace(str += '.');
}, 1000);
```

#### 手动渲染

1.使用render()函数进行手动渲染，使用frame()函数来获取下一帧

```javascript
const rainbow = chalkAnimation.rainbow('Lorem ipsum').stop(); // 设置停止动画

rainbow.render(); // 显示第一帧

const frame = rainbow.frame(); // 获得第二帧
console.log(frame);
```


## 命令行接口模式

```bash
# Install package globally
$ npm install --global chalk-animation
```

```
$ chalk-animation --help

语法
  $ chalk-animation <name> [text...]

可用的动画：
  rainbow(彩虹)
  pulse(心跳)
  glitch(冲波干扰)
  radar(雷达)
  neon(霓虹灯)

举例
  $ chalk-animation rainbow Hello world!
```


## 相关的网址

- [gradient-string](https://github.com/bokub/gradient-string) - Output gradients to terminal
- [chalk](https://github.com/chalk/chalk) - Output colored text to terminal


## 许可证

MIT © [Boris K](https://github.com/bokub)
