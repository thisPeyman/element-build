"use strict";(self.webpackChunkelementApp=self.webpackChunkelementApp||[]).push([[59],{9059:(X,f,u)=>{u.r(f),u.d(f,{ProfileModule:()=>H});var d=u(9808),v=u(4466),p=u(1545),n=u(5e3),A=u(6290),x=u(3792),a=u(5620);const C=(0,a.PH)("[Profile] Load profile data"),P=(0,a.PH)("[Profile] Load profile data success",(0,a.Ky)()),h=(0,a.PH)("[Profile] Update profile data",(0,a.Ky)()),_=(0,a.PH)("[Profile] Update profile success",(0,a.Ky)()),O=(0,a.Tz)({name:"profile",reducer:(0,a.Lq)({userProfile:{first_name:"",last_name:"",father_name:"",birth_date:"",job_title:"",national_id:"",phone:"",phone_verified:!1}},(0,a.on)(P,(e,{profile:o})=>Object.assign(Object.assign({},e),{userProfile:Object.assign({},o)})),(0,a.on)(_,(e,{profile:o})=>Object.assign(Object.assign({},e),{userProfile:Object.assign(Object.assign({},e.userProfile),o)})))}),{selectUserProfile:T}=O;let g=(()=>{class e{constructor(t){this.store=t,this.userProfile$=this.store.select(T)}loadProfile(){this.store.dispatch(C())}updateProfile(t){this.store.dispatch(h({profile:t}))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(a.yh))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var M=u(815);function w(e,o){if(1&e&&(n.ynx(0),n.TgZ(1,"h3"),n._uU(2),n.qZA(),n.BQk()),2&e){const t=o.ngIf;n.xp6(2),n.AsE("",t.first_name," ",t.last_name,"")}}let I=(()=>{class e{constructor(t,r,c){this.authFacade=t,this.route=r,this.profileFacade=c,this.userProfile$=this.profileFacade.userProfile$}ngOnInit(){}signout(){this.authFacade.signout(),this.route.navigate(["/landing"])}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(x.j),n.Y36(p.F0),n.Y36(g))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-profile-sidebar"]],decls:35,vars:11,consts:[[1,"profile-pic"],[4,"ngIf"],[1,"bordered"],["routerLink","/profile/myInsurance"],["src","sample",3,"size"],["routerLink","/profile/requests"],["routerLink","/profile/personnelDetail"],["routerLink","/profile/wallet"],[3,"click"],[1,"footer__box1"],[1,"footer__box2"]],template:function(t,r){1&t&&(n.TgZ(0,"aside"),n._UZ(1,"div",0),n.YNc(2,w,3,2,"ng-container",1),n.ALo(3,"async"),n.TgZ(4,"ul",2)(5,"li",3),n._UZ(6,"app-icon",4),n._uU(7," \u0628\u06cc\u0645\u0647 \u0647\u0627\u06cc \u0645\u0646 "),n.qZA(),n.TgZ(8,"li",5),n._UZ(9,"app-icon",4),n._uU(10," \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0647\u0627 "),n.qZA(),n.TgZ(11,"li",6),n._UZ(12,"app-icon",4),n._uU(13," \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u062f\u06cc "),n.qZA(),n.TgZ(14,"li",7),n._UZ(15,"app-icon",4),n._uU(16," \u06a9\u06cc\u0641 \u067e\u0648\u0644 "),n.qZA(),n.TgZ(17,"li",8),n.NdJ("click",function(){return r.signout()}),n._UZ(18,"app-icon",4),n._uU(19," \u062e\u0631\u0648\u062c "),n.qZA()(),n.TgZ(20,"ul")(21,"li"),n._UZ(22,"app-icon",4),n._uU(23," \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc "),n.qZA(),n.TgZ(24,"li"),n._UZ(25,"app-icon",4),n._uU(26," \u062e\u0648\u062f\u0631\u0648 \u0647\u0627 "),n.qZA(),n.TgZ(27,"li"),n._UZ(28,"app-icon",4),n._uU(29," \u0646\u0634\u0627\u0646\u06cc \u0647\u0627 "),n.qZA()(),n.TgZ(30,"footer")(31,"div",9),n._UZ(32,"div",10),n.TgZ(33,"span"),n._uU(34,"\u062f\u06cc\u062f\u06af\u0627\u0647 \u062e\u0648\u062f \u0631\u0627 \u0628\u0627 \u0645\u0627 \u062f\u0631 \u0645\u06cc\u0627\u0646 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f"),n.qZA()()()()),2&t&&(n.xp6(2),n.Q6J("ngIf",n.lcZ(3,9,r.userProfile$)),n.xp6(4),n.Q6J("size",0),n.xp6(3),n.Q6J("size",0),n.xp6(3),n.Q6J("size",0),n.xp6(3),n.Q6J("size",0),n.xp6(3),n.Q6J("size",0),n.xp6(4),n.Q6J("size",0),n.xp6(3),n.Q6J("size",0),n.xp6(3),n.Q6J("size",0))},directives:[d.O5,p.rH,M.o],pipes:[d.Ov],styles:["aside[_ngcontent-%COMP%]{background:#E5E5E5;border-radius:20px;min-height:100%;display:flex;flex-direction:column;align-items:center;padding:1.5rem}aside[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]{background-color:#fabe7a;border-radius:50%;width:3rem;height:3rem}aside[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#6956e5;margin-top:1rem}aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:unset;width:70%;display:flex;flex-direction:column;gap:1rem;padding:2rem .5rem;margin:unset}aside[_ngcontent-%COMP%]   ul.bordered[_ngcontent-%COMP%]{border-bottom:1px solid #878787}aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.8rem;color:#878787;display:flex;align-items:center;gap:.5rem;cursor:pointer;transition:all .1s ease}aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#6956e5}aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover     svg{stroke:#6956e5;fill:#6956e5}aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#6956e5}aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]     svg{stroke:#6956e5;fill:#6956e5}aside[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{width:100%;margin-top:2rem}aside[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .footer__box1[_ngcontent-%COMP%]{width:100%;background-color:#d9d8e6;height:6rem;display:flex;flex-direction:column;align-items:center}aside[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .footer__box2[_ngcontent-%COMP%]{background-color:#6956e555;height:4rem;transform:scaleY(1.5);transform-origin:bottom;width:61%}aside[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#fff;color:#6956e5;font-weight:500;font-size:.75rem;border-radius:.34rem;padding:.1rem .2rem}"]}),e})(),z=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-profile-layout"]],decls:4,vars:0,consts:[[1,"content"]],template:function(t,r){1&t&&(n.TgZ(0,"main"),n._UZ(1,"app-profile-sidebar"),n.TgZ(2,"div",0),n._UZ(3,"router-outlet"),n.qZA()())},directives:[I,p.lC],styles:["main[_ngcontent-%COMP%]{background:#FFFFFF;box-shadow:0 44px 84px 6px #d8d9db;border-radius:30px;width:80%;margin:2rem auto;display:grid;grid-template-columns:15rem 1fr;min-height:50vh}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:2rem}"]}),e})();var E=u(6526);let B=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-profile"]],decls:3,vars:0,template:function(t,r){1&t&&n._UZ(0,"app-header")(1,"app-profile-layout")(2,"app-footer")},directives:[A.G,z,E.c],styles:[""]}),e})();var i=u(2382),S=u(7579),J=u(2722),N=u(6106),L=u(6634),b=u(4604);let m=(()=>{class e{constructor(t){this.profileFacade=t,this.profileForm=new i.cw({first_name:new i.NI(""),last_name:new i.NI(""),national_id:new i.NI(""),birth_date:new i.NI(""),father_name:new i.NI(""),job_title:new i.NI(""),gender:new i.NI({value:"",disabled:!0}),phone_number:new i.NI({value:"",disabled:!0})}),this.destroy$=new S.x,this.showPassword=!1}ngOnInit(){this.profileFacade.loadProfile(),this.updateFormWithStore()}toggleEye(){this.showPassword=!this.showPassword}formSubmit(){this.profileFacade.updateProfile(this.profileForm.value)}updateFormWithStore(){this.profileFacade.userProfile$.pipe((0,J.R)(this.destroy$)).subscribe(t=>{this.profileForm.patchValue(Object.assign({},t))})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}onBirthdayChange(t){var r;null===(r=this.profileForm.get("birth_date"))||void 0===r||r.setValue(t)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(g))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-personnel-detail"]],decls:32,vars:4,consts:[[1,"content"],[1,"hint"],[3,"formGroup"],[1,"gridInputs"],["formControlName","first_name","appInput","","placeholder","\u0646\u0627\u0645"],["formControlName","last_name","appInput","","placeholder","\u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc"],["formControlName","national_id","appInput","","placeholder","\u06a9\u062f \u0645\u0644\u06cc"],[3,"valueChange"],["formControlName","phone_number","appInput","","placeholder","\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644"],["formControlName","father_name","appInput","","placeholder","\u0646\u0627\u0645 \u067e\u062f\u0631"],["formControlName","gender","appInput","","placeholder","\u062c\u0646\u0633\u06cc\u062a"],["formControlName","job_title","appInput","","placeholder","\u0634\u063a\u0644"],[1,"emailBox"],["appInput","","placeholder","example@felan.com"],[1,"passwordBox"],["src","eye",3,"click"],[3,"type"],["appButton","","appSizeButton","small",1,"submit",3,"click"],["appButton","","appSizeButton","small"]],template:function(t,r){1&t&&(n.TgZ(0,"main")(1,"div",0)(2,"h1"),n._uU(3,"\u0645\u0634\u062e\u0635\u0627\u062a \u0641\u0631\u062f\u06cc"),n.qZA(),n.TgZ(4,"p",1),n._uU(5," \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0634\u062e\u0635\u06cc \u062e\u0648\u062f \u0631\u0627 \u06a9\u0627\u0645\u0644 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u062f\u0631 \u0632\u0645\u0627\u0646 \u062e\u0631\u06cc\u062f \u062a\u062c\u0631\u0628\u0647 \u0628\u0647\u062a\u0631\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f "),n.qZA(),n.TgZ(6,"form",2)(7,"div",3),n._UZ(8,"input",4)(9,"input",5)(10,"input",6),n.TgZ(11,"label"),n._uU(12,"\u062a\u0627\u0631\u06cc\u062e \u062a\u0648\u0644\u062f "),n.TgZ(13,"app-date-input",7),n.NdJ("valueChange",function(s){return r.onBirthdayChange(s)}),n.qZA()(),n._UZ(14,"input",8)(15,"input",9)(16,"input",10)(17,"input",11),n.qZA(),n.TgZ(18,"label",12)(19,"span"),n._uU(20," \u0627\u06cc\u0645\u06cc\u0644 "),n.qZA(),n._UZ(21,"input",13),n.qZA(),n.TgZ(22,"div",14)(23,"app-icon",15),n.NdJ("click",function(){return r.toggleEye()}),n.qZA(),n.TgZ(24,"span"),n._uU(25,"8"),n.qZA(),n._UZ(26,"input",16),n.qZA()()(),n.TgZ(27,"footer")(28,"button",17),n.NdJ("click",function(){return r.formSubmit()}),n._uU(29," \u062b\u0628\u062a "),n.qZA(),n.TgZ(30,"button",18),n._uU(31,"\u0627\u0646\u0635\u0631\u0627\u0641"),n.qZA()()()),2&t&&(n.xp6(6),n.Q6J("formGroup",r.profileForm),n.xp6(17),n.ekj("hidePassword",!r.showPassword),n.xp6(3),n.Q6J("type",r.showPassword?"text":"password"))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,N.V,L.Y,M.o,b.H],styles:["main[_ngcontent-%COMP%]{background:#E5E5E5;border-radius:1rem}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1rem}main[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{color:#aaabb0;font-size:.8rem}main[_ngcontent-%COMP%]   .gridInputs[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem;gap:1rem;margin-bottom:1rem}main[_ngcontent-%COMP%]   .emailBox[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;margin-bottom:1rem}main[_ngcontent-%COMP%]   .emailBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#aaabb0;margin-right:1rem}main[_ngcontent-%COMP%]   .emailBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{direction:ltr}main[_ngcontent-%COMP%]   .passwordBox[_ngcontent-%COMP%]{display:flex;background-color:#fff;border-radius:1rem;padding:.5rem 1rem;align-items:center;gap:1rem}main[_ngcontent-%COMP%]   .passwordBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{direction:ltr;all:unset;flex:1}main[_ngcontent-%COMP%]   .passwordBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#555459;color:#fff;padding:.2rem 1rem .1rem;border-radius:.5rem;line-height:.7rem}main[_ngcontent-%COMP%]   .passwordBox[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{background-color:#555459;padding:.25rem .4rem;border-radius:.5rem}main[_ngcontent-%COMP%]   .passwordBox[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]     svg{transition:all .1s ease;transform:scaleY(.1)}main[_ngcontent-%COMP%]   .passwordBox[_ngcontent-%COMP%]   app-icon.hidePassword[_ngcontent-%COMP%]     svg{transform:scaleY(1)}main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{background:#313133;padding:2rem;border-radius:0 0 1rem 1rem;display:flex;gap:1rem;align-items:center;justify-content:flex-end}main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{background:#6462FC66}"]}),e})();var Z=u(6042),j=u(2643),q=u(2683);function k(e,o){if(1&e&&(n.TgZ(0,"tr")(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td")(10,"button",3),n._uU(11,"\u0645\u0634\u0627\u0647\u062f\u0647"),n.qZA()()()),2&e){const t=o.$implicit;n.xp6(2),n.Oqu(t.name),n.xp6(2),n.Oqu(t.number),n.xp6(2),n.Oqu(t.insured),n.xp6(2),n.Oqu(t.status)}}const Q=[{path:"",component:B,children:[{path:"myInsurance",component:(()=>{class e{constructor(){this.insuranceList=[{name:"\u0634\u062e\u0635 \u062b\u0627\u0644\u062b - \u0622\u0633\u06cc\u0627",number:"30747818",insured:"\u067e\u0631\u0627\u06cc\u062f 132",status:"\u0635\u0627\u062f\u0631 \u0634\u062f\u0647 - \u0645\u0639\u062a\u0628\u0631"},{name:"\u0622\u062a\u0634 \u0633\u0648\u0632\u06cc - \u0645\u0644\u062a",number:"12345678",insured:"\u062e\u0627\u0646\u0647 \u0633\u0639\u0627\u062f\u062a \u0622\u0628\u0627\u062f",status:"\u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631 \u067e\u0631\u062f\u0627\u062e\u062a"},{name:"\u0628\u062f\u0646\u0647 - \u0627\u06cc\u0631\u0627\u0646",number:"12345678",insured:"\u067e\u0698\u0648 405",status:"\u0648\u0631\u0648\u062f \u0627\u0637\u0644\u0627\u0639\u0627\u062a"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-my-insurance"]],decls:26,vars:1,consts:[[1,"content"],[1,"hint"],[1,"body"],["nz-button","","nzType","primary"],[4,"ngFor","ngForOf"],["appButton","","appSizeButton","small"]],template:function(t,r){1&t&&(n.TgZ(0,"main")(1,"div",0)(2,"h1"),n._uU(3,"\u0628\u06cc\u0645\u0647 \u0647\u0627\u06cc \u0645\u0646"),n.qZA(),n.TgZ(4,"p",1),n._uU(5,"\u0628\u06cc\u0645\u0647 \u0647\u0627\u06cc \u062e\u0631\u06cc\u062f\u0627\u0631\u06cc \u0634\u062f\u0647"),n.qZA(),n.TgZ(6,"div",2)(7,"table")(8,"thead")(9,"tr")(10,"th"),n._uU(11,"\u0628\u06cc\u0645\u0647 - \u0634\u0631\u06a9\u062a"),n.qZA(),n.TgZ(12,"th"),n._uU(13,"\u0634\u0645\u0627\u0631\u0647 \u0633\u0641\u0627\u0631\u0634"),n.qZA(),n.TgZ(14,"th"),n._uU(15,"\u0628\u06cc\u0645\u0647 \u0634\u062f\u0647"),n.qZA(),n.TgZ(16,"th"),n._uU(17,"\u0648\u0636\u0639\u06cc\u062a"),n.qZA(),n.TgZ(18,"th")(19,"button",3),n._uU(20,"\u0646\u0645\u0627\u06cc\u0634/\u0627\u062f\u0627\u0645\u0647"),n.qZA()()()(),n.TgZ(21,"tbody"),n.YNc(22,k,12,4,"tr",4),n.qZA()()()(),n.TgZ(23,"footer")(24,"button",5),n._uU(25,"\u0627\u0646\u0635\u0631\u0627\u0641"),n.qZA()()()),2&t&&(n.xp6(22),n.Q6J("ngForOf",r.insuranceList))},directives:[Z.ix,j.dQ,q.w,d.sg,b.H],styles:["main[_ngcontent-%COMP%]{background:#E5E5E5;border-radius:1rem}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1rem}main[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{color:#aaabb0;font-size:.8rem}main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{min-height:300px}main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:500;padding:.5rem;text-align:right}main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid transparent;border-radius:.3rem}main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{border-color:#888}main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.5rem}main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.7rem}main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{background:#313133;padding:2rem;border-radius:0 0 1rem 1rem;display:flex;gap:1rem;align-items:center;justify-content:flex-end}main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{background:#6462FC66}"]}),e})()},{path:"requests",component:m},{path:"personnelDetail",component:m},{path:"wallet",component:m},{path:"",redirectTo:"personnelDetail",pathMatch:"full"}]}];let $=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[p.Bz.forChild(Q)],p.Bz]}),e})();var l=u(4394),Y=u(9300),y=u(3900),F=u(4004),D=u(2420);let G=(()=>{class e{constructor(t,r,c){this.actions$=t,this.profileService=r,this.profileFacade=c,this.loadProfile=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(C),(0,l.IC)(()=>this.profileFacade.userProfile$),(0,Y.h)(([,s])=>!s.first_name),(0,y.w)(()=>this.profileService.loadProfile().pipe((0,F.U)(s=>P({profile:s.data})))))),this.updateProfile=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(h),(0,y.w)(({profile:s})=>this.profileService.updateProfile(s).pipe((0,F.U)(()=>_({profile:s}))))))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(l.eX),n.LFG(D.H),n.LFG(g))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})(),H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[d.ez,p.Bz,$,v.m,Z.sL,a.Aw.forFeature(O),l.sQ.forFeature([G]),i.UX]]}),e})()}}]);