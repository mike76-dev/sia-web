(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{77441:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contracts",function(){return t(97132)}])},67465:function(e,n,t){"use strict";t.d(n,{J:function(){return h}});var s=t(52322),l=t(39140),a=t(73621),i=t(6391),r=t.n(i),c=t(74881),o=t(41491),d=t(99484);function u(){var e,n,t;let{openDialog:i}=(0,d.Rh)(),r=(0,a.gM)({config:{swr:{revalidateOnFocus:!1}}}),c=(0,a.Tu)({config:{swr:{revalidateOnFocus:!1}}}),u=(0,a.cQ)(),x=(0,o.n)();return(0,s.jsxs)(l.HfT,{name:"renterd",peerCount:null===(e=u.data)||void 0===e?void 0:e.length,connectPeer:()=>i("connectPeer"),isSynced:x.isSynced,syncPercent:x.syncPercent,nodeBlockHeight:x.nodeBlockHeight,estimatedBlockHeight:x.estimatedBlockHeight,firstTimeSyncing:x.firstTimeSyncing,moreThan100BlocksToSync:x.moreThan100BlocksToSync,children:[(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(l.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,s.jsx)(l.XxW,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(n=c.data)||void 0===n?void 0:n.address,type:"address"})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(l.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,s.jsx)(l.xvT,{size:"14",children:null===(t=r.data)||void 0===t?void 0:t.Name})]})]})}function x(){let e=(0,a.gM)({config:{swr:{revalidateOnFocus:!1}}});if(!e.data||"mainnet"===e.data.Name)return null;let n="zen"===e.data.Name?"Zen Testnet":e.data.Name;return(0,s.jsx)(l.t6k,{testnetName:n})}function h(e){let n=(0,a.Tu)(),{isSynced:t}=(0,o.n)();return(0,s.jsx)(l.tU3,{appName:"renterd",profile:(0,s.jsx)(u,{}),banner:(0,s.jsx)(x,{}),connectivityRoute:c.h,isSynced:t,walletBalance:n.data?new(r())(n.data.spendable).plus(n.data.unconfirmed):void 0,...e})}},15755:function(e,n,t){"use strict";t.d(n,{e:function(){return d}});var s=t(52322),l=t(39140),a=t(73621),i=t(44905),r=t(74881),c=t(36091),o=t(99484);function d(){var e,n;let{autopilot:t}=(0,c.q)(),d=(0,a.Z7)(),{openDialog:u}=(0,o.Rh)(),x=!(null===(e=d.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),h=(null===(n=d.data)||void 0===n?void 0:n.length)||0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.KJW,{title:"Files",route:r._.files.index,children:(0,s.jsx)(l.ROc,{})}),"on"===t.state&&(0,s.jsx)(l.KJW,{title:"Autopilot",route:r._.autopilot.index,children:(0,s.jsx)(l.aFQ,{})}),(0,s.jsx)(l.KJW,{title:"Configuration",route:r._.config.index,children:(0,s.jsx)(l.wWN,{})}),(0,s.jsx)(l.KJW,{title:"Contracts",route:r._.contracts.index,children:(0,s.jsx)(l.VBo,{})}),(0,s.jsx)(l.KJW,{title:"Hosts",route:r._.hosts.index,children:(0,s.jsx)(l.VHe,{})}),(0,s.jsxs)("div",{className:"relative",children:[!!h&&x&&(0,s.jsx)("div",{className:(0,i.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!h&&!x&&(0,s.jsx)(l.xvT,{size:"10",className:(0,i.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:h.toLocaleString()}),(0,s.jsx)(l.KJW,{title:"Alerts",onClick:()=>u("alerts"),children:(0,s.jsx)(l.Dkj,{})})]})]})}},41491:function(e,n,t){"use strict";t.d(n,{n:function(){return a}});var s=t(48240),l=t(73621);function a(){var e,n,t,a;let{isUnlocked:i}=(0,s.Hv)(),r=(0,l.DQ)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),c=(0,l.nH)(),o=r.data?null===(e=r.data)||void 0===e?void 0:e.blockHeight:0,d=(0,l.Tu)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.scanHeight)>=o?6e4:1e4}}}),u=i&&o&&c?Number((100*Math.min(o/c,1)).toFixed(1)):0,x=i&&o&&d.data?Number((100*Math.min(d.data.scanHeight/c,1)).toFixed(1)):0;return{isSynced:null===(n=r.data)||void 0===n?void 0:n.synced,isWalletSynced:(null===(t=r.data)||void 0===t?void 0:t.synced)&&(null===(a=d.data)||void 0===a?void 0:a.scanHeight)>=o-1,nodeBlockHeight:o,estimatedBlockHeight:c,syncPercent:u,walletScanPercent:x,moreThan100BlocksToSync:!!o&&!!c&&c-o>100,firstTimeSyncing:!!o&&!!c&&c-o>5e4}}},97132:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var s=t(52322),l=t(15755),a=t(74881),i=t(39140),r=t(99484),c=t(69458),o=t(67465);function d(){return(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,s.jsx)(i.xvT,{children:(0,s.jsx)(i.Hb6,{className:"scale-[200%]"})}),(0,s.jsx)(i.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No active contracts matching filters."})]})}function u(){return(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,s.jsx)(i.xvT,{children:(0,s.jsx)(i.VBo,{className:"scale-[200%]"})}),(0,s.jsx)(i.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"There are currently no active contracts. Configure autopilot or manually form contracts to get started."})]})}var x=t(71762),h=t(76635);function j(){let{configurableColumns:e,toggleColumnVisibility:n,resetDefaultColumnVisibility:t,setColumnsVisible:l,setColumnsHidden:a,sortField:r,setSortField:o,sortDirection:d,setSortDirection:u,enabledColumns:j}=(0,c.G)(),m=e.filter(e=>"general"===e.category).map(e=>({label:e.label,value:e.id})),v=e.filter(e=>"time"===e.category).map(e=>({label:e.label,value:e.id})),f=e.filter(e=>"financial"===e.category).map(e=>({label:e.label,value:e.id}));return(0,s.jsxs)(i.J2e,{trigger:(0,s.jsxs)(i.zxk,{size:"small",tip:"Configure view",tipAlign:"end",children:[(0,s.jsx)(i.hiv,{}),"View",(0,s.jsx)(i.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,s.jsxs)(i.WVB,{children:[(0,s.jsx)(i.__J,{children:"Order by"}),(0,s.jsx)(i.kFS,{children:(0,s.jsx)(i.PhF,{value:r,onChange:e=>{o(e.currentTarget.value)},children:Object.entries((0,h.groupBy)(x.Fo,"category")).map(e=>{let[n,t]=e;return(0,s.jsx)("optgroup",{label:n,children:t.map(e=>(0,s.jsx)(i.Wxm,{value:e.id,children:e.label},e.id))},n)})})})]}),(0,s.jsxs)(i.WVB,{children:[(0,s.jsx)(i.__J,{children:"Direction"}),(0,s.jsx)(i.kFS,{children:(0,s.jsxs)(i.PhF,{value:d,onClick:e=>{e.stopPropagation()},onChange:e=>{u(e.currentTarget.value)},children:[(0,s.jsx)(i.Wxm,{value:"desc",children:"descending"},"desc"),(0,s.jsx)(i.Wxm,{value:"asc",children:"ascending"},"asc")]})})]}),(0,s.jsx)(i.Clw,{}),(0,s.jsxs)(i.WVB,{children:[(0,s.jsx)(i.__J,{children:"Display properties"}),(0,s.jsx)(i.kFS,{children:(0,s.jsx)(i.zxk,{tip:"Reset all to defaults",variant:"ghost",onClick:e=>{e.stopPropagation(),t()},children:(0,s.jsx)(i.Wet,{})})})]}),(0,s.jsx)(i.FzK,{label:"General",columns:m.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:a}),(0,s.jsx)(i.WVB,{children:(0,s.jsx)(i.j4H,{options:m,values:j,onChange:e=>n(e)})}),(0,s.jsx)(i.FzK,{label:"Time",columns:v.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:a}),(0,s.jsx)(i.WVB,{children:(0,s.jsx)(i.j4H,{options:v,values:j,onChange:e=>n(e)})}),(0,s.jsx)(i.FzK,{label:"Financial",columns:f.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:a}),(0,s.jsx)(i.WVB,{children:(0,s.jsx)(i.j4H,{options:f,values:j,onChange:e=>n(e)})})]})}function m(){return(0,s.jsx)("div",{className:"flex gap-2",children:(0,s.jsx)(j,{})})}function v(e){let{error:n}=e;return(null==n?void 0:n.message.startsWith("404"))?(0,s.jsx)(u,{}):(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,s.jsx)(i.xvT,{children:(0,s.jsx)(i.Ckx,{className:"scale-[200%]"})}),(0,s.jsx)(i.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Error fetching contracts."})]})}var f=t(99182),g=t(2784),p=t(6635);function b(){let{filters:e,removeFilter:n,removeLastFilter:t}=(0,c.G)(),[l,a]=(0,g.useState)(!1),[r,o]=(0,g.useState)(""),[d,u]=(0,g.useState)([]),x=d[d.length-1],h=(d.length,(0,g.useRef)(null)),j=(0,g.useRef)(null),m=(0,g.useCallback)(e=>{u(n=>[...n,e])},[u]),v=(0,g.useCallback)(()=>{u([])},[u]);(0,g.useEffect)(()=>{let e=e=>{h.current&&!h.current.contains(e.target)&&a(!1)};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}},[]);let b=(0,g.useCallback)(()=>{var e;null===(e=j.current)||void 0===e||e.focus()},[j]),N=(0,g.useCallback)(()=>{o(""),v()},[v]);return(0,s.jsxs)("div",{className:"flex gap-1",children:[e.map(e=>(0,s.jsxs)(i.eQh,{children:[(0,s.jsx)(i.zxk,{variant:"active",state:"waiting",children:e.label}),(0,s.jsx)(i.zxk,{variant:"active",size:"small",onClick:()=>n(e.id),children:(0,s.jsx)(i.PcV,{})})]},e.id)),(0,s.jsxs)(f.mY,{ref:h,label:"Command Menu",onFocus:()=>a(!0),onKeyDown:e=>{if(d.length>0)"Escape"!==e.key&&("Backspace"!==e.key||r)||(e.preventDefault(),u(e=>e.slice(0,-1)));else if(0===d.length&&("Backspace"!==e.key||r||t(),"Escape"===e.key&&!r)){var n;a(!1),null===(n=j.current)||void 0===n||n.blur()}},children:[(0,s.jsx)(f.mY.Input,{ref:j,value:r,onValueChange:o,className:(0,i.cEb)({variant:"ghost",focus:"none"}),placeholder:"Filter contracts"}),l&&(0,s.jsx)(i.s_4,{className:"absolute z-20 min-w-[200px] max-h-[400px] overflow-auto p-1",children:(0,s.jsxs)(i.xrM,{children:[x&&(0,s.jsx)(i.__J,{className:"px-1.5 py-1",children:x.label}),(0,s.jsx)(f.mY.List,{children:(0,s.jsx)(p.F,{currentPage:x,beforeSelect:b,afterSelect:N,pushPage:m})})]})})]})]})}function N(){let{dataState:e,offset:n,limit:t,datasetCount:l,pageCount:a}=(0,c.G)();return(0,s.jsxs)("div",{className:"flex gap-2 w-full",children:[(0,s.jsx)(b,{}),(0,s.jsx)("div",{className:"flex-1"}),(0,s.jsx)(i.uDJ,{isLoading:"loading"===e,offset:n,limit:t,datasetTotal:l,pageTotal:a})]})}function y(){let{openDialog:e}=(0,r.Rh)(),{columns:n,datasetPage:t,sortField:x,sortDirection:h,sortableColumns:j,toggleSort:f,limit:g,dataState:p,cellContext:b,error:y}=(0,c.G)();return(0,s.jsx)(o.J,{title:"Active contracts",routes:a._,sidenav:(0,s.jsx)(l.e,{}),openSettings:()=>e("settings"),stats:(0,s.jsx)(N,{}),size:"full",actions:(0,s.jsx)(m,{}),children:(0,s.jsx)("div",{className:"p-6 min-w-fit",children:(0,s.jsx)(i.iA_,{context:b,isLoading:"loading"===p,emptyState:"noneMatchingFilters"===p?(0,s.jsx)(d,{}):"noneYet"===p?(0,s.jsx)(u,{}):"error"===p?(0,s.jsx)(v,{error:y}):null,sortableColumns:j,pageSize:g,data:t,columns:n,sortDirection:h,sortField:x,toggleSort:f})})})}function k(){return(0,s.jsx)(y,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=77441)}),_N_E=e.O()}]);