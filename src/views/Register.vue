<template>
  <div>
    <h2>Register</h2>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Register</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                v-model="username"
                class="form-control"
                required
              >
            </div>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                v-model="name"
                class="form-control"
                required
              >
            </div>
            <div class="form-group">
              <label for="College_name">College Name</label>
              <br>
             <input
                id="college_name"
                type="text"
                placeholder="Enter College Name"
                name="College_name"
                v-model="College_name"
                class="form-control"
                required
              >
              <small id="emailHelp" class="form-text text-muted">Enter ShortForms with Capital Letters only</small>
    
            </div>
            

            <div class="form-group">
              <label for="Branch">Branch</label>
              <br>
              
              <select v-model="Branch" required>
                <option  disabled value=""> Please select your branch </option>
                <option value="AE">AE</option>
                <option value="CE">CE</option>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="EIE">EIE</option>
                <option value="IT">IT</option>
                <option value="ME">ME</option>
              
              </select>
            </div>
            <div class="form-group">
              <label for="Year">Year</label>
              <br>
              <select v-model="Year" required>
                <option  disabled value="">Select year</option>
                <option value="1">1st year</option>
                <option value="2">2nd year</option>
                <option value="3">3rd year</option>
                <option value="4">4th year</option>
                 
              </select>
            </div>
            <div class="form-group">
              <label for="Roll_no">Roll Number</label>
              <br>
              <input 
                id="Roll_no"
                type="text"

                v-model="Roll_no"
                placeholder="Enter Roll Number"
                required
              >
             </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                v-model="email"
                class="form-control"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                id="password"
                v-model="password"
                required
              >
            </div>
            <div class="form-group">
              <label for="confirm_password">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                name="confirm_password"
                id="confirm_password"
                v-model="confirm_password"
                required
              >
            <div class="form-group">
              <label for="Phone_NO">Phone Number </label>
              <br>
              <input 
                type="text"
                id="Phone_NO"
                v-model="Phone_no"
                placeholder="Enter Phone Number"
                required
              >
             
            </div>
              
            </div>
            <button class="btn btn-primary">Register</button>
            <br>
            <router-link to="/login" class="card-link">Already have an account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      name: "",
      email: "",
      Branch:"",
      Year:"",
      College_name:"",
      Roll_no:"",
      Phone_no:""
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name,
        year:this.Year,
        branch:this.Branch,
        college_name:this.College_name,
        roll_no:this.Roll_no,
        phone_no:this.Phone_no
      };
      this.register(user).then(res => {
        //console.log("response in register page is::");
        //console.log(res);
        console.log(res);
        if (res.data.user.confirmed) {
          console.log("res.data.user.confirmed");
          this.$router.push("/");
        }
      });
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