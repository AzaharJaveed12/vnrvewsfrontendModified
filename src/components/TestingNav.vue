<template>
   <div id="app">
   <nav class="navbar  navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">VNR NEWS</router-link>
      <form class="form-inline my-2 my-lg-0">
         <input class="form-control mr-sm-2" type="text" placeholder="Search">
         <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
      <div class="btn-group btn-group-toggle">
         <ul class="navbar-nav mr-auto">
            <li class="nav-item">
               <router-link class="nav-link" to="/login" v-if="!isLoggedIn">Login</router-link>
            </li>
        </ul>
            &nbsp;
            &nbsp;
            &nbsp;
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
               <a class="nav-link" href="/register" v-if="!isLoggedIn">register</a>
            </li>
        </ul>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
               <a class="nav-link" href="/" v-if="isLoggedIn" v-on:click.prevent="logoutUser">logOut ho bhai..</a>
            </li>
        </ul>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01" >
         <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="/seminar">Seminars</a>
            </li>
            

            <li class="nav-item dropdown">
              
             <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" 
             aria-haspopup="true" aria-expanded="false">Notice</a>
               <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; 
               will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);">
               <a class="dropdown-item" href="/college_notice">COLLEGE_NOTICE</a>
               <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/ae_notice">AE_NOTICE</a>
                <a class="dropdown-item" href="/ce_notice">CE_NOTICE</a>
                <a class="dropdown-item" href="/cse_notice">CSE_NOTICE</a>
                <a class="dropdown-item" href="/eee_notice">EEE_NOTICE</a>
                <a class="dropdown-item" href="/ece_notice">ECE_NOTICE</a>
                <a class="dropdown-item" href="/eie_notice">EIE_NOTICE</a>
                <a class="dropdown-item" href="/it_notice">IT_NOTICE</a>
                <a class="dropdown-item" href="/me_notice">ME_NOTICE</a>
                
               </div>
            </li>



            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
               aria-haspopup="true" aria-expanded="false">Student Chapters</a>
              <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; 
              will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px)">
                <a class="dropdown-item" v-on:click="fun('ACM')" href="/teamdetails" >ACM</a>
                <!--a class="dropdown-item" href="/teamdetails">ACM</a-->
                <a class="dropdown-item" v-on:click="fun('ASME')" href="/teamdetails">ASME</a>
                <a class="dropdown-item" v-on:click="fun('CEA')" href="/teamdetails">CEA,ICI,IGBC</a>
                <a class="dropdown-item" v-on:click="fun('CSI')" href="/teamdetails">CSI</a>
                <a class="dropdown-item" v-on:click="fun('IEEE')" href="/teamdetails">IEEE</a>
                <a class="dropdown-item" v-on:click="fun('IEI')" href="/teamdetails">IEI</a>
                <a class="dropdown-item" v-on:click="fun('IETE')" href="/teamdetails">IETE</a>
                <a class="dropdown-item" v-on:click="fun('ISOI')" href="/teamdetails">ISOI</a>
                <a class="dropdown-item" v-on:click="fun('ISTE')" href="/teamdetails">ISTE</a>  
                <a class="dropdown-item" v-on:click="fun('SAE')" href="/teamdetails">SAE</a>
              </div>
            </li>
            
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" 
                aria-haspopup="true" aria-expanded="false">Clubs</a>
                <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute;
                 will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);">
                  <a class="dropdown-item" href="/creative_arts">Creative Arts</a>
                  <a class="dropdown-item" href="/crescendo">Crescendo</a>
                  <a class="dropdown-item" href="/dramatix">Dramatix</a>
                  <a class="dropdown-item" href="/livewire">Livewire Crew</a>
                  <a class="dropdown-item" href="/nss">NSS</a>
                  <a class="dropdown-item" href="/scintillate">Scintillate</a>
                  <a class="dropdown-item" href="/stentorian">Stentorian</a>
                  <a class="dropdown-item" href="/sahitivanam">విజ్ఞానజ్యోతి సాహితీవనం</a>
                  <a class="dropdown-item" href="/vj_teatro">VJ Teatro</a>  
                  <a class="dropdown-item" href="/vnrsf">VNRSF</a>
                </div>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/sports">Sports</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/others">Others</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/postCreation">Create Post</a>
            </li> 
            
            <li class="nav-item">
              <a class="nav-link" href="/testing">Testing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/testingsignup">testingSignup</a>
            </li>

          
         </ul>
        </div>
         
    </nav>
   </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    },
    fun(data){
      localStorage.setItem('tag',data);
    }
  }
};
</script>

<style>

</style>
