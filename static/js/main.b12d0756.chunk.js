(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"years":[{"year":"2016","degree":"Bac STI2D","description":"STI2D -> Science et Technologie du d\xe9veloppement durable, durant ces ann\xe9es j\'ai pu apprendre les bases de l\'\xe9lectronique au travers d\'Arduino ainsi que sa programmation dans le langage C."},{"year":"2017","degree":"Permis B","description":"Plus possession d\'un v\xe9hicule personnel"},{"year":"Actuellement-2022","degree":"Master of Science SUPINFO","description":"Durant ces 5 ans, j\'ai pu apprendre \xe0 programmer sites, jeux ainsi que le fonctionnement d\'une entreprise gr\xe2ce aux cours de management, droit ..."}]}')},14:function(e){e.exports=JSON.parse('{"data":[{"name":"Python3","description":"Interface graphique (pygame); D\xe9veloppement web(flask)","img_src":"/skills_img/python.png","type":"comp\xe9tence"},{"name":"Javascript","description":"Nodejs (express, koa.js); ReactJs (interface web)","img_src":"/skills_img/javascript.png","type":"comp\xe9tence"},{"name":"C/C++","description":"D\xe9veloppement de scripts; D\xe9veloppement d\'un sudoku en console","img_src":"/skills_img/c++.png","type":"comp\xe9tence"},{"name":"SQL","description":"Cr\xe9ation, gestion de bases de donn\xe9es","img_src":"/skills_img/sql.svg","type":"comp\xe9tence"},{"name":"MongoDB","description":"Cr\xe9ation, gestion de bases de donn\xe9es","img_src":"/skills_img/MongoDB.png","type":"comp\xe9tence"},{"name":"Vim","description":"Vim-plug pour installer les plugins; IDE pour coder","img_src":"/skills_img/vim.png","type":"software"},{"name":"Office 365","description":"Power Point : r\xe9alisations de pr\xe9sentation; Word: R\xe9alisations de documentation, rendus de projet; Excel: visualisations de donn\xe9es","img_src":"/skills_img/office.png","type":"software"}]}')},24:function(e,t,n){e.exports=n.p+"static/media/profil_picture.a7c83042.jpg"},25:function(e){e.exports=JSON.parse('{"hobbies":[{"name":"Sport","description":"Je suis judoka et je m\'int\xe9resse aussi \xe0 l\'actualit\xe9 sportive","img":"sport.jpg"},{"name":"Technologie/Science","description":"Appr\xe9ciant les nouvelles technologies, je suis \xe0 l\'\xe9coute des derni\xe8res innovations (voitures \xe9lectriques, \xe9nergies ...)","img":"technology.jpg"},{"name":"Apprendre de nouvelles choses","description":"Etant curieux de nature et autodidacte, apprendre me permet de consolider mes connaissances mais aussi d\'\xe9largir mes domaines de comp\xe9tences","img":"learn.jpg"},{"name":"Musique","description":"La musique est un art que j\'appr\xe9cie, \xe9tant moi-m\xeame musicien","img":"guitar.jpg"}]}')},26:function(e,t,n){e.exports=n(63)},31:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},6:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(23),r=n.n(c),s=(n(31),n(1)),l=n(2),o=n(4),m=n(3),u=n(5),d=n.n(u),p=(n(6),n(24)),h=n.n(p),E=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"competences",value:function(){document.getElementById("competences").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container",id:"presentation"},i.a.createElement("div",{className:"container-left"},i.a.createElement("img",{src:h.a})),i.a.createElement("div",{className:"container-right"},i.a.createElement("div",{className:"center-right"},i.a.createElement("h1",{className:"title"},"Rissel Pierre-Fran\xe7ois"),i.a.createElement("p",{className:"detail"},"Je m'appelle Pierre Fran\xe7ois Rissel. Je suis actuellement en 3\xe8me ann\xe9e \xe0 ",i.a.createElement("a",{href:"https://www.supinfo.com/"},"SUPINFO international University"),", pour me permettre d'\xe9voluer dans le secteur de l'informatique (programmation, conception de syst\xe8mes informatiques ...)"),i.a.createElement("p",{className:"listenning"},i.a.createElement("span",{className:"bolded"},"Actuellement je suis \xe0 la recherche :"),i.a.createElement("br",null)," D'un stage et/ou Contrat de professionnalisation")),i.a.createElement("div",{className:"bottom-right"},i.a.createElement("button",{onClick:this.competences},i.a.createElement(d.a,{icon:"architecture"})," Comp\xe9tences"))))}}]),n}(a.Component),v=n(8),g=(n(58),function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){console.log(this.props);var e=this.props.description.split(";"),t=[];return e.map((function(e){t.push(i.a.createElement("li",null,e))})),i.a.createElement("div",{className:"card appear-anim"},i.a.createElement("img",{src:"/CurriculumVitae"+this.props.img}),i.a.createElement("span",{className:"card-description"},i.a.createElement("h1",null,this.props.name),i.a.createElement("ul",null,t)))}}]),n}(a.Component)),b=(n(59),a.Component,n(60),function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"onClick",value:function(e){e.change(this.props.name)}},{key:"render",value:function(){var e=this,t=i.a.createElement("p",{className:"badge bdg-green"},"Comp\xe9tence");return"software"===this.props.type&&(t=i.a.createElement("p",{className:"badge bdg-blue"},"Logiciel")),i.a.createElement("div",{className:"skillitem ".concat(!0===this.props.active?"active":""),onClick:function(){return e.onClick(e.props)}},i.a.createElement("img",{src:"/CurriculumVitae"+this.props.img}),i.a.createElement("p",{className:"normal skilltitle"},this.props.name),t)}}]),n}(a.Component)),f=n(14),N=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={card:i.a.createElement("div",{className:"card"},i.a.createElement("h1",{className:"title"},"Veuillez s\xe9lectionner une comp\xe9tence parmi celles propos\xe9es.")),selected:""},a.changeCard=a.changeCard.bind(Object(v.a)(a)),a}return Object(l.a)(n,[{key:"changeCard",value:function(e){var t=this;this.setState({card:i.a.createElement("div",{className:"card"})}),setTimeout((function(){f.data.forEach((function(n){n.name===e&&t.setState({card:i.a.createElement(g,{name:n.name,description:n.description,img:n.img_src}),selected:n.name})}))}),1)}},{key:"diplomes",value:function(){document.getElementById("diplome").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},{key:"presentation",value:function(){document.getElementById("presentation").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},{key:"render",value:function(){var e=this,t=f.data.map((function(t){return t.name!==e.state.selected?i.a.createElement(b,{key:t.name,name:t.name,img:t.img_src,change:e.changeCard,type:t.type,active:!1}):i.a.createElement(b,{key:t.name,name:t.name,img:t.img_src,change:e.changeCard,type:t.type,active:!0})}));return i.a.createElement("div",{className:"container",id:"competences"},i.a.createElement("div",{className:"container-left centered"},this.state.card),i.a.createElement("div",{className:"container-right"},i.a.createElement("br",null),i.a.createElement("button",{onClick:this.presentation},i.a.createElement(d.a,{icon:"person"})," Pr\xe9sentation"),i.a.createElement("div",{className:"center-right"},i.a.createElement("h1",{className:"text-underlined title"},"Mes Comp\xe9tences :"),i.a.createElement("div",null,t)),i.a.createElement("div",{className:"bottom-right"},i.a.createElement("button",{onClick:this.diplomes},i.a.createElement(d.a,{icon:"card_travel"}),"Dipl\xf4mes"))))}}]),n}(a.Component),y=(n(61),a.Component,n(12)),k=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"competences",value:function(){document.getElementById("competences").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},{key:"hobbies",value:function(){document.getElementById("hobbies").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container",id:"diplome"},i.a.createElement("div",{className:"container-left centered"},i.a.createElement("div",{className:"card-long"},i.a.createElement("div",{className:"card-container-3-col"},i.a.createElement("div",null,i.a.createElement("h1",{className:"title"},"2016"),i.a.createElement("h3",null,"BAC STI2D (Mention Bien)"),i.a.createElement("p",null,y.years[0].description)),i.a.createElement("div",null,i.a.createElement("h1",{className:"title"},"2017"),i.a.createElement("h3",null,"Permis B"),i.a.createElement("p",null,y.years[1].description)),i.a.createElement("div",null,i.a.createElement("h1",{className:"title"},"Actuellement-2022"),i.a.createElement("h3",null,"SUPINFO International University"),i.a.createElement("p",null,y.years[2].description))))),i.a.createElement("div",{className:"container-right"},i.a.createElement("br",null),i.a.createElement("button",{onClick:this.competences},i.a.createElement(d.a,{icon:"architecture"}),"Comp\xe9tences"),i.a.createElement("div",{className:"center-right"},i.a.createElement("h1",{className:"title text-underlined"},"Dipl\xf4mes :"),i.a.createElement("p",null,"Durant ces derni\xe8res ann\xe9es j'ai acquis des comp\xe9tences et des dipl\xf4mes."),i.a.createElement("p",{className:"title"},"Actuellement je me dirige vers un dipl\xf4me en 5 ann\xe9es (Master) \xe0 Supinfo International University")),i.a.createElement("div",{className:"bottom-right"},i.a.createElement("button",{onClick:this.hobbies},i.a.createElement(d.a,{icon:"star"}),"Centres d'int\xe9r\xeats"))))}}]),n}(a.Component),j=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={content:i.a.createElement("h1",{className:"title"},a.props.title),hover:!1},a.hover=a.hover.bind(Object(v.a)(a)),a.reset=a.reset.bind(Object(v.a)(a)),a}return Object(l.a)(n,[{key:"hover",value:function(){this.setState({content:i.a.createElement("p",{className:"text-content appear-anim"},this.props.description),hover:!0})}},{key:"reset",value:function(){this.setState({content:i.a.createElement("h1",{className:"title"},this.props.title),hover:!1})}},{key:"render",value:function(){var e=this.state.hover?i.a.createElement("img",{src:this.props.img,className:"gray"}):i.a.createElement("img",{src:this.props.img});return i.a.createElement("div",{className:"card-small",onMouseEnter:this.hover,onMouseLeave:this.reset},e,i.a.createElement("div",{className:"content"},this.state.content))}}]),n}(a.Component),C=n(25),O=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"experience",value:function(){document.getElementById("experience").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},{key:"diplome",value:function(){document.getElementById("diplome").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},{key:"render",value:function(){var e=[];return C.hobbies.forEach((function(t){e.push(i.a.createElement(j,{img:"/CurriculumVitae"+"/hobbies_img/".concat(t.img),title:t.name,description:t.description}))})),i.a.createElement("div",{className:"container",id:"hobbies"},i.a.createElement("div",{className:"container-left"},i.a.createElement("div",{className:"split-4"},e)),i.a.createElement("div",{className:"container-right"},i.a.createElement("br",null),i.a.createElement("button",{onClick:this.diplome},i.a.createElement(d.a,{icon:"card_travel"}),"Dipl\xf4mes"),i.a.createElement("div",{className:"center-right"},i.a.createElement("h1",{className:"title text-underlined"},"Centres d'int\xe9r\xeats :"),i.a.createElement("p",null,"J'ai aussi d'autres centres d'int\xe9r\xeats comme les jeux vid\xe9os, les mangas/animations ...")),i.a.createElement("div",{className:"bottom-right"},i.a.createElement("button",{onClick:this.experience},i.a.createElement(d.a,{icon:"science"}),"Exp\xe9riences"))))}}]),n}(a.Component),I=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"contact",value:function(){document.getElementById("contact").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},{key:"hobbies",value:function(){document.getElementById("hobbies").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},{key:"render",value:function(){return console.log("/CurriculumVitae"),i.a.createElement("div",{className:"container",id:"experience"},i.a.createElement("div",{className:"container-left centered-column"},i.a.createElement("br",null),i.a.createElement("div",{className:"fat-line"},i.a.createElement("img",{src:"/CurriculumVitae/experience_img/solocal.png"}),i.a.createElement("h4",{className:"title"},"2019 (4 mois)"),i.a.createElement("p",null,"Mise en place d'une suite ELK afin de visualiser des Logs provenant d'un site E-Commerce")),i.a.createElement("div",{className:"fat-line"},i.a.createElement("p",null,"Optimisation et refonte d'une application de gestion de frais ( outils utilis\xe9s : PHP/SQL/HTML/CSS/JS)"),i.a.createElement("h4",{className:"title"},"2018 (2 mois)"),i.a.createElement("img",{src:"/CurriculumVitae/experience_img/avem.jpeg"})),i.a.createElement("div",{className:"fat-line"},i.a.createElement("img",{src:"/CurriculumVitae/experience_img/matines.png"}),i.a.createElement("h4",{className:"title"},"2017 (2 mois)"),i.a.createElement("p",null,"Travail d'\xe9t\xe9 chez Matines. J'y ai effectu\xe9 un travail de manutention (nettoyage)"))),i.a.createElement("div",{className:"container-right"},i.a.createElement("br",null),i.a.createElement("button",{onClick:this.hobbies},i.a.createElement(d.a,{icon:"star"}),"Centre d'int\xe9r\xeats"),i.a.createElement("div",{className:"center-right"},i.a.createElement("h1",{className:"title text-underlined"},"Exp\xe9riences :"),i.a.createElement("p",null,"Durant ma formation, j'ai eu l'occasion de r\xe9aliser des stages. J'ai aussi travaill\xe9 l'\xe9t\xe9 dans une usine.")),i.a.createElement("div",{className:"bottom-right"},i.a.createElement("button",{onClick:this.contact},i.a.createElement(d.a,{icon:"contacts"}),"Contact"))))}}]),n}(a.Component),x=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"experience",value:function(){document.getElementById("experience").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"container-left"},i.a.createElement("div",{className:"split-2-h",id:"contact"},i.a.createElement("div",{className:"centered"},i.a.createElement("div",{className:"line"},i.a.createElement("h3",{className:"title"},"Je suis actuellement \xe0 la recherche de :"),i.a.createElement("ul",null,i.a.createElement("li",null,"Stage"),i.a.createElement("li",null,"Contrat de professionnalisation")))),i.a.createElement("div",{className:"centered-column"},i.a.createElement("h2",{className:"text-underlined title"},"Interess\xe9 par mon profil ? N'h\xe9sitez pas \xe0 me contacter"),i.a.createElement("div",{className:"card-line"},i.a.createElement("img",{src:"/CurriculumVitae/contact_img/linkedin.png"}),"Linkedin : ",i.a.createElement("a",{href:"https://www.linkedin.com/in/pierre-fran%C3%A7ois-rissel-b1a948155/"},"Pierre-Fran\xe7ois Rissel")),i.a.createElement("div",{className:"card-line"},i.a.createElement("img",{src:"/CurriculumVitae/contact_img/mail.png"}),"Mail : 287854@supinfo.com"),i.a.createElement("div",{className:"card-line"},i.a.createElement("img",{src:"/CurriculumVitae/contact_img/github.svg"}),i.a.createElement("a",{href:"https://github.com/RPF98"},"RPF98"))))),i.a.createElement("div",{className:"container-right align-column"},i.a.createElement("br",null),i.a.createElement("button",{onClick:this.experience},i.a.createElement(d.a,{icon:"science"}),"Exp\xe9riences"),i.a.createElement("h1",{className:"title text-underlined"},"Contact :"),i.a.createElement("p",null,"Si vous avez des questions, des offres de stages/ contrat de professionnalisation, contactez-moi")))}}]),n}(a.Component);n(62);var w=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(E,null),i.a.createElement(N,null),i.a.createElement(k,null),i.a.createElement(O,null),i.a.createElement(I,null),i.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.b12d0756.chunk.js.map