(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{27725:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/node",function(){return t(88637)}])},67465:function(e,n,t){"use strict";t.d(n,{J:function(){return x}});var i=t(52322),s=t(36334),o=t(73621),a=t(6391),r=t.n(a),l=t(74881),d=t(41491),c=t(99484);function u(){var e,n,t,a,r;let{openDialog:l}=(0,c.Rh)(),u=(0,o.d_)({config:{swr:{revalidateOnFocus:!1}}}),v=(0,o.Tu)({config:{swr:{revalidateOnFocus:!1}}}),x=(0,o.cQ)(),h=(0,d.n)(),f=null===(e=u.data)||void 0===e?void 0:e.version,g="?"===f?"https://github.com/SiaFoundation/renterd/commits/":(null==f?void 0:f.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/renterd/releases/".concat(f):"https://github.com/SiaFoundation/renterd/tree/".concat(f);return(0,i.jsxs)(s.HfT,{name:"renterd",peerCount:null===(n=x.data)||void 0===n?void 0:n.length,connectPeer:()=>l("connectPeer"),isSynced:h.isSynced,syncPercent:h.syncPercent,nodeBlockHeight:h.nodeBlockHeight,estimatedBlockHeight:h.estimatedBlockHeight,firstTimeSyncing:h.firstTimeSyncing,moreThan100BlocksToSync:h.moreThan100BlocksToSync,children:[(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(s.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,i.jsx)(s.XxW,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(t=v.data)||void 0===t?void 0:t.address,type:"address"})]}),(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(s.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,i.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,i.jsx)(s.xvT,{size:"14",children:null===(a=u.data)||void 0===a?void 0:a.network})})]}),(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(s.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,i.jsx)(s.rUS,{size:"14",href:g,underline:"hover",target:"_blank",ellipsis:!0,children:null===(r=u.data)||void 0===r?void 0:r.version})]})]})}function v(){let e=(0,o.d_)({config:{swr:{revalidateOnFocus:!1}}});return e.data&&"Mainnet"!==e.data.network?(0,i.jsx)(s.t6k,{testnetName:e.data.network}):null}function x(e){let n=(0,o.Tu)(),{isSynced:t}=(0,d.n)();return(0,i.jsx)(s.tU3,{appName:"renterd",profile:(0,i.jsx)(u,{}),banner:(0,i.jsx)(v,{}),connectivityRoute:l.h,isSynced:t,walletBalance:n.data?new(r())(n.data.spendable).plus(n.data.unconfirmed):void 0,...e})}},15755:function(e,n,t){"use strict";t.d(n,{e:function(){return c}});var i=t(52322),s=t(36334),o=t(73621),a=t(44905),r=t(74881),l=t(36091),d=t(99484);function c(){var e,n;let{autopilot:t}=(0,l.q)(),c=(0,o.Z7)(),{openDialog:u}=(0,d.Rh)(),v=!(null===(e=c.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),x=(null===(n=c.data)||void 0===n?void 0:n.length)||0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.KJW,{title:"Files",route:r._.files.index,children:(0,i.jsx)(s.ROc,{})}),"on"===t.status&&(0,i.jsx)(s.KJW,{title:"Autopilot",route:r._.autopilot.index,children:(0,i.jsx)(s.aFQ,{})}),(0,i.jsx)(s.KJW,{title:"Configuration",route:r._.config.index,children:(0,i.jsx)(s.wWN,{})}),(0,i.jsx)(s.KJW,{title:"Contracts",route:r._.contracts.index,children:(0,i.jsx)(s.VBo,{})}),(0,i.jsx)(s.KJW,{title:"Hosts",route:r._.hosts.index,children:(0,i.jsx)(s.VHe,{})}),(0,i.jsxs)("div",{className:"relative",children:[!!x&&v&&(0,i.jsx)("div",{className:(0,a.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!x&&!v&&(0,i.jsx)(s.xvT,{size:"10",className:(0,a.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:x.toLocaleString()}),(0,i.jsx)(s.KJW,{title:"Alerts",onClick:()=>u("alerts"),children:(0,i.jsx)(s.Dkj,{})})]})]})}},41491:function(e,n,t){"use strict";t.d(n,{n:function(){return o}});var i=t(41755),s=t(73621);function o(){var e,n,t,o;let{isUnlocked:a}=(0,i.Hv)(),r=(0,s.DQ)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),l=(0,s.nH)(),d=r.data?null===(e=r.data)||void 0===e?void 0:e.blockHeight:0,c=(0,s.Tu)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.scanHeight)>=d?6e4:1e4}}}),u=a&&d&&l?Number((100*Math.min(d/l,1)).toFixed(1)):0,v=a&&d&&c.data?Number((100*Math.min(c.data.scanHeight/l,1)).toFixed(1)):0;return{isSynced:null===(n=r.data)||void 0===n?void 0:n.synced,isWalletSynced:(null===(t=r.data)||void 0===t?void 0:t.synced)&&(null===(o=c.data)||void 0===o?void 0:o.scanHeight)>=d-1,nodeBlockHeight:d,estimatedBlockHeight:l,syncPercent:u,walletScanPercent:v,moreThan100BlocksToSync:!!d&&!!l&&l-d>100,firstTimeSyncing:!!d&&!!l&&l-d>5e4}}},88637:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var i=t(52322),s=t(36334),o=t(73621),a=t(74881),r=t(99484),l=t(15755),d=t(67465);function c(){var e,n,t;let c=(0,o.cQ)(),u=(0,o.QL)({config:{swr:{refreshInterval:3e4}}}),v=(0,o.DQ)({config:{swr:{refreshInterval:3e4}}}),{openDialog:x}=(0,r.Rh)();return(0,i.jsx)(d.J,{routes:a._,sidenav:(0,i.jsx)(l.e,{}),openSettings:()=>x("settings"),title:"Node",children:(0,i.jsxs)("div",{className:"flex flex-col gap-5 p-5",children:[(0,i.jsxs)("div",{className:"flex flex-wrap gap-7",children:[(0,i.jsx)(s.ncR,{label:"Height",value:v.data?Number(v.data.blockHeight).toLocaleString():void 0,comment:(null===(e=v.data)||void 0===e?void 0:e.synced)?void 0:"Syncing"}),(0,i.jsx)(s.ncR,{label:"Connected peers",value:null===(n=c.data)||void 0===n?void 0:n.length}),(0,i.jsx)(s.ncR,{label:"Transactions in pool",value:null===(t=u.data)||void 0===t?void 0:t.length})]}),(0,i.jsx)(s.u5Q,{peers:c.data,connectPeer:()=>x("connectPeer")})]})})}function u(){return(0,i.jsx)(c,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=27725)}),_N_E=e.O()}]);