(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),l=n(4),i=n(6),u=n(5),m=n(7),h=(n(14),n(15),n(16),function(e){return r.a.createElement("div",{className:"Card"},r.a.createElement("img",{alt:"monster",scr:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,e.monster.name," "),r.a.createElement("p",null,e.monster.email," "))}),d=function(e){return console.log(e),r.a.createElement("div",{className:"CardList"},e.monsters.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})})))},f=(n(17),function(e){return r.a.createElement("div",{className:"SearchBox"},r.a.createElement("input",{type:"search",placeholder:e.placeholder,onChange:e.changeHandler}))}),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).changeHandler=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Monster Rolodex"),r.a.createElement(f,{placeholder:"search monster",changeHandler:this.changeHandler}),r.a.createElement(d,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c621c35f.chunk.js.map