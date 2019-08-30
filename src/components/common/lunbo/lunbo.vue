<template>
    <div class="lunbo">
        <div class="swiper-container">
            <swiper :options="swiperOption">
              <swiper-slide v-for='item of swiper' :key='item.id' :style='{backgroundImage:"url(" + item.image + ")"}'>
                  <router-link :to="{ path:'/activity', query:{ encode:item.tag_key,id:item.id } }">
                    <div class="item_lunbo_info">
                      <h2 class="item_lunbo_info_title">
                          {{ item.title }}
                      </h2>
                      <p class="item_lunbo_info_online"></p>
                      <p class="item_lunbo_info_txt">
                          {{ item.content }}
                      </p>
                    </div>
                  </router-link>
              </swiper-slide>
            </swiper>
        </div>
        
        <div class="item_lunbo_info_btn">
            <div class="swiper-prev">
              <img src="../../../../static/images/icon_next.png" alt="">
            </div>
            <div class="swiper-index">
              <span>{{ swiperIndex }}</span>/6
            </div>
            <div class="swiper-next">
              <img src="../../../../static/images/icon_prev.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
let that = null;
export default {
  name: 'HelloWorld',
  props:[
      'title',
      'data',
      'icon'
  ],
  data(){
    return {
        swiperIndex:1,
        swiper:"",
        swiperOption:{
            //循环
            loop:false,
            //每张播放时长3秒，自动播放
            autoplay:true,
            //滑动速度
            speed:1000,
            navigation: {
              nextEl: '.swiper-next', //前进按钮的css选择器或HTML元素。
              prevEl: '.swiper-prev', //后退按钮的css选择器或HTML元素。
              hideOnClick: true, //点击slide时显示/隐藏按钮
              disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
              hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
            },
            on: {
                slideChange(){
                  that.swiperIndex = this.activeIndex + 1;
                },
            },

            // delay:1000            
        },
        //三张轮播，使用变量循环
            swiperList:[
                {
                    id:'001',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg"
                },
                {
                    id:'002',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg"
                },
                {
                    id:'003',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg"
                }
            ]
    }
  },
  created () {
    let that = this;
    this.getLunbo();
    
  },
  methods: {
    getLunbo () {
      that = this;
      that.$http.get('http://123.57.61.228/index.php?a=frontList&d=webshow&m=front').then(res => {                   //请求成功后的处理函数     
        that.swiper = res.data.data.slider; // 轮播
        console.log(res)
      }).catch(err => {                 //请求失败后的处理函数   
        console.log(err)
      })
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lunbo {
    width: 895px;
    height: 359px;
    position: relative;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
  }
  .swiper-slide a {
    display: block;
    height: 359px;
    width: 895px;
  }
  .item_notice {
    width: 286px;
    height: 359px;
  }
  .item_lunbo_info {
    width: 314px;
    height: 359px;
    background: #3c73d8;
    float: right;
    padding: 35px;
  }
  .item_lunbo_info_btn {
    position: absolute;
    width: 314px;
    height: 68px;
    padding: 37px 35px 25px 35px;
    background: #0950a2;
    display: flex;
    align-items: center;
    bottom: 0;
    right: 0;
    z-index: 9;
  }
  .swiper-index {
    font-size: 18px;
    padding: 0 20px;
    color: #fff;
  }
  .swiper-index span {
    font-size: 30px;
  }
  .item_lunbo_info_title {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #ffffff;
  }
  .item_lunbo_info_txt {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #ffffff;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
.item_lunbo_info_online {
    width: 50px;
	height: 3px;
    background-color: #ffffff;
    margin: 35px 0;
}
</style>