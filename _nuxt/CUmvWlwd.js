import{_ as f}from"./B6PdMA8h.js";import{_ as p,c as e,F as i,m as d,n as k,o,a as n,t as l,b as g,w as y}from"./CAsyAixT.js";import{g as b}from"./DL6YdULe.js";const v={name:"IndexPg",components:{},data(){return{books_meta:[]}},mounted(){this.fetchData()},methods:{linkTo(t,a){return b(t,a)},createNumberArray(t){return Array.from({length:t},(a,c)=>c+1)},async fetchData(){console.log("fd");try{const t=await k();this.books_meta=await t.data.books,console.log("bm",this.books_meta)}catch(t){console.error("XX Error fetching data:",t)}}}},x={class:"page"},w={class:"grid-container"},B={class:"grid-item"};function N(t,a,c,A,m,_){const u=f;return o(),e("div",x,[(o(!0),e(i,null,d(m.books_meta,(h,r)=>(o(),e("div",{class:"card-elegant",key:r},[n("h3",null,"Book "+l(r+1),1),n("div",w,[(o(!0),e(i,null,d(_.createNumberArray(h.len),s=>(o(),e("div",{key:s},[g(u,{to:_.linkTo(r+1,s)},{default:y(()=>[n("div",B,l(s),1)]),_:2},1032,["to"])]))),128))])]))),128))])}const F=p(v,[["render",N],["__scopeId","data-v-c65ad2f4"]]);export{F as default};
