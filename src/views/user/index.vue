<!--  -->
<template>
  <div class="box">
    <Header home="index"></Header>
    <el-row :span="22" class="crad_box">
      <el-col :span="6" :offset="2">
        <el-card class="user_card">
          <div
            class="user_card_img"
            :style="{ backgroundImage: 'url(' + user.headPic + ')' }"
          ></div>
          <div class="user_card_alias text">{{ user.nickName }}</div>
          <div class="user_card_leave text">{{ user.sign }}</div>
          <div class="user_card_record">
            <div>
              <div>{{ userload.download }}</div>
              <div>下载</div>
            </div>
            <div class="line"></div>
            <div>
              <div>{{ userload.upload }}</div>
              <div>上传</div>
            </div>
            <div class="line"></div>
            <div>
              <div>{{ userload.integral }}</div>
              <div>积分</div>
            </div>
          </div>
          <hr />
          <div class="user_card_info">
            <div>个人信息</div>
            <div class="user_card_info_main">
              <div class="text">昵称:{{ user.nickName }}</div>
              <div class="text">签名:{{ user.sign }}</div>
              <div class="text">
                标签:<span v-for="(value, index) in user.tags" :key="index"
                  >{{ value
                  }}<span v-if="index + 1 != user.tags.length">、</span></span
                >
              </div>
              <div class="text">城市:{{ user.city }}</div>
              <div class="text">联系方式:{{ user.phone }}</div>
            </div>
          </div>
          <div class="user_card_button">
            修改信息
          </div>
        </el-card>
      </el-col>
      <el-col :span="14" :offset="1">
        <el-card class="info_card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="下载记录" name="upload">
              <ul>
                <li
                  v-for="(value, index) in record.upload"
                  :key="index"
                  class="info_li"
                >
                  <div
                    class="info_li_img"
                    :style="{
                      backgroundImage: 'url(' + value.first_thumb + ')',
                    }"
                  ></div>
                  <div class="info_li_info">
                    <div class="title">{{ value.title }}</div>
                    <div>
                      <div>内容简介：</div>
                      <div>{{ value.summary }}</div>
                      <div class="data">上传时间：{{ value.data }}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="上传记录" name="download">
              <ul>
                <li
                  v-for="(value, index) in record.download"
                  :key="index"
                  class="info_li"
                >
                  <div
                    class="info_li_img"
                    :style="{
                      backgroundImage: 'url(' + value.first_thumb + ')',
                    }"
                  ></div>
                  <div class="info_li_info">
                    <div class="title">{{ value.title }}</div>
                    <div>
                      <div>内容简介：</div>
                      <div>{{ value.summary }}</div>
                      <div class="data">上传时间：{{ value.data }}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="我的积分" name="integral">
              <div class="record_top">
                <div></div>
                <div>我的积分</div>
                <div>
                  <span>{{ userload.integral }}</span
                  ><span
                    >上次获得积分<span>{{ lastrecord }}</span></span
                  >
                </div>
              </div>
              <hr style="margin-top:.9375rem /* 15/16 */" />
              <ul>
                <li
                  v-for="(value, index) in record.records"
                  :key="index"
                  class="record_li"
                >
                  <!-- {{ value }} -->
                  <span>{{value.detail}}<span class="record_num">+{{ value.point }}</span></span
                  >
                  <!-- <span v-if="value.type == 2"
                    >收藏资源，获得积分<span class="record_num"
                      >+{{ value.num }}</span
                    ></span
                  >
                  <span v-if="value.type == 0"
                    >上传资源成功，获得积分<span class="record_num"
                      >+{{ value.num }}</span
                    ></span
                  > -->
                  <span class="record_data">{{ value.createDate }}</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";
