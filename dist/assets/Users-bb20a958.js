import{a as g}from"./axios-21b846bc.js";import{_,u,r as p,o as v,a,c as n,b as r,F as I,d as y,t as c}from"./index-cf14ba4d.js";const f={name:"ByIdFire",setup(){const i=u(),t=p(null);return v(async()=>{try{const e="https://www.networkrooms.somee.com/api/Users",o=await g.get(e);t.value=o.data}catch(e){console.error(e)}}),{listaUsuarios:t,redirectToRegister:()=>{i.push("/register")},getImageSource:e=>e.startsWith("http")?e:`data:image/jpeg;base64,${e}`,moveImageUp:e=>{e.target.style.transform="translateY(-10px)"},resetImagePosition:e=>{e.target.style.transform="translateY(0)"}}}},h={class:"card-container"},U=["src"],b={class:"card-body"},x={class:"card-title"},R={class:"card-title"},k=r("br",null,null,-1),w={class:"button-container"};function B(i,t,d,s,l,m){return a(),n("div",null,[r("div",h,[(a(!0),n(I,null,y(s.listaUsuarios,e=>(a(),n("div",{key:e.roomId,class:"card"},[r("div",{class:"card-image-container",onMouseover:t[0]||(t[0]=(...o)=>s.moveImageUp&&s.moveImageUp(...o)),onMouseleave:t[1]||(t[1]=(...o)=>s.resetImagePosition&&s.resetImagePosition(...o))},[r("img",{src:s.getImageSource(e.foto),class:"card-img-top"},null,8,U)],32),r("div",b,[r("h2",x,c(e.nombre),1),r("h3",R,c(e.edad),1)])]))),128))]),k,r("div",w,[r("button",{class:"btn-primary",onClick:t[2]||(t[2]=(...e)=>s.redirectToRegister&&s.redirectToRegister(...e))},"Registrar")])])}const T=_(f,[["render",B]]);export{T as default};