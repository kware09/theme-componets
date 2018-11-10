<template>
  <div id="app" v-bind:class="theme" class="bg-inverse h-screen">
    <input type="radio" id="one" value="theme-startup" v-model="theme">
    <label for="one">Modern</label>
    <br>
    <input type="radio" id="two" value="theme-boring" v-model="theme">
    <label for="two">Boring</label>
    <br>
    <input type="radio" id="two" value="theme-elegant" v-model="theme">
    <label for="two">Elegant</label>
    <router-view/>
  </div>
</template>

<script>
import './assets/CSS/main.css';

export default {
  name: 'MainPage',
  data() {
    return {
      theme: 'theme-startup',
    };
  },
};
</script>
<style>
  body {background:rgb(96, 119, 119)}
</style>
