  <template>
    <div class="hello">
      <div class="listName">

  <!-- <img src="/assets/watch.png"> -->

        <p>List The Watches You Want</p>

        <form @submit.prevent="addWatch">
          <input type="text" placeholder="Type in Watch Name" v-model="watch" v-validate="'min:3'" name="watch">

          <transition name="alert-in" enter-active-class="animated rubberBand" leave-active-class="animated rotateOut">
            <p class="alert" v-if="errors.has('watch')">{{ errors.first('watch') }}</p>
          </transition>
        </form>

        <ul>
          <transition-group name="list" enter-active-class="animated slideInLeft" leave-active-class="animated fadeOutUpBig">
            <li v-for="(data, index) in watches" :key='index'>
              {{ data.watch }}
              <i class="fa fa-trash" v-on:click="remove(index)"></i>
            </li>
          </transition-group>
        </ul>
        <!-- <p v-if="watchs.length >= 1">You entered more than one watch</p>
        <p v-else="watchs.length >= 1">You entered less than one watch</p> -->

      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'Watches',
    data() {
      return {
        watch: '',
        watches: [
          { "watch": "Rolex"},
          { "watch": "Brietling"},
          { "watch": "Omega"}
        ]
      }
    },
    methods: {
      addWatch() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.watches.push({watch: this.watch})
            this.watch = '';
          } else {
            // console.log('Invalid Entry');
          }
        })
      },
      remove(id) {
        this.watches.splice(id,1);
      }
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  @import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";

  .listName {
    background: #FFFF3D;
    color: #12403E;
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
    background-color: #CC7833;
    border: 5px solid #A42117;
    margin-bottom: 5px;
    padding: 10px;
    color: #260705;
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
