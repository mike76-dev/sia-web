(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{57344:function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config",function(){return e(54273)}])},34658:function(a,t,e){"use strict";e.d(t,{w:function(){return n}});var r=e(9969);function n(a){return(0,r.yu)({...a,params:{key:"redundancy"}})}},54273:function(a,t,e){"use strict";e.r(t),e.d(t,{default:function(){return k}});var r=e(52322),n=e(23305),i=e(70694),s=e(2784),o=e(91930),c=e(71930),d=e(38200),l=e(89630),u=e(9969),g=e(12533),f=e(30654),p=e(63955),m=e(96206),y=e(80489),w=e(34658);let h="v0-config-display-options";var x=e(47025);function v(){let{openDialog:a}=(0,d.Rh)(),t=(0,y.a)({config:{swr:{revalidateOnFocus:!1,errorRetryCount:0}}}),e=(0,u.yu)({config:{swr:{revalidateOnFocus:!1,errorRetryCount:0}},params:{key:h}}),v=(0,u.yu)({config:{swr:{revalidateOnFocus:!1}},params:{key:"gouging"}}),k=(0,w.w)({config:{swr:{revalidateOnFocus:!1}}}),O=(0,u.yu)({config:{swr:{revalidateOnFocus:!1}},params:{key:"uploadpacking"}}),_=(0,u.KJ)(),j=(0,x.BF)({config:{swr:{revalidateOnFocus:!1}}}),S=(0,p.cI)({mode:"all",defaultValues:g.Pg}),E=(0,s.useCallback)((a,t,e,r,n)=>{S.reset((0,f.IP)(a,t,e,r,n))},[S]),[b,C]=(0,s.useState)(!1);(0,s.useEffect)(()=>{v.data&&k.data&&O.data&&(t.data||t.error)&&(e.data||e.error)&&!b&&(E(t.data,O.data,v.data,k.data,e.data),C(!0))},[t.data,t.error,O.data,v.data,k.data,e.data,e.error]);let R=(0,s.useCallback)(async()=>{let a=await t.mutate(),r=await v.mutate(),i=await k.mutate(),s=await O.mutate(),o=await e.mutate();r&&i?E(a,s,r,i,o):(0,n.OHV)("Error fetching settings.")},[t,v,O,k,e,E]),N=S.watch("minShards"),F=S.watch("totalShards"),P=S.watch("includeRedundancyMaxStoragePrice"),V=S.watch("includeRedundancyMaxUploadPrice"),M=(0,s.useMemo)(()=>{let a=(0,f.aU)(N,F);return j.data?(0,g.VN)({redundancyMultiplier:a,includeRedundancyMaxStoragePrice:P,includeRedundancyMaxUploadPrice:V,storageAverage:(0,m.ll)(j.data.settings.storage_price).times((0,n.S5V)(1)).times((0,n.xf5)(1)).times((0,f.Si)(N,F,P)),uploadAverage:(0,m.ll)(j.data.settings.upload_price).times((0,n.xf5)(1)).times((0,f.Si)(N,F,V)),downloadAverage:(0,m.ll)(j.data.settings.download_price).times((0,n.xf5)(1)),contractAverage:(0,m.ll)(j.data.settings.contract_price)}):(0,g.VN)({redundancyMultiplier:a,includeRedundancyMaxStoragePrice:P,includeRedundancyMaxUploadPrice:V})},[j.data,N,F,P,V]),z=(0,s.useCallback)(async a=>{if(v.data&&k.data)try{let r=await _.put({params:{key:"contractset"},payload:(0,f.y4)(a,t.data)}),i=await _.put({params:{key:"uploadpacking"},payload:(0,f.Il)(a,O.data)}),s=await _.put({params:{key:"gouging"},payload:(0,f.MN)(a,v.data)}),o=await _.put({params:{key:"redundancy"},payload:(0,f.Y$)(a,k.data)}),c=await _.put({params:{key:h},payload:(0,f.yz)(a,e.data)});if(r.error)throw Error(r.error);if(i.error)throw Error(i.error);if(s.error)throw Error(s.error);if(o.error)throw Error(o.error);if(c.error)throw Error(c.error);(0,n.OPV)("Configuration has been saved."),R()}catch(a){(0,n.OHV)(a.message),console.log(a)}},[_,t,O,k,v,e,R]),A=(0,n.WsO)(M),I=(0,s.useMemo)(()=>S.handleSubmit(z,A),[S,z,A]),T=Object.entries(S.formState.dirtyFields).filter(a=>{let[t,e]=a;return!!e}).length;return(0,r.jsx)(l.J,{title:"Configuration",routes:c._,sidenav:(0,r.jsx)(o.e,{}),actions:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[!!T&&(0,r.jsx)(n.xvT,{size:"12",color:"subtle",children:1===T?"1 change":"".concat(T," changes")}),(0,r.jsx)(n.zxk,{tip:"Reset all changes",icon:"contrast",disabled:!T,onClick:R,children:(0,r.jsx)(i.Wet,{})}),(0,r.jsxs)(n.zxk,{tip:"Save all changes",variant:"accent",disabled:!S.formState.isDirty||S.formState.isSubmitting,onClick:I,children:[(0,r.jsx)(i.ZEk,{}),"Save changes"]})]}),openSettings:()=>a("settings"),children:(0,r.jsxs)("div",{className:"p-6 flex flex-col gap-16 max-w-screen-xl",children:[(0,r.jsx)(n.vRO,{title:"Contracts",category:"contractset",fields:M,form:S}),(0,r.jsx)(n.vRO,{title:"Uploads",category:"uploadpacking",fields:M,form:S}),(0,r.jsx)(n.vRO,{title:"Gouging",category:"gouging",fields:M,form:S}),(0,r.jsx)(n.vRO,{title:"Redundancy",category:"redundancy",fields:M,form:S})]})})}function k(){return(0,r.jsx)(v,{})}}},function(a){a.O(0,[209,774,888,179],function(){return a(a.s=57344)}),_N_E=a.O()}]);