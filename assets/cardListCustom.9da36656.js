import{Q as ge}from"./QCircularProgress.9967646b.js";import{u as je,a as Qe,v as Ne,m as Ce,c as j,i as re,j as le,Q as ue,R as ie,b as B}from"./QCard.8092dba0.js";import{Q as me,b as Ue,c as ne,C as Ae}from"./ClosePopup.fb88ff66.js";import{Q as ve}from"./QList.a0aa69f9.js";import{Q as Oe}from"./QMenu.0b46f048.js";import{A as Le}from"./Avatar.component.a95ff03b.js";import{Q as we,D as Te}from"./PageTitleWithButton.b0e53425.js";import{Q as Me,c as Ve}from"./QIcon.296b631e.js";import{r as w,c as I,g as Ie,a5 as $e,a0 as Re,S as We,h as b,I as He,w as Xe,n as Ge,b as Ye,Q as Ke,ad as Je,ae as Ze,af as ea,u as ce,ac as aa,a3 as ta,_ as pe,y,D as Z,z as k,A as d,d as r,p as ee,B as oe,C as V,x as J,E as _e,F as de,G as M,N as te}from"./index.51a95478.js";import{h as qe}from"./format.2a3572e1.js";import{u as Be}from"./client.store.9f12f916.js";function K(e,n,a,f){const s=[];return e.forEach(_=>{f(_)===!0?s.push(_):n.push({failedPropValidation:a,file:_})}),s}function se(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),Re(e)}const la={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},oa=["rejected"];function ra({editable:e,dnd:n,getFileInput:a,addFilesToQueue:f}){const{props:s,emit:_,proxy:v}=Ie(),U=w(null),C=I(()=>s.accept!==void 0?s.accept.split(",").map(o=>(o=o.trim(),o==="*"?"*/":(o.endsWith("/*")&&(o=o.slice(0,o.length-1)),o.toUpperCase()))):null),h=I(()=>parseInt(s.maxFiles,10)),P=I(()=>parseInt(s.maxTotalSize,10));function W(o){if(e.value)if(o!==Object(o)&&(o={target:null}),o.target!==null&&o.target.matches('input[type="file"]')===!0)o.clientX===0&&o.clientY===0&&$e(o);else{const A=a();A&&A!==o.target&&A.click(o)}}function Q(o){e.value&&o&&f(null,o)}function l(o,A,N,O){let i=Array.from(A||o.target.files);const q=[],$=()=>{q.length>0&&_("rejected",q)};if(s.accept!==void 0&&C.value.indexOf("*/")===-1&&(i=K(i,q,"accept",m=>C.value.some(F=>m.type.toUpperCase().startsWith(F)||m.name.toUpperCase().endsWith(F))),i.length===0))return $();if(s.maxFileSize!==void 0){const m=parseInt(s.maxFileSize,10);if(i=K(i,q,"max-file-size",F=>F.size<=m),i.length===0)return $()}if(s.multiple!==!0&&i.length>0&&(i=[i[0]]),i.forEach(m=>{m.__key=m.webkitRelativePath+m.lastModified+m.name+m.size}),O===!0){const m=N.map(F=>F.__key);i=K(i,q,"duplicate",F=>m.includes(F.__key)===!1)}if(i.length===0)return $();if(s.maxTotalSize!==void 0){let m=O===!0?N.reduce((F,T)=>F+T.size,0):0;if(i=K(i,q,"max-total-size",F=>(m+=F.size,m<=P.value)),i.length===0)return $()}if(typeof s.filter=="function"){const m=s.filter(i);i=K(i,q,"filter",F=>m.includes(F))}if(s.maxFiles!==void 0){let m=O===!0?N.length:0;if(i=K(i,q,"max-files",()=>(m++,m<=h.value)),i.length===0)return $()}if($(),i.length>0)return i}function u(o){se(o),n.value!==!0&&(n.value=!0)}function S(o){Re(o),(o.relatedTarget!==null||We.is.safari!==!0?o.relatedTarget!==U.value:document.elementsFromPoint(o.clientX,o.clientY).includes(U.value)===!1)===!0&&(n.value=!1)}function R(o){se(o);const A=o.dataTransfer.files;A.length>0&&f(null,A),n.value=!1}function g(o){if(n.value===!0)return b("div",{ref:U,class:`q-${o}__dnd absolute-full`,onDragenter:se,onDragover:se,onDragleave:S,onDrop:R})}return Object.assign(v,{pickFiles:W,addFiles:Q}),{pickFiles:W,addFiles:Q,onDragover:u,onDragleave:S,processFiles:l,getDndNode:g,maxFilesNumber:h,maxTotalSizeNumber:P}}function ze(e){return(e*100).toFixed(2)+"%"}const na={...je,...la,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},Pe=[...oa,"start","finish","added","removed"];function sa(e){const n=Ie(),{props:a,slots:f,emit:s,proxy:_}=n,{$q:v}=_,U=Qe(a,v);function C(t,p,z){if(t.__status=p,p==="idle"){t.__uploaded=0,t.__progress=0,t.__sizeLabel=qe(t.size),t.__progressLabel="0.00%";return}if(p==="failed"){_.$forceUpdate();return}t.__uploaded=p==="uploaded"?t.size:z,t.__progress=p==="uploaded"?1:Math.min(.9999,t.__uploaded/t.size),t.__progressLabel=ze(t.__progress),_.$forceUpdate()}const h=I(()=>a.disable!==!0&&a.readonly!==!0),P=w(!1),W=w(null),Q=w(null),l={files:w([]),queuedFiles:w([]),uploadedFiles:w([]),uploadedSize:w(0),updateFileStatus:C,isAlive:()=>Ne(n)===!1},{pickFiles:u,addFiles:S,onDragover:R,onDragleave:g,processFiles:o,getDndNode:A,maxFilesNumber:N,maxTotalSizeNumber:O}=ra({editable:h,dnd:P,getFileInput:be,addFilesToQueue:Fe});Object.assign(l,e({props:a,slots:f,emit:s,helpers:l})),l.isBusy===void 0&&(l.isBusy=w(!1));const i=w(0),q=I(()=>i.value===0?0:l.uploadedSize.value/i.value),$=I(()=>ze(q.value)),m=I(()=>qe(i.value)),F=I(()=>h.value===!0&&l.isUploading.value!==!0&&(a.multiple===!0||l.queuedFiles.value.length===0)&&(a.maxFiles===void 0||l.files.value.length<N.value)&&(a.maxTotalSize===void 0||i.value<O.value)),T=I(()=>h.value===!0&&l.isBusy.value!==!0&&l.isUploading.value!==!0&&l.queuedFiles.value.length>0);He(Ze,Se);const c=I(()=>"q-uploader column no-wrap"+(U.value===!0?" q-uploader--dark q-dark":"")+(a.bordered===!0?" q-uploader--bordered":"")+(a.square===!0?" q-uploader--square no-border-radius":"")+(a.flat===!0?" q-uploader--flat no-shadow":"")+(a.disable===!0?" disabled q-uploader--disable":"")+(P.value===!0?" q-uploader--dnd":"")),H=I(()=>"q-uploader__header"+(a.color!==void 0?` bg-${a.color}`:"")+(a.textColor!==void 0?` text-${a.textColor}`:""));Xe(l.isUploading,(t,p)=>{p===!1&&t===!0?s("start"):p===!0&&t===!1&&s("finish")});function G(){a.disable===!1&&(l.abort(),l.uploadedSize.value=0,i.value=0,ye(),l.files.value=[],l.queuedFiles.value=[],l.uploadedFiles.value=[])}function Y(){a.disable===!1&&fe(["uploaded"],()=>{l.uploadedFiles.value=[]})}function D(){fe(["idle","failed"],({size:t})=>{i.value-=t,l.queuedFiles.value=[]})}function fe(t,p){if(a.disable===!0)return;const z={files:[],size:0},x=l.files.value.filter(L=>t.indexOf(L.__status)===-1?!0:(z.size+=L.size,z.files.push(L),L.__img!==void 0&&window.URL.revokeObjectURL(L.__img.src),!1));z.files.length>0&&(l.files.value=x,p(z),s("removed",z.files))}function he(t){a.disable||(t.__status==="uploaded"?l.uploadedFiles.value=l.uploadedFiles.value.filter(p=>p.__key!==t.__key):t.__status==="uploading"?t.__abort():i.value-=t.size,l.files.value=l.files.value.filter(p=>p.__key!==t.__key?!0:(p.__img!==void 0&&window.URL.revokeObjectURL(p.__img.src),!1)),l.queuedFiles.value=l.queuedFiles.value.filter(p=>p.__key!==t.__key),s("removed",[t]))}function ye(){l.files.value.forEach(t=>{t.__img!==void 0&&window.URL.revokeObjectURL(t.__img.src)})}function be(){return Q.value||W.value.getElementsByClassName("q-uploader__input")[0]}function Fe(t,p){const z=o(t,p,l.files.value,!0),x=be();x!=null&&(x.value=""),z!==void 0&&(z.forEach(L=>{if(l.updateFileStatus(L,"idle"),i.value+=L.size,a.noThumbnails!==!0&&L.type.toUpperCase().startsWith("IMAGE")){const ke=new Image;ke.src=window.URL.createObjectURL(L),L.__img=ke}}),l.files.value=l.files.value.concat(z),l.queuedFiles.value=l.queuedFiles.value.concat(z),s("added",z),a.autoUpload===!0&&l.upload())}function De(){T.value===!0&&l.upload()}function ae(t,p,z){if(t===!0){const x={type:"a",key:p,icon:v.iconSet.uploader[p],flat:!0,dense:!0};let L;return p==="add"?(x.onClick=u,L=Se):x.onClick=z,b(j,x,L)}}function Se(){return b("input",{ref:Q,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:a.accept,multiple:a.multiple===!0?"multiple":void 0,capture:a.capture,onMousedown:$e,onClick:u,onChange:Fe})}function xe(){return f.header!==void 0?f.header(X):[b("div",{class:"q-uploader__header-content column"},[b("div",{class:"flex flex-center no-wrap q-gutter-xs"},[ae(l.queuedFiles.value.length>0,"removeQueue",D),ae(l.uploadedFiles.value.length>0,"removeUploaded",Y),l.isUploading.value===!0?b(Ce,{class:"q-uploader__spinner"}):null,b("div",{class:"col column justify-center"},[a.label!==void 0?b("div",{class:"q-uploader__title"},[a.label]):null,b("div",{class:"q-uploader__subtitle"},[m.value+" / "+$.value])]),ae(F.value,"add"),ae(a.hideUploadBtn===!1&&T.value===!0,"upload",l.upload),ae(l.isUploading.value,"clear",l.abort)])])]}function Ee(){return f.list!==void 0?f.list(X):l.files.value.map(t=>b("div",{key:t.__key,class:"q-uploader__file relative-position"+(a.noThumbnails!==!0&&t.__img!==void 0?" q-uploader__file--img":"")+(t.__status==="failed"?" q-uploader__file--failed":t.__status==="uploaded"?" q-uploader__file--uploaded":""),style:a.noThumbnails!==!0&&t.__img!==void 0?{backgroundImage:'url("'+t.__img.src+'")'}:null},[b("div",{class:"q-uploader__file-header row flex-center no-wrap"},[t.__status==="failed"?b(Me,{class:"q-uploader__file-status",name:v.iconSet.type.negative,color:"negative"}):null,b("div",{class:"q-uploader__file-header-content col"},[b("div",{class:"q-uploader__title"},[t.name]),b("div",{class:"q-uploader__subtitle row items-center no-wrap"},[t.__sizeLabel+" / "+t.__progressLabel])]),t.__status==="uploading"?b(ge,{value:t.__progress,min:0,max:1,indeterminate:t.__progress===0}):b(j,{round:!0,dense:!0,flat:!0,icon:v.iconSet.uploader[t.__status==="uploaded"?"done":"clear"],onClick:()=>{he(t)}})])]))}Ge(()=>{l.isUploading.value===!0&&l.abort(),l.files.value.length>0&&ye()});const X={};for(const t in l)Ye(l[t])===!0?Ke(X,t,()=>l[t].value):X[t]=l[t];return Object.assign(X,{upload:De,reset:G,removeUploadedFiles:Y,removeQueuedFiles:D,removeFile:he,pickFiles:u,addFiles:S}),Je(X,{canAddFiles:()=>F.value,canUpload:()=>T.value,uploadSizeLabel:()=>m.value,uploadProgressLabel:()=>$.value}),Object.assign(_,X),()=>{const t=[b("div",{class:H.value},xe()),b("div",{class:"q-uploader__list scroll"},Ee()),A("uploader")];l.isBusy.value===!0&&t.push(b("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[b(Ce)]));const p={ref:W,class:c.value};return F.value===!0&&Object.assign(p,{onDragover:R,onDragleave:g}),b("div",p,t)}}const ua=()=>!0;function ia(e){const n={};return e.forEach(a=>{n[a]=ua}),n}const da=ia(Pe);var ca=({name:e,props:n,emits:a,injectPlugin:f})=>Ve({name:e,props:{...na,...n},emits:ea(a)===!0?{...da,...a}:[...Pe,...a],setup(){return sa(f)}});function E(e){return typeof e=="function"?e:()=>e}const pa={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>e=>e.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},fa=["factory-failed","uploaded","failed","uploading"];function ma({props:e,emit:n,helpers:a}){const f=w([]),s=w([]),_=w(0),v=I(()=>({url:E(e.url),method:E(e.method),headers:E(e.headers),formFields:E(e.formFields),fieldName:E(e.fieldName),withCredentials:E(e.withCredentials),sendRaw:E(e.sendRaw),batch:E(e.batch)})),U=I(()=>_.value>0),C=I(()=>s.value.length>0);let h;function P(){f.value.forEach(u=>{u.abort()}),s.value.length>0&&(h=!0)}function W(){const u=a.queuedFiles.value.slice(0);a.queuedFiles.value=[],v.value.batch(u)?Q(u):u.forEach(S=>{Q([S])})}function Q(u){if(_.value++,typeof e.factory!="function"){l(u,{});return}const S=e.factory(u);if(!S)n("factory-failed",new Error("QUploader: factory() does not return properly"),u),_.value--;else if(typeof S.catch=="function"&&typeof S.then=="function"){s.value.push(S);const R=g=>{a.isAlive()===!0&&(s.value=s.value.filter(o=>o!==S),s.value.length===0&&(h=!1),a.queuedFiles.value=a.queuedFiles.value.concat(u),u.forEach(o=>{a.updateFileStatus(o,"failed")}),n("factoryFailed",g,u),_.value--)};S.then(g=>{h===!0?R(new Error("Aborted")):a.isAlive()===!0&&(s.value=s.value.filter(o=>o!==S),l(u,g))}).catch(R)}else l(u,S||{})}function l(u,S){const R=new FormData,g=new XMLHttpRequest,o=(c,H)=>S[c]!==void 0?E(S[c])(H):v.value[c](H),A=o("url",u);if(!A){console.error("q-uploader: invalid or no URL specified"),_.value--;return}const N=o("formFields",u);N!==void 0&&N.forEach(c=>{R.append(c.name,c.value)});let O=0,i=0,q=0,$=0,m;g.upload.addEventListener("progress",c=>{if(m===!0)return;const H=Math.min($,c.loaded);a.uploadedSize.value+=H-q,q=H;let G=q-i;for(let Y=O;G>0&&Y<u.length;Y++){const D=u[Y];if(G>D.size)G-=D.size,O++,i+=D.size,a.updateFileStatus(D,"uploading",D.size);else{a.updateFileStatus(D,"uploading",G);return}}},!1),g.onreadystatechange=()=>{g.readyState<4||(g.status&&g.status<400?(a.uploadedFiles.value=a.uploadedFiles.value.concat(u),u.forEach(c=>{a.updateFileStatus(c,"uploaded")}),n("uploaded",{files:u,xhr:g})):(m=!0,a.uploadedSize.value-=q,a.queuedFiles.value=a.queuedFiles.value.concat(u),u.forEach(c=>{a.updateFileStatus(c,"failed")}),n("failed",{files:u,xhr:g})),_.value--,f.value=f.value.filter(c=>c!==g))},g.open(o("method",u),A),o("withCredentials",u)===!0&&(g.withCredentials=!0);const F=o("headers",u);F!==void 0&&F.forEach(c=>{g.setRequestHeader(c.name,c.value)});const T=o("sendRaw",u);u.forEach(c=>{a.updateFileStatus(c,"uploading",0),T!==!0&&R.append(o("fieldName",c),c,c.name),c.xhr=g,c.__abort=()=>{g.abort()},$+=c.size}),n("uploading",{files:u,xhr:g}),f.value.push(g),T===!0?g.send(new Blob(u)):g.send(R)}return{isUploading:U,isBusy:C,abort:P,upload:W}}var va={name:"QUploader",props:pa,emits:fa,injectPlugin:ma},ga=ca(va);const _a=ce({name:"LibraryComponent",props:{img:{type:String,default:()=>"/public/avatar/Avatar.jpg"},name:{type:String,default:()=>""},size:{type:Number,default:()=>140},isActive:{type:Boolean,default:()=>!1},add:{type:Boolean,default:()=>!1},clienId:{type:String,default:()=>""},imgageId:{type:String,default:()=>""}},setup(e){const n=Be(),a=w(!1),f=w(!1);return{API_URL:aa,handleDeleteImg:async()=>{a.value=!0;const v=e.imgageId;await n.deleteImage(v),a.value=!1},deleting:a,preview:f,handleRefresh:async()=>{await n.fetchClients()},LocalStorage:ta,factoryFn(v){return{method:"POST",fieldName:"file"}}}}}),ha={class:"abs-center row-custom"},ya={class:"text-h3-custom"};function ba(e,n,a,f,s,_){return y(),Z("div",ha,[e.add?(y(),k(ga,{key:1,url:`${e.API_URL}image/${e.clienId}`,style:{"max-width":"100%"},factory:e.factoryFn,multiple:"",accept:".jpg, image/*",headers:[{name:"Authorization",value:"Bearer "+e.LocalStorage.getItem("token")}],onUploaded:e.handleRefresh},null,8,["url","factory","headers","onUploaded"])):(y(),k(re,{key:0,class:"my-card",vertical:"",flat:"",bordered:"",style:{padding:"2px !important"},rounded:"10px"},{default:d(()=>[r(le,{horizontal:""},{default:d(()=>[r(we,{class:"col",src:`${e.API_URL}image/${e.img}`,alt:e.name,style:{width:"130px !important"}},null,8,["src","alt"]),r(me,{vertical:"",class:"justify-around q-px-md"},{default:d(()=>[e.deleting?(y(),k(ge,{key:1,indeterminate:"",rounded:"",size:"50px",color:"lime",class:"q-ma-md"})):(y(),k(j,{key:0,flat:"",color:"red",icon:"delete",onClick:e.handleDeleteImg},null,8,["onClick"])),r(j,{flat:"",color:"primary",icon:"fa-solid fa-magnifying-glass-plus",onClick:n[0]||(n[0]=v=>e.preview=!0)}),r(Ue,{modelValue:e.preview,"onUpdate:modelValue":n[1]||(n[1]=v=>e.preview=v)},{default:d(()=>[r(re,{style:{width:"600px","max-width":"90vw",margin:"auto"}},{default:d(()=>[r(le,null,{default:d(()=>[r(we,{src:`${e.API_URL}image/${e.img}`},null,8,["src"])]),_:1}),r(ne),r(me,{fixed:"bottom",align:"right",class:"text-primary"},{default:d(()=>[ee(r(j,{flat:"",label:"Fermer",color:"red",class:"btn"},null,512),[[Ae]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})),oe("h3",ya,V(e.name),1)])}var Fa=pe(_a,[["render",ba],["__scopeId","data-v-4e5b456a"]]);const Sa=ce({name:"LibrarysComponent",components:{LibraryComponent:Fa},props:{title:{type:String,default:()=>"Library d'images"},images:{type:Array,default:()=>[]},id:{type:String,default:()=>""}}}),ka={class:"text-h3-custom"},Ca={class:"pd-10 avatars"},wa={class:"addImgSection"};function qa(e,n,a,f,s,_){const v=J("LibraryComponent");return y(),k(re,{flat:"",bordered:"",class:"card-custom"},{default:d(()=>[ee((y(),k(ue,null,{default:d(()=>[oe("h3",ka,V(e.title),1)]),_:1})),[[ie]]),r(ne),oe("div",Ca,[(y(!0),Z(de,null,_e(e.images,(U,C)=>(y(),k(v,{key:C,img:U.path,imgageId:U.id},null,8,["img","imgageId"]))),128))]),oe("div",wa,[r(v,{add:"","clien-id":e.id},null,8,["clien-id"])])]),_:1})}var za=pe(Sa,[["render",qa]]);const Ua=ce({name:"ShowDetails",components:{LibrarysComponent:za,AvatarComponent:Le},props:{data:{type:Array,default:()=>null},images:{type:Array,default:()=>[]},id:{type:String,default:()=>""},hideImg:{type:Boolean,default:()=>!1}},setup(){const e=Be();return{modalModel:w(!1),handleRefresh:async()=>{await e.fetchClients()}}}}),Aa=oe("div",{class:"text-h6"},"Details",-1);function La(e,n,a,f,s,_){const v=J("AvatarComponent"),U=J("LibrarysComponent");return y(),Z(de,null,[r(j,{label:"ouvrir",class:"btn",icon:"expand",flat:"",onClick:n[0]||(n[0]=C=>e.modalModel=!0)}),r(Ue,{modelValue:e.modalModel,"onUpdate:modelValue":n[1]||(n[1]=C=>e.modalModel=C),persistent:""},{default:d(()=>[r(re,{style:{width:"700px","max-width":"70vw",margin:"auto"}},{default:d(()=>[r(le,{class:"abs-center column"},{default:d(()=>[r(v,{size:"100"}),Aa]),_:1}),r(le,{class:"q-pt-none"},{default:d(()=>[r(ve,{bordered:""},{default:d(()=>[(y(!0),Z(de,null,_e(e.data,(C,h)=>ee((y(),k(ue,{clickable:"",key:h},{default:d(()=>[r(B,null,{default:d(()=>[M(V(C.key),1)]),_:2},1024),r(B,null,{default:d(()=>[M(V(C.value),1)]),_:2},1024)]),_:2},1024)),[[ie]])),128))]),_:1})]),_:1}),e.hideImg?te("",!0):(y(),k(le,{key:0,class:"q-pt-none"},{default:d(()=>[r(U,{images:e.images,id:e.id},null,8,["images","id"])]),_:1})),r(ne),r(me,{align:"right",class:"text-primary"},{default:d(()=>[r(j,{flat:"",label:"Actualiser",color:"primary",icon:"refresh",class:"btn",onClick:e.handleRefresh},null,8,["onClick"]),ee(r(j,{flat:"",label:"Fermer",color:"red",class:"btn"},null,512),[[Ae]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var Ia=pe(Ua,[["render",La]]);const $a=ce({name:"CardListCustom",components:{ShowDetails:Ia,DeletePermissionAction:Te,AvatarComponent:Le},props:{head:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]},loading:{type:Boolean,default:()=>!0},action:{type:Function,default:()=>null},hideImg:{type:Boolean,default:()=>!1}},setup(){return{itemParser:n=>{const a=["updated_at","created_at","id","avatar","images","isAdmin","isSecretary","secret","token","refreshToken","presence"],f=Object.keys(n),s=[];return Object.values(n).forEach((_,v)=>{a.includes(f[v])||s.push({key:f[v],value:_})}),s}}}}),Ra={key:0,class:"abs-center"};function Ba(e,n,a,f,s,_){const v=J("AvatarComponent"),U=J("ShowDetails"),C=J("DeletePermissionAction");return y(),k(re,{flat:"",bordered:"",class:"card-custom"},{default:d(()=>[e.loading?(y(),Z("div",Ra,[r(ge,{indeterminate:"",rounded:"",size:"50px",color:"primary",class:"q-ma-md"})])):(y(),k(ve,{key:1,bordered:"",separator:""},{default:d(()=>[ee((y(),k(ue,{clickable:"",class:"list-title"},{default:d(()=>[r(B,null,{default:d(()=>[M(" Avatar ")]),_:1}),r(B,null,{default:d(()=>[M(V(e.head[0]),1)]),_:1}),r(B,null,{default:d(()=>[M(V(e.head[1]),1)]),_:1}),r(B,{avatar:""},{default:d(()=>[M(" Actions ")]),_:1})]),_:1})),[[ie]]),r(ne),(y(!0),Z(de,null,_e(e.items,(h,P)=>ee((y(),k(ue,{clickable:"",key:P},{default:d(()=>[h.isAdmin?te("",!0):(y(),k(B,{key:0},{default:d(()=>[r(v,{presence:h},null,8,["presence"])]),_:2},1024)),h.isAdmin?te("",!0):(y(),k(B,{key:1},{default:d(()=>[M(V(h[e.head[0]]),1)]),_:2},1024)),h.isAdmin?te("",!0):(y(),k(B,{key:2},{default:d(()=>[M(V(h[e.head[1]]),1)]),_:2},1024)),h.isAdmin?te("",!0):(y(),k(B,{key:3,avatar:""},{default:d(()=>[r(j,{icon:"more",flat:"",color:"primary"},{default:d(()=>[r(Oe,{outline:""},{default:d(()=>[r(ve,{style:{width:"100%"},bordered:""},{default:d(()=>[r(U,{data:e.itemParser(h),images:h.images,id:h.id,hideImg:e.hideImg},null,8,["data","images","id","hideImg"]),r(ne),r(C,{action:e.action,value:h.id,label:"suprimer",icon:"delete",color:"red","delete-msg-title":"Souhaitez vous suprimer cette personne ?","delete-msg-content":"La supression d'une entit\xE9 entraineras la supression de toutes les ressources qui lui sont atrivu\xE9 ","custom-btn":!0},null,8,["action","value"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))]),_:2},1024)),[[ie]])),128))]),_:1}))]),_:1})}var Wa=pe($a,[["render",Ba]]);export{Wa as C};
