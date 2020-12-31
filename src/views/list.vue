<!--  -->
<template>
  <div>
    <div class="list_box">
      <Header home="list"></Header>
      <crumbs class="crumbs_List" v-if="crumbs_List" :DataList="crumbs_List"></crumbs>
    </div>
    <div>
      <div class="columns">
        <aside>
          <div class="title">电子书</div>
          <ul v-if="columns !== null" class="fatherColumn">
            <li v-for="(item,index) in columns" :key="item.id" @click="showChildColumn(index)" :class="{green:item.showChild}">
              <span v-show="!item.showChild" class="el-icon-circle-plus-outline"></span>
              <span v-show="item.showChild" class="el-icon-remove-outline"></span>
              {{item.name}}
              <ul v-show="item.showChild === true" class="childColumn">
                <li 
                  v-for="(childColumn,num) in item.childs" 
                  @click.stop="getBooks(childColumn.id,num,index)" 
                  :key="childColumn.id"
                  :style="{
                    color:num === nowChoice ? '#009988' : ''
                  }"
                >{{childColumn.name}}</li>
              </ul>
            </li>
          </ul>
        </aside>
        <main>
          <ul>
            <li v-for="item in bookLists" :key="item.post_id">
              <img :src="item.first_thumb" />
              <div>{{item.title}}</div>
            </li>
          </ul>
          <div class='list_pagination'>
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
          
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import crumbs from "../components/crumbs.vue";
import {getList} from '@/util/util.js'
import {Loading} from 'element-ui'
export default {
  components: {
    Header,
    crumbs,
  },
  data() {
    return {
      crumbs_List: JSON.parse(sessionStorage.getItem('crumbs_List')),
      columns:null,     //栏目列表
      bookLists:[],     //右侧数据列表
      nowChoice:-1,      //当前选择的栏目
    };
  },
  methods: {
    //获取栏目列表
    getCatalog(){
      getList(this.columnIds.ebook).then(res=>{
        this.columns = res.data.group_info.childs.map(item=>{
          item.showChild = false
          return item
        })
      })
    },
    //打开子栏目
    showChildColumn(index){
      if(this.columns[index].showChild === true){
        this.columns[index].showChild = false
      }else{
        for(let i=0;i<this.columns.length;i++){
          this.columns[i].showChild = false
        }
        this.columns[index].showChild = true
      }
      this.nowChoice = -1
    },
    //获取右侧列表信息
    getBooks(id,num,index){
      this.nowChoice = num
      let loadingStatus = Loading.service({
        fullscreen:true
      })
      this.crumbs_List.splice(2,1,{
        name:this.columns[index].childs[num].name
      })
      getList(id).then(res=>{
        this.bookLists = res.data.posts
        loadingStatus.close()
      })
    }
  },
  created() {
    this.getCatalog()
  },
  mounted() {
  },
};
</script>
<style lang="scss">
.list_pagination{
  display: inline-block;
  margin: 0 auto;
  li{
    width: 32px;
    height: 28px;
    background: #ffffff;
    border: 1px solid #009988;
    border-radius: 3px;
  }
  li+li{
    margin-left:1.875rem /* 30/16 */;
  }
  .el-pager{
    .active{
      background-color: #009988;
      color:#fff;
    }
    li.active+li {
      border-left:1px solid #009988;
    }
    li:hover{
      color:#009988;
    }
  }
}
</style>
<style lang="scss" scoped>
.green{
  color:#009988;
}
ul,li{
  text-emphasis: none;
  list-style-type: none;
  margin:0;
  padding:0;
}
.columns{
  width: 75rem;
  padding-top: 12.5rem;
  margin:0 auto;
  z-index:10;
  position: relative;
  display: flex;
  li{
    line-height: 1.75rem /* 28/16 */;
  }
  aside{
    width: 11.75rem /* 188/16 */;
    border: 1px solid #009988;
    border-radius: .1875rem /* 3/16 */;
    padding:1rem;
    font-size: 1rem;
    background-color: #fff; 
    .title{
      font-size: 1.125rem /* 18/16 */;
      color:#333;
      font-weight: 600;
    }
    .fatherColumn{
      margin-left: .2rem;
      span{
        font-size: .875rem /* 14/16 */;
      }
      >li{
        cursor: pointer;
        .childColumn{
          margin-left: 1.25rem /* 20/16 */;
          li{
            color:black;
          }
        }
      }
    }
  }
  main{
    flex:1;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 17%;
        margin-left:3%;
        margin-bottom: 1.25rem /* 20/16 */;
        position: relative;
        img{
          width: 100%;
          height: 13.5625rem /* 217/16 */;
        }
        div{
          width: 100%;
          position: absolute;
          bottom:0;
          left:0;
          opacity: 0.7;
          background: #000000;
          color:#fff;
          white-space: nowrap;
          overflow:hidden;
	        text-overflow:ellipsis;
          line-height: 2.25rem /* 36/16 */;
          text-align: center;
        }
      }
    }
  }
}
.list_box {
  background-image: url("../assets/images/shangchengbg@3x.png");
  background-size: cover;
  background-position: center 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
}
.crumbs_List {
  position: absolute;
  z-index: 10;
  margin-top: 6.875rem /* 110/16 */;
}
</style>
