(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{7441:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contracts",function(){return s(7132)}])},6133:function(e,n,s){"use strict";s.d(n,{J:function(){return x}});var t=s(2322),l=s(4866),i=s(3621),a=s(6391),r=s.n(a),c=s(4881),o=s(6095),u=s(650);function d(){var e,n;let{openDialog:s}=(0,u.Rh)(),a=(0,i.gM)({config:{swr:{revalidateOnFocus:!1}}}),r=(0,i.GJ)({config:{swr:{revalidateOnFocus:!1}}}),c=(0,i.cQ)(),d=(0,o.n)();return(0,t.jsxs)(l.HfT,{name:"renterd",peerCount:null===(e=c.data)||void 0===e?void 0:e.length,connectPeer:()=>s("connectPeer"),isSynced:d.isSynced,percent:d.percent,nodeBlockHeight:d.nodeBlockHeight,estimatedBlockHeight:d.estimatedBlockHeight,firstTimeSyncing:d.firstTimeSyncing,moreThan100BlocksToSync:d.moreThan100BlocksToSync,children:[(0,t.jsxs)("div",{className:"flex gap-2 justify-between items-center",children:[(0,t.jsx)(l.__J,{size:"14",color:"subtle",children:"Wallet address"}),(0,t.jsx)(l.xS1,{size:"14",value:r.data,type:"address"})]}),(0,t.jsxs)("div",{className:"flex gap-2 justify-between items-center",children:[(0,t.jsx)(l.__J,{size:"14",color:"subtle",children:"Network"}),(0,t.jsx)(l.xvT,{size:"14",children:null===(n=a.data)||void 0===n?void 0:n.Name})]})]})}function x(e){let n=(0,i.tM)(),{isSynced:s}=(0,o.n)();return(0,t.jsx)(l.tU3,{appName:"renterd",profile:(0,t.jsx)(d,{}),connectivityRoute:c.h,isSynced:s,walletBalance:n.data?new(r())(n.data):void 0,...e})}},5755:function(e,n,s){"use strict";s.d(n,{e:function(){return r}});var t=s(2322),l=s(4866),i=s(4881),a=s(3121);function r(){let{autopilotMode:e}=(0,a.K)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.KJW,{title:"Files",route:i._.files.index,children:(0,t.jsx)(l.ROc,{})}),"on"===e&&(0,t.jsx)(l.KJW,{title:"Autopilot",route:i._.autopilot.index,children:(0,t.jsx)(l.aFQ,{})}),(0,t.jsx)(l.KJW,{title:"Contracts",route:i._.contracts.index,children:(0,t.jsx)(l.VBo,{})}),(0,t.jsx)(l.KJW,{title:"Hosts",route:i._.hosts.index,children:(0,t.jsx)(l.VHe,{})}),(0,t.jsx)(l.KJW,{title:"Configuration",route:i._.config.index,children:(0,t.jsx)(l.wWN,{})})]})}},6095:function(e,n,s){"use strict";s.d(n,{n:function(){return i}});var t=s(2337),l=s(3621);function i(){var e,n;let{isUnlocked:s}=(0,t.Hv)(),i=(0,l.DQ)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.Synced)?6e4:1e4}}}),a=(0,l.nH)(),r=i.data?null===(e=i.data)||void 0===e?void 0:e.BlockHeight:0,c=s&&r&&a?Number((100*Math.min(r/a,1)).toFixed(1)):0;return{isSynced:null===(n=i.data)||void 0===n?void 0:n.Synced,nodeBlockHeight:r,estimatedBlockHeight:a,percent:c,moreThan100BlocksToSync:!!r&&!!a&&a-r>100,firstTimeSyncing:!!r&&!!a&&a-r>5e4}}},7132:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return k}});var t=s(2322),l=s(5755),i=s(4881),a=s(4866),r=s(650),c=s(5571),o=s(6133);function u(){return(0,t.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,t.jsx)(a.xvT,{children:(0,t.jsx)(a.Hb6,{className:"scale-[200%]"})}),(0,t.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No active contracts matching filters."})]})}function d(){return(0,t.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,t.jsx)(a.xvT,{children:(0,t.jsx)(a.VBo,{className:"scale-[200%]"})}),(0,t.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"There are currently no active contracts. Configure autopilot or manually form contracts to get started."})]})}function x(){let{configurableColumns:e,toggleColumnVisibility:n,resetDefaultColumnVisibility:s,setColumnsVisible:l,setColumnsHidden:i,sortOptions:r,sortColumn:o,setSortColumn:u,sortDirection:d,setSortDirection:x,enabledColumns:h}=(0,c.G)(),j=e.filter(e=>"general"===e.category).map(e=>({label:e.label,value:e.id})),m=e.filter(e=>"time"===e.category).map(e=>({label:e.label,value:e.id})),f=e.filter(e=>"financial"===e.category).map(e=>({label:e.label,value:e.id}));return(0,t.jsxs)(a.J2e,{trigger:(0,t.jsxs)(a.zxk,{size:"small",tip:"Configure view",tipAlign:"end",children:[(0,t.jsx)(a.hiv,{}),"View",(0,t.jsx)(a.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,t.jsxs)(a.WVB,{children:[(0,t.jsx)(a.__J,{children:"Order by"}),(0,t.jsx)(a.kFS,{children:(0,t.jsx)(a.PhF,{value:o,onChange:e=>{u(e.currentTarget.value)},children:Object.entries(r).map(e=>{let[n,s]=e;return(0,t.jsx)("optgroup",{label:n,children:s.map(e=>(0,t.jsx)(a.Wxm,{value:e.id,children:e.label},e.id))},n)})})})]}),(0,t.jsxs)(a.WVB,{children:[(0,t.jsx)(a.__J,{children:"Direction"}),(0,t.jsx)(a.kFS,{children:(0,t.jsxs)(a.PhF,{value:d,onClick:e=>{e.stopPropagation()},onChange:e=>{x(e.currentTarget.value)},children:[(0,t.jsx)(a.Wxm,{value:"desc",children:"descending"},"desc"),(0,t.jsx)(a.Wxm,{value:"asc",children:"ascending"},"asc")]})})]}),(0,t.jsx)(a.Clw,{}),(0,t.jsxs)(a.WVB,{children:[(0,t.jsx)(a.__J,{children:"Display properties"}),(0,t.jsx)(a.kFS,{children:(0,t.jsx)(a.zxk,{tip:"Reset all to defaults",variant:"ghost",onClick:e=>{e.stopPropagation(),s()},children:(0,t.jsx)(a.Wet,{})})})]}),(0,t.jsx)(a.FzK,{label:"General",columns:j.map(e=>e.value),enabled:h,setColumnsVisible:l,setColumnsHidden:i}),(0,t.jsx)(a.WVB,{children:(0,t.jsx)(a.j4H,{options:j,values:h,onChange:e=>n(e)})}),(0,t.jsx)(a.FzK,{label:"Time",columns:m.map(e=>e.value),enabled:h,setColumnsVisible:l,setColumnsHidden:i}),(0,t.jsx)(a.WVB,{children:(0,t.jsx)(a.j4H,{options:m,values:h,onChange:e=>n(e)})}),(0,t.jsx)(a.FzK,{label:"Financial",columns:f.map(e=>e.value),enabled:h,setColumnsVisible:l,setColumnsHidden:i}),(0,t.jsx)(a.WVB,{children:(0,t.jsx)(a.j4H,{options:f,values:h,onChange:e=>n(e)})})]})}function h(){return(0,t.jsx)("div",{className:"flex gap-2",children:(0,t.jsx)(x,{})})}function j(e){let{error:n}=e;return(null==n?void 0:n.message.startsWith("404"))?(0,t.jsx)(d,{}):(0,t.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,t.jsx)(a.xvT,{children:(0,t.jsx)(a.Ckx,{className:"scale-[200%]"})}),(0,t.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Error fetching contracts."})]})}var m=s(9182),f=s(2784),v=s(7039);function g(){let{filters:e,removeFilter:n,removeLastFilter:s}=(0,c.G)(),[l,i]=(0,f.useState)(!1),[r,o]=(0,f.useState)(""),[u,d]=(0,f.useState)([]),x=u[u.length-1],h=(u.length,(0,f.useRef)(null)),j=(0,f.useRef)(null),g=(0,f.useCallback)(e=>{d(n=>[...n,e])},[d]),p=(0,f.useCallback)(()=>{d([])},[d]);(0,f.useEffect)(()=>{let e=e=>{h.current&&!h.current.contains(e.target)&&i(!1)};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}},[]);let b=(0,f.useCallback)(()=>{var e;null===(e=j.current)||void 0===e||e.focus()},[j]),k=(0,f.useCallback)(()=>{o(""),p()},[p]);return(0,t.jsxs)("div",{className:"flex gap-1",children:[e.map(e=>(0,t.jsxs)(a.eQh,{children:[(0,t.jsx)(a.zxk,{variant:"active",state:"waiting",children:e.label}),(0,t.jsx)(a.zxk,{variant:"active",size:"small",onClick:()=>n(e.id),children:(0,t.jsx)(a.PcV,{})})]},e.id)),(0,t.jsxs)(m.mY,{ref:h,label:"Command Menu",onFocus:()=>i(!0),onKeyDown:e=>{if(u.length>0)"Escape"!==e.key&&("Backspace"!==e.key||r)||(e.preventDefault(),d(e=>e.slice(0,-1)));else if(0===u.length&&("Backspace"!==e.key||r||s(),"Escape"===e.key&&!r)){var n;i(!1),null===(n=j.current)||void 0===n||n.blur()}},children:[(0,t.jsx)(m.mY.Input,{ref:j,value:r,onValueChange:o,className:(0,a.cEb)({variant:"ghost",focus:"none"}),placeholder:"Filter contracts"}),l&&(0,t.jsx)(a.s_4,{className:"absolute z-20 min-w-[200px] max-h-[400px] overflow-auto p-1",children:(0,t.jsxs)(a.xrM,{children:[x&&(0,t.jsx)(a.__J,{className:"px-1.5 py-1",children:x.label}),(0,t.jsx)(m.mY.List,{children:(0,t.jsx)(v.F,{currentPage:x,beforeSelect:b,afterSelect:k,pushPage:g})})]})})]})]})}function p(){let{dataState:e,offset:n,limit:s,datasetCount:l,pageCount:i}=(0,c.G)();return(0,t.jsxs)("div",{className:"flex gap-2 w-full",children:[(0,t.jsx)(g,{}),(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)(a.uDJ,{isLoading:"loading"===e,offset:n,limit:s,datasetTotal:l,pageTotal:i})]})}function b(){let{openDialog:e}=(0,r.Rh)(),{columns:n,datasetPage:s,sortColumn:x,sortDirection:m,toggleSort:f,limit:v,dataState:g,cellContext:b,error:k}=(0,c.G)();return(0,t.jsx)(o.J,{title:"Active contracts",routes:i._,sidenav:(0,t.jsx)(l.e,{}),openSettings:()=>e("settings"),stats:(0,t.jsx)(p,{}),size:"full",actions:(0,t.jsx)(h,{}),children:(0,t.jsx)("div",{className:"p-6 min-w-fit",children:(0,t.jsx)(a.iA_,{context:b,isLoading:"loading"===g,emptyState:"noneMatchingFilters"===g?(0,t.jsx)(u,{}):"noneYet"===g?(0,t.jsx)(d,{}):"error"===g?(0,t.jsx)(j,{error:k}):null,pageSize:v,data:s,columns:n,sortDirection:m,sortColumn:x,toggleSort:f})})})}function k(){return(0,t.jsx)(b,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7441)}),_N_E=e.O()}]);