import{ab as n,ac as i,j as s}from"./index.51a95478.js";const l=n("client",{state:()=>({route:`${i}client`,loading:!0,error:!1,clients:[],uploading:!1}),getters:{async getUser(t){return t.clients}},actions:{async fetchClients(){this.loading=!0;try{const t=await s.get(this.$state.route);this.clients=t.data,this.loading=!1}catch(t){this.$state.error=t,this.loading=!1}},async setUser(t){this.loading=!0;try{const a=(await s.post(this.$state.route,t)).data;return this.clients=[...this.clients,a],await this.fetchClients(),this.loading=!1,!0}catch(e){return this.$state.error=e,this.loading=!1,!1}},async setImage(t,e){this.uploading=!0;const a=new FormData;a.append("file",t);try{await s.post(e,a).then(r=>{console.log(r),this.uploading=!1})}catch(r){console.log(r)}},async deleteUser(t){new FormData().append("id",t);try{return await s.delete(this.$state.route+"/"+t),await this.fetchClients(),!0}catch{return!1}},async deleteImage(t){new FormData().append("id",t);try{return await s.delete(i+"image/"+t),await this.fetchClients(),!0}catch{return!1}}}});export{l as u};
