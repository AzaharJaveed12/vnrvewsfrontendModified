<template>
    <div>
       <ul style="list-style : none" class="a-container" >
        <li v-for="(d,i) in reversedPosts" v-bind:key=i class="a-items" >
        <div class="card mb-3" id="cardmb-3">
            <input type="radio" name="ac" :id=i />
            <label :for=i>
                <blockquote class="blockquote text-center card-header" 
                v-bind:class="{'Notice':(d.tag=='COLLEGE_NOTICE'||d.tag=='AE_NOTICE'
                 ||d.tag=='CE_NOTICE'||d.tag=='CSE_NOTICE'||d.tag=='EEE_NOTICE'||d.tag=='ECE_NOTICE'||d.tag=='EIE_NOTICE'
                 ||d.tag=='IT_NOTICE'||d.tag=='ME_NOTICE'),
                 'Sports':(d.tag=='SPORTS'),'Seminar':(d.tag=='SEMINARS'),
                 'StuedntChapters':(d.tag=='ACM'||d.tag=='ASME'||d.tag=='CEA'||d.tag=='CSI'||d.tag=='IEEE'
                 ||d.tag=='IEI'||d.tag=='IETE'||d.tag=='ISOI'||d.tag=='ISTE'||d.tag=='SAE'),
                 'Clubs':(d.tag=='CreativeArts'||d.tag=='Crescendo'||d.tag=='Dramaitx'||d.tag=='LivewireCrew'
                 ||d.tag=='NSS'||d.tag=='Scintillate'||d.tag=='Stentorian'||d.tag=='విజ్ఞానజ్యోతి సాహితీవనం'
                 ||d.tag=='VJTeatro'||d.tag=='VNRSF'),
                 'Others':(d.tag=='Others')}">
                    <p class="mb-0" >{{d.title}}</p>
                    <footer class="blockquote-footer"><cite title="Source Title">{{d.tag}}</cite></footer>
                </blockquote>
                 
            <div class="card-body">
            <h5 class="card-title">{{d.short_description}}</h5>
            <!--h6 class="card-subtitle text-muted">Support card subtitle</h6-->
            </div>
            </label>
        
        <div class="a-content">
         
         <!--img :src=d.image style="height: 200px; width: 100%; display: block;" alt="llsadfnlsdfn" /-->
       
        <imageGallery v-bind:images="d.image"></imageGallery>
        
        <div c1lass="card-body">
            <p class="card-text">{{d.long_description}}</p>
        </div>
        
        <div class="card-footer text-muted">
            --days
        </div>

         <div>
            <h1>this div is for comments and likes</h1>
            <button v-on:click.prevent="liked(d.id)">like</button>
        </div>

        </div>

       
    </div> 
         
    </li>
    </ul>
                              
    </div>
</template>
<script>
import imageGallery from '../components/ImageGallery.vue';
import axios from 'axios';
//const API_URL = "https://vnrnews01.herokuapp.com/posts";
//const API_URL="http://localhost:1337/posts";

export default {
     components: {
         imageGallery,
	 },
	 data:function(){
		 return{
			 posts:[]
		 }
     },
     methods:{
         liked:function(id){
             console.log("id of liked post..!!");
             console.log(id);
             const userDetails=JSON.parse(localStorage.getItem('userDetails'));
             console.log(userDetails);
             const dataSending={
                 id:id,
                 likes:userDetails
             };
             const token=localStorage.getItem('token');
             console.log("token is::::::::::::::::::");
             console.log(token);
             console.log(dataSending);
             
              axios.defaults.headers.common['Authorization']="bearer "+token;
             axios.post(
                 "http://localhost:1337/likes",{},dataSending
             ).then(res=>{
                console.log(res);
            });
         }
     },
	 computed:{
		 reversedPosts(){
             console.log("token is::");
             console.log(localStorage.getItem('token'));
             console.log("entered into reserved posts..!!");

             return this.posts;
		 }
	 },
	 mounted(){
       console.log("mounted of testing..!!")
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
                    .get('http://localhost:1337/posts',config)
                    .then(res=>{
                        console.log("response of the posts in tesrting is::");
                        console.log(res);
                        this.posts=res.data;
                        console.log("data is::");
                        console.log(this.posts);
                    })
                    
      }
}

 </script>
 

<style scoped>
        
#cardmb-3{
    margin: 50px;
    border: 1.5px solid gray;
}
        /* reset */
        .mb-0{
            color: black;
        } 
        .blockquote-footer{
            color: black;
        }
        ul {
        margin: 0;
        padding: 0;
        list-style: none;
        }

        input[type=radio] {
        display: none;
        }

        /* style */
        .a-container {
        width: 100%;
        margin: 20px auto;
        }

        .a-container label {
        display: block;
        position: relative;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        padding: 10px 20px;
        color: #aaa;
        background-color: #eee;
        border-bottom: 1px solid #ddd;
        
        -webkit-transition: all .2s ease;
        -moz-transition: all .2s ease;
        -ms-transition: all .2s ease;
        -o-transition: all .2s ease;
        transition: all .2s ease;
        }

        .a-container label:after {
        content: "";
        width: 0%;
        height: 0;
        border-top: 8px solid #aaa;
        border-right: 6px solid transparent;
        border-bottom: 8px solid transparent;
        border-left: 6px solid transparent;
        position: absolute;
        right: 10px;
        top: 16px;
        }

        .a-container input:checked + label,
        .a-container label:hover {
        background-color: #ddd;
        color: #222;
        }

        .a-container input:checked + label:after {
        border-top: 8px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 8px solid #222;
        border-left: 6px solid transparent;
        top: 6px;
        }

        .a-content {
        padding: 0 20px 20px;
        display: none;
        }

        .a-container input:checked ~ .a-content {
        display: block;
        }
        .Notice{
            background-color:greenyellow;
        }
        .Sports{
            background-color: dodgerblue;
        }
        .StuedntChapters{
            background-color:orangered

        }
        .Clubs{
            background-color: darksalmon
        }
        .Seminar{
            background-color: crimson
        }
        .Others{
            background-color: purple
        }


        </style>


