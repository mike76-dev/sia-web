(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[958],{38345:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/files/[[...path]]",function(){return s(33446)}])},16133:function(e,t,s){"use strict";s.d(t,{J:function(){return u}});var n=s(52322),i=s(66741),l=s(73621),r=s(6391),o=s.n(r),a=s(74881),c=s(41491),d=s(30650);function x(){var e,t;let{openDialog:s}=(0,d.Rh)(),r=(0,l.gM)({config:{swr:{revalidateOnFocus:!1}}}),o=(0,l.GJ)({config:{swr:{revalidateOnFocus:!1}}}),a=(0,l.cQ)(),x=(0,c.n)();return(0,n.jsxs)(i.HfT,{name:"renterd",peerCount:null===(e=a.data)||void 0===e?void 0:e.length,connectPeer:()=>s("connectPeer"),isSynced:x.isSynced,percent:x.percent,nodeBlockHeight:x.nodeBlockHeight,estimatedBlockHeight:x.estimatedBlockHeight,firstTimeSyncing:x.firstTimeSyncing,moreThan100BlocksToSync:x.moreThan100BlocksToSync,children:[(0,n.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,n.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,n.jsx)(i.xS1,{className:"overflow-hidden",size:"14",maxLength:50,value:o.data,type:"address"})]}),(0,n.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,n.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,n.jsx)(i.xvT,{size:"14",children:null===(t=r.data)||void 0===t?void 0:t.Name})]})]})}function u(e){let t=(0,l.tM)(),{isSynced:s}=(0,c.n)();return(0,n.jsx)(i.tU3,{appName:"renterd",profile:(0,n.jsx)(x,{}),connectivityRoute:a.h,isSynced:s,walletBalance:t.data?new(o())(t.data):void 0,...e})}},15755:function(e,t,s){"use strict";s.d(t,{e:function(){return o}});var n=s(52322),i=s(66741),l=s(74881),r=s(49227);function o(){let{autopilotMode:e}=(0,r.K)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.KJW,{title:"Files",route:l._.files.index,children:(0,n.jsx)(i.ROc,{})}),"on"===e&&(0,n.jsx)(i.KJW,{title:"Autopilot",route:l._.autopilot.index,children:(0,n.jsx)(i.aFQ,{})}),(0,n.jsx)(i.KJW,{title:"Configuration",route:l._.config.index,children:(0,n.jsx)(i.wWN,{})}),(0,n.jsx)(i.KJW,{title:"Contracts",route:l._.contracts.index,children:(0,n.jsx)(i.VBo,{})}),(0,n.jsx)(i.KJW,{title:"Hosts",route:l._.hosts.index,children:(0,n.jsx)(i.VHe,{})})]})}},40121:function(e,t,s){"use strict";s.d(t,{a:function(){return i}});var n=s(73621);function i(e){return(0,n.yu)({...e,params:{key:"contractset"}})}},41491:function(e,t,s){"use strict";s.d(t,{n:function(){return l}});var n=s(28031),i=s(73621);function l(){var e,t;let{isUnlocked:s}=(0,n.Hv)(),l=(0,i.DQ)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),r=(0,i.nH)(),o=l.data?null===(e=l.data)||void 0===e?void 0:e.blockHeight:0,a=s&&o&&r?Number((100*Math.min(o/r,1)).toFixed(1)):0;return{isSynced:null===(t=l.data)||void 0===t?void 0:t.synced,nodeBlockHeight:o,estimatedBlockHeight:r,percent:a,moreThan100BlocksToSync:!!o&&!!r&&r-o>100,firstTimeSyncing:!!o&&!!r&&r-o>5e4}}},33446:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return k}});var n=s(52322),i=s(15755),l=s(74881),r=s(30650),o=s(66741),a=s(24089);function c(){return(0,n.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,n.jsx)(o.xvT,{children:(0,n.jsx)(o.Ckx,{className:"scale-[200%]"})}),(0,n.jsx)(o.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Error fetching files."})]})}function d(){return(0,n.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,n.jsx)(o.xvT,{children:(0,n.jsx)(o.Hb6,{className:"scale-[200%]"})}),(0,n.jsx)(o.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No files matching filters."})]})}function x(){return(0,n.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px] cursor-pointer",children:[(0,n.jsx)(o.xvT,{children:(0,n.jsx)(o.Y9T,{className:"scale-[200%]"})}),(0,n.jsx)(o.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No files, drag and drop files or click here to start uploading."})]})}function u(){let{uploadFiles:e,datasetPage:t,pageCount:s,dataState:i,columns:l,sortField:r,sortDirection:u,sortableColumns:h,toggleSort:j}=(0,a.Y)();return(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)(o.fhJ,{onDrop:e,noClick:s>0,children:(0,n.jsx)(o.iA_,{isLoading:"loading"===i,emptyState:"noneMatchingFilters"===i?(0,n.jsx)(d,{}):"noneYet"===i?(0,n.jsx)(x,{}):"error"===i?(0,n.jsx)(c,{}):null,pageSize:10,data:t,columns:l,sortableColumns:h,sortField:r,sortDirection:u,toggleSort:j,rowSize:"dense"})})})}var h=s(2784);function j(){let{activeDirectory:e,setActiveDirectory:t}=(0,a.Y)(),s=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let e=setTimeout(()=>{var e;null===(e=s.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},100);return()=>{clearTimeout(e)}},[e]),(0,n.jsx)(o.xrM,{children:(0,n.jsxs)("div",{className:"flex gap-1 items-center h-full",children:[(0,n.jsx)(o.xvT,{onClick:()=>t(()=>[]),size:"18",weight:"semibold",className:"flex items-center cursor-pointer",noWrap:!0,children:"Files"}),!!e.length&&(0,n.jsx)(o.xvT,{size:"16",color:"verySubtle",className:"flex items-center",children:(0,n.jsx)(o.F3j,{})}),e.map((e,s)=>(0,n.jsxs)(h.Fragment,{children:[s>0&&(0,n.jsx)(o.xvT,{size:"16",color:"verySubtle",className:"flex items-center",children:(0,n.jsx)(o.F3j,{})}),(0,n.jsx)(o.xvT,{onClick:()=>t(e=>e.slice(0,s+1)),size:"18",weight:"semibold",className:"flex items-center cursor-pointer",noWrap:!0,children:e})]},e+s)),(0,n.jsx)("div",{ref:s})]})})}var f=s(16133),m=s(74424),v=s(30774),p=s(76635);function g(){let{configurableColumns:e,toggleColumnVisibility:t,resetDefaultColumnVisibility:s,sortField:i,setSortField:l,sortDirection:r,setSortDirection:c,enabledColumns:d}=(0,a.Y)();return(0,n.jsxs)(o.J2e,{trigger:(0,n.jsxs)(o.zxk,{size:"small",tip:"Configure view",tipAlign:"end",children:[(0,n.jsx)(o.hiv,{}),"View",(0,n.jsx)(o.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,n.jsxs)(o.WVB,{children:[(0,n.jsx)(o.__J,{children:"Order by"}),(0,n.jsx)(o.kFS,{children:(0,n.jsx)(o.PhF,{value:i,onChange:e=>{l(e.currentTarget.value)},children:Object.entries((0,p.groupBy)(v.Fo,"category")).map(e=>{let[t,s]=e;return(0,n.jsx)("optgroup",{label:t,children:s.map(e=>(0,n.jsx)(o.Wxm,{value:e.id,children:e.label},e.id))},t)})})})]}),(0,n.jsxs)(o.WVB,{children:[(0,n.jsx)(o.__J,{children:"Direction"}),(0,n.jsx)(o.kFS,{children:(0,n.jsxs)(o.PhF,{value:r,onClick:e=>{e.stopPropagation()},onChange:e=>{c(e.currentTarget.value)},children:[(0,n.jsx)(o.Wxm,{value:"desc",children:"descending"},"desc"),(0,n.jsx)(o.Wxm,{value:"asc",children:"ascending"},"asc")]})})]}),(0,n.jsx)(o.Clw,{}),(0,n.jsxs)(o.WVB,{children:[(0,n.jsx)(o.__J,{children:"Display properties"}),(0,n.jsx)(o.kFS,{children:(0,n.jsx)(o.zxk,{onClick:e=>{e.stopPropagation(),s()},children:"Reset default"})})]}),(0,n.jsx)(o.WVB,{children:(0,n.jsx)(o.j4H,{options:e.map(e=>({label:e.label,value:e.id})),values:d,onChange:e=>t(e)})})]})}function b(){let{openDialog:e}=(0,r.Rh)(),{uploadFiles:t}=(0,a.Y)(),{getRootProps:s,getInputProps:i}=(0,m.uI)({noDrag:!0,onDrop:t});return(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)(o.zxk,{onClick:()=>e("filesSearch"),tip:"Search files",children:(0,n.jsx)(o.UBs,{})}),(0,n.jsxs)(o.zxk,{...s(),tip:"Upload files",children:[(0,n.jsx)("input",{...i()}),(0,n.jsx)(o.bQp,{})]}),(0,n.jsx)(o.zxk,{onClick:()=>e("filesCreateDirectory"),tip:"Create directory",children:(0,n.jsx)(o.L37,{})}),(0,n.jsx)(g,{})]})}var N=s(73621),T=s(2288),w=s(89553),S=s(40121);function z(){var e,t,s,i,r,c,d;let{pageCount:x}=(0,a.Y)(),u=(0,N.Q5)({config:{swr:{refreshInterval:6e4,keepPreviousData:!0,revalidateOnFocus:!1}}}),h=(0,w.V)(),j=(0,N.e$)({config:{swr:{errorRetryCount:0}}}),f=(0,S.a)(),m=function(){var e,t;let s=(0,w.V)(),n=(0,N.e$)({disabled:"on"!==s}),i=(0,S.a)();return{isValidating:n.isValidating||i.isValidating,data:(null===(e=n.data)||void 0===e?void 0:e.contracts.set)===(null===(t=i.data)||void 0===t?void 0:t.default)}}(),v="none";return"on"!==h||m.isValidating||m.data||(v="contractSetMismatch"),"on"===h&&j.error&&(v="setupAutopilot"),!f.data||(null===(e=f.data)||void 0===e?void 0:e.default)||(v="setupDefaultContractSet"),(0,n.jsxs)("div",{className:"flex gap-2 w-full",children:["setupDefaultContractSet"===v&&(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)(o.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:(0,n.jsx)(o.qdM,{})}),(0,n.jsxs)(o.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:["Configure a default contract set to get started."," ",(0,n.jsx)(o.rUS,{underline:"hover",size:"12",font:"mono",weight:"medium",color:"amber",href:l._.config.index,children:"Configuration →"})]})]}),"setupAutopilot"===v&&(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)(o.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:(0,n.jsx)(o.qdM,{})}),(0,n.jsxs)(o.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:["Configure autopilot to get started."," ",(0,n.jsx)(o.rUS,{underline:"hover",size:"12",font:"mono",weight:"medium",color:"amber",href:l._.autopilot.index,children:"Autopilot →"})]})]}),"contractSetMismatch"===v&&(0,n.jsx)(o.ua7,{align:"start",content:(0,n.jsx)(n.Fragment,{children:"The autopilot contract set does not match the default contract set. This means that by default workers will not upload data to contracts that autopilot manages. Unless these contract are being manually maintained, this will result in data loss. Continue with caution or update the autopilot contract set to match the default contract set."}),children:(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)(o.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:(0,n.jsx)(o.qdM,{})}),(0,n.jsx)(o.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:"Uploaded data will not be managed by autopilot."})]})}),(0,n.jsx)("div",{className:"flex-1"}),(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)(o.ua7,{side:"bottom",content:"Filtered statistics",children:(0,n.jsx)(o.xvT,{size:"12",color:"verySubtle",children:(0,n.jsx)(o.q0D,{})})}),(0,n.jsx)(o.ua7,{side:"bottom",content:"Number of files in current directory",children:(0,n.jsxs)(o.xvT,{size:"12",font:"mono",children:[x.toLocaleString(),u.data?" of ".concat(null===(t=u.data)||void 0===t?void 0:t.numObjects.toLocaleString()," files"):" files"]})})]}),u.data&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z0O,{variant:"vertical",className:"h-full"}),(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)(o.ua7,{side:"bottom",content:(0,n.jsxs)(o.xvT,{className:"flex flex-col gap-1",children:[(0,n.jsx)(o.xvT,{size:"12",color:"subtle",children:"Size of all files"}),(0,n.jsx)(o.xvT,{size:"12",color:"subtle",children:(0,T.vW)(null===(s=u.data)||void 0===s?void 0:s.totalObjectsSize)})]}),children:(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)(o.xvT,{size:"12",color:"verySubtle",children:(0,n.jsx)(o.nVB,{})}),(0,n.jsx)(o.xvT,{size:"12",font:"mono",children:(0,T.vW)(null===(i=u.data)||void 0===i?void 0:i.totalObjectsSize)})]})}),(0,n.jsx)(o.ua7,{align:"end",side:"bottom",content:(0,n.jsxs)(o.xvT,{className:"flex flex-col gap-1",children:[(0,n.jsx)(o.xvT,{size:"12",color:"subtle",children:"Size of all files"}),(0,n.jsxs)(o.xvT,{size:"12",color:"subtle",children:[(0,T.vW)(null===(r=u.data)||void 0===r?void 0:r.totalSectorsSize)," with redundancy"]}),(0,n.jsxs)(o.xvT,{size:"12",color:"subtle",children:[(0,T.vW)(null===(c=u.data)||void 0===c?void 0:c.totalUploadedSize)," with redundancy and repairs"]})]}),children:(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)(o.xvT,{size:"12",color:"verySubtle",children:(0,n.jsx)(o.nDH,{})}),(0,n.jsx)(o.xvT,{size:"12",font:"mono",children:(0,T.vW)(null===(d=u.data)||void 0===d?void 0:d.totalSectorsSize)})]})})]})]})]})]})}function y(){let{openDialog:e}=(0,r.Rh)();return(0,n.jsx)(f.J,{title:"Files",navTitle:null,routes:l._,sidenav:(0,n.jsx)(i.e,{}),nav:(0,n.jsx)(j,{}),stats:(0,n.jsx)(z,{}),actions:(0,n.jsx)(b,{}),openSettings:()=>e("settings"),children:(0,n.jsx)("div",{className:"p-6 min-w-fit",children:(0,n.jsx)(u,{})})})}function k(){return(0,n.jsx)(y,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=38345)}),_N_E=e.O()}]);