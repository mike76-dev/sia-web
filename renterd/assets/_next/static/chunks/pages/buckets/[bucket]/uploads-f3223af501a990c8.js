(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{56592:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buckets/[bucket]/uploads",function(){return n(44111)}])},17398:function(e,s,n){"use strict";n.d(s,{C:function(){return o}});var t=n(52322),i=n(36655),l=n(61020),r=n(41736),c=n(73076);function a(){let{activeExplorerMode:e,setExplorerModeDirectory:s,setExplorerModeFlat:n}=(0,r.b)(),{isViewingUploads:a,navigateToUploads:o}=(0,c.x)();return(0,t.jsxs)(i.h_2,{trigger:(0,t.jsx)(i.zxk,{tipSide:"bottom",tip:a?"Viewing uploads":"directory"===e?"Viewing directory explorer":"Viewing all bucket files",children:a?(0,t.jsx)(l.bQp,{}):"directory"===e?(0,t.jsx)(l.Qbr,{}):(0,t.jsx)(l.nDH,{})}),contentProps:{align:"start",side:"bottom",className:"max-w-[300px]"},children:[(0,t.jsxs)(i.Xiv,{onSelect:s,children:[(0,t.jsx)(i.KpP,{children:(0,t.jsx)(l.Qbr,{})}),"Directory"]}),(0,t.jsxs)(i.Xiv,{onSelect:n,children:[(0,t.jsx)(i.KpP,{children:(0,t.jsx)(l.nDH,{})}),"All files"]}),(0,t.jsxs)(i.Xiv,{onSelect:o,children:[(0,t.jsx)(i.KpP,{children:(0,t.jsx)(l.bQp,{})}),"Uploads"]})]})}function o(){let{isViewingBuckets:e}=(0,r.b)();return e?(0,t.jsx)(i.ua7,{content:"Viewing all buckets",children:(0,t.jsx)("div",{children:(0,t.jsx)(i.zxk,{state:"waiting",children:(0,t.jsx)(l.fi8,{size:16})})})}):(0,t.jsx)(a,{})}},91362:function(e,s,n){"use strict";n.d(s,{J:function(){return h}});var t=n(52322),i=n(36655),l=n(57016),r=n(6391),c=n.n(r),a=n(98334),o=n(38855),d=n(97112),x=n(21487);function u(){var e,s,n,r,c,a;let{openDialog:u}=(0,d.Rh)(),j=(0,l.d_)({config:{swr:{revalidateOnFocus:!1}}}),h=(0,l.X2)({config:{swr:{revalidateOnFocus:!1}}}),f=(0,l.cQ)(),m=(0,o.n)(),p=null===(e=j.data)||void 0===e?void 0:e.version,v="?"===p?"https://github.com/SiaFoundation/renterd/commits/":(null==p?void 0:p.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/renterd/releases/".concat(p):"https://github.com/SiaFoundation/renterd/tree/".concat(p),g=j.data?new Date().getTime()-new Date(null===(s=j.data)||void 0===s?void 0:s.startTime).getTime():0;return(0,t.jsxs)(i.HfT,{name:"renterd",peerCount:null===(n=f.data)||void 0===n?void 0:n.length,connectPeer:()=>u("connectPeer"),isSynced:m.isSynced,syncPercent:m.syncPercent,nodeBlockHeight:m.nodeBlockHeight,estimatedBlockHeight:m.estimatedBlockHeight,firstTimeSyncing:m.firstTimeSyncing,moreThan100BlocksToSync:m.moreThan100BlocksToSync,children:[(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,t.jsx)(i.XxW,{size:"14",maxLength:50,value:null===(r=h.data)||void 0===r?void 0:r.address,type:"address"})})]}),j.data&&(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Uptime"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,t.jsx)(i.xvT,{size:"14",children:(0,x.bc)(g,{format:"long"})})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,t.jsx)(i.xvT,{size:"14",children:null===(c=j.data)||void 0===c?void 0:c.network})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,t.jsx)(i.rUS,{size:"14",href:v,underline:"hover",target:"_blank",ellipsis:!0,children:null===(a=j.data)||void 0===a?void 0:a.version})]})]})}function j(){let e=(0,l.d_)({config:{swr:{revalidateOnFocus:!1}}});return e.data&&"Mainnet"!==e.data.network?(0,t.jsx)(i.t6k,{testnetName:e.data.network}):null}function h(e){let s=(0,l.X2)(),{isSynced:n}=(0,o.n)();return(0,t.jsx)(i.tU3,{appName:"renterd",profile:(0,t.jsx)(u,{}),banner:(0,t.jsx)(j,{}),connectivityRoute:a.h,isSynced:n,walletBalanceSc:s.data&&{spendable:new(c())(s.data.spendable),confirmed:new(c())(s.data.confirmed),unconfirmed:new(c())(s.data.unconfirmed)},...e})}},97992:function(e,s,n){"use strict";n.d(s,{e:function(){return o}});var t=n(52322),i=n(36655),l=n(61020),r=n(82851),c=n(98334),a=n(87764);function o(){let{totals:e}=(0,a.Z)(),s=e.all===e.info;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.KJW,{title:"Files",route:c._.buckets.index,children:(0,t.jsx)(l.ROc,{})}),(0,t.jsx)(i.KJW,{title:"Configuration",route:c._.config.index,children:(0,t.jsx)(l.wWN,{})}),(0,t.jsx)(i.KJW,{title:"Contracts",route:c._.contracts.index,children:(0,t.jsx)(l.VBo,{})}),(0,t.jsx)(i.KJW,{title:"Hosts",route:c._.hosts.index,children:(0,t.jsx)(l.VHe,{})}),(0,t.jsx)(i.KJW,{title:"S3 authentication keypairs",route:c._.keys.index,children:(0,t.jsx)(l._m8,{})}),(0,t.jsxs)("div",{className:"relative",children:[e.all?s?(0,t.jsx)("div",{className:(0,r.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}):(0,t.jsx)(i.xvT,{size:"10",className:(0,r.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:e.all.toLocaleString()}):null,(0,t.jsx)(i.KJW,{title:"Alerts",route:c._.alerts.index,children:(0,t.jsx)(l.Dkj,{})})]})]})}},44111:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return _}});var t=n(52322),i=n(97992),l=n(98334),r=n(97112),c=n(91362),a=n(36655),o=n(61020),d=n(73076);function x(){let{configurableColumns:e,toggleColumnVisibility:s,resetDefaultColumnVisibility:n,enabledColumns:i}=(0,d.x)();return(0,t.jsxs)(a.J2e,{trigger:(0,t.jsxs)(a.zxk,{size:"small",tip:"Configure view",tipAlign:"end",children:[(0,t.jsx)(o.hiv,{}),"View",(0,t.jsx)(o.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,t.jsxs)(a.WVB,{children:[(0,t.jsx)(a.__J,{children:"Display properties"}),(0,t.jsx)(a.kFS,{children:(0,t.jsx)(a.zxk,{onClick:e=>{e.stopPropagation(),n()},children:"Reset default"})})]}),(0,t.jsx)(a.WVB,{children:(0,t.jsx)(a.j4H,{options:e.map(e=>({label:e.label,value:e.id})),values:i,onChange:e=>s(e)})})]})}function u(){return(0,t.jsx)("div",{className:"flex gap-2",children:(0,t.jsx)(x,{})})}function j(){let{limit:e,pageCount:s,dataState:n,nextMarker:i,hasMore:l}=(0,d.x)();return(0,t.jsxs)("div",{className:"flex gap-3 w-full",children:[(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)(a._5,{marker:i,isMore:l,limit:e,pageTotal:s,isLoading:"loading"===n})]})}function h(){return(0,t.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,t.jsx)(a.xvT,{children:(0,t.jsx)(o.Ckx,{className:"scale-[200%]"})}),(0,t.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Error fetching uploads."})]})}var f=n(41736);function m(){let{filters:e,resetFilters:s}=(0,f.b)();return(0,t.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,t.jsx)(a.xvT,{children:(0,t.jsx)(o.Hb6,{className:"scale-[200%]"})}),(0,t.jsxs)("div",{className:"flex flex-col gap-3 items-center",children:[(0,t.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No uploads matching filters."}),!!e.length&&(0,t.jsx)(a.zxk,{onClick:e=>{e.stopPropagation(),s()},children:"Clear filters"})]})]})}function p(){let{activeBucketName:e}=(0,f.b)();return(0,t.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,t.jsx)(a.xvT,{children:(0,t.jsx)(o.Y9T,{className:"scale-[200%]"})}),(0,t.jsxs)("div",{className:"flex flex-col gap-3 items-center",children:[(0,t.jsxs)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:["The ",(0,t.jsx)(a.EKh,{children:e})," bucket does not have any active uploads."]}),(0,t.jsx)(a.Qjf,{href:l._.buckets.index,onClick:e=>{e.stopPropagation()},children:"View buckets list"})]})]})}function v(){let{dataState:e}=(0,d.x)();return"noneMatchingFilters"===e?(0,t.jsx)(m,{}):"error"===e?(0,t.jsx)(h,{}):"noneYet"===e?(0,t.jsx)(p,{}):null}var g=n(88778);function b(){let{sortableColumns:e,toggleSort:s,datasetPage:n,dataState:i,sortField:l,sortDirection:r}=(0,d.x)();return(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)(a.iA_,{isLoading:"loading"===i,emptyState:(0,t.jsx)(v,{}),pageSize:10,data:n,columns:g.z,sortableColumns:e,sortField:l,sortDirection:r,toggleSort:s,rowSize:"dense"})})}var w=n(17398);function N(){let{activeBucketName:e,setActiveDirectory:s}=(0,f.b)();return(0,t.jsxs)("div",{className:"flex gap-2 items-center h-full",children:[(0,t.jsx)(w.C,{}),(0,t.jsx)(a.xrM,{children:(0,t.jsxs)("div",{className:"flex gap-1 items-center h-full",children:[(0,t.jsx)(a.xvT,{onClick:()=>s(()=>[]),size:"18",weight:"semibold",className:"flex items-center cursor-pointer",noWrap:!0,children:"Buckets"}),(0,t.jsx)(a.xvT,{size:"16",color:"verySubtle",className:"flex items-center",children:(0,t.jsx)(o.F3j,{})}),(0,t.jsx)(a.xvT,{onClick:()=>s(()=>[e]),size:"18",weight:"semibold",className:"flex items-center cursor-pointer",noWrap:!0,children:e}),(0,t.jsx)(a.xvT,{size:"16",color:"verySubtle",className:"flex items-center",children:(0,t.jsx)(o.F3j,{})}),(0,t.jsx)(a.xvT,{size:"18",weight:"semibold",className:"flex items-center cursor-pointer",noWrap:!0,children:"Uploads"})]})})]})}function k(){let{openDialog:e}=(0,r.Rh)();return(0,t.jsx)(c.J,{title:"Uploads",navTitle:null,routes:l._,sidenav:(0,t.jsx)(i.e,{}),nav:(0,t.jsx)(N,{}),stats:(0,t.jsx)(j,{}),actions:(0,t.jsx)(u,{}),openSettings:()=>e("settings"),children:(0,t.jsx)("div",{className:"p-6 min-w-fit",children:(0,t.jsx)(b,{})})})}function _(){return(0,t.jsx)(k,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=56592)}),_N_E=e.O()}]);