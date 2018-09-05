<template>
  <div class="hello">
    <div class="listName">

<!-- <img src="/assets/software.png"> -->

      <p>List The Software You Want</p>

      <form @submit.prevent="addSoftware">
        <input type="text" placeholder="Type in Software Brand" v-model="software" v-validate="'min:3'" name="software">

        <transition name="alert-in" enter-active-class="animated rubberBand" leave-active-class="animated rotateOut">
          <p class="alert" v-if="errors.has('software')">{{ errors.first('software') }}</p>
        </transition>
      </form>

      <ul>
        <transition-group name="list" enter-active-class="animated slideInLeft" leave-active-class="animated fadeOutUpBig">
          <li v-for="(data, index) in softwares" :key='index'>
            {{ data.software }}
            <i class="fa fa-trash" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>
      <!-- <p v-if="softwares.length >= 1">You entered more than one software</p>
      <p v-else="softwares.length >= 1">You entered less than one software</p> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Softwares',
  data() {
    return {
      software: '',
      softwares: [
        { "software": "Avid Pro Tools"},
        { "software": "Adobe Photoshop"},
        { "software": "SoundToys"},
        { "software": "Logic Pro"}
      ]
    }
  },
  methods: {
    addSoftware() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.softwares.push({software: this.software})
          this.software = '';
        } else {
          // console.log('Invalid Entry');
        }
      })
    },
    remove(id) {
      this.softwares.splice(id,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";

.listName {
  background: #460DFF;
  color: #FF0D6B;
  font-weight: bold;
}

p {
  font-family: 'VT323', monospace;
  font-size: 1.4em;
  padding-bottom: 10px;
  box-shadow: 25px 10px #DF6127, -25px -15px #58B7B8;
  padding-top: 20px;
  border-radius: 20%;
}

input {
  font-family: 'VT323', monospace;
  color: #12403E;
  font-size: 1.5em;
  width: calc(100% - 33px);
  background: linear-gradient(90deg, #FF9A00, #47D98B, #FFFF3D);
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
  background-color: #47D98B;
  border: 5px solid #FF5D4E;
  margin-bottom: 5px;
  padding: 10px;
  color: #12403E;
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
