function _defineProperties(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4BeP":function(e,t,n){"use strict";n.r(t);var s,c,r=n("COUs"),a=n("tyNb"),o=n("wNGb"),i=n("quSY"),h=n("AcyG"),l=n("G8lE"),u=n("6su5"),p=function(e){return function(e){return e.herosSearchResults}(e).pageEvent},f=function(e){return p(e).pageSize},b=function(e){return p(e).pageIndex},g=Object(h.h)([function(e){return e.heros},u.a],(function(e,t){return e&&e.length&&t?e.filter((function(e){return Object(l.a)(e,t)})):[]})),d=Object(h.h)([g],(function(e){return e.length})),m=Object(h.h)([g,p],(function(e,t){return e.slice(t.pageSize*t.pageIndex,t.pageSize*(t.pageIndex+1))})),v=n("/uUt"),y=function(){var e=function e(t){_classCallCheck(this,e),this.pageEvent=t};return e.type="[Heros Search Results] Change Page",e}(),C=function(){var e=function e(){_classCallCheck(this,e)};return e.type="[Heros Search Results] Go Back To First",e}(),w=n("fXoL"),k=n("qrca"),O=n("ofXK"),j=n("M9IT"),S=function(){return[12,24,36]},I=((s=function(){function e(t,n){_classCallCheck(this,e),this.store=t,this.actions=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.pageIndex$=this.store.select(b),this.pageSize$=this.store.select(f)}},{key:"pageChanged",value:function(e){this.store.dispatch(new y(e))}}]),e}()).\u0275fac=function(e){return new(e||s)(w.Pb(h.g),w.Pb(h.b))},s.\u0275cmp=w.Jb({type:s,selectors:[["hse-heros-paginator"]],inputs:{length:"length"},decls:3,vars:9,consts:[[1,"db",3,"length","pageSize","pageIndex","pageSizeOptions","page"]],template:function(e,t){1&e&&(w.Ub(0,"mat-paginator",0),w.cc("page",(function(e){return t.pageChanged(e)})),w.hc(1,"async"),w.hc(2,"async"),w.Tb()),2&e&&w.lc("length",t.length)("pageSize",w.ic(1,4,t.pageSize$))("pageIndex",w.ic(2,6,t.pageIndex$))("pageSizeOptions",w.nc(8,S))},directives:[j.a],pipes:[O.b],encapsulation:2}),s),_=n("Wp6s"),L=function(e){return{id:e}},x=function(e){return["/details",e]},P=((c=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=w.Jb({type:c,selectors:[["hse-hero-card"]],inputs:{hero:"hero"},decls:10,vars:9,consts:[[1,"db","link","shadow-hover","h-100",3,"routerLink"],[1,"h-100","border-box","hover-bg-light-gray"],["mat-card-avatar","",3,"src"]],template:function(e,t){1&e&&(w.Ub(0,"a",0),w.Ub(1,"mat-card",1),w.Ub(2,"mat-card-header"),w.Qb(3,"img",2),w.Ub(4,"mat-card-title"),w.Ac(5),w.Tb(),w.Ub(6,"mat-card-subtitle"),w.Ac(7),w.Tb(),w.Tb(),w.Ub(8,"mat-card-content"),w.Ac(9),w.Tb(),w.Tb(),w.Tb()),2&e&&(w.lc("routerLink",w.oc(7,x,w.oc(5,L,t.hero.id))),w.Db(3),w.lc("src",t.hero.images.sm,w.uc),w.Db(2),w.Bc(t.hero.name),w.Db(2),w.Bc(t.hero.biography.fullName),w.Db(2),w.Cc(" ",t.hero.biography.aliases.join(", ")," "))},directives:[a.i,_.a,_.d,_.b,_.g,_.f,_.c],encapsulation:2,changeDetection:0}),c);function T(e,t){if(1&e&&(w.Ub(0,"div",3),w.Qb(1,"hse-hero-card",4),w.Tb()),2&e){var n=t.$implicit;w.Db(1),w.lc("hero",n)}}var z,D=((z=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||z)},z.\u0275cmp=w.Jb({type:z,selectors:[["hse-heros-list"]],inputs:{heros:"heros",herosLength:"herosLength"},decls:4,vars:3,consts:[[3,"length"],[1,"flex","flex-row-ns","flex-wrap"],["class","w-100 w-50-m w-third-l pa2",4,"ngFor","ngForOf"],[1,"w-100","w-50-m","w-third-l","pa2"],[1,"h-100","db",3,"hero"]],template:function(e,t){1&e&&(w.Qb(0,"hse-heros-paginator",0),w.Ub(1,"div",1),w.zc(2,T,2,1,"div",2),w.Tb(),w.Qb(3,"hse-heros-paginator",0)),2&e&&(w.lc("length",t.herosLength),w.Db(2),w.lc("ngForOf",t.heros),w.Db(1),w.lc("length",t.herosLength))},directives:[I,O.j,P],encapsulation:2}),z),U=n("Xa2L");function $(e,t){if(1&e&&(w.Qb(0,"hse-heros-list",3),w.hc(1,"async"),w.hc(2,"async")),2&e){var n=w.gc();w.lc("heros",w.ic(1,2,n.heros$))("herosLength",w.ic(2,4,n.herosLength$))}}function E(e,t){1&e&&(w.Ub(0,"h3",4),w.Ac(1," No Superheros found~\n"),w.Tb())}function F(e,t){1&e&&w.Qb(0,"mat-spinner",4)}var N,Q,A,B=[{path:"",component:(N=function(){function e(t,n){_classCallCheck(this,e),this.store=t,this.route=n,this.subscription=new i.a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=this.route.snapshot.paramMap;this.formValue=Object(l.c)(t),this.store.dispatch(new o.a),this.heros$=this.store.select(m),this.herosLength$=this.store.select(d),this.subscription.add(this.store.select(u.a).pipe(Object(v.a)()).subscribe((function(){e.store.dispatch(new C)})))}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}}]),e}(),N.\u0275fac=function(e){return new(e||N)(w.Pb(h.g),w.Pb(a.a))},N.\u0275cmp=w.Jb({type:N,selectors:[["hse-heros-search-results"]],hostAttrs:[1,"w-100","flex","flex-column","justify-center"],decls:7,vars:10,consts:[[1,"db","mb3",3,"formValue"],["class","db",3,"heros","herosLength",4,"ngIf"],["class","tc",4,"ngIf"],[1,"db",3,"heros","herosLength"],[1,"tc"]],template:function(e,t){1&e&&(w.Qb(0,"hse-heros-search-form",0),w.zc(1,$,3,6,"hse-heros-list",1),w.hc(2,"async"),w.zc(3,E,2,0,"h3",2),w.hc(4,"async"),w.zc(5,F,1,0,"mat-spinner",2),w.hc(6,"async")),2&e&&(w.lc("formValue",t.formValue),w.Db(1),w.lc("ngIf",w.ic(2,4,t.herosLength$)),w.Db(2),w.lc("ngIf",!w.ic(4,6,t.herosLength$)),w.Db(2),w.lc("ngIf",!w.ic(6,8,t.heros$)))},directives:[k.a,O.k,D,U.b],pipes:[O.b],encapsulation:2}),N)}],J=((Q=function e(){_classCallCheck(this,e)}).\u0275mod=w.Nb({type:Q}),Q.\u0275inj=w.Mb({factory:function(e){return new(e||Q)},imports:[[a.j.forChild(B)],a.j]}),Q),G=n("mrSG"),M={pageEvent:{pageSize:24,pageIndex:0,length:0}},R=((A=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"changePage",value:function(e,t){e.patchState({pageEvent:t.pageEvent})}},{key:"goBackToFirstPage",value:function(e,t){e.patchState({pageEvent:Object.assign(Object.assign({},e.getState().pageEvent),{pageIndex:0})})}}]),e}()).\u0275fac=function(e){return new(e||A)},A.\u0275prov=w.Lb({token:A,factory:A.\u0275fac}),Object(G.a)([Object(h.a)(y)],A.prototype,"changePage",null),Object(G.a)([Object(h.a)(C)],A.prototype,"goBackToFirstPage",null),A=Object(G.a)([Object(h.f)({name:"herosSearchResults",defaults:Object.assign({},M)})],A)),V=n("PCNd");n.d(t,"HerosSearchResultsModule",(function(){return X}));var H,X=((H=function e(){_classCallCheck(this,e)}).\u0275mod=w.Nb({type:H}),H.\u0275inj=w.Mb({factory:function(e){return new(e||H)},imports:[[V.a,r.a,J,h.d.forFeature([R])]]}),H)}}]);