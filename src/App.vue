<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    if (this.$cookie.get("userId")) {
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    //获取用户信息
    getUser() {
      this.axios.get("/user").then((res = {}) => {
        //to-do保存到vuex
        this.$store.dispatch("saveUserName", res.username);
      });
    },
    //获取购物车信息
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        //to-do保存到vuex
        this.$store.dispatch("saveCartCount", res);
      });
    },
  },
};
</script>

<style lang='scss'>
@import "./assets/scss/reset.scss";
@import "./assets/scss/button.scss";
@import "./assets/scss/config.scss";
</style>
