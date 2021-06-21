<template>
  <v-container class="grey lighten-5 projectGrid">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-2" outlined tile>
          <img
            src="../assets/Birreco.png"
            @click="goToProjectPage('birreco')"
          />
          <!-- Replace birreco with Projects.Birreco-->
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          <img src="../assets/Music.png" @click="goToProjectPage('music')" />
        </v-card>
      </v-col>
    </v-row>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          <img src="../assets/logo.png" />
        </v-card>
      </v-col>
    </v-row>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    <v-row>
      <v-col v-for="n in 2" :key="n" cols="6">
        <v-card class="pa-2" outlined tile>
          <img src="@/assets/logo.png" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import router from "@/router/index";

@Options({
  props: {},
})
export default class ProjectGrid extends Vue {
  goToProjectPage(projectName: string) {
    router.push({
      name: "ProjectPage",
      params: { projectName: projectName },
    });
  }
}
</script>

<style scoped lang="stylus">
.projectGrid {
  font-color: black;
}

img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>
