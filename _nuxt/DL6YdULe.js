const s=t=>({book:t.split("-")[0],chapter:t.split("-")[1]}),a=t=>t.split(",").map(r=>s(r)),n=t=>{var r="/section/";return t.forEach(e=>{r+=e.book+"-"+e.chapter+","}),r.slice(0,-1)},p=(t,r)=>"/section/"+t+"-"+r;export{n as a,p as g,a as p};
