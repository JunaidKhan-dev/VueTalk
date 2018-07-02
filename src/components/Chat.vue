<template>
    <div class="chat chatcontainer">
        <div class="welcome ">
    <div class="row">
      <div class="teal darken-3 white-text head text-center">
        <i class="material-icons Large">chat</i> VueTalk
        <span>Welcome {{this.name}}</span>
      </div>
    </div>
    <!-- chat window -->
    <div class="card">
        <div class="card-content">
            <ul class="messages" v-chat-scroll>
               
                <li v-for="item in messages" :key="item.id" class="margincustom">
                    <span class="teal-text text-darken-3">
                    <i class="material-icons">chat
                    </i> {{item.name}}:</span>
                    <span class="grey-text text-darken-3">{{item.content}}</span>
                    <span class="grey-text time">{{item.timestamp}}</span>
                    
                </li>
            </ul>
        </div>
        <div class="card-action">
           <new-message :name="name" />
        </div>
    </div>
    </div>
    </div>
</template>

<script>
/* eslint-disable */
import NewMessage from './NewMessage'
import db from '../firebase/init'
import moment from 'moment'
export default {
    name:'Chat',
    props:['name'],

    data(){
        return{
            messages:[]

        }
    
    },
   created(){
    let ref = db.collection('messages').orderBy('timestamp')
    ref.onSnapshot( snapshot => {
    //    snapshot provide all data we only need changes data, so we need to loop thorught it
        snapshot.docChanges.forEach(change => {
            // now check change type, if its equal to added then push the data to messages array
            if(change.type=='added'){
                // change.doc provide you data for usage
                let doc = change.doc
                this.messages.push({
                   id: doc.id,
                //    data() method provide input data of the user including its name or related details
                   name: doc.data().name,
                   content : doc.data().content,
                   timestamp: moment(doc.data().timestamp).format('lll')

                })
            }
        })
    })
   },

    components:{
        'new-message':NewMessage
    }
}
</script>

<style scoped>
.messages{
    overflow: auto;
    max-height: 350px;

}
.chatcontainer{
    max-width: 550px;
    margin: 50px auto;
    
   
}
.chatcontainer::-webkit-scrollbar{
    width: 3px;
}

.chatcontainer::-webkit-scrollbar-track{
    background-color: #ddd;
}

.chatcontainer::-webkit-scrollbar-thumb{
    background-color: #aaa;
}

 @media only screen and (max-width: 690px) {
    .chatcontainer {
        max-width: 550px !important;
        margin: 10px auto;
    }
 }
 @media only screen and (max-width: 570px) {
    .chatcontainer {
        max-width: 400px !important;
        margin: 10px auto;
    }

    .messages span{
    font-size: 1.2rem !important;
}
.time{
display: block;
font-size: .6rem !important;
}

 }

  @media only screen and (max-width: 470px) {
    .chatcontainer {
        max-width: 360px !important;
        margin: 0 auto;

    }

    .messages span{
    font-size: .9rem !important;
}
.time{
display: block;
font-size: .4rem !important;
}
  }
.messages{
    text-align: left;
}
.messages span{
    font-size: 1.3rem;
}
.time{
display: block;
font-size: .7rem !important;
}

.margincustom{
    margin: 20px;
}



</style>

