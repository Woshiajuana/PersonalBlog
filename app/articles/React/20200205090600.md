
# React

> [中文官网](https://react.docschina.org/)

用于构建用户界面的 `JavaScript` 库。

`UI = fn(state)`

特点：
- 声明式的设计；
- 采用虚拟 `DOM` + 优秀的 `Diffing` 算法，尽量减少与真实 `DOM` 的交互；
- 灵活，跟其他库可灵活搭配使用；
- 使用 `JSX`；
- 组件化、模块化，代码容易复用。
- 单向数据流。没有实现数据的双向绑定。数据 => 视图 => 事件 => 数据；

## React 的基本使用

### 相关 js 库

- `react.js` ：`React` 核心库；
- `react-dom.js` ：提供操作 `DOM` 的扩展库 `ReactDOM` ；
- `babel.min.js` ：解析 `JSX` 语法代码转为 `JS` 代码库；
- `prop-types.js` ：用于对组件标签属性进行限制；

### 虚拟 DOM

关于虚拟 DOM
- 本质就是 `Object` 类型的对象（一般对象）；
- 虚拟 `DOM` 比较"轻"，真实 `DOM`比较"重"，虚拟 `DOM` 是 `React` 内部在用，无需真实 `DOM` 上那么多属性；
- 虚拟 `DOM` 最终会被 `React` 转成真实 `DOM`，呈现在页面上；

创建虚拟 `DOM` 的两种方式
1. 使用 `JSX` 语法；
```
// 1. 创建虚拟 `DOM`；
const VDOM = <h1 id="title">Hello World</h1>;
// 2. 渲染虚拟 `DOM` 到页面；
ReactDOM.render(VDOM, document.getElementById('root'));
```
2. 使用 `React.createElement(标签名, 属性, 内容)`
```
// 1. 创建虚拟 `DOM`；
const VDOM = React.createElement('h1', { id: 'title' }, 'Hello World');
// 2. 渲染虚拟 `DOM` 到页面；
ReactDOM.render(VDOM, document.getElementById('root'));
```


## React JSX

- 全称 `JavaScript XML`；
- `react` 定义的一种类似于 `XML` 的 `JS` 扩展语法：`JS + XML`；
- 本质是 `React.createElement(component, props, ...children)` 方法的语法糖；
- 用来简化创建虚拟 `DOM`
    + 写法 `let ele = <h1>Hello JSX!</h1>`；
    + 就是一个 `JS` 对象，最终会被渲染成真实的 `DOM`； 
- 标签名任何。

`JSX` 语法规则
- 定义虚拟 `DOM` 时，不要写引号；
- `JSX` 元素对象或者组件对象，必须只有一个根元素节点；
- 标签首字母
    + 如果是小写开头，则将该标签转为 `html` 中同名元素，若 `html` 中无该标签对应的同名元素，则报错；
    + 如果大写字母开头，`react` 就去渲染对应的组件，若组件没有定义，则报错。
- 标签中混入 `JS`  表达式时要用 `{}`；
    + 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方；
- 样式的类名指定不要用 `class`，要用 `className`（`class` 在 `js` 语法中是一个关键字）；
- 内联样式 `style` 要用 `style={{key: value}}` 的形式去写；

**注** 
- `React 16` 原理： `babel-loader` 会预编译 `JSX` 为 `React.createElement(...)`；
- `React 17` 原理： `JSX` 将不会转换为 `React.createElement(...)`，而是自动从 `React` 的 `package` 中引入新的入口
函数并调用；


函数式组件开发
```
// react 函数式组件
function Clock(props) {
    return (
        <div>
            <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
            <h2>这是副标题</h2>
        </div>
    )
}
```

JSX Style 样式

```
let exampleStyle = {
    background: 'blue',
    borderBottom: '1px solid red',
    'background-image': '',
};
let arrClassName = ['bg', 'fontsize'];
let element = (
    <div>
        <h1 className={arrClassName.join(' ')} style={exampleStyle}>hello world</h1>
    </div>
);
ReactDOM.render(
    element,
    document.getElementById('root'),
);
```

注释写法
```
let element = (
    <div>
        {/*这里写注释*/}
        <h1 className={arrClassName.join(' ')} style={exampleStyle}>hello world</h1>
    </div>
);
```

使用 `babel` 转换 `jsx`
```
const bable = require('@babel/core');
const sourceCode = `<h1 id="title">hello<span>world</span></h1>`;
const result = babel.transform(sourceCode, {
    plugins: [
        [ 
            "@babel/plugin-transform-react-jsx",
            {
                // runtime: 'classic' // 老模式
                runtime: 'automatic' // 新模式
            } 
        ]
    ]
});
console.log('result => ', result);
```

老模式输出结果
```
/*#__PURE__*/
React.createElement("h1", {
  id: "title"
}, "hello ", /*#__PURE__*/React.createElement("span", null, "world"));
```

新模式输出结果
```
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";

/*#__PURE__*/
_jsxs("h1", {
  id: "title",
  children: ["hello ", /*#__PURE__*/_jsx("span", {
    children: "world"
  })]
});
```



## React 开发者工具调试

`React Developer Toos`
 
 
 
## React 脚手架创建项目

步骤
1. 安装脚手架 `create-react-app`；
```
npm install -g create-react-app
```
2. 创建项目；
```
create-react-app <project-directory>
```
3. 启动
```
npm run start
```
4. 打包部署
```
npm run build
```


## React 组件

分为函数式组件和类组件，区别：
- 函数式比较简单，一般用于静态没有交互事件的内容；
- 类组件一般又称为动态组件，会有交互或者数据修改的操作；

### 函数式组件

```
function HelloWorld (props) {
    console.log(this); // 此处的 this 是 undefined，因为 babel 编译后开启了严格模式
    return (
        <div>
            <h1>hello world</h1>
        </div>
    );
}
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root'),
);
```

执行流程
- `React` 解析组件标签，找到了 `HelloWorld` 组件；
- 发现组件是使用函数定义的，随后调用该函数，将返回的虚拟 `DOM` 转为真实的 `DOM`，随后呈现在页面中；



### 类组件

```
class HelloWorld extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>hello world</h1>
            </div>
        );
    }
}
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root'),
);
```

执行流程
- `React` 解析组件标签，找到了 `HelloWorld` 组件；
- 发现组件是使用类定义的，随后new 出来该类的实例，并且通过该实例调用到原型上的 `render` 方法；
- 将 `render` 返回的虚拟 `DOM` 转为真实的 `DOM`，随后呈现在页面中；


## 消息订阅-发布极致

工具库：`PubSubJS`

```
npm install pubsub-js --save
```

使用
```
import PubSub from 'pubsub-js'
const token = PubSub.subscribe('delete', function(msg, data) {}); // 订阅
PubSub.publish('delete', data); // 发布消息

// 组件销毁的时候需要取消订阅
PubSub.unsubscribe(token);
```



## React 生命周期事件

- 绑定事件命名为驼峰命名法；
- 传入一个函数，而不是字符串；

**注意** `React` 返回的事件对象是代理的原生的事件对象，如果想要
查看事件对象具体属性，需要直接输出该属性；

组件从实例化到最终从页面中销毁的这整个过程就是生命周期。
在这个过程当中，有许多生命周期钩子函数。


### 生命周期（旧）

![一图概括](images/WX20210106-094917@2x.png)


旧生命周期中的钩子函数（方法、事件）
- 初始化阶段，由 `ReactDOM.render()` 触发，初次渲染；
    + `constructor()`；
    + `componentWillMount()` 组件将要挂载渲染；
    + `render()` 组件渲染；
    + `componentDidMount()` 组件渲染完毕；
- 更新阶段，由组件内部 `this.setState()` 或父组件重新 `render` 触发；
    + `componentWillReceiveProps()` 组件将要接收 `props` 数据（父组件`render`的时候，子组件才会触发这个钩子函数。**注意**第一次不会触发这个钩子函数）；
    + `shouldComponentUpdate()` 组件接收到新的 `state` 或者 `props` ，判断是否更新，返回布尔值；
    + `componentWillUpdate()` 组件将要更新；
    + `render()` 组件渲染；
    + `componentDidUpdate(prevProps, prevState)` 组件已经更新；
- 卸载组件阶段，由 `ReactDOM.unmountComponentAtNode()` 触发；
    + `componentWillUnmount()` 组件将要卸载；

```
class Lifecycle extends React.Component {
    constructor (props) {
        super(props);
    }
    // 组件将要挂载渲染
    componentWillMount() {

    }
    // 组件渲染完毕
    componentDidMount() {

    }
    // 组件将要接收 props 数据
    componentWillReceiveProps(nextProps, nextContext) {

    }
    // 组件接收到新的 state 或者 props ，判断是否更新，返回布尔值
    shouldComponentUpdate(nextProps, nextState, nextContext) {

    }
    // 组件将要更新
    componentWillUpdate(nextProps, nextState, nextContext) {

    }
    // 组件已经更新
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    // 组件将要卸载
    componentWillUnmount(){

    }
    // 渲染
    render () {
        return null
    }
}
```


### 生命周期（新）

![一图概括](images/WX20210106-132227@2x.png)

以下三个钩子函数需要加上 `UNSAFE_` 前缀
- `componentWillMount()`；
- `componentWillReceiveProps()`；
- `componentWillUpdate()`；

新增两个钩子函数
- `getDerivedStateFromProps(props, state)`
    + 静态函数，接收两个参数 `props` 、 `state`；
    + 若 `state` 的值在任何时候都取决于 `props` 就可以使用这个；
- `getSnapshotBeforeUpdate()`；在更新之前获取快照。返回的值，会作为 `snapshotValue` 传递给 `componentDidUpdate`；
    + `componentDidUpdate(prevProps, prevState, snapshotValue)`；

新生命周期中的钩子函数（方法、事件）
- 初始化阶段，由 `ReactDOM.render()` 触发，初次渲染；
    + `constructor()`；
    + `static getDerivedStateFromProps()`；
    + `render()`；
    + `componentDidMount()`；
- 更新阶段，由组件内部 `this.setState()` 或父组件重新 `render` 触发；
    + `static getDerivedStateFromProps()`；
    + `shouldComponentUpdate()`；
    + `render()`；
    + `getSnapshotBeforeUpdate()`；
    + `componentDidUpdate(prevProps, prevState, snapshotValue)`；
- 卸载组件阶段，由 `ReactDOM.unmountComponentAtNode()` 触发；
    + `componentWillUnmount()` 组件将要卸载；





## React State 状态

- `state` 是组件对象最重要的属性，值是对象（可以包含多个 `key-value` 的组合）；
- 组件被称为 "状态机" ，通过更新组件的 `state` 来更新对应的页面显示（重新渲染组件）；


```
class Clock extends React.Component {
    constructor (props) {
        super(props);
        // 构造函数初始化数据
        this.state = {
            time: new Date().toLocaleTimeString(),
        }
    }
    render() {
        return (
            <div>
                <p>当前时间：{this.state.time}</p>
            </div>
        );
    }
    // 生命周期函数，组件渲染完成的函数
    componentDidMount() {
        setInterval(() => {
            // 设置状态修改数据
            this.setState({
                time: new Date().toLocaleTimeString(),
            });
            // 注意此时 this.state.time 值不一定会是修改之后的值
            // react 会在设置完状态后，对比虚拟 DOM 对象，然后再统一修改，提升性能
            console.log(this.state.time);  
        }, 1000);
    }
}
```

**注意**
- 组件中 `render` 方法中的 `this` 为组件实例对象；
- 组件自定义的方法中 `this` 为 `undefined` ，如何解决？
    + 强制绑定 `this`，通过函数对象的 `bind()` 方法；
    + 箭头函数
- 状态数据不能直接修改或更新，需要使用 `setState()` 方法；


## React Props 

- 父组件传给子组件的数据，单向流动，不能子组件传递给父组件；
- 可以是任意类型的值，可以是函数，所以可以通过函数去修改父组件的状态；
- 可以设置默认值；
- `porps` 是只读的，不能修改；

```
class ParentComponent extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            text: '',
        }
    }
    onText (e) {
        this.setState({ text: e });
    }
    render () {
        return (
            <div>
                <p>从子组件接收到的参数：{this.state.text}</p>
                <ChildComponent onText={ (e) => this.onText(e) } />
            </div>
        )
    }
}
class ChildComponent extends React.Component {
    constructor (props) {
        super (props);
    }
    onClick () {
        this.props.onText('hello world');
    }
    render () {
        return (
            <div>
                <button onClick={ () => this.onClick() }>给父组件传递参数</button>
            </div>
        )
    }
}
```

属性类型、必要性、默认值限制
```
class Person extends React.Component{}

// 类型限制
Person.propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string,
    speak: PropTypes.func, // 限制是函数
}

// 默认值
Person.defaultProps = {
    sex: '男',
}
```

也可以这样写
```
class Person extends React.Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        sex: PropTypes.string,
        speak: PropTypes.func, // 限制是函数
    }
    static defaultProps = {
        sex: '男',
    }
    render () {
        // ...
    }
}
```


## React refs

组件内的标签可以定义 `ref` 属性类标识自己

### 字符串形式的 ref 

```
class RefsDemo extends React.Component {
    handleOnClick = (e) => {
        console.log(e);
        console.log(this.refs);
    };
    render () {
        return (
            <div>
                <input ref='input' type="text"/>
                <button onClick={this.handleOnClick}>点我取值</button>
            </div>
        );
    }
}
```

**注意** 字符串 `ref` 因为存在一些效率问题，已经不被官方推荐使用。


### 回调函数式的 ref

内联回调函数式 ref

```
class RefsDemo extends React.Component {
    handleOnClick = (e) => {
        console.log(this.input); // input 元素
    };
    render () {
        return (
            <div>
                <input ref={n => this.input = n} type="text"/>
                <button onClick={this.handleOnClick}>点我取值</button>
            </div>
        );
    }
}
```

**注意** 如果 `ref` 回调函数是以内联函数的方式定义的，在更新的过程中它会被执行两次，
第一次传入参数 `null`，然后第二次会传入参数 `DOM` 元素。这是因为在每次渲染时会创建
一个新的函数实例，所以 `React` 清空旧的 `ref` 并且设置新的。通过将 `ref` 的回调函数定义
成 `class` 的绑定函数的方式可以避免上述问题，但是在大多数情况下它是无关紧要的。


类绑定回调函数式 ref

```
class RefsDemo extends React.Component {
    handleOnClick = (e) => {
        console.log(this.input);
    };
    refSetInput = (n) => {
        this.input = n;
    };
    render () {
        return (
            <div>
                <input ref={this.refSetInput} type="text"/>
                <button onClick={this.handleOnClick}>点我取值</button>
            </div>
        );
    }
}
```


### React.createRef() 式 ref

`React.createRef` 调用后可以返回一个容器，该容器可以存储被 `ref` 所标识的节点。

```
class RefsDemo extends React.Component {
    handleOnClick = (e) => {
        console.log(this.input.current); // input 元素
    };
    input = React.createRef();
    render () {
        return (
            <div>
                <input ref={this.input} type="text"/>
                <button onClick={this.handleOnClick}>点我取值</button>
            </div>
        );
    }
}
```


## React 事件

- 通过 `onXxx` 属性指定事件处理函数（注意大小写）；
    + `React` 使用的是自定义(合成)事件，而不是使用的原生 `DOM` 事件；
    + `React` 中的事件是通过事件委托方式处理的(委托给组件最外层的元素)；
- 通过 `event.target` 得到发生事件的 `DOM` 元素对象；


高阶函数，如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。
- 若函数A接收的参数是一个函数，那么 A 就是高阶函数；
- 若函数A调用的返回值依然是一个函数，那么 A 就是高阶函数；

函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理
的函数编码形式。


## React 条件渲染

- `if...else...`；
- 三元运算符；

```
class TabSwitch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            index: 0,
        }
    }
    onClick (index) {
        this.setState({ index });
    }
    render () {
        return (
            <div>
                <div>
                    <button onClick={() => this.onClick(0)}>按钮1</button>
                    <button onClick={() => this.onClick(1)}>按钮2</button>
                </div>
                {
                    this.state.index === 0 ? <div>内容1</div> : <div>内容2</div>
                }
            </div>
        );
    }
}
```


## React 列表渲染

```
class ListComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            arr: [ 'a', 'b', 'c', 'd' ]
        }
    }
    render () {
        return (
            <ul>{this.state.arr.map((item, index) => <li key={index}>{item}</li>)}</ul>
        );
    }
}
```

虚拟 `DOM` 中 `key` 的作用，当状态中的数据发生变化时，react 会根据新数据生成新的虚拟 `DOM`，
随后 `React` 进行新虚拟 `DOM` 与 旧虚拟 `DOM` 的 `diff` 比较，比较规则如下：
- 旧虚拟 `DOM` 中找到了与新虚拟 `DOM` 相同的 `key`
    + 若虚拟 `DOM` 中内容没变，直接使用之前的真实 `DOM`；
    + 若虚拟 `DOM` 中内容变了，则生成新的真实 `DOM`，随后替换掉页面中之前的真实 `DOM`；
- 旧虚拟 `DOM` 中未找到与新虚拟 `DOM`相同的 `key`，根据数据创建新的真实 `DOM`，随后渲染到页面上；


用 `index` 作为 `key` 可能会引发的问题：
- 若对数据进行，逆序添加、删除等破坏顺序的操作，会产生没有必要的真实 `DOM` 更新，影响效率；
- 如果结构中还包含输入类的 `DOM`，会产生错误的 `DOM` 更新；
- 若只是作用渲染列表展示用的，使用 `index` 作为 `key` 是没有问题的；




## React 插槽

组件中写入内容，这些内容可以被识别和控制；

```
class SlotComponent extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <h1>组件内容</h1>
                {this.props.children[0]}
                {this.props.children[1]}
                {this.props.children[2]}
            </div>
        );
    }
}
ReactDOM.render(
    <SlotComponent>
        <p>子组件1</p>
        <p>子组件2</p>
        <p>子组件3</p>
    </SlotComponent>,
    document.getElementById('root'),
);
```


## React 路由 react-router-dom

根据不同的路径，显示不同的组件内容，`React` 使用的库 `react-router-dom`。

```
npm install react-router-dom --save
```


### 内置组件
- `BrowserRouter`
- `HashRouter`
- `Router` ：所有路由组件的根组件（底层组件），包裹路由规则的最外层容器；
    + `basename` 属性：基础路径；
- `Route` ：路由规则匹配组件，显示当前规则对应的组件；
    + `exact` 属性：精确匹配；
- `Link` ：路由跳转的组件；
    + `replace` 属性：点击链接后，讲新地址替换成历史访问记录的源地址；
- `NavLink`：路由跳转组件，有高亮效果；
```
<NavLink activeClassName="active" to="/test">测试链接</NavLink>
```
- `Redirect` 重定向组件，重定向路由组件：如果访问某个组件时，有重定向组件，那么就会修改页面的路径，使得
页面内容显示为所重定向路径的内容。
```
<Route path="/home" component={Home}/>
<Route path="/test" component={Test}/>
<Redirect to="/home"/>
```
- `Switch` 组件，只匹配一个 `route` 内容；
    + 通常情况下，`path` 和 `component` 是一一对应的关系；
    + `Switch` 可以提高路由匹配效率（单一匹配）；
    ```
    <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/test" component={Test}/>
        <Route path="/about" component={About}/>
    </Switch>
    ```

**注意**如果要精确匹配，那么可以在 `route` 上设置 `exact` 属性。


### 路由模式
- `hash` 模式
```
import { HashRouter as Router, Link, Route } from 'react-router-dom'
```
- `history` 模式
```
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
```

`BrowserRouter` 与 `HashRouter` 区别
- `BrowserRouter` 使用的是 H5 的 `history API`，不兼容 `IE9` 及以下版本；
- `HashRouter` 使用的是 URL 的哈希值；
- 刷新后对路由 `state` 参数的影响；
    + `BrowserRouter` 没有任何的影响，因为 `state` 保存在 `history` 对象中；
    + `HashRouter` 刷新后会导致路由 `state` 参数的丢失；



### 相关 API
- `history`：可以用来操作路由；
    + `go: f go(n)`；
    + `goBack: f goBack()`；
    + `goForward: f goForward()`；
    + `push: f push(path, state)`；
    + `replace: f push(path, state)`；
- `location`：路由信息；
    + `pathname: '/test'`；
    + `search: ''`；
    + `state: undefined`；
- `match`：
    + `params: {}`；
- `withRouter(Component)`：让一般组件也能用路由的 `api`；
```
// Test.js
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Test extends Component {
    //....
}
export default withRouter(Test);
```


### 路由组件传递参数
- `params` 参数；
    + 路由链接（携带参数）：`<Link to='/details/tom/18'>详情</Link>`；
    + 注册路由（声明接收）： `<Route path='/details/:name/:age' component={Details}/>`；
    + 接收参数： `const { name, age } = this.props.match.params`；
- `search` 参数；
    + 路由链接（携带参数）： `<Link to='/details?name=tom&age=18'>详情</Link>`；
    + 注册路由（声明接收）： `<Route path='/details' component={Details}/>`；
    + 接收参数： `const { search } = this.props.location`，获取到的 `search` 是 `urlencoded` 编码的字符串，
    需要借助 `querystring` 解析。 `const { name, age } = qs.parse(search.slice(1))` ；
- `state` 参数；
    + 路由链接（携带参数）： `<Link to={{ path: '/details', state: { name: 'tom', age: 18 } }}>详情</Link>`；
    + 注册路由（声明接收）： `<Route path='/details' component={Details}/>`；
    + 接收参数： `const { state } = this.props.location` ；
    + **注意** 刷新也是可以保留住的；



## Redux

![原理图](images/WX20210115-145450@2x.png)


```
npm install redux --save
```

redux 的三个核心概念
- `action`
    + 动作的对象；
    + 包含2个属性；
        * `type`：标识属性，值为字符串，唯一必要属性；
        * `data`：数据属性，值类型任意，可选属性；
    + 写法： `{type: 'ADD_STUDENT', data: { name: 'tom', age: 18 } }`；
- `reducer`
    + 用于初始化状态、加工状态；
    + 加工时，根据旧的 `state` 和 `action` ，产生新的 `state` 的纯函数；
- `store`
    + 将 `state` 、 `action` 、 `reducer` 联系在一起的对象；
    + 如何得到此对象？
    ```
    import { createStore } from 'redux'
    import reducer from './reducers'
    const store = createStore(reducer);
    ```
    + 此对象的功能？
        * `getState()`：得到 `state`；
        * `dispatch(action)`：分发 `action`，触发 `reducer` 调用，产生新的 `state`；
        * `subscribe(listener)`：注册监听，当产生了新的 `state` 时，自动调用；
    

redux 异步 action
- 安装依赖 `redux-thunk`，并配置在 `store` 中；
- 创建 `action` 的函数不再返回一般对象，而是一个函数，该函数中写异步任务；
- 异步任务有结果之后，再分发一个同步的 `action` 去真正操作数据；


简单使用
```
import { createStore } from 'redux'
const reducer = function(state = { num: 0 }, action) {
    switch (action.type) {
        case 'add':
            state.num++;
            break;
        case 'decrement':
            state.num--;
            break;
        default:
            break;
    }
    return state;
};
// 创建仓库
const store = createStore(reducer);
class CountNumberComponent extends React.Component {
    render () {
        return (
            <div>
                <h1>当前数值：{store.getState().num}</h1>
                <div>
                    <button onClick={() => store.dispatch({ type: 'add' })}>+1</button>
                    <button onClick={() => store.dispatch({ type: 'decrement' })}>-1</button>
                </div>
            </div>
        )
    }
}
store.subscribe(() => {
    ReactDOM.render(
        <CountNumberComponent/>,
        document.getElementById('root'),
    );
});
```


## React-Redux

![模型图](images/WX20210115-162702@2x.png)

```
npm install react-redux --save
```

基本使用
- 明确两个概念
    + UI组件， 不能使用任何 `redux` 的 `api`，只负责页面的呈现、交互等；
    + 容器组件，不负责和 `redux` 通信，将结果交给 UI 组件；
- 创建一个容器组件 `connect(mapStateToProps, mapDispatchToProps)(UI组件)`；
    + `mapStateToProps`：映射状态，返回值是一个对象；
    + `mapDispatchToProps`：映射操作状态的方法，返回值是一个对象，也可以直接是一个对象；
- 容器组件中的 `store` 是靠 props 传进去的，而不是在容器组件中直接引入；
- 多个 `reducer` 需要使用 `combineReducers` 进行合并成一个总的状态对象；


纯函数
- 一类特别的函数，只要是同样的实参，必定得到同样的输出；
- 必须遵守以下一些约束：
    + 不得改写参数数据；
    + 不会产生任何副作用，例如网络请求、输入、输出等；
    + 不能调用 `Date.now()` 或者 `Math.random()` 等不纯的方法；
- `redux` 的 `reducer` 函数必须是一个纯函数；


redux 开发者工具的使用
- `npm install redux-devtools-extension`；
- store 中进行配置
```
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));
```



```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const reducer = function(state = { num: 0 }, action) {
    switch (action.type) {
        case 'add':
            state.num++;
            break;
        case 'decrement':
            state.num--;
            break;
        default:
            break;
    }
    return {...state};
};
const store = createStore(reducer);
class CountNumberComponent extends React.Component {
    render () {
        console.log(this.props);
        return (
            <div>
                <h1>当前数值：{this.props.num}</h1>
                <div>
                    <button onClick={this.props.add}>+1</button>
                    <button onClick={this.props.decrement}>-1</button>
                </div>
            </div>
        )
    }
}
const App = connect(
    (state) => ({
        num: state.num,
    }),
    (dispatch) => ({
        add: () => dispatch({ type: 'add' }),
        decrement: () => dispatch({ type: 'decrement' }),
    }),
)(CountNumberComponent);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
```


## 扩展


### setState

`setState` 更新状态的2种写法
- `setState(stateChange, [callback])`：对象式的 `setState`；
    + `stateChange` 为状态改变对象；
    + `callback` 是可选的回调函数，它在状态更新完毕，界面也更新后（render调用后）才被调用；
- `setState(updater, [calllback])`：函数式的 `setState`；
    + `updater` 为返回的 `stateChange` 对象的函数；
    + `updater` 可以接收到 `state` 和 `props`；
    + `callback` 是可选的回调函数，它在状态更新完毕，界面也更新后（render调用后）才被调用；


### 路由组件的 lazyLoad

```
// 通过 React 的 lazy 函数配合 import() 函数动态加载路由组件。路由组件代码会被分开打包；
const Login = lazy(() => import('@/pages/Login'));

// 通过<Suspense> 指定再加载得到的路由打包文件前显示一个自定义的 loading 界面；
<Suspense fallback={<h1>loading...</h1>}>
    <Switch>
        <Route path="/xxx" component={Xxxx}/>
        <Redirect to="/login"/>
    </Switch>
</Suspense>
```


### Hooks

React Hook/Hooks 是什么？
- `Hook` 是 `React 16.8.0` 版本增加的新特性 / 新语法；
- 可以让你再函数组件中使用 `state` 以及其他的 `React` 特性；

三个常用的 Hook 
- `State Hook`：`React.useState()`；
- `Effect Hook`：`React.useEffect()`；
- `Ref Hook`：`React.useRef()`；

State Hook
- `State Hook` 让函数组件也可以有 `state` 状态，并进行状态数据的读写操作；
- 语法： `const [xxx, setXxx] = React.useState(initValue)`；
- `useState()` 说明：
    + 参数，第一次初始化指定的值在内部作缓存；
    + 返回值，包含2哥元素的数组，第1个为内部当前状态值，第2个为更新状态值的函数；
- `setXxx()`2种写法
    + `setXxx(newValue)`：参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值；
    + `setXxx(value => newValue)`：参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值；

Effect Hook
- `Effect Hook` 可以让你在函数组件中执行副作用操作（用于模拟类组件中的生命周期钩子）
- `React` 中的副作用操作
    + 发 `ajax` 请求数据获取；
    + 设置订阅 / 启动定时器；
    + 手动更改真实 `DOM`；
- 语法和说明：
```
useEffect(() => {
    // 在此可以执行任何带副作用的操作
    return () => {
        // 在组件卸载前执行
    }
}, [stateValue]); // 如果指定的是[]，回调函数只会在第一次 render() 后执行
```
- 可以把 `useEffect Hook` 看做如下三个函数的组合
    + `componentDidMount()`；
    + `componentDidUpdate()`；
    + `componentWillUnmount()`；


Ref Hook
- `Ref Hook` 可以在函数组件中存储/查找组件内的标签或任意其它数据；
- 语法： `const refContainer = useRef()`；
- 作用：保存标签对象，功能与 `React.createRef()` 一样；



### Fragment

作用：可以不用必须有一个真实的 DOM 标签。

```
<Fragment></Fragment>
<></>
```


### Context

一种组件间通信方式，常用于【祖组件】与【后代组件】间通信。

```
// 创建 Context 容器对象
const XxxContext = React.createContext();

// 渲染子组件时，外面包裹 XxxContext.Provider，通过 value 属性给后代组件传递数据
<XxxContext.Provider value={数据}>
    // 子组件
</XxxContext.Provider>

// 后代组件读取数据
// 第一种方式：仅适用于类组件
static contextType = XxxContext // 申明接收 context
this.context // 读取 context 中的 value 数据

// 第二种方式：函数组件与类组件都可以
<XxxContext.Consumer>
    {
        value => (要显示的内容) // value 就是 context 中的 value 数据
    }
</XxxContext.Consumer>
```

**注意**在应用的开发中一般不用 Context，一般都用它的封装 `react` 插件；


### 组件优化

Component 的2个问题
- 只要执行 `setState()` 即使不改变状态数据，组件也会重新 `render()`；
- 只要当前组件重新 `render()`，就会自动重新 `render` 子组件；

原因 Component 中的 `shouldComponentUpdate()` 总是返回 `true`，解决：
- 方法1
    + 重写 `shouldComponentUpdate()` 方法；
    + 比较新旧 `state` 或 `props` 数据，如果有变化才返回 `true`，如果没有返回 `false`；
- 方法2（常用）
    + 使用 `PureComponent`， `PureComponent` 重写了 `shouldComponentUpdate()`，只有 `state` 或 `props` 数据有变化才返回 `true`；
    + 注意：只是进行 `state` 和 `props` 数据的浅比较，如果只是数据对象内部数据变了，返回 `false`，不要直接修改 `state` 数据，而是要产生新数据；


### render props

如何向组件内部动态传入带内容的结构（标签）？
- 使用 `children props` 通过组件标签体传入结构；
- 使用 `render props` 通过组件标签传入结构，一般用 `render` 函数属性；

children props
```
<A>
    <B>xxxxx</B>
</A>

// A组件使用，即可在 A 中渲染出组件 B
{this.props.children}

```
问题如果 B 组件需要 A 组件内的数据，就没法做到了。

render props
```
<A render={(data) => <B data={data}></B>}></A>

// A组件
{this.props.render(data)}

// B组件
{this.props.data}
```


### 错误边界

错误边界（Error boundary）：用来捕获后代组件错误，渲染出备用页面。

特点：只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误。

使用方式： `getDerivedStateFromError` 配合 `componentDidCatch`
```
// 生命周期函数，一旦后代组件报错，就会触发
static getDerivedStateFromError (error) {
    console.log(error);
    // 在 render 之前触发
    // 返回新的 state
    return {
        hasError: true,
    };
}

// 渲染组件时出错，会触发
componentDidCatch(error, info) {
    // 统计页面的错误，发送请求到后台去
    console.log(error, info);
}
```


### 组件通信方式总结

组件间的关系
- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件（跨级组件）

几种通信方式
- `props`：
    + `children props`；
    + `render props`；
- `消息订阅-发布`： `pubs-sub`、 `event` 等等；
- 集中式管理：`redux` 、 `dva` 等等；
- context：生产者-消费者模式；


