(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_pooja_Desktop_reactjs_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_home_pooja_Desktop_reactjs_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_home_pooja_Desktop_reactjs_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_home_pooja_Desktop_reactjs_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_home_pooja_Desktop_reactjs_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_Keypad__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),App=function(_React$Component){Object(_home_pooja_Desktop_reactjs_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(_home_pooja_Desktop_reactjs_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(){var e;return Object(_home_pooja_Desktop_reactjs_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(e=_super.call(this)).state={currentNum:""},e.updateNum=e.updateNum.bind(Object(_home_pooja_Desktop_reactjs_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(_home_pooja_Desktop_reactjs_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"evaluate",value:function evaluate(){try{var val=this.state.currentNum,result=eval(val);console.log(result),this.setState({currentNum:result})}catch(e){this.setState({currentNum:"ERROR"})}}},{key:"updateNum",value:function(e){if(console.log("hello"),"="===e)console.log(this.state.currentNum),this.evaluate();else if("C"===e)console.log(this.state.currentNum),this.setState({currentNum:""});else if("CE"==e)this.setState({currentNum:this.state.currentNum.slice(0,-1)});else{var _=this.state.currentNum+e;this.setState({currentNum:_})}}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calci"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calci-head"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form",{id:"calci-form"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{type:"text",value:this.state.currentNum}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Keypad__WEBPACK_IMPORTED_MODULE_7__.a,{updateNum:this.updateNum}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},,,function(e,_,t){"use strict";var a=t(0),n=t.n(a);t(17);_.a=function(e){return n.a.createElement("div",{className:"keypad"},n.a.createElement("button",{name:"7",onClick:function(_){return e.updateNum(_.target.name)}},"7"),n.a.createElement("button",{name:"8",onClick:function(_){return e.updateNum(_.target.name)}},"8"),n.a.createElement("button",{name:"9",onClick:function(_){return e.updateNum(_.target.name)}},"9"),n.a.createElement("button",{className:"op",name:"*",onClick:function(_){return e.updateNum(_.target.name)}},"x"),n.a.createElement("button",{name:"4",onClick:function(_){return e.updateNum(_.target.name)}},"4"),n.a.createElement("button",{name:"5",onClick:function(_){return e.updateNum(_.target.name)}},"5"),n.a.createElement("button",{name:"6",onClick:function(_){return e.updateNum(_.target.name)}},"6"),n.a.createElement("button",{className:"op",name:"-",onClick:function(_){return e.updateNum(_.target.name)}},"-"),n.a.createElement("button",{name:"1",onClick:function(_){return e.updateNum(_.target.name)}},"1"),n.a.createElement("button",{name:"2",onClick:function(_){return e.updateNum(_.target.name)}},"2"),n.a.createElement("button",{name:"3",onClick:function(_){return e.updateNum(_.target.name)}},"3"),n.a.createElement("button",{className:"op",name:"+",onClick:function(_){return e.updateNum(_.target.name)}},"+"),n.a.createElement("button",{name:"0",onClick:function(_){return e.updateNum(_.target.name)}},"0"),n.a.createElement("button",{name:".",onClick:function(_){return e.updateNum(_.target.name)}},"."),n.a.createElement("button",{name:"=",onClick:function(_){return e.updateNum(_.target.name)}},"="),n.a.createElement("button",{className:"op",name:"/",onClick:function(_){return e.updateNum(_.target.name)}},"/"),n.a.createElement("button",{id:"clear",name:"C",onClick:function(_){return e.updateNum(_.target.name)}},"C"),n.a.createElement("button",{id:"clear",name:"CE",onClick:function(_){return e.updateNum(_.target.name)}},"CE"))}},,,function(e,_,t){e.exports=t(18)},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(0),n=t.n(a),r=t(3),u=t.n(r),o=(t(15),t(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.0be53452.chunk.js.map