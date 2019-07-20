<template>
   <div>
      <h1>{{atchivements}}</h1>
   </div>
</template>

<script>
export default {
   data:function(){
      return{
         atchivements:JSON.parse(localStorage.getItem('atchivements'))
      }
   },
   methods:{

   }
}
</script>

<style>

</style>
