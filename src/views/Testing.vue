<template>
  <div>
    <h2>Create Post</h2>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Post creation form</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="createPost">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                id="Title"
                type="text"
                placeholder="Enter the Title"
                name="Title"
                v-model="title"
                class="form-control"
                required
              >
            </div>
            

            <div class="form-group">
              <label for="tag">Tag</label>
              <br>
              
              <select v-model="tag" required>
                <option  disabled value="">Please select a revelant tag</option>
                <option value="COLLEGE_NOTICE">COLLEGE_NOTICE</option>
                <option value="AE_NOTICE">AE_NOTICE</option>
                <option value="CE_NOTICE">CE_NOTICE</option>
                <option value="CSE_NOTICE">CSE_NOTICE</option>
                <option value="ME_NOTICE">ME_NOTICE</option>
                <option value="EEE_NOTICE">EEE_NOTICE</option>
                <option value="ECE_NOTICE">ECE_NOTICE</option>
                <option value="EIE_NOTICE">EIE_NOTICE</option>
                <option value="IT_NOTICE">IT_NOTICE</option>
                <option value="SEMINARS">SEMINARS</option>
                <option value="ACM">ACM</option>
                <option value="ASME">ASME</option>
                <option value="CEA">CEA</option>
                <option value="CSI">CSI</option>
                <option value="IEEE">IEEE</option>
                <option value="IEI">IEI</option>
                <option value="IETE">IETE</option>
                <option value="ISOI">ISOI</option>
                <option value="ISTE">ISTE</option>
                <option value="SAE">SAE</option>
                <option value="CreativeArts">CreativeArts</option>
                <option value="Crescendo">Crescendo</option>
                <option value="Dramaitx">Dramaitx</option>
                <option value="LivewireCrew">LivewireCrew</option>
                <option value="NSS">NSS</option>
                <option value="Scintillate">Scintillate</option>
                <option value="Stentorian">Stentorian</option>
                <option value="విజ్ఞానజ్యోతి సాహితీవనం">విజ్ఞానజ్యోతి సాహితీవనం</option>
                <option value="VNRSF">VNRSF</option>
                <option value="VJTeatro">VJTeatro</option>
                <option value="Others">Others</option>
                <option value="SPORTS">SPORTS</option>
            </select>
            </div>
            <div class="form-group">
              <label for="short_description">Short Description</label>
              <input
                id="short_description"
                type="text" 
                placeholder="Enter the short_description "
                name="short_description"
                v-model="short_description"
                class="form-control"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="long_description">Long Description</label>
              <input
                id="long_description"
                type="textarea"
                rows="20" 
                cols="50"
                placeholder="Enter Long_description "
                name="long_description"
                v-model="long_description"
                class="form-control"
                required
              >
            </div>
            <div class="form-group">
              <label for="image">ImageURL</label>
              <br>
             <input
                id="image"
                type="url"
                placeholder="Copy paste the url"
                name="image"
                v-model="image"
                class="form-control"
                required
              > 
            </div>
            
            <div class="form-group">
              <label for="start_on">Start Date</label>
              <br>
             <input
                id="start_on"
                type="datetime-local"                
                name="start_on"
                v-model="start_on"
                class="form-control"
            
              > 
            </div> 
            <div class="form-group">
              <label for="ends_on">End Date</label>
              <br>
             <input
                id="ends_on"
                type="datetime-local"                
                name="ends_on"
                v-model="ends_on"
                class="form-control"
                
              > 
            </div>
 
              
            
            <button class="btn btn-primary">Create Post</button>
            <br>
           </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from 'axios';
export default {
  data() {
    return {
          title:"",
          tag:"",
          short_description:"",
          long_description:"",
          image:[],
          start_on:"",
          ends_on:"",
          token:localStorage.getItem("token") 
     };
  },
  methods: {
    //...mapActions(["postCreation"]),
      createPost(){
      let posts = {
          title : this.title,
          tag : this.tag,
          short_description : this.short_description,
          long_description : this.long_description,
          image : this.image,
          start_on : this.start_on,
          ends_on : this.ends_on,  
          };
    axios.defaults.headers.common['Authorization']="bearer "+this.token;
     axios.post('http://localhost:1337/posts',{},posts).then(res=>{
         console.log("posted sucesssfully..!!");
         console.log(res);
     })
      
    //   this.createPost(posts).then(res => {
    //     //console.log("response in register page is::");
    //     //console.log(res);
    //     console.log(res);
    //     if (res.data.user.confirmed) {
    //       this.$router.push("/");
    //     }
    //   });
    }
  }
};
</script>

<style>
.card {
  width: 60%;
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
</style>