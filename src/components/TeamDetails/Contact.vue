<template>
   <div id="mainDiv" class="container">
      <div class="card text-white bg-info mb-3 div" style="max-width:60%;">
      <div class="card-header">
         <h1 align="center">{{tag}} contact::</h1>
      </div>
      <div class="card-body">
         <h4 class="card-title"><spam style="color:brown">email</spam>::{{contact.email}}</h4>
         <h4 class="card-title"><spam style="color:brown">phone_no</spam>:{{contact.phone_no}}</h4>
         <h4 class="card-title"><spam style="color:brown">fb</spam>:facebook link</h4>
         <h4 class="card-title"><spam style="color:brown">insta</spam>:Instagram link</h4>
      </div>
      </div>
   </div>
</template>

<script>
export default {
   data:function(){
      return{
         tag:localStorage.getItem('tag'),
         contact:JSON.parse(localStorage.getItem('contact'))
      }
   }
}
</script>

<style scoped>
   
.container {
   width: 80%;
   height:80%;
   margin: 20 auto;
   padding: 20px;
   background: lightpink;
}
.div {
	width:auto;
	height: auto;
	background-color: black;
   margin: auto;
}
   

</style>
