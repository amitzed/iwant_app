<template>
  <div class="hello">
    <div class="listName">

<!-- <img src="/assets/etc.png"> -->

      <p>List Any Other Items You Want</p>

      <form @submit.prevent="addEtc">
        <input type="text" placeholder="Type in Item Name" v-model="etc" v-validate="'min:3'" name="etc">

        <transition name="alert-in" enter-active-class="animated rubberBand" leave-active-class="animated rotateOut">
          <p class="alert" v-if="errors.has('etc')">{{ errors.first('etc') }}</p>
        </transition>
      </form>

      <ul>
        <transition-group name="list" enter-active-class="animated slideInLeft" leave-active-class="animated fadeOutUpBig">
          <li v-for="(data, index) in etcs" :key='index'>
            {{ data.etc }}
            <i class="fa fa-trash" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>
      <!-- <p v-if="etcs.length >= 1">You entered more than one etc</p>
      <p v-else="etcs.length >= 1">You entered less than one etc</p> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Cars',
  data() {
    return {
      etc: '',
      etcs: [
        { "etc": "Optimus Prime - Transformers"},
        { "etc": "Cannondale Mountain Bike"},
        { "etc": "80s Era GT Pro Performer Bike"}
      ]
    }
  },
  methods: {
    addEtc() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.etcs.push({etc: this.etc})
          this.etc = '';
        } else {
          // console.log('Invalid Entry');
        }
      })
    },
    remove(id) {
      this.etcs.splice(id,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";

.listName {
  background: #056C03;
  color: #FEF1C2;
  font-weight: bold;
}

p {
  font-family: 'VT323', monospace;
  font-size: 1.4em;
  padding-bottom: 10px;
  box-shadow: 25px 10px #DF6127, -25px -15px #58B7B8;
  padding-top: 20px;
}

input {
  font-family: 'VT323', monospace;
  color: #12403E;
  font-size: 1.5em;
  width: calc(100% - 33px);
  background: linear-gradient(90deg, #F8CE3D, #58B7B8, #F2E4B1);
  border: 0;
  padding: 15px;
}

i {
  cursor: pointer;
  float: left;
}

.alert {
  font-family: 'VT323', monospace;
  background-color: #F8CE3D;
  padding: 3px;
  margin: -20px;
  display: inline-block;
}

ul, li {
  font-family: 'VT323', monospace;
  font-size: 1.1em;
  font-weight: bold;
  background-color: #7EBB4C;
  border: 5px solid #056C03;
  margin-bottom: 5px;
  padding: 10px;
  color: #FEFEFE;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding-top: 5px;
}


/* Animations */
@keyframes background-move {
   0%{background-position:0% 50%}
   50%{background-position:100% 50%}
   100%{background-position:0% 50%}
 }


</style>
