<template>
   <div>
      <h1>details of::{{tag}}</h1>
      <button v-on:click.prevent="checkingTag()">press me</button>
      <p>{{team_details.description}}</p>
      <p>{{team_details.details}}</p>
      <img v-bind:src="team_details.logo" alt="lol macha..">
   </div>
</template>

<script>
import axios from 'axios';
export default {
   data:function(){
      return{
         tag:localStorage.getItem('tag'),
         team_details:{}
      }
   },
   methods:{
      checkingTag(){
         console.log('checking tag..!!'+this.$store.state.token);
         console.log('increament tsting::'+this.$store.state.count);
         console.log("localstorage tag::"+localStorage.getItem('tag'))
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
                        this.$store.state.tag='';
                        this.team_details=res.data[0];
                        console.log(this.team_details);
                        
                    })           
      }
}
</script>

<style>

</style>
