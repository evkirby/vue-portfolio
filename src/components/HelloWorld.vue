<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Stuff I worked on
    </p>
    <h3>Check it out: </h3>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h1
  font-family : "Playfair Display";
  font-size : 60px;
  font-weight: lighter;
  font-style: italic;
  color: white;
  margin-top: 45px;

p
  font-size : 40px;
  font-weight: lighter;
  margin-left: 2%;
  margin-top: 10px;
</style>
