<!--  -->
<template>
  <div class="box">
    <Header home="upload"></Header>
    <el-card class="box-card">
      <div class="card_first"><span></span>上传资源</div>
      <div class="card_form">
        <el-row class="card_form_info">
          <el-col span="9">
            <span>标题</span>
            <el-input
              placeholder="资源标题"
              v-model="formData.title"
              maxlength="30"
              show-word-limit
            />
          </el-col>
          <el-col span="6" offset="1">
            <span>作者</span>
            <el-input
              placeholder="作者名称"
              v-model="formData.ailas"
              maxlength="10"
              show-word-limit
            />
          </el-col>
          <el-col span="6" offset="1">
            <span>选择栏目</span>
            <el-select v-model="formData.option" clearable placeholder="请选择">
              <el-option
                v-for="item in formData.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="card_form_text">
          <div>内容简介</div>
          <el-input
            type="textarea"
            placeholder="介绍一下你的作品吧"
            v-model="textarea"
            maxlength="1000"
            :rows="4"
            show-word-limit
            resize="none"
          >
          </el-input>
        </el-row>
        <el-row class="card_form_upload">
          <div>上传文件</div>
          <div></div>
        </el-row>
        <div class="card_form_button">发布</div>
      </div>
    </el-card>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../components/header.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
  },
  data() {
    //这里存放数据
    return {
      formData: {
        title: "",
        ailas: "",
        option: "",
        options: [
          {
            value: "选项1",
            label: "电子书",
          },
          {
            value: "选项2",
            label: "论文文章",
          },
          {
            value: "选项3",
            label: "纪录片",
          },
          {
            value: "选项4",
            label: "讲座视频",
          },
          {
            value: "选项5",
            label: "历史照片",
          },
        ],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.formData.option = this.formData.options[0].value;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.box {
  background-image: url("../assets/images/shangchengbg@3x.png");
  background-size: cover;
  background-position: center 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
}
.box-card {
  margin-top: 6.875rem /* 110/16 */;
  margin-left: 17%;
  width: 82%;
  .card_first {
    color: #009988;
    font-size: 1.25rem /* 20/16 */;
    > span {
      display: inline-block;
      width: 1.75rem /* 28/16 */;
      height: 1.5rem /* 24/16 */;
      background-image: url("../assets/images/shangchuan.png");
      background-size: 100% 100%;
      background-position: center 0;
      vertical-align: -0.3125rem /* 5/16 */;
      margin-right: 0.625rem /* 10/16 */;
    }
  }
}
.card_form {
  margin-top: 1.875rem /* 30/16 */;
  .el-col {
    > span {
      display: inline-block;
      font-size: 1.125rem /* 18/16 */;
      margin-bottom: 0.625rem /* 10/16 */;
    }
    input {
      width: 98%;
      height: 2.625rem /* 42/16 */;
      border: none;
      outline: none;
      border: 1px solid #333333;
      border-radius: 4px;
      padding-left: 0.3125rem /* 5/16 */;
    }
  }
  .el-select {
    width: 98%;
  }
  &_text {
    margin-top: 1.875rem /* 30/16 */;
    > div {
      font-size: 1.125rem /* 18/16 */;
      margin-bottom: 0.625rem /* 10/16 */;
    }
  }
  &_upload {
    > div:nth-child(1) {
      font-size: 1.125rem /* 18/16 */;
      margin-bottom: 0.625rem /* 10/16 */;
    }
    >div:nth-child(2) {
        width: 18.75rem /* 300/16 */;
        height: 14rem /* 224/16 */;
        border: 1px solid red;
    }
  }
  &_button {
      float: right;
      width: 6.375rem /* 102/16 */;
      height: 2.625rem /* 42/16 */;
      background: #009988;
      border-radius: 21px;
      text-align: center;
      line-height: 2.625rem /* 42/16 */;
      color:white;
      margin-bottom: .625rem /* 10/16 */;
  }
}
</style>
