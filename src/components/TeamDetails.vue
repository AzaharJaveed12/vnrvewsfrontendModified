<template>
<div> 
   <div align="center" style="border:10px;margin:10px">

      <button style="margin:10px" class="btn btn-success" v-on:click.prevent="description()">description</button>
      <button style="margin:10px" class="btn btn-success" v-on:click.prevent="members()">members</button>
      <button style="margin:10px" class="btn btn-success" v-on:click.prevent="atchivements()">atchivements</button>
      <button style="margin:10px" class="btn btn-success" v-on:click.prevent="leader()">leader</button>
      <button style="margin:10px" class="btn btn-success" v-on:click.prevent="contact()">contact</button>
   </div>
   <div>
      <team-description v-if="display==='description'"></team-description>
      <members v-if="display==='members'" />
      <leader-details v-if="display==='leader'"></leader-details>
      <contact v-if="display=='contact'"/>
      <Atchivements v-if="display=='atchivements'"/>
   </div>
</div>
</template>



<script>
import axios from 'axios';
import leaderDetails from './TeamDetails/LeaderDetails.vue';
import members from './TeamDetails/Members.vue';
import teamDescription from './TeamDetails/TeamDescription.vue';
import Contact from './TeamDetails/Contact.vue';
import Atchivements from './TeamDetails/Atchivements.vue';

export default {
   components:{
      leaderDetails,
      members,
      teamDescription,
      Contact,
      Atchivements
   },
   data:function(){
      return{
         tag:localStorage.getItem('tag'),
         team_details:{},
         display:"description"
      }
   },
   methods:{
      description(){
         console.log('description method is called..!!');
         this.display="description";
         console.log(this.display);
      },
      members(){
         this.display= "members";
      },
      atchivements(){
         this.display="atchivements";
      },
      contact(){
         this.display="contact";
      },
      leader(){
         this.display="leader";
      }


   },
   mounted(){
       console.log("mounted of testingNav..!!")
       let token=localStorage.getItem('token');
       let config={
                      headers:{
                          Authorization:`Bearer ${token}`
                        }
                    };
        if(token==undefined){
          config={}
        }
            const res= axios
                    .get('http://localhost:1337/teamdetails'+'?tag='+localStorage.getItem('tag'),config)
                    .then(res=>{
                        console.log("response of the teamdetails in testingNav is::");
                        console.log(res);
                        this.team_details=res.data[0];
                        localStorage.setItem('leader_details',JSON.stringify(this.team_details.leader));
                        localStorage.setItem('members',JSON.stringify(this.team_details.memebers));
                        localStorage.setItem('atchivements',JSON.stringify(this.team_details.atchivements));
                        localStorage.setItem('description',JSON.stringify(this.team_details.description));
                        localStorage.setItem('contact',JSON.stringify(this.team_details.details));
                        console.log("leader details are::");
                        console.log(localStorage.getItem('leader_details'));
                        
                    })           
      }
}
</script>

<style>

</style>
