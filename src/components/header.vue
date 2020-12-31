<!-- 头部组件 -->
<template>
  <div class="header">
    <div class="header_Home" v-if="home">
      <img src="../assets/images/touobuLogo.png" alt="" class="logo_top" v-if="home!='home'">
      <div class="home_Header_Input">
        <input
          type="text"
          class="home_Header_Input_Main"
          placeholder="输入要搜索的内容..."
        />
        <div></div>
      </div>
      <div class="home_Header_Btn">
        <div @click="upLoad">
          <div></div>
          上传
        </div>
        <div @click="login" ref="user">
          <div :style="{backgroundImage:'url('+avatar+')'}"></div>
          {{alias}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Cookies from  '@/assets/js/js.cookie-2.2.1.min.js'
import base from '@/assets/js/base64.min.js'
export default {
  //import引入的组件需要注入到对象中才能使用
  props: ["home"],
  components: {},
  data() {
    //这里存放数据
    return {
      isLogin:'',
      alias:'未登录',
      avatar:require("../assets/images/denglu.png")
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    login() {
      if(!this.isLogin) {
        window.location.href = 'https://api-saas.qjw.jw/account/#/?redirect_url=https://pub-saas.qjw.jw/culture&system_id=z6DVON4q'
      }else {
        console.log('user_core')
      }
    },
    upLoad() {
      console.log('upLoad')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if(Cookies.get('vtoken')){
      console.log(Cookies.get('vtoken'))
      sessionStorage.setItem('tokenString',Cookies.get('vtoken'))
      this.isLogin = true
      this.alias = base.decode(Cookies.get('alias'))
      this.avatar = base.decode(Cookies.get('avatar'))
      }
      this.isLogin = true
      this.alias = '一枝军绿色',
      this.avatar = require('../assets/logo.png')

  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.header {
  position: fixed;
  width: 100%;
  padding: 2.5rem /* 40/16 */ 0;
  // border: 1px solid red;
  overflow: hidden;
}
.home_Header_Input {
  display: inline-block;
  width: 20rem /* 320/16 */;
  height: 3rem /* 48/16 */;
  background: #ffffff;
  border: 0.125rem /* 2/16 */ solid #009988;
  border-radius: 1.5rem /* 24/16 */;
  overflow: hidden;
  margin-left: 12.5rem /* 200/16 */;
  &_Main {
    font-size: 1.125rem /* 18/16 */;
    width: 60%;
    margin-left: 1.8125rem /* 29/16 */;
    margin-top: 0.8125rem /* 13/16 */;
    border: none;
    outline: none;
  }
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #009988;
  }
  > :nth-child(2) {
    display: inline-block;
    width: 1.5rem /* 24/16 */;
    height: 1.5rem /* 24/16 */;
    background-image: url("../assets/images/sousuo.png");
    background-position: center 0;
    background-size: cover;
    float: right;
    margin-right: 1.875rem /* 30/16 */;
    margin-top: 0.625rem /* 10/16 */;
  }
}
.home_Header_Btn {
  display: inline-block;
  float: right;
  margin-top: .625rem /* 10/16 */;
  > div {
    display: inline-block;
  }
  > :nth-child(1) {
    color: #009988;
    font-size: 1.0625rem /* 17/16 */;
    font-weight: 600;
    div {
      display: inline-block;
      width: 2.5rem /* 40/16 */;
      height: 2.25rem /* 36/16 */;
      background-image: url("../assets/images/shangchuan.png");
      background-size: cover;
      background-position: center 0;
      vertical-align: middle;
      margin-right: 0.5625rem /* 9/16 */;
    }
  }
  > :nth-child(2) {
    color: #009988;
    font-size: 1.0625rem /* 17/16 */;
    font-weight: 600;
    margin-right: 12.5rem /* 200/16 */;
    margin-left: 1.875rem /* 30/16 */;
    div {
      display: inline-block;
      width: 2.25rem /* 36/16 */;
      height: 2.25rem /* 36/16 */;
      // background-image: url("../assets/images/denglu.png");
      background-size: 100% 100%;
      background-position: center 0;
      vertical-align: middle;
      margin-right: 0.5625rem /* 9/16 */;
    }
  }
}
.logo_top {
  margin-left: 12.5rem /* 200/16 */;
}
</style>
