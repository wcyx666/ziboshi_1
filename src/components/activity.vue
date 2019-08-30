<template>
    <div class="activity">
        <div class="speak_nav">
            <h2>{{ tag_name }}</h2>
            <ul v-if="bread_items.length>0">
                <li>
                    <router-link :to="{ path:'/' }">首页</router-link>
                    <i>></i>
                </li>
                <li>
                    <router-link :to="{ path:'/special', query:{ encode:bread_items[1].key } }">{{ bread_items[1].name }}</router-link>
                    <i>></i>
                </li>
                <li>
                    <router-link :to="{ path:'/activity',query:{ encode:bread_items[1].key,id:content.id }}">{{ bread_items[2].name }}</router-link>
                </li>
            </ul>
        </div>
        <div class="line"><img src="../../static/images/icon_xiahuaxian.png" alt=""></div>
        <div class="activity_content">
            <div class="activity_content_head">
                <h2 class="activity_content_head_title">
                    {{ content.title }}
                </h2>
                <div class="activity_content_head_date">
                    <div class="date">{{ content.indate }}</div>
                    <div class="share">
                        <span>分享到：</span>
                        <vshare :vshareConfig="vshareConfig"></vshare>
                    </div>
                </div>
            </div>
            <div class="activity_content_box">
                <div class="activity_content_box_title">
                    {{ content.title }}
                </div>
                <div class="activity_content_box_img">
                    <img :src="content.cover" alt="">
                </div>
                <div class="activity_content_box_con" v-html="content.content">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                vshareConfig : {
                    shareList: [
                        'qzone',
                        'tsina',
                        'tqq',
                        'renren',
                        'weixin',
                        'more',
                    ],
                },
                id:this.$route.query.id,
                content:"",
                bread_path:"",
                bread_items:"",
                tag_name:""
            }
        },
        mounted () {
            this.getActicity(this.id);
            console.log(this.$route.matched);
        },
        methods: {
            getActicity (id) {
                let that = this; 
                that.$http.get('http://123.57.61.228/index.php?a=getDetail&d=webshow&m=detail&id='+id).then(res => {   
                    console.log(res)   
                    that.tag_name =  res.data.data.bread_path.tag_name;
                    that.content =  res.data.data.article;
                    that.bread_path =  res.data.data.bread_path;
                    that.bread_items = res.data.data.bread_path.bread_items;
                }).catch(err => {                 //请求失败后的处理函数   
                    console.log(err)
                })
            }
        },
    }
</script>

<style scoped>
    .activity {
        width: 936px;
        padding: 20px;
        background: #fff;
    }
    .line img {
        width: 100%;
        float: left;
    }
    .speak {
        padding: 27px;
    }
    .speak_nav {
        width: 100%;
        display: flex;
        padding-bottom: 21px;
    }
    .speak_nav h2 {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #333333;
        flex: 1;
    }
    .speak_nav ul {
        display: flex;
    }
    .speak_nav ul li {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #797979;
    }
    .speak_nav ul li i {
        padding: 0 10px;
    }
    .speak_nav ul li:last-child i {
        display: none;
    }
    .speak_nav ul li a {
        color: #797979;
    }
    .activity_content_head {
        border-bottom: 1px dashed #dfdfdf;
        padding-top: 10px;
        padding-bottom: 20px;
    }
    .activity_content_head_title {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #333333;
        padding: 20px 0;
    }
    .activity_content_head_date {
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    .activity_content_head_date .date {
        flex: 1;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #797979;
        background: url(../../static/images/icon_time.png) no-repeat left;
        padding-left: 20px;
    }
    .activity_content_head_date .share {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 30px;
        letter-spacing: 0px;
        color: #797979;
    }
    .activity_content_box {
        padding: 17px;
        text-align: center;
    }
    .activity_content_box_title {
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 54px;
        letter-spacing: 0px;
        color: #333333;
        padding-bottom: 20px;
    }
    .activity_content_box_con {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 30px;
        letter-spacing: 0px;
        color: #333333;
    }
    .activity_content_box_img img {
        width: 100%;
    }
</style>
