<template>
  <div class="welcome container middle">
    <div class="row">
      <div class="teal darken-3 white-text head">
        <i class="material-icons Large">chat</i> VueTalk
        <span>community chat wall for Vue Lovers</span>
      </div>
      
      </div>
    <div class="card">

      <div class="card-content center-align">
        <h2 class="teal-text text-darken-3">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="username" class="teal-text">Enter Your Name</label>
          <input type="text" v-model="name" id="username">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal darken-3" type="submit">Enter Chat Room</button>
        </form>
      </div>
    </div>
   
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Welcome',
  data () { 
    return {
      name:'',
      feedback:'',

    }
    },

  methods:{
    enterChat(){

      if(this.name){
        
        this.$router.push({name:'Chat', params:{name:this.name}})

      }else{
        this.feedback = 'Enter Your Name to Join'
      }
      

    }
  }
  }

</script>


<style>

.middle{
  position: absolute;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;

}

.container{
  max-width: 550px;
}
  .row{
    margin-bottom: 0;
  }

  .head{
    display: block;
    height: 6rem;
    padding: 1rem;
    font-size: 2.5rem;
    
  }

  .head span{
    font-size: 1rem;
    text-transform: capitalize;
  }
  .btn{
    margin-top:1rem;

  }

</style>
