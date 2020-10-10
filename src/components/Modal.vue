// 弹框组件
<template>
<transition name="slide">
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>{{title}}</span>
        <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
        <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('cancel')">{{cancelText}}</a>
        <div class="btn-group" v-if="btnType==3">
          <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
          <a href="javascript:;" class="btn-default" @click="$emit('cancel')">{{cancelText}}</a>
        </div>
      </div>
    </div>
  </div>
</transition>

</template>
<script>
export default {
  name: "modal",
  props: {
    //   弹框类型 小 中 大 表单
    modalType: {
      type: String,
      default: "from",
    },
    //弹框标题 1：确定 2.取消 3. 确定取消
    title: String,
    //按钮类型
    btnType: String,
    sureText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    showModal: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/modal.scss";
@import "./../assets/scss/config.scss";
</style>