import Header from "../../components/header.vue";
import {
  getUser,
  getLoad,
  getintegrl,
  getrecord,
  getDetail,
  getpoints,
} from "../../util/util.js";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    Header,
  },
  data() {
    //这里存放数据
    return {
      user: {},
      userload: {
        upload: "",
        download: "",
        integral: "",
      },
      record: {
        upload: [
          {
            title: "抗战豫中南:1941中原抗战影像全纪录",
            summary:
              "在日军偷袭珍珠港、轰炸重庆过程中，其空军的战绩可谓“骄人”，其地面部队也不甘“落后”，1941年初在豫南大地上，发起了新的战争攻势。此时的蒋介石以及李宗仁等**将领，经过四年多的对日作战，也逐渐摸索出一套对日作战的战略战术原则，奋起反击...",
            first_thumb: require("../../assets/images/book.png"),
            data: "2020-01-01 12:07:28",
          },
          {
            title: "抗战豫中南:1941中原抗战影像全纪录_1",
            summary:
              "在日军偷袭珍珠港、轰炸重庆过程中，其空军的战绩可谓“骄人”，其地面部队也不甘“落后”，1941年初在豫南大地上，发起了新的战争攻势。此时的蒋介石以及李宗仁等**将领，经过四年多的对日作战，也逐渐摸索出一套对日作战的战略战术原则，奋起反击...",
            first_thumb: require("../../assets/images/book.png"),
            data: "2020-01-01 12:07:28",
          },
          {
            title: "抗战豫中南:1941中原抗战影像全纪录_2",
            summary:
              "在日军偷袭珍珠港、轰炸重庆过程中，其空军的战绩可谓“骄人”，其地面部队也不甘“落后”，1941年初在豫南大地上，发起了新的战争攻势。此时的蒋介石以及李宗仁等**将领，经过四年多的对日作战，也逐渐摸索出一套对日作战的战略战术原则，奋起反击...",
            first_thumb: require("../../assets/images/book.png"),
            data: "2020-01-01 12:07:28",
          },
        ],
        download: [
          {
            title: "抗战豫中南:1941中原抗战影像全纪录",
            summary:
              "在日军偷袭珍珠港、轰炸重庆过程中，其空军的战绩可谓“骄人”，其地面部队也不甘“落后”，1941年初在豫南大地上，发起了新的战争攻势。此时的蒋介石以及李宗仁等**将领，经过四年多的对日作战，也逐渐摸索出一套对日作战的战略战术原则，奋起反击...",
            first_thumb: require("../../assets/images/book.png"),
            data: "2020-01-01 12:07:28",
          },
          {
            title: "抗战豫中南:1941中原抗战影像全纪录_1",
            summary:
              "在日军偷袭珍珠港、轰炸重庆过程中，其空军的战绩可谓“骄人”，其地面部队也不甘“落后”，1941年初在豫南大地上，发起了新的战争攻势。此时的蒋介石以及李宗仁等**将领，经过四年多的对日作战，也逐渐摸索出一套对日作战的战略战术原则，奋起反击...",
            first_thumb: require("../../assets/images/book.png"),
            data: "2020-01-01 12:07:28",
          },
        ],
        records: [
          {
            type: "1",
            num: "1",
            data: "2020-01-01 12:01:54",
          },
          {
            type: "1",
            num: "1",
            data: "2020-01-01 12:02:54",
          },
          {
            type: "2",
            num: "1",
            data: "2020-01-01 12:03:54",
          },
          {
            type: "0",
            num: "1",
            data: "2020-01-01 12:04:54",
          },
        ],
      },
      lastrecord: "+1",
      activeName: "upload",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    getUser(sessionStorage.getItem("userId")).then((res) => {
      // console.log(res.data.info);
      this.user = res.data.info;
    });
    getLoad(sessionStorage.getItem("userId"), 0).then((res) => {
      this.userload.upload = res.data.data;
    });
    getLoad(sessionStorage.getItem("userId"), 1).then((res) => {
      this.userload.download = res.data.data;
    });
    getintegrl(sessionStorage.getItem("userId")).then((res) => {
      // console.log(res)
      this.userload.integral = res.data.point;
    });
    getpoints(sessionStorage.getItem("userId")).then((res) => {
      console.log(res.data.details);
      this.record.records = res.data.details;
      this.lastrecord = this.record.records[0].point
    });
    getrecord(sessionStorage.getItem("userId"), 0).then((res) => {
      // console.log(res.data.data)
      res.data.data.forEach((item) => {
        // console.log(item)
        getDetail(item).then((resn) => {
          console.log(item, resn);
        });
      });
    });
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
  background-image: url("../../assets/images/shangchengbg@3x.png");
  background-size: cover;
  background-position: center 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
}
ul,
li {
  list-style: none;
}
.crad_box {
  margin-top: 6.875rem /* 110/16 */;
  > div {
    display: inline-block;
  }
}
.user_card {
  display: inline-block;
  width: 100%;
  height: 39.25rem /* 628/16 */;
  &_img {
    width: 6rem /* 96/16 */;
    height: 6rem /* 96/16 */;
    margin: 0 auto;
    border-radius: 50%;
    background-position: center 0;
    background-size: 100%;
    margin-top: 1.5625rem /* 25/16 */;
  }
  &_alias {
    text-align: center;
    margin-top: 0.75rem /* 12/16 */;
  }
  &_leave {
    text-align: center;
    margin-top: 0.75rem /* 12/16 */;
    color: #999999;
  }
  &_record {
    display: inline-block;
    margin-left: 12%;
    margin-top: 1.25rem /* 20/16 */;
    margin-bottom: 1.25rem /* 20/16 */;
    > div {
      display: inline-block;
      text-align: center;
      :nth-child(1) {
        font-size: 1.5rem /* 24/16 */;
        color: #009988;
      }
    }
    > :nth-child(1) {
      margin-left: 1.25rem /* 20/16 */;
    }
    .line {
      width: 0.0625rem /* 1/16 */;
      height: 1.75rem /* 28/16 */;
      background: #cccccc;
      margin-left: 1.875rem /* 30/16 */;
      margin-right: 1.875rem /* 30/16 */;
      vertical-align: 0.5rem /* 8/16 */;
    }
  }
  &_info {
    > :nth-child(1) {
      color: #009988;
      margin-top: 1.25rem /* 20/16 */;
      margin-bottom: 0.625rem /* 10/16 */;
    }
    &_main {
      width: 90%;
      margin: 0 auto;
      color: #999999;
      div {
        margin-bottom: 0.9375rem /* 15/16 */;
      }
    }
  }
  &_button {
    width: 8.5rem /* 136/16 */;
    height: 2.625rem /* 42/16 */;
    background: #009988;
    border-radius: 1.875rem /* 30/16 */;
    margin: 0 auto;
    text-align: center;
    line-height: 2.625rem /* 42/16 */;
    color: white;
    cursor: pointer;
    margin-top: 1.25rem /* 20/16 */;
  }
  .text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.info_li {
  margin-bottom: 1.25rem /* 20/16 */;
  > div {
    display: inline-block;
  }
  &_img {
    float: left;
    width: 11.25rem /* 180/16 */;
    height: 13.5625rem /* 217/16 */;
    background-position: center 0;
    background-size: 100% 100%;
  }
  &_info {
    margin-left: 0.625rem /* 10/16 */;
    width: 70%;
    height: 13.5625rem /* 217/16 */;
    > div {
      display: block;
    }
    .title {
      font-size: 1.125rem /* 18/16 */;
      font-weight: 550;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    > div:nth-child(2) {
      color: #999999;
      margin-top: 1.875rem /* 30/16 */;
    }
    .data {
      float: right;
      margin-top: 1.875rem /* 30/16 */;
    }
  }
}
.record_top {
  > div:nth-child(1) {
    float: left;
    width: 1.25rem /* 20/16 */;
    height: 1.25rem /* 20/16 */;
    background-image: url("../../assets/images/Lark20210103-105234.png");
    margin-right: 0.75rem /* 12/16 */;
    margin-top: 0.3125rem /* 5/16 */;
  }
  > div:nth-child(2) {
    font-size: 1.125rem /* 18/16 */;
    margin-top: 0.625rem /* 10/16 */;
  }
  > div:nth-child(3) {
    margin-top: 0.625rem /* 10/16 */;
    > span:nth-child(1) {
      font-size: 2.25rem /* 36/16 */;
      color: #009988;
      margin-right: 1.25rem /* 20/16 */;
    }
    span {
      span {
        color: #009988;
      }
    }
  }
}
.record_num {
  color: #009988;
}
.record_data {
  float: right;
}
.record_li {
  margin-top: 1.25rem /* 20/16 */;
}
</style>
<style lang="scss">
.info_card {
  display: inline-block;
  width: 100%;
  height: 39.25rem /* 628/16 */;
  overflow-y: scroll;
  .el-tabs__item {
    width: 16.875rem /* 270/16 */;
    text-align: center;
  }
  .el-tabs__active-bar {
    background-color: #009988;
  }
  .is-active {
    color: #009988;
  }
}
.info_card::-webkit-scrollbar {
  width: 4px;
}
.info_card::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #009988;
}
</style>
