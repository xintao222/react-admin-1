(self.webpackChunkwebpack5_react_demo=self.webpackChunkwebpack5_react_demo||[]).push([[449],{722:()=>{},7999:(_,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r,a=t(2122),o=t(9298),n=t(5976),l=t(8062);_=t.hmd(_),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(_);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;console.log(l.S);var c=(0,n.Z)({scriptUrl:l.S}),u=function(_){return o.createElement(c,(0,a.Z)({className:"app-iconfont"},_))};const s=u;var i,E;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(c,"IconFont","/Users/cl/work/personal/react-admin/src/components/Iconfont/index.tsx"),i.register(u,"default","/Users/cl/work/personal/react-admin/src/components/Iconfont/index.tsx")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(_)},3696:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>LayoutBreadcrumb});var antd_es_breadcrumb_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8563),antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2701),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7608),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9298),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5474),nanoid__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(8917),_defaultRoutes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9361),_class,enterModule;function _createSuper(_){var e=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(_);if(e){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(_){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},LayoutBreadcrumb=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.withRouter)(_class=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__.Z)(LayoutBreadcrumb,_Component);var _super=_createSuper(LayoutBreadcrumb);function LayoutBreadcrumb(){var _;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.Z)(this,LayoutBreadcrumb);for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(_=_super.call.apply(_super,[this].concat(t))).unHistoryListener=void 0,_.state={breadcrumbs:[]},_.setBreadcrumb=function(){var e=_.props.history.location,t=e.pathname.split("/"),r=[];return t.length>1&&_defaultRoutes__WEBPACK_IMPORTED_MODULE_7__.Z.routes.forEach((function(_){var t;e.pathname.startsWith(_.path)&&(r.push(_),null!=_&&null!==(t=_.children)&&void 0!==t&&t.length&&_.children.forEach((function(_){e.pathname.startsWith(_.path)&&r.push(_)})))})),r},_}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__.Z)(LayoutBreadcrumb,[{key:"componentDidMount",value:function(){var _=this,e=this.props.history,t=this.setBreadcrumb();this.setState({breadcrumbs:t}),this.unHistoryListener=e.listen((function(e,t){var r=_.setBreadcrumb();_.setState({breadcrumbs:r})}))}},{key:"componentWillUnmount",value:function(){this.unHistoryListener()}},{key:"render",value:function(){var _=this.state.breadcrumbs;return react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.Z,{style:{margin:"5px 24px"}},_.map((function(_){var e;return react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.Z.Item,{key:(0,nanoid__WEBPACK_IMPORTED_MODULE_10__.x0)()},null!=_&&null!==(e=_.children)&&void 0!==e&&e.length?_.name:react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link,{to:_.path,key:(0,nanoid__WEBPACK_IMPORTED_MODULE_10__.x0)()},_.name))})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),LayoutBreadcrumb}(react__WEBPACK_IMPORTED_MODULE_3__.Component))||_class,reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(LayoutBreadcrumb,"LayoutBreadcrumb","/Users/cl/work/personal/react-admin/src/components/Layout/Breadcrumb.tsx"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},3072:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>LayoutContent});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7608),antd_es_layout_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1867),antd_es_layout__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7183),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9298),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5474),_loadable_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4029),_routes__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(4010),enterModule;function _createSuper(_){var e=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(_);if(e){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(_){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Content=antd_es_layout__WEBPACK_IMPORTED_MODULE_6__.Z.Content,CannotFind=(0,_loadable_component__WEBPACK_IMPORTED_MODULE_5__.ZP)((function(){return Promise.all([__webpack_require__.e(841),__webpack_require__.e(595)]).then(__webpack_require__.bind(__webpack_require__,5138))})),LayoutContent=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__.Z)(LayoutContent,_Component);var _super=_createSuper(LayoutContent);function LayoutContent(){var _;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__.Z)(this,LayoutContent);for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(_=_super.call.apply(_super,[this].concat(t))).renderRoutes=function(){return(_routes__WEBPACK_IMPORTED_MODULE_9__.Z||[]).map((function(_,e){if(_.component)return react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route,{key:e,path:_.path,exact:_.exact,name:_.name,render:function(e){var t=(0,_loadable_component__WEBPACK_IMPORTED_MODULE_5__.ZP)(_.component);return react__WEBPACK_IMPORTED_MODULE_3__.createElement(t,e)}})}))},_}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__.Z)(LayoutContent,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(Content,{className:"app-container"},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"site-layout-background",style:{padding:24,textAlign:"center"}},react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch,null,this.renderRoutes(),react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect,{exact:!0,from:"/",to:"/home"}),react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route,{render:function(_){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(CannotFind,_)}}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),LayoutContent}(react__WEBPACK_IMPORTED_MODULE_3__.Component),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Content,"Content","/Users/cl/work/personal/react-admin/src/components/Layout/Content.tsx"),reactHotLoader.register(CannotFind,"CannotFind","/Users/cl/work/personal/react-admin/src/components/Layout/Content.tsx"),reactHotLoader.register(LayoutContent,"LayoutContent","/Users/cl/work/personal/react-admin/src/components/Layout/Content.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},128:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>LayoutHeader});var antd_es_dropdown_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6976),antd_es_dropdown__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(3013),antd_es_avatar_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6466),antd_es_avatar__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(3049),antd_es_menu_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6185),antd_es_menu__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(5915),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7608),antd_es_layout_style__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1867),antd_es_layout__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(7183),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9298),mobx_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7040),react_router_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(5474),_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1351),_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(6629),_components_Iconfont__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(7999),_dec,_class,enterModule;function _createSuper(_){var e=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.Z)(_);if(e){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(_){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Header=antd_es_layout__WEBPACK_IMPORTED_MODULE_9__.Z.Header,LayoutHeader=(_dec=(0,mobx_react__WEBPACK_IMPORTED_MODULE_7__.inject)("uiStore"),(0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.withRouter)(_class=_dec(_class=(0,mobx_react__WEBPACK_IMPORTED_MODULE_7__.observer)(_class=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__.Z)(LayoutHeader,_Component);var _super=_createSuper(LayoutHeader);function LayoutHeader(){var _;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11__.Z)(this,LayoutHeader);for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(_=_super.call.apply(_super,[this].concat(t))).props=void 0,_.toggleCollapsed=function(){var e=_.props.uiStore;e.changeCollapsed(!e.collapsed)},_.renderCollap=function(){return _.props.uiStore.collapsed?react__WEBPACK_IMPORTED_MODULE_6__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__.Z,{class:"app-trigger",onClick:_.toggleCollapsed}):react__WEBPACK_IMPORTED_MODULE_6__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__.Z,{class:"app-trigger",onClick:_.toggleCollapsed})},_.overlayContent=function(){return react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_14__.Z,{className:"app-header-popover",style:{width:180},onClick:_.handleClick},react__WEBPACK_IMPORTED_MODULE_6__.createElement("p",{className:"app-customer-info"},"账户资金:",react__WEBPACK_IMPORTED_MODULE_6__.createElement("span",{style:{color:"#C41D7F",marginLeft:5}},"87622.22")),react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_14__.Z.Item,{key:"update-password",icon:react__WEBPACK_IMPORTED_MODULE_6__.createElement(_components_Iconfont__WEBPACK_IMPORTED_MODULE_15__.Z,{type:"icon-xiugaimima",style:{fontSize:20}})},"修改密码"),react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_14__.Z.Item,{key:"logout",icon:react__WEBPACK_IMPORTED_MODULE_6__.createElement(_components_Iconfont__WEBPACK_IMPORTED_MODULE_15__.Z,{type:"icon-icon4",style:{fontSize:20}})},"退出登录"))},_.handleClick=function(e){console.log("click ",e),"logout"==e.key&&_.props.history.push("/login")},_}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16__.Z)(LayoutHeader,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6__.createElement(Header,{className:"app-header"},this.renderCollap(),react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_es_dropdown__WEBPACK_IMPORTED_MODULE_17__.Z,{overlay:this.overlayContent},react__WEBPACK_IMPORTED_MODULE_6__.createElement("div",{className:"app-avatar"},react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_es_avatar__WEBPACK_IMPORTED_MODULE_18__.C,{style:{width:40,height:40},src:"https://tva1.sinaimg.cn/large/008i3skNly1gqc704hpilj305k05kt92.jpg"}),react__WEBPACK_IMPORTED_MODULE_6__.createElement("span",{style:{marginLeft:5}},"Feiliang"))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),LayoutHeader}(react__WEBPACK_IMPORTED_MODULE_6__.Component))||_class)||_class)||_class),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Header,"Header","/Users/cl/work/personal/react-admin/src/components/Layout/Header.tsx"),reactHotLoader.register(LayoutHeader,"LayoutHeader","/Users/cl/work/personal/react-admin/src/components/Layout/Header.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},8449:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>BaseLayout});var antd_es_layout_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1867),antd_es_layout__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(7183),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7608),_sty_less__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(722),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9298),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5474),_loadable_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4029),_SlideMenu__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(8155),_Header__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(128),_Content__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(3072),_Breadcrumb__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(3696),_class,enterModule;function _createSuper(_){var e=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(_);if(e){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(_){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},BaseLayout=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.withRouter)(_class=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__.Z)(BaseLayout,_Component);var _super=_createSuper(BaseLayout);function BaseLayout(_){var e;return(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__.Z)(this,BaseLayout),(e=_super.call(this,_)).props=void 0,e.state=void 0,e.renderRoutes=function(){return(routes||[]).map((function(_,e){if(_.component)return react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route,{key:e,path:_.path,exact:_.exact,name:_.name,render:function(e){var t=(0,_loadable_component__WEBPACK_IMPORTED_MODULE_6__.ZP)(_.component);return react__WEBPACK_IMPORTED_MODULE_4__.createElement(t,e)}})}))},e.state={pathname:"/home"},e}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__.Z)(BaseLayout,[{key:"render",value:function(){this.state.pathname;return react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_es_layout__WEBPACK_IMPORTED_MODULE_10__.Z,{className:"app-layout"},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_SlideMenu__WEBPACK_IMPORTED_MODULE_11__.Z,null),react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_es_layout__WEBPACK_IMPORTED_MODULE_10__.Z,{className:"site-layout"},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Header__WEBPACK_IMPORTED_MODULE_12__.Z,null),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Breadcrumb__WEBPACK_IMPORTED_MODULE_13__.Z,null),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Content__WEBPACK_IMPORTED_MODULE_14__.Z,null)))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),BaseLayout}(react__WEBPACK_IMPORTED_MODULE_4__.Component))||_class,reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(BaseLayout,"BaseLayout","/Users/cl/work/personal/react-admin/src/components/Layout/Layout.tsx"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},573:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Logo});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7608),mobx_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7040),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9298),_dec,_class,enterModule;function _createSuper(_){var e=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.Z)(_);if(e){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(_){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Logo=(_dec=(0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)("uiStore"),_dec(_class=(0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(_class=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.Z)(Logo,_Component);var _super=_createSuper(Logo);function Logo(){return(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.Z)(this,Logo),_super.apply(this,arguments)}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.Z)(Logo,[{key:"render",value:function(){var _=this.props.uiStore.collapsed;return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"app-logo"},react__WEBPACK_IMPORTED_MODULE_3__.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}),_?null:react__WEBPACK_IMPORTED_MODULE_3__.createElement("h3",{style:{color:"#ccc",margin:"0 0 0 10px",whiteSpace:"nowrap"}},"Ant Design"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Logo}(react__WEBPACK_IMPORTED_MODULE_3__.Component))||_class)||_class),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(Logo,"Logo","/Users/cl/work/personal/react-admin/src/components/Layout/Logo.tsx"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},8155:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>SlideMenu});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(2122),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7608),antd_es_menu_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6185),antd_es_menu__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(5915),antd_es_layout_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1867),antd_es_layout__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7183),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9298),mobx_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7040),react_router_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5474),_components_Iconfont__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(7999),_Logo__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(573),_defaultRoutes__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9361),_dec,_class,enterModule;function _createSuper(_){var e=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(_);if(e){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(_){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Sider=antd_es_layout__WEBPACK_IMPORTED_MODULE_7__.Z.Sider,SubMenu=antd_es_menu__WEBPACK_IMPORTED_MODULE_8__.Z.SubMenu,SlideMenu=(_dec=(0,mobx_react__WEBPACK_IMPORTED_MODULE_5__.inject)("uiStore"),(0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.withRouter)(_class=_dec(_class=(0,mobx_react__WEBPACK_IMPORTED_MODULE_5__.observer)(_class=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__.Z)(SlideMenu,_Component);var _super=_createSuper(SlideMenu);function SlideMenu(_){var e;return(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__.Z)(this,SlideMenu),(e=_super.call(this,_)).props=void 0,e.state=void 0,e.renderMenus=function(){if(!_defaultRoutes__WEBPACK_IMPORTED_MODULE_11__.Z.routes||!_defaultRoutes__WEBPACK_IMPORTED_MODULE_11__.Z.routes.length)return null;var _=e.state.openKeys,t=e.props.history,r=_defaultRoutes__WEBPACK_IMPORTED_MODULE_11__.Z.routes;return react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_8__.Z,{theme:"dark",mode:"inline",selectedKeys:[t.location.pathname],openKeys:_,onSelect:e.handleMenuSelect,onOpenChange:e.onOpenChange},e.renderMenuItems(r))},e.renderMenuItems=function(_){return react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment,null,_.map((function(_){return r=(t=_).path,a=t.icon,o=t.name,n=t.children,l={key:r,icon:a?react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Iconfont__WEBPACK_IMPORTED_MODULE_12__.Z,{type:a,style:{fontSize:18}}):null},null!=n&&n.length?react__WEBPACK_IMPORTED_MODULE_4__.createElement(SubMenu,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_13__.Z)({},l,{title:o}),e.renderMenuItems(n)):react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_8__.Z.Item,l,o);var t,r,a,o,n,l})))},e.handleMenuSelect=function(_){_.item;var t=_.key,r=(_.keyPath,_.selectedKeys,_.domEvent,e.props.history);t!==r.location.pathname&&r.push(t)},e.handleOpenKeys=function(){var _=e.props.history.location.pathname.split("/");switch(_.length){case 2:e.setState({openKeys:[]});break;case 3:e.setState({openKeys:[_.slice(0,2).join("/")]})}},e.onOpenChange=function(_){e.setState({openKeys:_})},e.state={openKeys:[]},e}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__.Z)(SlideMenu,[{key:"componentDidMount",value:function(){this.handleOpenKeys()}},{key:"render",value:function(){var _=this.props.uiStore.collapsed;return react__WEBPACK_IMPORTED_MODULE_4__.createElement(Sider,{width:220,trigger:null,className:"app-slide",collapsible:!0,collapsed:_},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Logo__WEBPACK_IMPORTED_MODULE_15__.Z,null),this.renderMenus())}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),SlideMenu}(react__WEBPACK_IMPORTED_MODULE_4__.Component))||_class)||_class)||_class),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Sider,"Sider","/Users/cl/work/personal/react-admin/src/components/Layout/SlideMenu.tsx"),reactHotLoader.register(SubMenu,"SubMenu","/Users/cl/work/personal/react-admin/src/components/Layout/SlideMenu.tsx"),reactHotLoader.register(SlideMenu,"SlideMenu","/Users/cl/work/personal/react-admin/src/components/Layout/SlideMenu.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},9361:(_,e,t)=>{"use strict";var r;t.d(e,{Z:()=>o}),_=t.hmd(_),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(_);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a={routes:[{path:"/home",name:"首页",icon:"icon-16",children:[]},{path:"/article",name:"文章管理",icon:"icon-lianxi2hebing_shipin",children:[{path:"/article/demopage1",name:"demoPage1",icon:null}]},{path:"/set",name:"视频管理",icon:"icon-lianxi2hebing_shipin",children:[{path:"/set/demopage2",name:"demoPage2",icon:null},{path:"/set/demohooks",name:"demohooks",icon:null}]}]};const o=a;var n,l;(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(a,"default","/Users/cl/work/personal/react-admin/src/components/Layout/_defaultRoutes.ts"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(_)},8062:(_,e,t)=>{"use strict";var r;t.d(e,{S:()=>n}),_=t.hmd(_),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(_);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,o,n="//at.alicdn.com/t/font_2654948_4te3l9opof6.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(n,"ICON_FONT_URL","/Users/cl/work/personal/react-admin/src/config/index.ts"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(_)}}]);