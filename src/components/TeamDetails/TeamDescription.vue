<template>
   <div>
      <div class="jumbotron">
        <h1 align="center"  style="margin-down:10px;text-shadow: 2px 4px 3px rgba(0,0,0,0.3);color:blue" >{{tag}} description::</h1>
        <p style="margin:15px;font-family: 'Comic Sans MS', Times, serif;">{{description}}</p>
      </div>
   </div>
</template>



<script>
export default {
   data:function(){
       return{
           tag:localStorage.getItem('tag'),
           description:localStorage.getItem('description')
       }
   },
    methods:{

    }
}
</script>


<style>
#block_container {
    display: flex;
    justify-content: center;
}
</style>
