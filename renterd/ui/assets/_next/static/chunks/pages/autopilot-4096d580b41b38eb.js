(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{8292:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/autopilot",function(){return o(7179)}])},362:function(e,t,o){"use strict";o.d(t,{J:function(){return d}});var i=o(2322),n=o(7350),s=o(3621),a=o(6391),r=o.n(a),l=o(4881);function d(e){let t=(0,s.tM)();return(0,i.jsx)(n.tU3,{appName:"renterd",connectivityRoute:l.h,walletBalance:t.data?new(r())(t.data):void 0,...e})}},9592:function(e,t,o){"use strict";o.d(t,{e:function(){return l}});var i=o(2322),n=o(7350);function s(e){let{size:t=24}=e;return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:t,width:t,fill:"currentColor",viewBox:"0 0 512 512",children:[(0,i.jsx)("path",{d:"M361.975 224.499c0 9.58 7.766 17.344 17.344 17.344c9.58 0 17.34-7.768 17.34-17.344c0-72.711-59.152-131.868-131.853-131.868c-9.58 0-17.344 7.764-17.344 17.341c0 9.58 7.764 17.344 17.344 17.344C318.383 127.314 361.974 170.91 361.975 224.499z"}),(0,i.jsx)("path",{d:"M264.806 0c-9.58 0-17.344 7.768-17.344 17.344c0 9.576 7.763 17.341 17.344 17.341c104.648 0.003 189.785 85.152 189.785 189.814c0 9.576 7.766 17.344 17.342 17.344c9.578 0 17.344-7.768 17.344-17.344C489.275 100.711 388.577 0.003 264.806 0z"}),(0,i.jsx)("path",{d:"M101.971 74.983c-3.272-3.275-7.696-5.08-12.264-5.08c-0.777 0-1.56 0.053-2.343 0.159c-5.37 0.734-10.088 3.936-12.755 8.654c-54.225 95.991-37.602 217.536 40.424 295.572c46.561 46.57 108.472 72.216 174.327 72.22c0.005 0 0.009 0 0.014 0c42.487 0 84.399-10.993 121.201-31.787c4.718-2.667 7.92-7.383 8.651-12.753c0.734-5.37-1.086-10.774-4.917-14.607L101.971 74.983z"}),(0,i.jsx)("path",{d:"M298.517 190.512c-15.494-15.498-37.459-20.637-57.28-15.484l72.77 72.778C319.155 227.983 314.015 206.014 298.517 190.512z"}),(0,i.jsx)("path",{d:"M79.639 376.716l-55.084 110.185c-2.688 5.377-2.4 11.76 0.76 16.875c3.16 5.111 8.74 8.223 14.753 8.223h229.216c9.578 0 17.342-7.764 17.342-17.342v-20.437c-72.244-0.703-140.059-29.151-191.214-80.313C89.872 388.367 84.618 382.629 79.639 376.716z"})]})}var a=o(4881),r=o(3121);function l(){let{autopilotMode:e}=(0,r.K)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.KJW,{title:"Files",route:a._.files.index,children:(0,i.jsx)(n.ROc,{})}),"on"===e&&(0,i.jsx)(n.KJW,{title:"Autopilot",route:a._.autopilot.index,children:(0,i.jsx)(n.aFQ,{})}),(0,i.jsx)(n.KJW,{title:"Contracts",route:a._.contracts.index,children:(0,i.jsx)(n.VBo,{})}),(0,i.jsx)(n.KJW,{title:"Hosts",route:a._.hosts.index,children:(0,i.jsx)(n.VHe,{})}),(0,i.jsx)(n.KJW,{title:"Configuration",route:a._.config.index,children:(0,i.jsx)(n.wWN,{})}),(0,i.jsx)(n.KJW,{title:"Satellite",route:a._.satellite.index,children:(0,i.jsx)(s,{})})]})}},7179:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return f}});var i=o(2322),n=o(7350),s=o(6391),a=o.n(s),r=o(2784),l=o(9592),d=o(4881),c=o(650),u=o(362),h=o(3621),m=o(2288);let w={set:"",amount:void 0,allowance:void 0,period:void 0,renewWindow:void 0,download:void 0,upload:void 0,storage:void 0,allowRedundantIPs:!1,maxDowntimeHours:void 0,defragThreshold:void 0},g={storage:{type:"number",category:"contracts",title:"Expected storage",description:(0,i.jsx)(i.Fragment,{children:"The amount of storage you would like to rent in TB."}),units:"TB",validation:{required:"required"}},upload:{type:"number",category:"contracts",title:"Expected upload",description:(0,i.jsx)(i.Fragment,{children:"The amount of upload bandwidth you plan to use each period in TB."}),units:"TB/period",validation:{required:"required"}},download:{type:"number",category:"contracts",title:"Expected download",description:(0,i.jsx)(i.Fragment,{children:"The amount of download bandwidth you plan to use each period in TB."}),units:"TB/period",validation:{required:"required"}},allowance:{type:"siacoin",category:"contracts",title:"Allowance",description:(0,i.jsx)(i.Fragment,{children:"The amount of Siacoin you would like to spend for the period."}),decimalsLimitSc:6,validation:{required:"required"}},period:{type:"number",category:"contracts",title:"Period",description:(0,i.jsx)(i.Fragment,{children:"The length of the storage contracts."}),units:"weeks",suggestion:new(a())(6),suggestionTip:"Typically 6 weeks.",validation:{required:"required"}},renewWindow:{type:"number",category:"contracts",title:"Renew window",description:(0,i.jsx)(i.Fragment,{children:"The number of weeks prior to contract expiration that Sia will attempt to renew your contracts."}),units:"weeks",decimalsLimit:6,suggestion:new(a())(2),suggestionTip:"Typically 2 weeks.",validation:{required:"required"}},amount:{type:"number",category:"contracts",title:"Hosts",description:(0,i.jsx)(i.Fragment,{children:"The number of hosts to create contracts with."}),units:"hosts",decimalsLimit:0,suggestion:new(a())(50),suggestionTip:"Typically 50 hosts.",validation:{required:"required"}},set:{type:"text",category:"contracts",title:"Contract set",description:(0,i.jsx)(i.Fragment,{children:"The contract set that autopilot should use."}),placeholder:"autopilot",suggestion:"autopilot",suggestionTip:(0,i.jsxs)(i.Fragment,{children:["The default contract set is ",(0,i.jsx)(n.EKh,{children:"autopilot"}),", only change this if you understand the implications."]}),validation:{required:"required"}},allowRedundantIPs:{type:"boolean",category:"hosts",title:"Redundant IPs",description:(0,i.jsx)(i.Fragment,{children:"Whether or not to allow forming contracts with multiple hosts in the same IP subnet. The subnets used are /16 for IPv4, and /64 for IPv6."}),suggestion:!1,suggestionTip:"Defaults to off.",validation:{}},maxDowntimeHours:{type:"number",category:"hosts",title:"Max downtime",description:(0,i.jsx)(i.Fragment,{children:"The maximum amount of host downtime that autopilot will tolerate in hours."}),units:"hours",suggestion:new(a())(1440),suggestionTip:"Defaults to 1,440 which is 60 days.",validation:{required:"required"}},defragThreshold:{type:"number",category:"wallet",title:"Defrag threshold",description:(0,i.jsx)(i.Fragment,{children:"The threshold after which autopilot will defrag outputs."}),units:"outputs",suggestion:new(a())(1e3),suggestionTip:"Defaults to 1,000.",validation:{required:"required"}}};var p=o(3955);function x(){let{openDialog:e}=(0,c.Rh)(),t=(0,h.oe)(),o=(0,h.e$)({config:{swr:{revalidateOnFocus:!1}}}),s=(0,p.cI)({mode:"all",defaultValues:w}),x=(0,r.useCallback)(async e=>{if(o.data)try{var i;await t.put({payload:{...i=o.data,contracts:{...null==i?void 0:i.contracts,set:e.set,amount:Math.round(e.amount.toNumber()),allowance:(0,m.qN)(e.allowance).toString(),period:Math.round((0,n.mvJ)(e.period.toNumber())),renewWindow:Math.round((0,n.mvJ)(e.renewWindow.toNumber())),download:(0,n.xf5)(e.download).toNumber(),upload:(0,n.xf5)(e.upload).toNumber(),storage:(0,n.xf5)(e.storage).toNumber()},hosts:{...null==i?void 0:i.hosts,maxDowntimeHours:e.maxDowntimeHours.toNumber(),allowRedundantIPs:e.allowRedundantIPs,scoreOverrides:(null==i?void 0:i.hosts.scoreOverrides)||null},wallet:{...null==i?void 0:i.wallet,defragThreshold:e.defragThreshold.toNumber()}}}),(0,n.OPV)("Configuration has been saved.")}catch(s){(0,n.OHV)(s.message),console.log(s)}},[o.data,t]),f=(0,n.WsO)(g),v=(0,r.useMemo)(()=>s.handleSubmit(x,f),[s,x,f]),j=(0,r.useCallback)(()=>{o.data&&s.reset(function(e){let t=e.contracts.set,o=(0,m.ll)(e.contracts.allowance,6),i=new(a())(e.contracts.amount),s=new(a())((0,n.x5w)(e.contracts.period)),r=new(a())((0,n.x5w)(e.contracts.renewWindow)),l=(0,n.JWi)(new(a())(e.contracts.download)),d=(0,n.JWi)(new(a())(e.contracts.upload)),c=(0,n.JWi)(new(a())(e.contracts.storage));return{set:t,allowance:o,amount:i,period:s,renewWindow:r,download:l,upload:d,storage:c,allowRedundantIPs:e.hosts.allowRedundantIPs,maxDowntimeHours:new(a())(e.hosts.maxDowntimeHours),defragThreshold:new(a())(e.wallet.defragThreshold)}}(o.data))},[s,o]),y=(0,r.useCallback)(async()=>{await o.mutate(),j()},[j,o]);(0,r.useEffect)(()=>{j()},[o.data]);let T=s.watch("storage"),b=s.watch("period"),N=s.watch("allowance"),q=(0,r.useMemo)(()=>!(!T||!b||!N||T.isZero()||b.isZero()||N.isZero()),[T,b,N]),W=(0,r.useMemo)(()=>{if(!q)return new(a())(0);let e=N.div(b),t=e.div(7).times(30);return(0,m.IZ)(t,0)},[q,b,N]),k=Object.entries(s.formState.dirtyFields).filter(e=>{let[t,o]=e;return!!o}).length,{fiat:_,currency:F}=(0,n.fb0)({sc:W});return(0,i.jsx)(u.J,{title:"Autopilot",routes:d._,sidenav:(0,i.jsx)(l.e,{}),stats:q?(0,i.jsxs)("div",{className:"flex gap-3",children:[(0,i.jsx)(n.xvT,{size:"12",font:"mono",weight:"medium",children:"Estimate:"}),(0,i.jsxs)("div",{className:"flex gap-1",children:[(0,i.jsx)(n.YKL,{size:"12",value:(0,m.qN)(W),dynamicUnits:!1,fixed:0,variant:"value"}),_&&(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)(n.m2c,{size:"12",weight:"medium",value:_,color:"subtle",variant:"value",format:e=>"(".concat(F.prefix).concat(e.toFixed(F.fixed),")")})}),(0,i.jsxs)(n.xvT,{size:"12",font:"mono",weight:"medium",children:["per month to store ",(0,m.vW)((0,n.xf5)(T).toNumber())]})]})]}):(0,i.jsx)(n.xvT,{size:"12",font:"mono",weight:"medium",children:"Enter expected storage, period, and allowance values to estimate monthly spending."}),actions:(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[!!k&&(0,i.jsx)(n.xvT,{size:"12",color:"subtle",children:1===k?"1 change":"".concat(k," changes")}),(0,i.jsx)(n.zxk,{tip:"Reset all changes",icon:"contrast",disabled:!k,onClick:()=>y(),children:(0,i.jsx)(n.Wet,{})}),(0,i.jsxs)(n.zxk,{tip:"Save all changes",variant:"accent",disabled:!s.formState.isDirty||s.formState.isSubmitting,onClick:v,children:[(0,i.jsx)(n.ZEk,{}),"Save changes"]})]}),openSettings:()=>e("settings"),children:(0,i.jsxs)("div",{className:"px-5 py-6 flex flex-col gap-16 max-w-screen-xl",children:[(0,i.jsx)(n.vRO,{title:"Contracts",category:"contracts",fields:g,form:s}),(0,i.jsx)(n.vRO,{title:"Hosts",category:"hosts",fields:g,form:s}),(0,i.jsx)(n.vRO,{title:"Wallet",category:"wallet",fields:g,form:s})]})})}function f(){return(0,i.jsx)(x,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8292)}),_N_E=e.O()}]);