<template>
   <div>
      <div class="jumbotron">
         
         <div id="center">
            <h2>name  ::{{leader_details.name}}</h2>
            <h2>branch::{{leader_details.branch}}</h2>
            <h2>year  ::{{leader_details.year}}</h2>
         </div>
         
         
         <div >
            <img style=" width: 100%; display: block;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_Er_QAMPK6Yo-0sSSg3677PrwuKTIBL2e9VsueYNrMdc36TlkQgoogle" alt="Card image">
         </div>
         

         
      </div>
   </div>
</template>

<script>
export default {
   data:function(){
      return{
         leader_details:JSON.parse(localStorage.getItem('leader_details'))
      }
   },
   methods:{
      pressed:function(){
         console.log("hmm..");
         console.log(this.leader_details);
      }
   }
}
</script>

<style>
#center{
   background-color:rgb(77, 235, 161);
    width: auto;
    height: auto;
    margin: 0 auto;
    padding:3%;
    text-align: center;
    position: relative;
}

</style>
