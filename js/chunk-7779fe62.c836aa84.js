(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7779fe62"],{"4a13":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=function(e){return Object(c["C"])("data-v-6c2c4db3"),e=e(),Object(c["A"])(),e},i={class:"grid"},a={class:"col-12"},o={class:"card docs"},u=r((function(){return Object(c["j"])("h3",null,"Current Version",-1)})),s=r((function(){return Object(c["j"])("p",null,"Vue 3 and PrimeVue 3",-1)})),d=r((function(){return Object(c["j"])("h5",null,"Getting Started",-1)})),l=r((function(){return Object(c["j"])("p",null,[Object(c["m"])("Sakai is an application template for Vue based on the "),Object(c["j"])("a",{href:"https://cli.vuejs.org/",class:"font-medium"},"Vue CLI"),Object(c["m"])(" that provides out-of-the-box standard tooling for Vue projects. To get started, clone the "),Object(c["j"])("a",{href:"https://github.com/primefaces/sakai-vue",class:"font-medium"},"repository"),Object(c["m"])(" from GitHub and install the dependencies with npm or yarn.")],-1)})),p=r((function(){return Object(c["j"])("code",null,"\r\nnpm install\r\n\r\n",-1)})),b=[p],j=Object(c["m"])(" or "),h=r((function(){return Object(c["j"])("code",null,"\r\nyarn\r\n\r\n",-1)})),m=[h],f=r((function(){return Object(c["j"])("p",null,[Object(c["m"])("Next step is running the application using the serve script and navigate to "),Object(c["j"])("i",null,"http://localhost:8080/"),Object(c["m"])(" to view the application. That is it, you may now start with the development of your application using the Sakai template.")],-1)})),v=r((function(){return Object(c["j"])("code",null,"\r\nnpm run serve\r\n\r\n",-1)})),O=[v],S=r((function(){return Object(c["j"])("h5",null,"Vue CLI Scripts",-1)})),w=r((function(){return Object(c["j"])("p",null,"Following commands are derived from create-app-app.",-1)})),y=r((function(){return Object(c["j"])("code",null,'\r\n"npm run serve": Starts the development server\r\n"npm run build": Builds the application for deployment.\r\n"npm run lint": Executes the lint checks.\r\n"npm run test:unit": Runs the tests.\r\n\r\n',-1)})),g=[y],V=Object(c["l"])("<h5 data-v-6c2c4db3>Structure</h5><p data-v-6c2c4db3>Sakai consists of 2 main parts; the application layout and the resources. <i data-v-6c2c4db3>App.vue</i> inside src folder is the main component containing the template for the base layout whereas required resources such as SASS structure for the layout are placed inside the <b data-v-6c2c4db3>src/assets/</b> folder.</p><h5 data-v-6c2c4db3>Layout Components</h5><p data-v-6c2c4db3>Main layout is the template of the <i data-v-6c2c4db3>App.vue</i>, it is divided into a couple of child components such as topbar, menu and footer. Here is template of the <i data-v-6c2c4db3>App.vue</i> component that implements the logic such as menu state, layout modes and so on. </p><h5 data-v-6c2c4db3>Menu</h5><p data-v-6c2c4db3>Menu is a separate component defined in <i data-v-6c2c4db3>AppMenu.vue</i> file based on PrimeVue MenuModel API. In order to define the menuitems, navigate to data section of <i data-v-6c2c4db3>App.vue</i> file and define your own model as a nested structure using the <i data-v-6c2c4db3>menu</i> property.</p><h5 data-v-6c2c4db3>Dependencies</h5><p data-v-6c2c4db3>Dependencies of Sakai are listed below and needs to be added to package.json.</p>",8),k=Object(c["m"])(""),A=r((function(){return Object(c["j"])("code",null,'\r\n{\r\n    "primevue": "~3.11.0",\r\n    "primeicons": "~5.0.0",\r\n    "primeflex": "~3.1.2",\r\n}\r\n\r\n',-1)})),z=[k,A],I=r((function(){return Object(c["j"])("h5",null,"PrimeVue Theme",-1)})),M=r((function(){return Object(c["j"])("p",null,"Sakai uses the free Saga, Arya and Vela themes which are distributed within PrimeVue, however it can be used with any PrimeVue theme as well such as material, tailwind and bootstrap.",-1)})),P=r((function(){return Object(c["j"])("h5",null,"SASS Variables",-1)})),x=r((function(){return Object(c["j"])("p",null,[Object(c["m"])("In case you'd like to customize the layout variables, open "),Object(c["j"])("i",null,"_variables.scss"),Object(c["m"])(" file under src/layout folder. Saving the changes will be reflected instantly at your browser.")],-1)})),C=r((function(){return Object(c["j"])("h6",null,"src/assets/_variables.scss",-1)})),_=Object(c["m"])(""),D=r((function(){return Object(c["j"])("code",null,"\r\n$fontSize:1rem;\r\n$borderRadius:12px;\r\n$transitionDuration:.2s;\r\n\r\n",-1)})),L=[_,D];function T(e,t,n,r,p,h){var v=Object(c["I"])("code");return Object(c["z"])(),Object(c["i"])("div",i,[Object(c["j"])("div",a,[Object(c["j"])("div",o,[u,s,d,l,Object(c["S"])((Object(c["z"])(),Object(c["i"])("pre",null,b)),[[v,void 0,void 0,{script:!0}]]),j,Object(c["S"])((Object(c["z"])(),Object(c["i"])("pre",null,m)),[[v,void 0,void 0,{script:!0}]]),f,Object(c["S"])((Object(c["z"])(),Object(c["i"])("pre",null,O)),[[v,void 0,void 0,{script:!0}]]),S,w,Object(c["S"])((Object(c["z"])(),Object(c["i"])("pre",null,g)),[[v,void 0,void 0,{script:!0}]]),V,Object(c["S"])((Object(c["z"])(),Object(c["i"])("pre",null,z)),[[v,void 0,void 0,{script:!0}]]),I,M,P,x,C,Object(c["S"])((Object(c["z"])(),Object(c["i"])("pre",null,L)),[[v,void 0,void 0,{css:!0}]])])])])}var $={},G=(n("4a99"),n("6b0d")),H=n.n(G);const J=H()($,[["render",T],["__scopeId","data-v-6c2c4db3"]]);t["default"]=J},"4a99":function(e,t,n){"use strict";n("8afa")},"8afa":function(e,t,n){}}]);
//# sourceMappingURL=chunk-7779fe62.c836aa84.js.map