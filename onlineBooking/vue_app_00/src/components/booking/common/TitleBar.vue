<template>
  <div class="page-head">
    <span>{{leftTitle}}</span>
    
  </div>
</template>

<script>
  
  export default {
    data(){
      return {}
    },
    props:{
      leftTitle:{default:""},
    }
 }
</script>

<style scoped>
/* 1. 最外层父元素 */
  .page-head{
    display:flex;  /* 弹性布局 */
    position:fixed; /* 固定定位 */
    z-index:999; /* 始终在最上层 */
    width:100%; /* 宽度是父元素100% */
    justify-content: center; /* 两端对齐 */
    align-items:center; /* y轴居中对齐 */
    background:#eee; 
    padding:0 7px;
    height:40px;
    color:#000;
    font-size:18px;
  }


</style>
