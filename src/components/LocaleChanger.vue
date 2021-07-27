<template>
  <div class="container">
    <div class="current-locale-container">
      <div
        class="current-locale"
        @click="toggleLocale()"
        @mouseover="showLocales()"
      >
        {{ locale }}
      </div>
      <div class="arrow">
        <svg
          width="15"
          height="10"
          viewBox="-2.5 -5 75 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 l35,50 l35,-50"
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-width="5"
            stroke-color="white"
          />
        </svg>
      </div>
    </div>
    <div class="locale-choices" :style="{ visibility: localeVisibility }">
      <div class="english-locale" @click="englishLocale()">EN</div>
      <div class="french-locale" @click="frenchLocale()">FR</div>
    </div>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";
export default class LocaleChanger extends Vue {
  data() {
    return {
      locale: "EN",
      localeVisibility: "hidden",
    };
  }
  showLocales() {
    this.localeVisibility = "visible";
  }

  englishLocale() {
    this.$i18n.locale = "EN";
    this.locale = "EN";
    this.localeVisibility = "hidden";
  }

  frenchLocale() {
    this.$i18n.locale = "FR";
    this.locale = "FR";
    this.localeVisibility = "hidden";
  }
}
</script>

<style lang="stylus" scoped>
.current-locale {
  font-family: 'Cormorant Garamond', serif;
  color: white;
  font-weight: bold;
  float: left;
  margin-left: 10px;
  cursor: pointer;
}

.locale-choices {
  font-family: 'Cormorant Garamond', serif;
  font-size: 25px;
  position: relative;
  color: white;
  text-align: right;
  right: 30%;
  margin-top: 0;
  top: 0%;
  visibility: var(--locale-visibility);
}

.arrow {
  margin-left: 0%;
}

.current-locale-container {
  width: 60px;
  position: relative;
  margin-right: 15px;
  float: right;
}

.container {
  float: right;
  width: 100px;
  height: 70px;
}

.english-locale:hover {
  text-decoration: underline;
}

.french-locale:hover {
  text-decoration: underline;
}
</style>