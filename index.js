'use strict';

const chalk = require('chalk');              //chalk模块引用，命令行彩色输出
const gradient = require('gradient-string'); //gradient-string模块引用，渐变

const log = console.log;
let currentAnimation = null;                 //定义一个animation变量，在animateString函数中对其进行赋值

const consoleFunctions = {                   //控制台输出对象的定义
	log: log.bind(console),
	info: console.info.bind(console),
	warn: console.warn.bind(console),
	error: console.error.bind(console)
};

// eslint-disable-next-line guard-for-in
for (const k in consoleFunctions) {
	console[k] = function () {
		stopLastAnimation();
		consoleFunctions[k].apply(console, arguments);
	};
}

const glitchChars = 'x*0987654321[]0-~@#(____!!!!\\|?????....0000\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t';
const longHsv = {interpolation: 'hsv', hsvSpin: 'long'};

//定义effects对象，彩色动画available animation(rainbow,pulse,gradient,glitch,neon)

const effects = {
  //rainbow彩虹效果
	rainbow(str, frame) {                  //hsv是一种颜色空间
		const hue = 5 * frame;               //hue代表色调,0-360度,控制动画颜色跨度(乘5)
		const leftColor = {h: hue % 360, s: 1, v: 1};
		const rightColor = {h: (hue + 1) % 360, s: 1, v: 1}; 
		return gradient(leftColor, rightColor)(str, longHsv);
	},

  //pulse脉搏跳动效果
	pulse(str, frame) {
		frame = (frame % 120) + 1;           //控制心跳频率
		const transition = 6;
		const duration = 10;
		const on = '#ff1010';                //红色
		const off = '#e6e6e6';               //白色

  //对frame进行数值判断，对文本进行效果变换
		if (frame >= (2 * transition) + duration) {   //frame>=22
			return chalk.hex(off)(str); // All white
		}
		if (frame >= transition && frame <= transition + duration) {   // 6<=frame<=16
			return chalk.hex(on)(str); // All red
		}

		frame = frame >= transition + duration ? (2 * transition) + duration - frame : frame; // Revert animation,如果frame>=16,则frame=22-frame;否则frame=frame(0-6的效果和16-22的效果相同)
		const g = frame <= transition / 2 ?   
			gradient([
				{color: off, pos: 0.5 - (frame / transition)},
				{color: on, pos: 0.5},
				{color: off, pos: 0.5 + (frame / transition)}
			]) :
			gradient([
				{color: off, pos: 0},
				{color: on, pos: 1 - (frame / transition)},
				{color: on, pos: frame / transition},
				{color: off, pos: 1}
			]);              //定义g效果，如果frame<=3进行效果一渲染，如果3<frame<6进行效果二渲染

		return g(str);
	},

  //glitch干扰效果
	glitch(str, frame) {
		if ((frame % 2) + (frame % 3) + (frame % 11) + (frame % 29) + (frame % 37) > 52) {
			return str.replace(/[^\r\n]/g, ' ');
		}
		const chunkSize = Math.max(3, Math.round(str.length * 0.02));
		const chunks = [];
//chunks：代表存放字符串变换后的字符串数组
		for (let i = 0, length = str.length; i < length; i++) {
			const skip = Math.round(Math.max(0, (Math.random() - 0.8) * chunkSize));
//skip：效果变换的长度
			chunks.push(str.substring(i, i + skip).replace(/[^\r\n]/g, ' '));
			i += skip;
			if (str[i]) {
				if (str[i] !== '\n' && str[i] !== '\r' && Math.random() > 0.995) {
					chunks.push(glitchChars[Math.floor(Math.random() * glitchChars.length)]);
				} else if (Math.random() > 0.005) {
					chunks.push(str[i]);
				}
			}
		}

		let result = chunks.join('');
		if (Math.random() > 0.99) {
			result = result.toUpperCase();
		} else if (Math.random() < 0.01) {
			result = result.toLowerCase();
		}

		return result;
	},

  //radar雷达效果
	radar(str, frame) {
		const depth = Math.floor(Math.min(str.length, str.length * 0.2));
		const step = Math.floor(255 / depth); 
//step:颜色变幻的程度
		const globalPos = frame % (str.length + depth);
//globalPos:字符串明亮的位置
		const chars = [];
		for (let i = 0, length = str.length; i < length; i++) {
			const pos = -(i - globalPos);
//pos:字符串内部开始循环
			if (pos > 0 && pos <= depth - 1) {
				const shade = (depth - pos) * step;
				chars.push(chalk.rgb(shade, shade, shade)(str[i]));
			} else {
				chars.push(' ');
			}
		}
    
		return chars.join('');
	},

//neon霓虹灯效果
	neon(str, frame) {
		const color = (frame % 2 === 0) ? chalk.dim.rgb(88, 80, 85) : chalk.bold.rgb(213, 70, 242); //样式修饰符dim(暗淡),bold(明亮);如果frame%2为0则字体为暗淡颜色，如果不为0则是明亮粉色
		return color(str);
	}
};

//Defined a function called animateString
/* @param:[String]str
   @param:[Function]effect
   @param:[Number]delay
   @param:[String]speed
   @param:return{Object} */

function animateString(str, effect, delay, speed) {
	stopLastAnimation();//调用stopLastAnimation函数，进行清除上一次的动画效果，停止动画
	speed = speed === undefined ? 1 : parseFloat(speed);
	if (!speed || speed <= 0) {
		throw new Error(`Expected \`speed\` to be an number greater than 0`);
	}

  //对currentAnimation进行赋值
	currentAnimation = {
		text: str,                  //动画字符
		stopped: false,             //是否停止动画
		init: false,                //初始化
		f: 0,                       //
		render() {                  //显示第一帧动画
			const self = this;
			if (!this.init) {         //对此对象进行init初始化
				log('');
				this.init = true;
			}
			log(this.frame());        //调用frame()函数，进行获取下一帧
			setTimeout(() => {
				if (!self.stopped) {
					self.render();        //如果stopped为false,则循环调用render()函数
				}
			}, delay / speed);
		},
		frame() {
			return '\u001B[1F\u001B[G\u001B[2K' + effect(this.text, this.f++);                          //获取下一帧
		},
		replace(str) {              //改变动画文本
			this.text = str;
		},
		stop() {                    //停止动画
			this.stopped = true;
			return this;
		},
		start() {                   //开始动画
			this.stopped = false;
			this.render();
			return this;
		}
	};
	setTimeout(() => {            //自动开始动画
		if (!currentAnimation.stopped) {
			currentAnimation.start();
		}
	}, delay / speed);
	return currentAnimation;    
}

function stopLastAnimation() {  //停止动画
	if (currentAnimation) {
		currentAnimation.stop();
	}
}

module.exports = {              //利用箭头函数进行模块暴露
	rainbow: (str, speed) => animateString(str, effects.rainbow, 15, speed),
	pulse: (str, speed) => animateString(str, effects.pulse, 16, speed),
	glitch: (str, speed) => animateString(str, effects.glitch, 55, speed),
	radar: (str, speed) => animateString(str, effects.radar, 50, speed),
	neon: (str, speed) => animateString(str, effects.neon, 500, speed)
};
