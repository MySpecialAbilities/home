(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{130:function(e,t,a){e.exports=a.p+"static/media/logo.c6856f3c.png"},132:function(e,t,a){e.exports=a.p+"static/media/homePic.5d7f6abc.png"},133:function(e,t,a){e.exports=a.p+"static/media/learning.97da3977.jpg"},134:function(e,t,a){e.exports=a.p+"static/media/teamPic.1268a4e1.jpg"},155:function(e,t,a){e.exports=a(299)},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(35),l=a.n(i),c=a(17),o=a(18),s=a(20),m=a(19),u=a(26),d=a(14),p=a(308),h=a(130),E=a.n(h),f=(a(160),a(44)),b=(a(161),a(131)),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"jumboWrapper",onMouseEnter:function(){document.getElementById("abilities").style.fontSize="2em",document.getElementById("logoWrapper").style.width="1400px",document.getElementById("needs").style.fontSize="0",document.getElementById("crossLine").style.width="0"}},r.a.createElement("div",{id:"logoWrapper"},r.a.createElement("h1",{id:"t1"},"My Speical ",r.a.createElement("span",{id:"abilities"},"Abilities")),r.a.createElement("h1",{id:"needs"},"Needs"),r.a.createElement("div",{id:"crossLine"})),r.a.createElement(b.a,{sequence:["Just be who you are!",1e9,""],speed:1,wrapper:"h1",repeat:1/0}))}}]),a}(r.a.Component),v=(a(162),a(132)),y=a.n(v),j=a(133),w=a.n(j),C=a(134),O=a.n(C),x={home:[{title:"Home",img:y.a,route:"/",teaser:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "}],WhyJoinUs:[{title:"Learning",img:w.a,route:"/Learning",teaser:"Our courses have helped countless individuals discover and amplify their talents to the world"},{title:"Mentorship",img:O.a,route:"/Mentorship",teaser:"Network and build connections with highly successful neurodivergent members"}]},S=a(309),k=a(146),I=a(307),N=(a(163),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleName=function(e){return e.toUpperCase().split("").map((function(e){return"_"===e?(console.log("found")," "):e})).join("")},n.makeCards=function(e){var t=1;return e.map((function(e){return(t+=1)%2===0?r.a.createElement(S.a,{className:"homePageHugeSession"},r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Column,{width:8},r.a.createElement(k.a,{src:e.img,style:{width:"800px"}})),r.a.createElement(S.a.Column,{width:8},r.a.createElement("div",{className:"wordWrapper"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.teaser),r.a.createElement(I.a,{as:u.b,name:"learnAbout",className:"reasonButton",to:"/Learning"},"Start Learning"))))):r.a.createElement(S.a,{className:"homePageHugeSession"},r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Column,{width:8},r.a.createElement("div",{className:"wordWrapper"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.teaser),r.a.createElement(I.a,{as:u.b,name:"team",className:"reasonButton",to:"/Mentorship"},"Start Connecting"))),r.a.createElement(S.a.Column,{width:8},r.a.createElement(k.a,{src:e.img,style:{width:"800px"}}))))}))},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.forCards,t=this.props.name;this.handleName(t);return r.a.createElement("div",null,this.makeCards(e))}}]),a}(r.a.Component)),H=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).createHomePageSection=function(e,t){return r.a.createElement(N,{forCards:e,name:t})},e.createHomePageSections=function(){return Object.keys(x).map((function(t){if("home"!==t)return e.createHomePageSection(x[t],t)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"homePageSections"},this.createHomePageSections())}}]),a}(r.a.Component),L=a(306),R=a(310),M=(a(280),function(){return r.a.createElement(S.a,{id:"ratingGrid"},r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Column,{width:4},r.a.createElement(L.a,{className:"ratingCard"},r.a.createElement(L.a.Content,null,r.a.createElement(L.a.Header,null,"Steve Sanders"),r.a.createElement(L.a.Description,null,"I really enjoyed the mentorship and courses this site offers. I have learned a lot and I am very grateful for the opportunity.")),r.a.createElement(L.a.Content,{extra:!0},r.a.createElement(R.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0})))),r.a.createElement(S.a.Column,{width:4},r.a.createElement(L.a,{className:"ratingCard"},r.a.createElement(L.a.Content,null,r.a.createElement(L.a.Header,null,"Molly Thomas"),r.a.createElement(L.a.Description,null,"The hours, minutes and seconds stand as visible reminders that your effort put them all there.",r.a.createElement("br",null),"Preserve until your next run, when the watch lets you see how Impermanent your efforts are.")),r.a.createElement(L.a.Content,{extra:!0},r.a.createElement(R.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0})))),r.a.createElement(S.a.Column,{width:4},r.a.createElement(L.a,{className:"ratingCard"},r.a.createElement(L.a.Content,null,r.a.createElement(L.a.Header,null,"Jenny Lawrence"),r.a.createElement(L.a.Description,null,"Dude, this is awesome. Thanks so much! I can't wait to show my friends.")),r.a.createElement(L.a.Content,{extra:!0},r.a.createElement(R.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0})))),r.a.createElement(S.a.Column,{width:4},r.a.createElement(L.a,{className:"ratingCard"},r.a.createElement(L.a.Content,null,r.a.createElement(L.a.Header,null,"Gio Marco"),r.a.createElement(L.a.Description,null,"This REALLY helps me out. Thanks so much! I can't wait to show my friends.")),r.a.createElement(L.a.Content,{extra:!0},r.a.createElement(R.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0}))))))}),P=(a(281),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(M,null),r.a.createElement("div",{style:{textAlign:"center",margin:"10rem"}},r.a.createElement("h1",{style:{fontSize:"4.5rem"}},"We are a community built by neurodiverse minds for empowering neurodivergent talent!")),r.a.createElement("div",{id:"wrapper1"},r.a.createElement(H,null)))}}]),a}(r.a.Component)),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Hello, this is CollaborationsPage")}}]),a}(r.a.Component),z=(a(282),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"mentorshipJumboWrapper"},r.a.createElement("h1",{id:"mentorshipjumboHead"},"Mentorship"))}}]),a}(r.a.Component)),B=(a(283),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"learningJumboWrapper"},r.a.createElement("h1",{id:"jumboHead"},"Learning"))}}]),a}(r.a.Component)),J=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(p.a,{stackable:!0,borderless:!0,id:"topNav"},r.a.createElement(p.a.Item,{to:"/",as:u.b},r.a.createElement("img",{src:E.a})),r.a.createElement(p.a.Item,{name:"features",to:"/",as:u.b},"Home"),r.a.createElement(p.a.Item,{name:"description",to:"/Learning",as:u.b},"Learning"),r.a.createElement(p.a.Item,{name:"team",to:"/Mentorship",as:u.b},"Mentorship"),r.a.createElement(p.a.Item,{name:"collaborations",position:"right",to:"/Collaborations",as:u.b},r.a.createElement(f.a,{name:"handshake",size:"large"}),"Register / Sign In")),r.a.createElement(d.a,{path:"/",exact:!0,component:P}),r.a.createElement(d.a,{path:"/Learning",exact:!0,component:B}),r.a.createElement(d.a,{path:"/Mentorship",exact:!0,component:z}),r.a.createElement(d.a,{path:"/Collaborations",exact:!0,component:W}))}}]),a}(r.a.Component);var D=function(){return r.a.createElement(J,null)};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.701a500a.chunk.js.map