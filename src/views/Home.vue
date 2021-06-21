<template>
  <img class="code" alt="stinky code" src="../assets/code.jpg" />
  <img class="background" alt="background" src="../assets/background.jpg" />
  <div class="home">
    <PresentationPage msg="Evan Kirby McGregor" />
  </div>
  <div class="projects">
    <ProjectGrid />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PresentationPage from "@/components/PresentationPage.vue";
import ProjectGrid from "@/components/ProjectGrid.vue";

@Options({
  components: {
    PresentationPage,
    ProjectGrid,
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

.projects {
  position: absolute;
  top: 100%;
  align: center;
  display: flex;
  justify-content: center;
  margin: 20%;
}
</style>
