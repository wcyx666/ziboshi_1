<template>
    <div class="head_nav">
        <div class="content">
            <ul>
                <li>
                    <router-link to="/front">首页</router-link>
                </li>
                <li v-for="item in data">
                    <router-link :to="{ path:'/special',query:{ encode:item.num }}" v-if="item.has_child">{{ item.name }}</router-link>
                    <router-link :to="{ path:'/speaks',query:{ encode:item.num,key:item.num }}" v-else>{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data:""
            }
        },
        mounted() {
            this.getmenu();
        },
        methods: {
            getmenu () {
                let that = this;
                that.$http.get('http://123.57.61.228/index.php?a=menuList&d=webshow&m=webmenu').then(res => {                   //请求成功后的处理函数     
                    console.log(res)
                    that.data = res.data.data;
                }).catch(err => {                 //请求失败后的处理函数   
                    console.log(err)
                })
            }
        },
    }
</script>

<style scoped>
    .head_nav {
        width: 100%;
        height: 62px;
        color: #fff;
        font-size: 16px;
        line-height: 62px;
        text-align: center;
        background: url(../../../../static/images/head_nav.png) no-repeat;
    }
    .content {
        width: 1200px;
        margin: 0 auto;
    }
    .head_nav ul li {
        width: 92px;
        float: left;
    }
    .head_nav ul li a {
        color: #fff;
        display: block;
    }
    .router-link-exact-active {
        background: #5377b9;
    }
</style>
