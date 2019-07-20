<template>
<div>
   <div class="container" >
      <div class="row">
         <div class="col-sm-4" v-for="mem in members">
            <div class="caption">
               <img :src="mem.image" class="img-full-width" alt="" />
               <h3>name:{{mem.name}}</h3>
            </div>
         </div>
      </div>
   </div>
</div>
</template>
<script>
export default {
   data:function(){
      return{
         members:JSON.parse(localStorage.getItem('members'))
      }
   }
}
</script>

<style>
.img-full-width {
    width:100%;
    height:300px ;
}
.caption {
    position: relative;
    margin-bottom: 2%;
}
.caption h3 {
    margin: 0;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background: rgba(41,82,123,.8);
    font-size: 15px;
}


.caption-2 {
    position: relative;
    margin-bottom: 2%;
}
.caption-2 h3 {
    margin: -1px 0 0 0;
    color: #fff;
    padding: 10px;
    background: rgba(41,82,123,1);
    font-size: 15px;
}
@media (min-width:500px) { 
	.caption-2 h3 {
	    margin:0;
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    background: rgba(41,82,123,.8);
	}
}

</style>
