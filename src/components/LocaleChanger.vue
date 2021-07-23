<template>
  <div>HELLO</div>
  <v-select v-model="$i18n.locale" :items="items" :value="en"></v-select>
</template>

<script>
import { Vue } from "vue-class-component";
export default class LocaleChanger extends Vue {
  data() {
    return {
      items: ["en", "fr"],
    };
  }
}
</script>

<style lang="stylus" scoped>
div {
  color: black;
}

v-select {
  position: relative;
  margin-top: 0px;
  text-align: center;
  color: black;
}
</style>