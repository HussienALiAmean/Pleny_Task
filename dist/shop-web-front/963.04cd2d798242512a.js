"use strict";(self.webpackChunkShop_web_Front=self.webpackChunkShop_web_Front||[]).push([[963],{3963:(b,a,c)=>{c.r(a),c.d(a,{AdminModule:()=>P});var u=c(6895),p=c(6115),t=c(1571),g=c(4069),l=c(433),m=c(455);function _(o,s){1&o&&(t.TgZ(0,"span"),t._uU(1,"\u25b2"),t.qZA())}function h(o,s){1&o&&(t.TgZ(0,"span"),t._uU(1,"\u25bc"),t.qZA())}function C(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"input",14),t.NdJ("ngModelChange",function(i){const d=t.CHM(e).$implicit;return t.KtG(d.price=i)})("change",function(){const r=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.updateProduct(r))}),t.qZA()(),t.TgZ(5,"td")(6,"input",14),t.NdJ("ngModelChange",function(i){const d=t.CHM(e).$implicit;return t.KtG(d.quantity=i)})("change",function(){const r=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.updateProduct(r))}),t.qZA()(),t.TgZ(7,"td")(8,"mat-slide-toggle",15),t.NdJ("ngModelChange",function(i){const d=t.CHM(e).$implicit;return t.KtG(d.isVisible=i)})("change",function(){const r=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.updateProduct(r))}),t.qZA()(),t.TgZ(9,"td")(10,"button",16),t.NdJ("click",function(){const r=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.deleteProduct(r.id))}),t._uU(11," Delete "),t.O4$(),t.TgZ(12,"svg",17),t._UZ(13,"path",18)(14,"path",19),t.qZA()()()()}if(2&o){const e=s.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Q6J("ngModel",e.price),t.xp6(2),t.Q6J("ngModel",e.quantity),t.xp6(2),t.Q6J("ngModel",e.isVisible)}}const A=[{path:"",component:(()=>{class o{constructor(e){this.productService=e,this.filterText="",this.newProduct={id:0,name:"",description:"",price:0,quantity:0,isVisible:!1},this.isSortAsc=!0}ngOnInit(){this.getAllProducts()}getAllProducts(){this.getAllProductsSubscription=this.productService.getAllProducts().subscribe({next:e=>{this.Products=e,this.filteredProducts=e,this.newProduct={id:0,name:"",description:"",price:0,quantity:0,isVisible:!1}},error:()=>{alert("error")}})}sortByName(){this.isSortAsc=!this.isSortAsc,this.filteredProducts.sort((e,n)=>this.isSortAsc?e.name.localeCompare(n.name):n.name.localeCompare(e.name))}filterProducts(){this.filteredProducts=this.Products.filter(e=>e.name.toLowerCase().includes(this.filterText.toLowerCase()))}updateProduct(e){this.updateProductSubscription=this.productService.updateProduct(e.id,e).subscribe({next:()=>{this.getAllProducts()},error:n=>{console.log(n)}})}addProduct(){this.newProduct.name&&this.newProduct.price&&this.newProduct.quantity&&this.productService.createProduct(this.newProduct).subscribe({next:e=>{console.log(e),this.getAllProducts()},error:e=>{console.log(e)}})}deleteProduct(e){this.deleteProductSubscription=this.productService.deleteProduct(e).subscribe({next:()=>{this.getAllProducts()},error:n=>{console.log(n)}})}ngOnDestroy(){this.getAllProductsSubscription.unsubscribe(),this.updateProductSubscription.unsubscribe(),this.deleteProductSubscription.unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.M))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-admin"]],decls:38,vars:9,consts:[[1,"container","mt-4"],[1,"row","form-group"],[1,"col-2","p-4"],["for","filter"],[1,"col-10","p-3"],["type","text","id","filter","placeholder","Enter product name",1,"form-control",3,"ngModel","ngModelChange","input"],[1,"table","table-bordered"],[3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"],["type","text",3,"ngModel","ngModelChange"],["type","number","min","0",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[1,"btn","btn-primary",3,"disabled","click"],["type","number","min","0",3,"ngModel","ngModelChange","change"],[3,"ngModel","ngModelChange","change"],[1,"btn","btn-danger",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash"],["d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"],["d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"Products"),t.qZA(),t.TgZ(3,"div",1)(4,"div",2)(5,"label",3),t._uU(6,"Filter by Name:"),t.qZA()(),t.TgZ(7,"div",4)(8,"input",5),t.NdJ("ngModelChange",function(r){return n.filterText=r})("input",function(){return n.filterProducts()}),t.qZA()()(),t.TgZ(9,"table",6)(10,"thead")(11,"tr")(12,"th",7),t.NdJ("click",function(){return n.sortByName()}),t._uU(13,"Name "),t.YNc(14,_,2,0,"span",8),t.YNc(15,h,2,0,"span",8),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Price"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Quantity"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Visible"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Actions"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,C,15,4,"tr",9),t.TgZ(26,"tr")(27,"td")(28,"input",10),t.NdJ("ngModelChange",function(r){return n.newProduct.name=r}),t.qZA()(),t.TgZ(29,"td")(30,"input",11),t.NdJ("ngModelChange",function(r){return n.newProduct.price=r}),t.qZA()(),t.TgZ(31,"td")(32,"input",11),t.NdJ("ngModelChange",function(r){return n.newProduct.quantity=r}),t.qZA()(),t.TgZ(33,"td")(34,"mat-slide-toggle",12),t.NdJ("ngModelChange",function(r){return n.newProduct.isVisible=r}),t.qZA()(),t.TgZ(35,"td")(36,"button",13),t.NdJ("click",function(){return n.addProduct()}),t._uU(37,"Add Product"),t.qZA()()()()()()),2&e&&(t.xp6(8),t.Q6J("ngModel",n.filterText),t.xp6(6),t.Q6J("ngIf",n.isSortAsc),t.xp6(1),t.Q6J("ngIf",!n.isSortAsc),t.xp6(10),t.Q6J("ngForOf",n.filteredProducts),t.xp6(3),t.Q6J("ngModel",n.newProduct.name),t.xp6(2),t.Q6J("ngModel",n.newProduct.price),t.xp6(2),t.Q6J("ngModel",n.newProduct.quantity),t.xp6(2),t.Q6J("ngModel",n.newProduct.isVisible),t.xp6(2),t.Q6J("disabled",!n.newProduct.name||!n.newProduct.price||!n.newProduct.quantity))},dependencies:[u.sg,u.O5,l.Fj,l.wV,l.JJ,l.qQ,l.On,m.Rr],styles:["fieldset[_ngcontent-%COMP%]{border:1px solid}legend[_ngcontent-%COMP%]{font-weight:700;border:2px solid #000000}table[_ngcontent-%COMP%]{width:100%}th[_ngcontent-%COMP%]{cursor:pointer}.sort-indicator[_ngcontent-%COMP%]{font-size:.8em;margin-left:5px}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(A),p.Bz]}),o})();var M=c(4171);let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,f,l.u5,l.UX,M.q]}),o})()}}]);