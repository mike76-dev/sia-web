(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{7441:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contracts",function(){return s(7132)}])},362:function(e,t,s){"use strict";s.d(t,{J:function(){return o}});var n=s(2322),l=s(7350),c=s(3621),a=s(6391),i=s.n(a),r=s(4881);function o(e){let t=(0,c.tM)();return(0,n.jsx)(l.tU3,{appName:"renterd",connectivityRoute:r.h,walletBalance:t.data?new(i())(t.data):void 0,...e})}},9592:function(e,t,s){"use strict";s.d(t,{e:function(){return r}});var n=s(2322),l=s(7350);function c(e){let{size:t=24}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:t,width:t,fill:"currentColor",viewBox:"0 0 512 512",children:[(0,n.jsx)("path",{d:"M361.975 224.499c0 9.58 7.766 17.344 17.344 17.344c9.58 0 17.34-7.768 17.34-17.344c0-72.711-59.152-131.868-131.853-131.868c-9.58 0-17.344 7.764-17.344 17.341c0 9.58 7.764 17.344 17.344 17.344C318.383 127.314 361.974 170.91 361.975 224.499z"}),(0,n.jsx)("path",{d:"M264.806 0c-9.58 0-17.344 7.768-17.344 17.344c0 9.576 7.763 17.341 17.344 17.341c104.648 0.003 189.785 85.152 189.785 189.814c0 9.576 7.766 17.344 17.342 17.344c9.578 0 17.344-7.768 17.344-17.344C489.275 100.711 388.577 0.003 264.806 0z"}),(0,n.jsx)("path",{d:"M101.971 74.983c-3.272-3.275-7.696-5.08-12.264-5.08c-0.777 0-1.56 0.053-2.343 0.159c-5.37 0.734-10.088 3.936-12.755 8.654c-54.225 95.991-37.602 217.536 40.424 295.572c46.561 46.57 108.472 72.216 174.327 72.22c0.005 0 0.009 0 0.014 0c42.487 0 84.399-10.993 121.201-31.787c4.718-2.667 7.92-7.383 8.651-12.753c0.734-5.37-1.086-10.774-4.917-14.607L101.971 74.983z"}),(0,n.jsx)("path",{d:"M298.517 190.512c-15.494-15.498-37.459-20.637-57.28-15.484l72.77 72.778C319.155 227.983 314.015 206.014 298.517 190.512z"}),(0,n.jsx)("path",{d:"M79.639 376.716l-55.084 110.185c-2.688 5.377-2.4 11.76 0.76 16.875c3.16 5.111 8.74 8.223 14.753 8.223h229.216c9.578 0 17.342-7.764 17.342-17.342v-20.437c-72.244-0.703-140.059-29.151-191.214-80.313C89.872 388.367 84.618 382.629 79.639 376.716z"})]})}var a=s(4881),i=s(3121);function r(){let{autopilotMode:e}=(0,i.K)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.KJW,{title:"Files",route:a._.files.index,children:(0,n.jsx)(l.ROc,{})}),"on"===e&&(0,n.jsx)(l.KJW,{title:"Autopilot",route:a._.autopilot.index,children:(0,n.jsx)(l.aFQ,{})}),(0,n.jsx)(l.KJW,{title:"Contracts",route:a._.contracts.index,children:(0,n.jsx)(l.VBo,{})}),(0,n.jsx)(l.KJW,{title:"Hosts",route:a._.hosts.index,children:(0,n.jsx)(l.VHe,{})}),(0,n.jsx)(l.KJW,{title:"Configuration",route:a._.config.index,children:(0,n.jsx)(l.wWN,{})}),(0,n.jsx)(l.KJW,{title:"Satellite",route:a._.satellite.index,children:(0,n.jsx)(c,{})})]})}},7132:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return C}});var n=s(2322),l=s(9592),c=s(4881),a=s(7350),i=s(650),r=s(1075),o=s(362);function x(){return(0,n.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,n.jsx)(a.xvT,{children:(0,n.jsx)(a.Hb6,{className:"scale-[200%]"})}),(0,n.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No active contracts matching filters."})]})}function u(){return(0,n.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,n.jsx)(a.xvT,{children:(0,n.jsx)(a.VBo,{className:"scale-[200%]"})}),(0,n.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"There are currently no active contracts. Configure autopilot or manually form contracts to get started."})]})}function d(){let{configurableColumns:e,toggleColumnVisibility:t,resetDefaultColumnVisibility:s,setColumnsVisible:l,setColumnsHidden:c,sortOptions:i,sortColumn:o,setSortColumn:x,sortDirection:u,setSortDirection:d,enabledColumns:j}=(0,r.G)(),h=e.filter(e=>"general"===e.category).map(e=>({label:e.label,value:e.id})),f=e.filter(e=>"time"===e.category).map(e=>({label:e.label,value:e.id})),m=e.filter(e=>"financial"===e.category).map(e=>({label:e.label,value:e.id}));return(0,n.jsxs)(a.J2e,{trigger:(0,n.jsxs)(a.zxk,{size:"small",tip:"Configure view",tipAlign:"end",children:[(0,n.jsx)(a.hiv,{}),"View",(0,n.jsx)(a.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,n.jsxs)(a.WVB,{children:[(0,n.jsx)(a.__J,{children:"Order by"}),(0,n.jsx)(a.kFS,{children:(0,n.jsx)(a.PhF,{value:o,onChange:e=>{x(e.currentTarget.value)},children:Object.entries(i).map(e=>{let[t,s]=e;return(0,n.jsx)("optgroup",{label:t,children:s.map(e=>(0,n.jsx)(a.Wxm,{value:e.id,children:e.label},e.id))},t)})})})]}),(0,n.jsxs)(a.WVB,{children:[(0,n.jsx)(a.__J,{children:"Direction"}),(0,n.jsx)(a.kFS,{children:(0,n.jsxs)(a.PhF,{value:u,onClick:e=>{e.stopPropagation()},onChange:e=>{d(e.currentTarget.value)},children:[(0,n.jsx)(a.Wxm,{value:"desc",children:"Descending"},"desc"),(0,n.jsx)(a.Wxm,{value:"asc",children:"Ascending"},"asc")]})})]}),(0,n.jsx)(a.Clw,{}),(0,n.jsxs)(a.WVB,{children:[(0,n.jsx)(a.__J,{children:"Display properties"}),(0,n.jsx)(a.kFS,{children:(0,n.jsx)(a.zxk,{tip:"Reset all to defaults",variant:"ghost",onClick:e=>{e.stopPropagation(),s()},children:(0,n.jsx)(a.Wet,{})})})]}),(0,n.jsx)(a.FzK,{label:"General",columns:h.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:c}),(0,n.jsx)(a.WVB,{children:(0,n.jsx)(a.j4H,{options:h,values:j,onChange:e=>t(e)})}),(0,n.jsx)(a.FzK,{label:"Time",columns:f.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:c}),(0,n.jsx)(a.WVB,{children:(0,n.jsx)(a.j4H,{options:f,values:j,onChange:e=>t(e)})}),(0,n.jsx)(a.FzK,{label:"Financial",columns:m.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:c}),(0,n.jsx)(a.WVB,{children:(0,n.jsx)(a.j4H,{options:m,values:j,onChange:e=>t(e)})})]})}function j(){return(0,n.jsx)("div",{className:"flex gap-2",children:(0,n.jsx)(d,{})})}function h(){return(0,n.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,n.jsx)(a.xvT,{children:(0,n.jsx)(a.Ckx,{className:"scale-[200%]"})}),(0,n.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Error fetching contracts."})]})}var f=s(9182),m=s(2784),p=s(7039);function v(){let{filters:e,removeFilter:t,removeLastFilter:s}=(0,r.G)(),[l,c]=(0,m.useState)(!1),[i,o]=(0,m.useState)(""),[x,u]=(0,m.useState)([]),d=x[x.length-1],j=(x.length,(0,m.useRef)(null)),h=(0,m.useRef)(null),v=(0,m.useCallback)(e=>{u(t=>[...t,e])},[u]),g=(0,m.useCallback)(()=>{u([])},[u]);(0,m.useEffect)(()=>{let e=e=>{j.current&&!j.current.contains(e.target)&&c(!1)};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}},[]);let b=(0,m.useCallback)(()=>{var e;null===(e=h.current)||void 0===e||e.focus()},[h]),C=(0,m.useCallback)(()=>{o(""),g()},[g]);return(0,n.jsxs)("div",{className:"flex gap-1",children:[e.map(e=>(0,n.jsxs)(a.eQh,{children:[(0,n.jsx)(a.zxk,{variant:"active",state:"waiting",children:e.label}),(0,n.jsx)(a.zxk,{variant:"active",size:"small",onClick:()=>t(e.id),children:(0,n.jsx)(a.PcV,{})})]},e.id)),(0,n.jsxs)(f.mY,{ref:j,label:"Command Menu",onFocus:()=>c(!0),onKeyDown:e=>{if(x.length>0)"Escape"!==e.key&&("Backspace"!==e.key||i)||(e.preventDefault(),u(e=>e.slice(0,-1)));else if(0===x.length&&("Backspace"!==e.key||i||s(),"Escape"===e.key&&!i)){var t;c(!1),null===(t=h.current)||void 0===t||t.blur()}},children:[(0,n.jsx)(f.mY.Input,{ref:h,value:i,onValueChange:o,className:(0,a.cEb)({variant:"ghost",focus:"none"}),placeholder:"Filter contracts"}),l&&(0,n.jsx)(a.s_4,{className:"absolute z-20 min-w-[200px] max-h-[400px] overflow-auto p-1",children:(0,n.jsxs)(a.xrM,{children:[d&&(0,n.jsx)(a.__J,{className:"px-1.5 py-1",children:d.label}),(0,n.jsx)(f.mY.List,{children:(0,n.jsx)(p.F,{currentPage:d,beforeSelect:b,afterSelect:C,pushPage:v})})]})})]})]})}function g(){let{dataState:e,offset:t,limit:s,datasetCount:l,pageCount:c}=(0,r.G)();return(0,n.jsxs)("div",{className:"flex gap-2 w-full",children:[(0,n.jsx)(v,{}),(0,n.jsx)("div",{className:"flex-1"}),(0,n.jsx)(a.uDJ,{isLoading:"loading"===e,offset:t,limit:s,datasetTotal:l,pageTotal:c})]})}function b(){let{openDialog:e}=(0,i.Rh)(),{columns:t,datasetPage:s,sortColumn:d,sortDirection:f,toggleSort:m,limit:p,dataState:v,cellContext:b}=(0,r.G)();return(0,n.jsx)(o.J,{title:"Active contracts",routes:c._,sidenav:(0,n.jsx)(l.e,{}),openSettings:()=>e("settings"),stats:(0,n.jsx)(g,{}),size:"full",actions:(0,n.jsx)(j,{}),children:(0,n.jsx)("div",{className:"p-6 min-w-fit",children:(0,n.jsx)(a.iA_,{context:b,isLoading:"loading"===v,emptyState:"noneMatchingFilters"===v?(0,n.jsx)(x,{}):"noneYet"===v?(0,n.jsx)(u,{}):"error"===v?(0,n.jsx)(h,{}):null,pageSize:p,data:s,columns:t,sortDirection:f,sortColumn:d,toggleSort:m})})})}function C(){return(0,n.jsx)(b,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7441)}),_N_E=e.O()}]);