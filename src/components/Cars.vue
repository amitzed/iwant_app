<template>
  <div class="hello">
    <div class="listName">


      <p>List The Cars You Want</p>

      <form @submit.prevent="addCar">
        <input type="text" placeholder="Type in Car Name" v-model="car" v-validate="'min:3'" name="car">

        <p class="alert" v-if="errors.has('car')">{{ errors.first('car') }}</p>

      </form>

      <ul>
        <li v-for="(data, index) in cars" :key='index'>
          {{ data.car }}
        </li>
      </ul>
      <!-- <p v-if="cars.length >= 1">You entered more than one car</p>
      <p v-else="cars.length >= 1">You entered less than one car</p> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Cars',
  data() {
    return {
      car: '',
      cars: [
        { "car": "Lamborghini Countach"},
        { "car": "BMW M8"},
        { "car": "Bugatti Chiron"},
        { "car": "Mercedes-Benz AMG GT"}
      ]
    }
  },
  methods: {
    addCar() {
      this.cars.push({car: this.car})
      this.car = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.listName {
  background: #12403E;
  color: #F8CE3D;
}

p {
  font-family: 'Rubik', sans-serif;
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
  background-color: #F8CE3D;
  border: 5px solid #58B7B8;
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
