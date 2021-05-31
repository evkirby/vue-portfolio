<template>
  <img class="code" alt="stinky code" src="../assets/code.jpg" />
  <div class="home">
    <HelloWorld msg="Evan Kirby McGregor" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="stylus">

.code {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px !important;
  z-index: -1;
}

</style>
