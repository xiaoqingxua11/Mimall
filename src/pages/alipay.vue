<template>
  <div class="ali-pay">
      <loading v-if="loading"></loading>
    <div class="from" v-html="content"></div>
  </div>
</template>
<script>
import Loading from './../components/Loading'
export default {
  name: "alipay",
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "",
      loading:true
    };
  },
  components:{
     Loading
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "小情绪制作！请勿支付",
          amount: 0.01,
          payType: 1,
        })
        .then((res) => {
          this.content = res.content;
          setTimeout(()=>{
            document.forms[0].submit();
          },100)
        });
    },
  },
};
</script>
<style lang="scss">
 .loading{
     height: 80px;
     line-height: 80px;
     text-align: center;
     padding: 30px 0;
     img{
         height: 100%;
     }
 }
</style>