import axios from 'axios';
import router from '../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    posts:[],
    status: '',
    error: null
};

const getters = {
    // isLoggedIn: function (state) {
    //     if (state.token != '') {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
    // Login Action
    async login({
        commit
    }, user) {
        commit('auth_request');
        try {
           console.log("entered into login action...")
            // let res = await axios.post('http:localhost:1337/auth/local', user);
            let res= await axios.post("http://localhost:1337/auth/local",user);
            console.log(res);
            if (res.data.user.confirmed) {
                const token = res.data.token;
                const user = res.data.user;
                // Store the token into the localstorage
                localStorage.setItem('token', token);
                // Set the axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
        } catch (err) {
            commit('auth_error', err);
        }
    },
    // Register User
    async register({
        commit
    }, userData) {
        try {
            commit('register_request');
            let res = await axios.post('http://localhost:1337/auth/local/register', userData);
            console.log(res)
            // if (res.data.success !== undefined) {
            //     commit('register_success');
            // }
            if(res.data.user.confirmed){
               commit('register_success');
            }
            return res;
        } catch (err) {
            commit('register_error', err)
        }
    },
    // Get the user Profile
   //  async getProfile({
   //      commit
   //  }) {
   //      commit('profile_request');
   //      let res = await axios.get('http://localhost:1337/teamdetails')
   //      commit('user_profile', res.data.user)
   //      return res;
   //  },

    //getting posts and storing in state.posts
    async newsFead({
       commit
    }){
      // commit('newsfead_request');
       let res=await axios.get('http://localhost:1337/posts');
       console.log(res);
       //commit('response_posts',res);
       return res;
    },
    // Logout the user
    async logout({
        commit
    }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
        return
    }
};

const mutations = {
    auth_request(state) {
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    auth_error(state, err) {
        state.error = err.response.data.msg
    },
    register_request(state) {
        state.error = null
        state.status = 'loading'
    },
    register_success(state) {
        state.error = null
        state.status = 'success'
    },
    register_error(state, err) {
        state.error = err.response.data.msg
    },
    logout(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
    },
    profile_request(state) {
        state.status = 'loading'
    },
    user_profile(state, user) {
        state.user = user
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};