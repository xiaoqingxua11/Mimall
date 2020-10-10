<template>
    <div class="footer">
    <!-- logo -->
       <div class="footer-logo">
           <img src="/imgs/logo-footer.png" alt="">
           <p>小米商城</p>
       </div>
     <!-- 底部导航 -->
       <div class="footer-link">
           <a href="https://www.mi.com/index.html" target="_blank">小米商城官网</a><span>|</span>
           <a href="https://home.miui.com/" target="_blank">MIUI</a>
           <a href="https://home.mi.com/index.html" target="_blank">米家</a><span>|</span>
           <a href="http://www.miliao.com/" target="_blank">米聊</a><span>|</span>
           <a href="https://www.duokan.com/" target="_blank">多看</a>
    </div>
    <!-- 版权 -->
    <div>
        <div class="copyright">
© <span class="domain">mi.com</span> Design By 小情绪 2020.10.1————2020.10.8
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
 .footer{
    //  position: absolute;
    //  bottom: 0;
    //  right: 0;
    height: 234px;
    border-top: 4px solid $colorA; 
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        a{
            color: #999999;
            display: inline-block;
        }
        span{
            margin: 0 4px;
        }
        margin-bottom: 13px;
    }
    .copyright{
       .domain{
           color: $colorA;
       }
    }
 }

</style>