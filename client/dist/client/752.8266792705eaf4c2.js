"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[752],{3752:(y,d,o)=>{o.r(d),o.d(d,{UsersModule:()=>C});var g=o(294),e=o(8256),p=o(3071),_=o(4367),u=o(6895),i=o(433);function m(n,s){if(1&n&&(e.TgZ(0,"th",20),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.Oqu(t)}}function f(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"td",31)(1,"label",32)(2,"input",33),e.NdJ("ngModelChange",function(a){const l=e.CHM(t).$implicit,M=e.oxw().$implicit;return e.KtG(M.is[l]=a)})("ngModelChange",function(){e.CHM(t);const a=e.oxw().$implicit,c=e.oxw();return e.KtG(c.us.save(a))}),e.qZA(),e.TgZ(3,"div",34)(4,"span",35),e.O4$(),e.TgZ(5,"svg",36),e._UZ(6,"use",37),e.qZA()()()()()}if(2&n){const t=s.$implicit,r=e.oxw().$implicit;e.xp6(2),e.Q6J("ngModel",r.is[t])}}function h(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr",21)(1,"td",22)(2,"div",23)(3,"div",24),e._UZ(4,"img",25),e.qZA(),e.TgZ(5,"div",26),e._uU(6),e.qZA()()(),e.TgZ(7,"td",27),e._uU(8),e.qZA(),e.YNc(9,f,7,1,"td",28),e.TgZ(10,"td",29)(11,"i",30),e.NdJ("click",function(){const c=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.us.delete(c))}),e._uU(12,"delete"),e.qZA()()()}if(2&n){const t=s.$implicit,r=e.oxw();e.xp6(4),e.Q6J("src",t.avatarUrl||"assets/default.png",e.LSH),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.email),e.xp6(1),e.Q6J("ngForOf",r.us.roles)}}let b=(()=>{class n{constructor(t,r){this.us=t,this.ui=r,this.search="",this.new_user={}}delete(){for(let t=this.us.users.length-1;t>=0;t--)this.us.users[t].generated&&this.us.delete(this.us.users[t])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.KD),e.Y36(_.Fz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-users"]],decls:27,vars:8,consts:[[1,"users","container","w-card","_pd"],[1,"users__header","w-card__header"],[1,"users-field",3,"ngSubmit"],[1,"w-forms"],[1,"w-forms__title"],["type","text","name","new user","placeholder","Email",1,"w-forms__input",3,"ngModel","ngModelChange"],["type","submit",1,"w-btn","_primary",3,"disabled"],[1,"w-table-wrap"],[1,"w-table"],[1,"w-table-header"],[1,"w-table-header__tr"],[1,"w-table__th","user"],[1,"w-table__th","email"],["class","w-table__th role",4,"ngFor","ngForOf"],[1,"w-table__th","actions"],[1,"w-table-body"],["class","w-table-body__tr",4,"ngFor","ngForOf"],[1,"w-checkbox__svg-icon"],["id","check","viewbox","0 0 12 10"],["points","1.5 6 4.5 9 10.5 1"],[1,"w-table__th","role"],[1,"w-table-body__tr"],[1,"w-table__td","user"],[1,"w-table-user"],[1,"w-table-user__img"],["alt","User Avatar","height","50","width","50",3,"src"],[1,"w-table-user__text"],[1,"w-table__td","email"],["class","w-table__td role",4,"ngFor","ngForOf"],[1,"w-table__td","actions"],[1,"material-icons",3,"click"],[1,"w-table__td","role"],[1,"w-checkbox"],["type","checkbox","name","role name",1,"w-checkbox__input",3,"ngModel","ngModelChange"],[1,"w-checkbox__body"],[1,"w-checkbox__svg"],["width","12px","height","10px"],[0,"xlink","href","#check"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Users (Admin)"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return r.us.create(r.new_user),r.new_user={}}),e.TgZ(4,"label",3)(5,"span",4),e._uU(6,"New User"),e.qZA(),e.TgZ(7,"input",5),e.NdJ("ngModelChange",function(c){return r.new_user.email=c}),e.qZA()(),e.TgZ(8,"button",6),e._uU(9,"Create"),e.qZA()(),e.TgZ(10,"div",7)(11,"table",8)(12,"thead",9)(13,"tr",10)(14,"th",11),e._uU(15,"User"),e.qZA(),e.TgZ(16,"th",12),e._uU(17,"Email"),e.qZA(),e.YNc(18,m,2,1,"th",13),e.TgZ(19,"th",14),e._uU(20,"Actions"),e.qZA()()(),e.TgZ(21,"tbody",15),e.YNc(22,h,13,4,"tr",16),e.ALo(23,"search"),e.qZA()()()(),e.O4$(),e.TgZ(24,"svg",17)(25,"symbol",18),e._UZ(26,"polyline",19),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("ngModel",r.new_user.email),e.xp6(1),e.Q6J("disabled",!r.ui.valid(r.new_user.email)),e.xp6(10),e.Q6J("ngForOf",r.us.roles),e.xp6(4),e.Q6J("ngForOf",e.Dn7(23,4,r.us.users,r.search,"name email")))},dependencies:[u.sg,i._Y,i.Fj,i.Wl,i.JJ,i.JL,i.On,i.F,_.Cf],styles:['[_ngcontent-%COMP%]:root{--c-white: #fff;--c-black: #000;--c-grey: #e7e7e7;--c-grey-dark: #bfbfbf;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-warn: #e67e22;--c-error: #e74c3c;--c-error-hover: #d62c1a;--c-success: #14c76e;--c-info: #17a2b8;--container: 1210px;--b-radius: 8px;--b-radius-card: 10px;--b-radius-btn: 10px;--b-radius-img: 50%;--padding: 10px;--fs: 16px;--ff-bold: bold;--ff-base: "Poppins", sans-serif;--letter-spacing: .3px;--transition: .3s all ease-in-out}html.dark[_ngcontent-%COMP%]:root{--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}[_nghost-%COMP%]{flex-grow:1;display:flex;flex-direction:column;padding:20px}.table-user[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap}.table-user__img[_ngcontent-%COMP%]{width:30px;height:30px;min-width:30px;min-height:30px;margin-right:10px}.table-user__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:var(--b-radius-img)}@media (max-width: 991.9px){.table-user__img[_ngcontent-%COMP%]{display:none}}@media (max-width: 991.9px){.w-table[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .w-table[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]{display:none}}.w-table[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{height:18px;max-height:18px;display:block}.w-table[_ngcontent-%COMP%]   .checkbox__body[_ngcontent-%COMP%]{padding:2px}.users-field[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.users-field[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:10px}.users-field[_ngcontent-%COMP%]   .forms[_ngcontent-%COMP%]{width:100%}@media (max-width: 575.9px){.users-field[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.users-field[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin-bottom:20px;width:100%}}.w-table__td.actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{transition:var(--transition)}.w-table__td.actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:hover{color:var(--c-error)}.users__header[_ngcontent-%COMP%]{letter-spacing:0;line-height:23px;font-weight:500;font-size:20px;color:var(--c-text-primary);display:flex;justify-content:space-between;align-items:center;border-radius:var(--b-radius)}']}),n})();var w=o(8602);const x=[{path:"",component:b}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[w.Bz.forChild(x),g.I]}),n})()}}]);