(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{27725:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/node",function(){return n(17474)}])},92522:function(e,s,n){"use strict";n.d(s,{q:function(){return u}});var l=n(52322),i=n(62503),r=n(13369),d=n(6391),t=n.n(d),a=n(74881),o=n(41491),c=n(50002);function x(){var e,s,n,d,t,a,x;let{openDialog:u}=(0,c.Rh)(),h=(0,r.On)({config:{swr:{revalidateOnFocus:!1}}}),f=(0,r.rV)({config:{swr:{revalidateOnFocus:!1}}}),v=(0,o.n)(),m=(0,r.cQ)(),j=null===(e=h.data)||void 0===e?void 0:e.version,p=(null==j?void 0:j.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/hostd/releases/".concat(j):"https://github.com/SiaFoundation/hostd/tree/".concat(j);return(0,l.jsxs)(i.HfT,{name:"hostd",peerCount:null===(s=m.data)||void 0===s?void 0:s.length,connectPeer:()=>u("connectPeer"),isSynced:v.isSynced,percent:v.percent,nodeBlockHeight:v.nodeBlockHeight,estimatedBlockHeight:v.estimatedBlockHeight,firstTimeSyncing:v.firstTimeSyncing,moreThan100BlocksToSync:v.moreThan100BlocksToSync,children:[(0,l.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,l.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Net address"}),(0,l.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,l.jsx)(i.xS1,{className:"overflow-hidden",size:"14",value:null===(n=f.data)||void 0===n?void 0:n.netAddress,maxLength:50,label:"network address"})})]}),(0,l.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,l.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Public key"}),(0,l.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,l.jsx)(i.xS1,{className:"overflow-hidden",size:"14",value:null===(d=h.data)||void 0===d?void 0:d.publicKey,maxLength:50,label:"public key"})})]}),(0,l.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,l.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,l.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,l.jsx)(i.xS1,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(t=h.data)||void 0===t?void 0:t.walletAddress,type:"address"})})]}),(0,l.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,l.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,l.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,l.jsx)(i.xvT,{size:"14",children:null===(a=h.data)||void 0===a?void 0:a.network})})]}),(0,l.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,l.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,l.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,l.jsx)(i.rUS,{size:"14",href:p,target:"_blank",children:null===(x=h.data)||void 0===x?void 0:x.version})})]})]})}function u(e){let s=(0,r.Os)(),{isSynced:n}=(0,o.n)();return(0,l.jsx)(i.tU3,{appName:"hostd",connectivityRoute:a.h,profile:(0,l.jsx)(x,{}),isSynced:n,walletBalance:s.data?new(t())(s.data.spendable).plus(s.data.unconfirmed):void 0,...e})}},39031:function(e,s,n){"use strict";n.d(s,{N:function(){return o}});var l=n(52322),i=n(62503),r=n(13369),d=n(44905),t=n(74881),a=n(50002);function o(){var e,s;let{openDialog:n}=(0,a.Rh)(),o=(0,r.Z7)(),c=!(null===(e=o.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),x=(null===(s=o.data)||void 0===s?void 0:s.length)||0;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.KJW,{title:"Dashboard",route:t._.home,children:(0,l.jsx)(i.K2o,{})}),(0,l.jsx)(i.KJW,{title:"Volumes",route:t._.volumes.index,children:(0,l.jsx)(i.zvn,{})}),(0,l.jsx)(i.KJW,{title:"Contracts",route:t._.contracts.index,children:(0,l.jsx)(i.VBo,{})}),(0,l.jsx)(i.KJW,{title:"Configuration",route:t._.config.index,children:(0,l.jsx)(i.wWN,{})}),(0,l.jsxs)("div",{className:"relative",children:[!!x&&c&&(0,l.jsx)("div",{className:(0,d.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!x&&!c&&(0,l.jsx)(i.xvT,{size:"10",className:(0,d.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:x.toLocaleString()}),(0,l.jsx)(i.KJW,{title:"Alerts",onClick:()=>n("alerts"),children:(0,l.jsx)(i.Dkj,{})})]})]})}},41491:function(e,s,n){"use strict";n.d(s,{n:function(){return r}});var l=n(28031),i=n(13369);function r(){var e,s,n,r;let{isUnlocked:d}=(0,l.Hv)(),t=(0,i.d$)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),a=(0,i.Os)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.scanHeight)>=c-5?6e4:1e4}}}),o=(0,i.nH)(),c=t.data?null===(e=t.data)||void 0===e?void 0:e.chainIndex.height:0,x=d&&c&&o?Number((100*Math.min(c/o,1)).toFixed(1)):0;return{isSynced:null===(s=t.data)||void 0===s?void 0:s.synced,isWalletSynced:(null===(n=t.data)||void 0===n?void 0:n.synced)&&(null===(r=a.data)||void 0===r?void 0:r.scanHeight)>=c-5,nodeBlockHeight:c,estimatedBlockHeight:o,percent:x,moreThan100BlocksToSync:!!c&&!!o&&o-c>100,firstTimeSyncing:!!c&&!!o&&o-c>5e4}}},17474:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return g}});var l=n(52322),i=n(62503),r=n(13369),d=n(74881),t=n(50002),a=n(39031),o=n(92522),c=n(2784),x=n(76635),u=n(2288),h=n(44905);let f=[];function v(){var e;let s=(0,r.dU)({payload:{levels:["info"],limit:100}}),n=(0,i.c2j)(null===(e=s.data)||void 0===e?void 0:e.entries,s.isValidating,s.error,f);return(0,l.jsx)(i.s_4,{children:(0,l.jsxs)("div",{className:"flex flex-col rounded overflow-hidden",children:[(0,l.jsxs)("div",{className:"flex items-center p-4 border-b border-gray-200 dark:border-graydark-300",children:[(0,l.jsx)(i.X6q,{size:"20",font:"mono",ellipsis:!0,children:"Logs"}),(0,l.jsx)("div",{className:"flex-1"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:["noneYet"===n&&(0,l.jsx)("div",{className:(0,h.cx)("flex items-center justify-center h-[100px]",j()),children:(0,l.jsx)(i.xvT,{size:"18",color:"subtle",children:"No logs yet."})}),"error"===n&&(0,l.jsx)("div",{className:(0,h.cx)("flex items-center justify-center h-[100px]",j()),children:(0,l.jsx)(i.xvT,{size:"18",color:"subtle",children:s.error.message})}),"loading"===n&&(0,l.jsx)(m,{}),!n&&s.data.entries.map(e=>(0,l.jsxs)("div",{className:(0,h.cx)("flex flex-col gap-1 w-full p-4","border-t border-gray-200 dark:border-graydark-300","first:border-none"),children:[(0,l.jsxs)("div",{className:"flex justify-between w-full",children:[(0,l.jsx)(i.xvT,{weight:"medium",children:e.name}),(0,l.jsx)(i.xvT,{color:"subtle",children:(0,u.rN)(e.timestamp,{timeStyle:"medium"})})]}),(0,l.jsx)(i.xvT,{color:"subtle",children:e.message}),(0,l.jsx)(i.xvT,{children:e.caller}),(0,l.jsx)(i.u0i,{color:"subtle",children:JSON.stringify(e.fields,null,2)})]},e.timestamp+e.caller+e.name))]})]})})}function m(){return(0,l.jsx)(l.Fragment,{children:(0,x.times)(10,e=>(0,l.jsx)("div",{className:(0,h.cx)("relative flex gap-4 p-3.5",j()),children:(0,l.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,l.jsxs)("div",{className:"flex justify-between gap-2 w-full",children:[(0,l.jsx)(i.OdW,{className:"w-[160px] h-[20px]"}),(0,l.jsx)(i.OdW,{className:"w-[160px] h-[20px]"})]}),(0,l.jsx)(i.OdW,{className:"w-[100px] h-[20px]"}),(0,l.jsx)(i.OdW,{className:"w-full h-[120px]"})]})},e))})}function j(){return(0,h.cx)("border-t border-gray-200 dark:border-graydark-300","first:border-none")}function p(){var e,s;let n=(0,r.cQ)(),u=(0,r.d$)({config:{swr:{refreshInterval:3e4}}}),{openDialog:h}=(0,t.Rh)(),f=(0,c.useMemo)(()=>n.data?(0,x.orderBy)(n.data,["address"]).map(e=>e.address):null,[n.data]);return(0,l.jsx)(o.q,{routes:d._,sidenav:(0,l.jsx)(a.N,{}),openSettings:()=>h("settings"),title:"Node",children:(0,l.jsxs)("div",{className:"p-6 flex flex-col gap-5",children:[(0,l.jsxs)("div",{className:"flex flex-wrap gap-7",children:[(0,l.jsx)(i.ncR,{label:"Height",value:u.data?u.data.chainIndex.height.toLocaleString():void 0,comment:(null===(e=u.data)||void 0===e?void 0:e.synced)?void 0:"Syncing"}),(0,l.jsx)(i.ncR,{label:"Connected peers",value:null===(s=n.data)||void 0===s?void 0:s.length})]}),(0,l.jsxs)("div",{className:"flex flex-wrap gap-7",children:[(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(i.u5Q,{peers:f,connectPeer:()=>h("connectPeer")})}),(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(v,{})})]})]})})}function g(){return(0,l.jsx)(p,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=27725)}),_N_E=e.O()}]);