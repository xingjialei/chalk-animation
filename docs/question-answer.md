<body marginheight="0"><h2>Question:</h2>
<h5>Here are my answer to the question.</h5>
<ul>
<li>成果仓库是否创建，仓库名称是什么？<ul>
<li>chalk-animation</li>
</ul>
</li>
<li>README.md 文档是否翻译？<ul>
<li>yes</li>
</ul>
</li>
<li>是否撰写 MarkDown 文档来记录自己代码阅读的收获？<ul>
<li>yes</li>
</ul>
</li>
<li>通过代码阅读，自己学到了什么？<ul>
<li>学到了chalk模块以及gradient-string模块的使用</li>
</ul>
</li>
<li>项目的功能是什么？<ul>
<li>实现终端输出彩色动画</li>
</ul>
</li>
<li>请展示项目功能或者运行项目（不同项目类型，运行方式不同）。 </li>
<li>程序中的注释是否翻译？<ul>
<li>已翻译</li>
</ul>
</li>
<li>是否在程序中补充注释？补充注释的理由是什么？不补充注释的理由是什么？<ul>
<li>已补充，理由是自己不懂的地方会标记注释，简单易懂的没有标记</li>
</ul>
</li>
<li>项目类型是什么？（命令行程序、web 网站、第三方库、其他，如果是其他项目类型，请给出项目类型的具体名称）<ul>
<li>第三方库</li>
</ul>
</li>
<li>项目的入口文件是哪个？<ul>
<li>index.js</li>
</ul>
</li>
<li>项目的依赖项有哪些，各个依赖项都是做什么，有什么功能？<ul>
<li>chalk模块：命令行彩色输出</li>
<li>gradient-string模块：字符串渐变</li>
</ul>
</li>
<li>项目有哪些代码模块？各个代码模块之间有什么关联性？<ul>
<li>
     <table>
	<tr>
		<td>代码模块</td>
		<td>暴露模块</td>
		<td>作用</td>
	</tr>
	<tr>
		<td>var</td>
		<td></td>
		<td>全局变量定义</td>
	</tr>
	     <tr>
		<td>effects</td>
		<td>是</td>
		<td>动画效果</td>
	</tr>
	<tr>
		<td>animateString</td>
		<td>是</td>
		<td>定义动画对象动作</td>
	</tr>
     </table>
</li>
</ul>
</li>
<li>代码模块中有哪些函数？各个函数都是做什么的？<ul>
<li>animateString函数：用来初始化动画对象和定义动画对象的动作</li>
<li>stopLastAnimation函数：用来停止动画</li>
</ul>
</li>
<li>项目中的数据结构有哪些种类？功能作用是什么？<ul>
<li>String,Number,Object</li>
</ul>
</li>
</ul>
</li>
<li>项目中的设计模式有哪些种类？功能作用是什么？<ul>
<li>工厂模式，用来实例化动画对象</li>
</ul>
</li>
</ul>
</li>
<li>代码中哪一个或几个函数的代码比较难于理解？你搞明白了吗？你认为难点是什么？<ul>
<li>动画效果中的glitch效果和radar效果难于理解</li>
<li>难点是函数中变量设置太多，无法直接读出每个变量设置的意义</li>
</ul>
</li>
<li>项目中用到自动化测试吗？用到自动化测试框架了吗？用的是哪个自动化测试框架？<ul>
<li>用到了,ava自动化测试框架</li>
</ul>
</li>
<li>项目中所有的模块都有单元测试吗？哪些有？哪些没有？这样安排的理由是什么？<ul>
<li>没有</li>
</ul>
</li>
<li>项目中是否用到持续集成？持续集成做了哪些事情？<ul>
<li>用到了，触发自动化测试/li>
</ul>
</li>
<li>仓库根目录都有哪些文件？每个文件的作用都是什么？<ul>
<li>README.md 用来对项目做描述和说明</li>
<li>.gitignore 文件用来排除不必要的项目文件，或者敏感的信息文件</li>
<li>LICENSE 文件统一用 MIT 共享协议</li>
<li>index.js入口文件</li>
<li>cli.js</li>
</ul>
</li>
<li>代码中是否有 bug？<ul>
<li>暂时没有发现bug</li>
</ul>
</li>
<li>代码中是否有可以改进的地方？<ul>
<li>原代码中注释很少，应该对每个函数中的复杂变量，参数，返回值做出注释</li>
</ul>
</li>
<li>项目是如何划分模块、划分函数的，划分的好吗？如果是你，你会怎么做？<ul>
<li>代码中将各类效果作为一个对象，然后将启动动画更改动画文字，恢复动画等动作作为一个函数，最后有停止动画函数</li>
<li>代码简洁明了，使人一目了然</li>
</ul>
</li>
<li>代码的可读性如何？结构清晰吗？编码风格如何？<ul>
<li>可读性好</li>
<li>结构清晰</li>
<li>编码规范</li>
</ul>
</li>
<li>你是否调试运行过项目？通过调试运行，你搞明白了哪些问题？如果没有调试运行，说出不调试运行项目的理由。<ul>
<li>调试过项目，搞明白了</li>
</ul>
</li>
<li>你是否把项目代码做了拆解，比如，把某个函数复制出来，放到一个单独的代码文件中，进行研究？这么做<ul>
<li>进行了拆分，原因是效果很多，想要弄清每个效果中变量的作用，更改了变量后动画会发生什么变化</li>
</ul>
</li>
<li>阅读源代码的整个过程中，你的内心状态如何？如果有心理上的障碍，你是如何克服的？<ul>
<li>有心理障碍，静下心来将每个效果逐个研究，对其进行拆分研究
</li>
</ul>
</li>
</ul>
