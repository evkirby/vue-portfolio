<template>
  <div>
    <h1>{{ project.id }}</h1>
    <h1>{{ project.title }}</h1>
    <h1>{{ project.description }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import store from "@/store/index";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";

export default class PresentationPage extends Vue {
  projectId!: string;
  project!: any;

  created() {
    const route = useRoute();

    this.projectId = route.params.projectName as string;
    this.project = store.getters.getProjectByID(this.projectId);
  }
}

computed;
</script>

<style scoped></style>
