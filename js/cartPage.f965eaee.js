"use strict";(self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[]).push([[63],{2004:function(e,t,c){c.r(t),c.d(t,{default:function(){return T}});var a=c(6252),r=c(3577);const s=e=>((0,a.dD)("data-v-cef085d2"),e=e(),(0,a.Cn)(),e),l=s((()=>(0,a._)("h1",{class:"text-center mb-4"},"Cart",-1))),i={key:0,class:"text-center"},d=s((()=>(0,a._)("p",null,"Your cart is empty.",-1))),n=[d],o={key:1},u={class:"row g-0"},m={class:"col-md-4 d-flex align-items-center"},v=["src","alt"],p={class:"col-md-8"},_={class:"card-body"},g={class:"card-title"},w={class:"card-text"},k={class:"product-details__price mb-3"},f={class:"price"},C=["onClick"],b={class:"total-price text-end"},h={key:2,class:"text-center text-success mt-4"};function x(e,t,c,s,d,x){return(0,a.wg)(),(0,a.iD)("main",null,[l,0===s.cartItems.length?((0,a.wg)(),(0,a.iD)("div",i,n)):((0,a.wg)(),(0,a.iD)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.cartItems,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"card mb-3 pt-3"},[(0,a._)("div",u,[(0,a._)("div",m,[(0,a._)("img",{src:e.image,alt:e.title,class:"img-fluid cart-image"},null,8,v)]),(0,a._)("div",p,[(0,a._)("div",_,[(0,a._)("h5",g,(0,r.zw)(e.title),1),(0,a._)("div",w,[(0,a._)("div",k,[(0,a.Uk)(" Price: "),(0,a._)("span",f,(0,r.zw)(e.price),1)]),(0,a._)("button",{onClick:t=>s.removeFromCart(e.id),class:"btn btn-danger"}," Remove ",8,C)])])])])])))),128)),(0,a._)("div",b," Total Price: "+(0,r.zw)(s.calculateTotalPrice),1)])),s.productAdded?((0,a.wg)(),(0,a.iD)("p",h," Product added to cart. ")):(0,a.kq)("",!0)])}var D=c(3907),y=c(2262),P={name:"CartView",setup(){const e=(0,D.oR)(),t=(0,a.Fl)((()=>e.getters.cartItems)),c=(0,y.iH)(!1),r=t=>{e.dispatch("removeFromCart",t)},s=(0,a.Fl)((()=>t.value.reduce(((e,t)=>e+t.price),0)));return(0,a.YP)(t,(()=>{t.value.length>0&&(c.value=!0,setTimeout((()=>{c.value=!1}),3e3))})),{cartItems:t,productAdded:c,removeFromCart:r,calculateTotalPrice:s}}},F=c(3744);const I=(0,F.Z)(P,[["render",x],["__scopeId","data-v-cef085d2"]]);var T=I}}]);
//# sourceMappingURL=cartPage.f965eaee.js.map