(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),s=t(4),a=t.n(s),o=(t(9),t(2)),u=t(0);var d=function(e){return Object(u.jsx)("div",{className:"logo",id:e.logo})},i=["infinity","pacman","heart","badgeribbon","ship"],l=[{name:"Covers",shortHand:"covers",data:null},{name:"Drum Machine",shortHand:"drumMachine",data:null},{name:"Drum Machine 2",shortHand:"drumMachine2",data:null},{name:"Drum Machine 3",shortHand:"drumMachine3",data:null}];var j=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(d,{logo:i[Math.floor(10*Math.random())%i.length]})})},m=t(13);var h=function(e){return Object(u.jsxs)("div",{style:{marginLeft:"00rem",width:"15rem;"},class:"input-group mb-3",children:[Object(u.jsx)("label",{class:"input-group-text",for:"projects",children:"Projects"}),Object(u.jsxs)("select",{onChange:function(n){var t=n.target,c=t.value,r=t.name;console.log(r+" :: "+c),e.updateProject(c)},value:e.cValue,className:"form-select",id:"projects",name:"selector",children:["return",e.projects.map((function(e,n){return Object(u.jsx)("option",{id:n,value:e.shortHand,children:e.name},Object(m.a)())}))]},Object(m.a)())]})};var k=function(e){var n=Object(c.useState)("-1"),t=Object(o.a)(n,2),r=t[0];return t[1],document.addEventListener("keydown",(function(n){e.kkey!==n.key||e.playSound(e.kkey)})),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{className:"drumSpeed",htmlFor:"speed"+e.kkey,children:"Time"}),Object(u.jsx)("input",{className:"drumSpeed",value:r,type:"number",id:"speed"+e.kkey})]})};var b=function(e){function n(e){document.getElementById(e).play()}return Object(u.jsxs)("div",{style:{display:"inline-block"},children:[Object(u.jsx)("button",{onClick:function(){n(e.kkey)},className:"drum drum"+e.kkey.toUpperCase(),children:e.kkey}),Object(u.jsx)("audio",{id:e.kkey,children:Object(u.jsx)("source",{src:e.soundPath})}),Object(u.jsx)(k,{kkey:e.kkey,playSound:n})]})};var p=function(e){return Object(u.jsx)("div",{className:"drumSet",children:[{kkey:"w",soundPath:"./sounds/drumMachine/crash.mp3"},{kkey:"a",soundPath:"./sounds/drumMachine/kick-bass.mp3"},{kkey:"s",soundPath:"./sounds/drumMachine/snare.mp3"},{kkey:"d",soundPath:"./sounds/drumMachine/tom-1.mp3"},{kkey:"j",soundPath:"./sounds/drumMachine/tom-2.mp3"},{kkey:"k",soundPath:"./sounds/drumMachine/tom-3.mp3"},{kkey:"l",soundPath:"./sounds/drumMachine/tom-4.mp3"}].map((function(e){return Object(u.jsx)(b,{kkey:e.kkey,soundPath:e.soundPath},b.kkey)}))})};var y=function(){var e=Object(c.useState)("covers"),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(h,{projects:l,cValue:t,updateProject:function(e){r(e)}}),function(){switch(console.log(t),t){case"covers":return console.log("cover triggered"),Object(u.jsx)(j,{});case"drumMachine":return console.log("cover triggered"),Object(u.jsx)(p,{})}}()]})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.d82a6a49.chunk.js.map