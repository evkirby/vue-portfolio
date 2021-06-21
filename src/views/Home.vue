<template>
  <img class="code" alt="stinky code" src="../assets/code.jpg" />
  <img class="background" alt="background" src="../assets/background.jpg" />
  <div class="home">
    <PresentationPage msg="Evan Kirby McGregor" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PresentationPage from "@/components/PresentationPage.vue";

@Options({
  components: {
    PresentationPage,
  },
})
export default class Home extends Vue {}
</script>

<style lang="stylus">

.code {
  position: absolute;
  left: 20px;
  top: 10px;
  right: 20px;
  width: 95%;
  height: auto;
  z-index: -1;
  -webkit-filter: blur(2px);
  filter: blur(2px);
}

.background {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  width: 100%;
  z-index: -2;
  height: auto;
}

.home {
  text-align: left;
  margin-left: 10%;
}

</style>
