<template>
    <div class="column">
        <headTop></headTop>
        <headTitle></headTitle>
        <headNav></headNav>
        <div class="column_content">
            <div class="column_content_left">
                <Menu :data="left_menu"></Menu>
            </div>
            <div class="column_content_right">
                <router-view/>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import headTop from './common/head/head_top'
    import headTitle from './common/head/head_title'
    import headNav from './common/head/head_nav'
    import Footer from './common/footer/footer'
    import Menu from './common/navmenu/menu'
    import Breadcrumb from './common/breadcrumb/breadcrumb'
    import Special from './special'
    export default {
        data () {
            return {
                bread_path:"",
                left_menu:"",
                menu_content_list:"",
                encode:this.$route.query.encode
            }
        },
        mounted () {
            this.getList(this.encode);
        },
        methods: {
            getList (encode) {
                let that = this; 
                that.$http.get('http://123.57.61.228/index.php?a=firstPage&d=webshow&m=first&tag_key='+encode).then(res => {   
                    console.log(res)                //请求成功后的处理函数     
                    that.left_menu = res.data.data.left_menu;
                    that.bread_path = res.data.data.bread_path;
                    that.menu_content_list = res.data.data.menu_content_list;
                }).catch(err => {                 //请求失败后的处理函数   
                    console.log(err)
                })
            }
        },
        components:{
            Menu,
            Breadcrumb,
            headTop,
            headTitle,
            headNav,
            Footer,
            Special
        },
        watch:{
            '$route'(e){
                console.log(e.query.encode)
                this.getList(e.query.encode);
            }
        }
    }
</script>

<style scoped>
    .column {
        background: #efefef;
        width: 100%;
        height: 100%;
    }
    .column_content {
        width: 1200px;
        margin: 20px auto;
        display: flex;
    }
    .column_content_left {
        width: 230px;
        flex: 1;
    }
</style>
