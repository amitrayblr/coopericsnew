(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{163:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(173),r=t.n(c),s=t(42),i=t.n(s),m=t(8),o=t.n(m),u=(t(5),t(172),t(167)),E=t(169),d=function(e){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"inner"},l.a.createElement("section",null,l.a.createElement("form",{method:"post",action:"#"},l.a.createElement("div",{className:"field half first"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"field half"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",name:"email",id:"email"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),l.a.createElement("li",null,l.a.createElement("input",{type:"reset",value:"Clear"}))))),l.a.createElement("section",{className:"split"},l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-envelope"}),l.a.createElement("h3",null,"Email"),l.a.createElement("a",{href:"#"},"information@untitled.tld"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-phone"}),l.a.createElement("h3",null,"Phone"),l.a.createElement("span",null,"(000) 000-0000 x12387"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-home"}),l.a.createElement("h3",null,"Address"),l.a.createElement("span",null,"1234 Somewhere Road #5432",l.a.createElement("br",null),"Nashville, TN 00000",l.a.createElement("br",null),"United States of America"))))))},f=t(170),p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(i()(t)),t}o()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(u.a,{onToggleMenu:this.handleToggleMenu}),e,l.a.createElement(d,null),l.a.createElement(f.a,null)),l.a.createElement(E.a,{onToggleMenu:this.handleToggleMenu}))},a}(l.a.Component),h=function(e){return l.a.createElement("section",{id:"banner",className:"style1"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h1",null,"Contact Us")),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,"Got feedback? Feel free to let us know down below."))))};a.default=function(e){return l.a.createElement(p,null,l.a.createElement(r.a,null,l.a.createElement("title",null,"Contact"),l.a.createElement("meta",{name:"description",content:"Generic Page"})),l.a.createElement(h,null))}},165:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(5),r=t.n(c),s=t(40),i=t.n(s);t.d(a,"a",function(){return i.a});t(166),l.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},166:function(e,a,t){var n;e.exports=(n=t(168))&&n.default||n},167:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(5),r=t.n(c),s=t(165),i=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement(s.a,{to:"/",className:"logo"},l.a.createElement("strong",null,"Cooperics")),l.a.createElement("nav",null,l.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))};i.propTypes={onToggleMenu:r.a.func},a.a=i},168:function(e,a,t){"use strict";t.r(a);t(41);var n=t(0),l=t.n(n),c=t(5),r=t.n(c),s=t(64),i=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};i.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=i},169:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(5),r=t.n(c),s=t(165),i=function(e){return l.a.createElement("nav",{id:"menu"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(s.a,{onClick:e.onToggleMenu,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(s.a,{onClick:e.onToggleMenu,to:"/contents"},"Contents")),l.a.createElement("li",null,l.a.createElement(s.a,{onClick:e.onToggleMenu,to:"/contact"},"Contact Us")),l.a.createElement("li",null,l.a.createElement(s.a,{onClick:e.onToggleMenu,to:"/elements"},"Elements"))),l.a.createElement("ul",{className:"actions vertical"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"button special fit"},"Get Started")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"button fit"},"Log In")))),l.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))};i.propTypes={onToggleMenu:r.a.func},a.a=i},170:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-twitter"},l.a.createElement("span",{className:"label"},"Twitter"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-facebook"},l.a.createElement("span",{className:"label"},"Facebook"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-instagram"},l.a.createElement("span",{className:"label"},"Instagram"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-github"},l.a.createElement("span",{className:"label"},"GitHub"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-linkedin"},l.a.createElement("span",{className:"label"},"LinkedIn")))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"Design: ",l.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-06038631a28d8b530965.js.map