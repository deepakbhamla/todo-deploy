(this["webpackJsonpproxy-circuit"]=this["webpackJsonpproxy-circuit"]||[]).push([[0],{56:function(e,t,a){e.exports=a(81)},61:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),s=(a(61),a(3)),i=a.n(s),l=a(19),u=a(8),m=a(14),d=a(10),p=a(11),h=a(12),f=a(13),b=(a(63),a(22)),v=a.n(b),g=(a(64),a(67),function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,o,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=O.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return o=t.displayName,r=t.email,c=new Date,e.prev=9,e.next=12,n.set(Object(l.a)({displayName:o,email:r,createdAt:c},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("ERROR HERE",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}());v.a.initializeApp({apiKey:"AIzaSyCTyw_LHA6QfoAjDvkibncQ0f7RoK_0Dj8",authDomain:"todo-app-7db73.firebaseapp.com",databaseURL:"https://todo-app-7db73.firebaseio.com",projectId:"todo-app-7db73",storageBucket:"todo-app-7db73.appspot.com",messagingSenderId:"304312147183",appId:"1:304312147183:web:f449e38edea27831ec8f1a",measurementId:"G-LVRSSYVYR4"});var E=v.a.auth(),O=v.a.firestore(),y=new v.a.auth.GoogleAuthProvider;y.setCustomParameters({prompt:"select_account"});var C=function(){return E.signInWithPopup(y)},S=(v.a,a(69),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({content:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.addTODO(n.state),localStorage.setItem("todos",JSON.stringify(n.state)),n.setState({content:""})},n.state={content:""},n}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"inputTask"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{className:"textBox",type:"text",onChange:this.handleChange,value:this.state.content,placeholder:"what you want to do ..."})))}}]),a}(n.Component)),j=(a(70),a(53)),N=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement(j.a,{steps:["\u201cSometimes our stop-doing list needs to be bigger than our to-do list.\u201d",1e3,"\u201cThe only thing more important than your to-do list is your to-be list.\u201d",1e3,"\u201cIt is a waste of time not to do the most effective, useful, or important thing you can do.\u201d",1e3],loop:1/0,wrapper:"p"})}}]),a}(n.Component),k=function(e){var t=e.todos,a=e.todoDelete,n=e.toDoComplete,r=t.length?t.map((function(e){return o.a.createElement("div",{className:"box",key:e.id},o.a.createElement("span",{className:"trash trophy"},o.a.createElement("ion-icon",{onClick:function(){return n(e.id,e.isCompleted)},name:"checkbox-outline"})),o.a.createElement("span",{style:{textDecoration:e.isCompleted?"none":"line-through"}}," ",e.content," "),o.a.createElement("span",{className:"trash"},o.a.createElement("ion-icon",{onClick:function(){return a(e.id)},name:"trash-outline"})))})):o.a.createElement("div",{className:"center"},o.a.createElement("span",{className:"clipboard"},o.a.createElement("ion-icon",{name:"clipboard-outline"})," "),o.a.createElement("p",{className:"empty"},"TODO LIST IS EMPTY"),o.a.createElement(N,null));return o.a.createElement("div",{className:""},r)},w=(a(71),function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("a",{href:"https://github.com/itsdb7",rel:"noopener noreferrer",target:"_blank",className:"github"},o.a.createElement("ion-icon",{name:"logo-github"})))}),I=a(54),D=(a(72),a(20)),x=a(84),T=a(28),U=(a(77),a(44)),R=(a(78),function(e){var t=e.handleChange,a=e.label,n=Object(U.a)(e,["handleChange","label"]);return o.a.createElement("div",{className:"group"},o.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?o.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),A=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({email:"",password:""})},n.handleChange=function(e){var t=e.target,a=t.value,o=t.name;n.setState(Object(T.a)({},o,a))},n.state={email:"",password:""},n}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Auth"},o.a.createElement("p",{className:"tit"},"sign in here!"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(R,{name:"email",type:"email",label:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),o.a.createElement(R,{name:"password",type:"password",label:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),o.a.createElement("input",{className:"submit-local",type:"submit",value:"SIGN IN"}),"or",o.a.createElement("button",{className:"submit-gogl",onClick:C,placeholder:""}," SIGN IN WITH GOOGLE")))}}]),a}(n.Component),G=Object(D.b)((function(e){return{currentUser:e.user.currentUser}}))((function(e){var t=e.currentUser,a=Object(n.useState)(!1),r=Object(I.a)(a,2),c=r[0],s=r[1];return o.a.createElement("div",{className:"header"},o.a.createElement("h3",{className:"title"},"PROXY-CIRCUIT ",o.a.createElement("span",{className:"logo"},"todo app")),t?o.a.createElement("button",{className:"button",onClick:function(){return E.signOut()}},"sign out"):o.a.createElement("button",{className:"button",onClick:function(){return s(!0)}},"Sign in"),o.a.createElement(x.a,{show:c,onHide:function(){return s(!1)},animation:!1},o.a.createElement(x.a.Body,null,o.a.createElement(A,null))))})),W="SET_CURRENT_USER",_=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).todoDelete=function(e){var t=n.state.todos.filter((function(t){return localStorage.removeItem("todos"),t.id!==e}));n.setState({todos:t})},n.toDoComplete=function(e,t){console.log(t);var a=Object(m.a)(n.state.todos),o=a.findIndex((function(t){return t.id===e}));a[o].isCompleted=!t,n.setState({todos:a}),console.log(t)},n.addTODO=function(e){e.id=Math.random(),e.isCompleted=!0;var t=[].concat(Object(m.a)(n.state.todos),[e]);n.setState({todos:t})},n.unsubscribeFromAuth=null,n.state={todos:[{id:1,content:"Welcome Sir!",isCompleted:!0}]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=E.onAuthStateChanged(function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,g(a);case 3:t.sent.onSnapshot((function(t){e(Object(l.a)({id:t.id},t.data()))}));case 5:e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),JSON.parse(localStorage.getItem("todos"))&&this.setState((function(e){return{todos:[].concat(Object(m.a)(e.todos),[JSON.parse(localStorage.getItem("todos"))])}}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(G,null),o.a.createElement(S,{addTODO:this.addTODO}),o.a.createElement(k,{todos:this.state.todos,todoDelete:this.todoDelete,toDoComplete:this.toDoComplete}),o.a.createElement(w,null))}}]),a}(n.Component),B=Object(D.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:W,payload:e}}(t))}}}))(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(52),L=(a(79),a(15)),P=a(50),H=a.n(P),Y={currentUser:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(l.a)({},e,{currentUser:t.payload});default:return e}},M=Object(L.c)({user:F}),q=[H.a],z=Object(L.d)(M,L.a.apply(void 0,q));c.a.render(o.a.createElement(D.a,{store:z},o.a.createElement(J.a,null,o.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.64827e42.chunk.js.map