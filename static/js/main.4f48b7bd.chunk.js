(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(3),o=n.n(r),i=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))}),h=(n(14),n(4)),b=n(5),l=n(7),d=n(6);var u=function(e){return Object(c.jsxs)("div",{id:"box",className:"tc bg-blue dib br3 pa3 ma3 grow bw1 ba b--red shadow-5",children:[Object(c.jsx)("img",{width:"180px",height:"180px",alt:"robot",src:"https://robohash.org/".concat(e.id)}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:e.name}),Object(c.jsx)("p",{children:e.email})]})]})},j=function(e){var t=e.robots,n=t.map((function(e,n){return Object(c.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(c.jsx)("div",{children:n})},f=(n(15),function(e){e.searchField;var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--black bg-light-blue",type:"search",placeholder:"Type to Search Robots!",onChange:t})})}),p=(n(16),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?Object(c.jsx)("h1",{className:"tc",children:"Loading..."}):Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(c.jsx)(f,{searchChange:this.onSearchChange}),Object(c.jsx)(j,{robots:t})]})}}]),n}(s.Component));o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),i()}},[[17,1,2]]]);
//# sourceMappingURL=main.4f48b7bd.chunk.js.map