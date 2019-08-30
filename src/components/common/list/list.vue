<template>
  <div class="list">
    <div class="item_gover">
        <router-link :to="{ path:'/speaks', query:{ encode:data.tag_key,key:data.tag_key } }">
          <div class="item_gover_title">
            
              <img :src="icon" alt="" class="left">
              <p>{{ title }}</p>
              <img src="../../../../static/images/icon_menu.png" alt="" class="right">
            
          </div>
        </router-link>
        <div class="item_gover_content">
          <ul>
              <li v-for="(item,index) in data.content_list">
                <router-link :to="{ path:'/activity', query:{ encode:data.tag_key,id:item.id } }">
                  <p @mouseenter="bindJupage(index)">{{ item.title }}</p>
                  <div class="hide" v-if="index == juIndex">
                      {{ item.content }}
                  </div>
                </router-link>
              </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:[
        'title',
        'data',
        'icon'
    ],
    name: 'HelloWorld',
    mounted () {
        console.log(this.data)
    },
    methods: {
      bindJupage (index) {
        if (index == this.juIndex) {
          this.juIndex = 0;
        } else {
          this.juIndex = index;
        }
      },
      splist (val) {
        var maxwidth=80;   
        if(val.length > maxwidth){
            //截取字符串
            $(this).text($(this).text().substring(0,maxwidth));
            //多余的用省略号显示
            $(this).html($(this).html()+'...');
        }
      }
    },
    data(){
        return {
            juIndex:0
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list {
        width: 100%;
        height: 100%;
    }
  .item_gover {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border: solid 1px #e5e5e5;
  }
  .item_gover_title {
    width: 100%;
    height: 53px;
    background: url(../../../../static/images/head_nav.png) no-repeat;
    display: flex;
    align-items: center;
    color: #fff;
  }
  .item_gover_title a {
    width: 100%;
    display: block;
    display: flex;
    color: #fff;
  }
  .item_gover_title p {
    flex: 1;
    margin-left: 16px;
  }
  .item_gover_title .left {
    margin-left: 23px;
  }
  .item_gover_title .right {
    padding-right: 18px;
  }
  .item_gover_content {
    padding: 25px;
  }
  .item_gover_content ul li {
    padding-top: 10px
  }
  .item_gover_content ul li:first-child {
    padding-top: 0
  }
  .item_gover_content ul li p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #383838;
    background: url(../../../../static/images/icon_bt.png) no-repeat center left;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis; 
    -o-text-overflow: ellipsis;
    white-space:nowrap;
  }
  .hide {
    position: relative;  
    max-height: 52px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #797979;
    margin-left: 10px;
    border-bottom: solid 1px #e5e5e5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    display: -o-box;
    box-orient: vertical;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    -o-box-orient: vertical;
    -o-line-clamp: 2;
  }
  .hide::after{
    content: "..."; 
    position: absolute; 
    bottom: 0; 
    right: 0; 
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
  }

</style>
