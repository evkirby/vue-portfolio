import { createStore } from "vuex";

export default createStore({
  state: {
    projects: [
      {
        id: "birreco", //TODO: Change for Projects.birreco
        title: "Birre&Co",
        description: "iOS app for beer tracking and reward", // TODO: Change for bilingual
      },
      {
        id: "music",
        title: "Music Visualizer",
        description:
          "Javascript web app that brings music to life using Fourier transform",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getProjectByID: (state) => (projectId: string) => {
      // Error page if no project matching
      return state.projects.find((project) => project.id == projectId);
    },
  },
});
