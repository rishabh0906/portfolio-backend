(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(27),s=n.n(c),a=n(15),i=n(4),o=n(1),l=function(){return Object(o.jsx)("a",{href:"https://drive.google.com/file/d/11hrYiCTcYSqAmt1URhHW0QmwyhxcBHC_/view?usp=sharing ",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("p",{className:"logo-p",children:"Rishabh Jain"})})},h=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{className:"Main-Content slide-left",children:[Object(o.jsx)("h1",{className:"heading",children:"Let me Introduce myself "}),Object(o.jsxs)("p",{className:"About-paragraph",children:["Myself Rishabh Jain ,currently studying computer science at Guru Gobind Singh Indraprastha University, New Delhi, India. ",Object(o.jsx)("br",{}),"You can find me playing around the web and sometimes , you can catch me solving coding problems on different platforms such as"," ",Object(o.jsx)("a",{href:"https://www.codechef.com/users/rishabh_0906",target:"_blank",rel:"noreferrer",children:"codechef"}),",",Object(o.jsx)("a",{href:"https://codeforces.com/profile/rishabhj945",target:"_blank",rel:"noreferrer",children:"codeforces"}),",",Object(o.jsx)("a",{href:"https://leetcode.com/rishabh_0906/",target:"_blank",rel:"noreferrer",children:"leetcode"}),"and many more . I like to explore new technologies and always try to find something from nothing . I started competitive programming in month of November-December , 2020 and i recently started doing web development. Around 1 month of learning React ,HTML ,CSS and Javascript .",Object(o.jsx)("br",{})," I created many projects to enhance my skills and always looking for opportunity to switch from development to production mode.",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),"I hope you like this website!! ","\ud83d\ude04"]})]})]})},j=(n(35),function(){return Object(o.jsxs)("div",{className:"Contact-Pallete",children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/rishabh-jain-69a1181a8/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:"linkedin-dark.png",alt:"linkedin",onMouseEnter:function(e){e.currentTarget.src="linkedin.png"},onMouseLeave:function(e){e.currentTarget.src="linkedin-dark.png"}})}),Object(o.jsx)("a",{href:"mailto:rishabhj945@gmail.com",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{alt:"google",src:"google.png",onMouseEnter:function(e){e.currentTarget.src="search.png"},onMouseLeave:function(e){e.currentTarget.src="google.png"}})}),Object(o.jsx)("a",{href:"https://github.com/rishabh0906",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{alt:"github",src:"github-dark.png",onMouseEnter:function(e){e.currentTarget.src="github.png"},onMouseLeave:function(e){e.currentTarget.src="github-dark.png"}})})]})}),d=n(11),b=function(e){return Object(o.jsxs)("figure",{onClick:function(t){e.setZoom(e.content.URL)},onMouseEnter:function(e){e.currentTarget.children[1].style.display="flex"},onMouseLeave:function(e){e.currentTarget.children[1].style.display="none"},children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:e.content.URL,alt:"logo"})}),Object(o.jsx)("div",{className:"caption",children:Object(o.jsxs)("figcaption",{children:[" ",e.content.Caption," "]})})]})},u=n(17);n(44),n(43);u.a.initializeApp({apiKey:"AIzaSyAhVZltkKgfZlXIWek_2pr55enPa7YvUpE",authDomain:"portfolio-cb9a2.firebaseapp.com",projectId:"portfolio-cb9a2",storageBucket:"portfolio-cb9a2.appspot.com",messagingSenderId:"355213087102",appId:"1:355213087102:web:75bdcf90c71fb7e346e32f"});var p=u.a.firestore(),m=(u.a.storage(u.a.app()),u.a,function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(null),a=Object(d.a)(s,2),i=a[0],h=a[1];return Object(r.useEffect)((function(){p.collection("images").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),c(t)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{className:"Main-Content Gallery slide-left",onScroll:function(e){var t=e.currentTarget.scrollTop;e.currentTarget.firstChild.style.top="".concat(t+80,"px")},children:[Object(o.jsx)("div",{style:{display:null==i?"none":"block"},onClick:function(){h(null)},className:"Zoomed-pic",children:Object(o.jsx)("img",{src:null==i?"":i,alt:"Zoomed"})}),Object(o.jsx)("h1",{className:"heading",children:"Although, I am not a Dweeb !!"}),Object(o.jsx)("div",{className:"AllPhotos-div",children:null==n?"Loading...":n.map((function(e){return Object(o.jsx)(b,{content:e,setZoom:h})}))})]})]})}),g=function(){return Object(o.jsxs)("div",{className:"NavBar",children:[Object(o.jsx)("p",{children:Object(o.jsx)(a.b,{to:"/about",children:"About"})}),Object(o.jsx)("p",{children:Object(o.jsx)(a.b,{to:"/projects",children:"Projects"})}),Object(o.jsx)("p",{children:Object(o.jsx)(a.b,{to:"/gallery",children:"Gallery"})}),Object(o.jsx)("p",{children:Object(o.jsx)(a.b,{to:"/upgradeMe",children:"UpgradeMe"})})]})},f=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{className:"Main-Content project slide-left",children:[Object(o.jsx)("h1",{className:"heading",children:"Let me show you my work"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{href:"https://github.com/rishabh0906/Reel-or-Real.git",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("h3",{children:"Real-or-Reel"})}),Object(o.jsx)("p",{children:"This project is based on React and firebase in which i try to make instagram reels clone in which person can watch reels of different users and also able to upload reels as well.A user can give like or comment to another users.Firebase is used to store all posts and comments of the users and also provide authentication functionality."}),Object(o.jsx)("a",{href:"https://rishabh0906.github.io/excel-clone/",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("h3",{children:"Excel Clone"})}),Object(o.jsx)("p",{children:"This project is based on html , css , Javascript , indexdb . I implemented functions of ms excel or google sheets . Logic behind the sheets are implemented using graph theory like indegree and outdegree and algorithms like cycle detection to remove circular references.Indexdb is used to store the data ."}),Object(o.jsx)("a",{href:" https://rishabh0906.github.io/Camera-App/",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("h3",{children:"Camera App"})}),Object(o.jsx)("p",{children:"This project is based on html , css , Javascript , indexdb. In this app i implemented camera and video recorder using access of media devices and also implement filters. Indexdb is used to store photos."}),Object(o.jsx)("a",{href:"https://rishabh0906.github.io/Jira--ticket-Clone/",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("h3",{children:"Jira--ticket-clone"})}),Object(o.jsx)("p",{children:"This project is based on html , css , Javascript , localstorage. This is a todo app whixh keep the track of tasks in the form of tickets and colors code assigned to them . You can prioritze the task on basis of color (black- lowest, pink- second lowest , blue- highest ,green- second highest)."})]})]})]})},x=n(25),O=n.n(x),v=n(29),k=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),a=Object(d.a)(s,2),i=a[0],h=a[1],j=Object(r.useState)(""),b=Object(d.a)(j,2),u=b[0],p=b[1],m=Object(r.useState)(!1),g=Object(d.a)(m,2),f=g[0],x=g[1],k=function(){var e=Object(v.a)(O.a.mark((function e(){var t,r,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:n,email:i,text:u},e.next=3,fetch("/access",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 3:return r=e.sent,c=document.querySelector(".message"),e.next=7,r.json();case 7:"success"===(s=e.sent).status?(c.innerHTML="Message Sent",setTimeout((function(){x(!1)}),1e3)):"fail"===s.status&&(c.innerHTML="Message Failed",setTimeout((function(){x(!1)}),1e3));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{className:"Main-Content slide-left",children:[Object(o.jsx)("p",{className:"message",style:{display:!1===f?"none":"inline"},children:"Sending..."}),Object(o.jsx)("h1",{className:"heading",children:"Let me Know You"}),Object(o.jsx)("input",{className:"upgrade-inp1",value:n,type:"text",onChange:function(e){c(e.currentTarget.value)},placeholder:"Name..."}),Object(o.jsx)("input",{className:"upgrade-inp2",type:"email",value:i,placeholder:"Email...",onChange:function(e){h(e.currentTarget.value)}}),Object(o.jsx)("textarea",{placeholder:"I Love Suggestions !!",value:u,className:"upgrade-txt",cols:"28",rows:"10",onChange:function(e){p(e.currentTarget.value)}}),Object(o.jsx)("button",{className:"upgrade-btn",onClick:function(e){""!==n&&""!==i&&""!==u&&(x(!0),k().then((function(){c(""),p(""),h("")})))},children:"Thank You"})]})]})},y=function(e){var t=Object(r.useState)(!0),n=Object(d.a)(t,2),c=n[0],s=n[1];Object(r.useEffect)((function(){setTimeout((function(){s(!1)}),100+100*e.obj.index)}));return Object(o.jsx)("text",{className:!1===c?"show":"",fill:"#333",x:window.outerWidth>765?40+e.obj.index*("i"===e.obj.item?31:30):15+e.obj.index*("i"===e.obj.item?16:15.5),y:"86",children:e.obj.item})},w=function(){var e=Object(r.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],s="I'm Rishabh Jain.".split("");return Object(r.useEffect)((function(){setTimeout((function(){c(!1)}),2e3)}),[]),Object(o.jsx)("div",{className:"Main-Content-2",children:Object(o.jsxs)("div",{className:"Home-Animation",children:[Object(o.jsx)("svg",{height:"130",width:"500",children:s.map((function(e,t){return Object(o.jsx)(y,{obj:{item:e,index:t}})}))}),Object(o.jsx)("p",{className:n?"":"show-p",children:"You can find me around the web !!"})]})})};var N=function(){return console.log("hi !!"),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(a.a,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(j,{}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/about",children:Object(o.jsx)(h,{})}),Object(o.jsx)(i.a,{path:"/gallery",children:Object(o.jsx)(m,{})}),Object(o.jsx)(i.a,{path:"/upgradeMe",children:Object(o.jsx)(k,{})}),Object(o.jsx)(i.a,{path:"/projects",children:Object(o.jsx)(f,{})}),Object(o.jsx)(i.a,{path:"/",children:Object(o.jsx)(w,{})})]})]})})};s.a.render(Object(o.jsx)(N,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.9e955946.chunk.js.map