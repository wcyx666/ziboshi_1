<template>
    <div class="search">
        <headTop></headTop>
        <headTitle></headTitle>
        <headNav></headNav>
        <div class="column_content">
            <div class="speak">
                <div class="speak_list">
                    <div class="speak_item" v-for="item in content_list">
                        <router-link :to="{ path:'/activity',query:{ encode:$route.query.encode,id:item.id }}">
                            <h2 class="speak_title">{{ item.title }}</h2>
                            <p class="speak_content">{{ item.content }}</p>
                            <p class="speak_date">{{ item.indate }}</p>
                        </router-link>
                    </div>
                </div>
                <div class="speak_pagination">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[1,5, 10, 20, 40]"
                        :page-size="pagesize"        
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">    
                    </el-pagination>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>  
</template>
<script>
    import page from './common/pagination/pagination'
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
                tag_name:"",
                bread_items:"",
                content_list:"",
                key:this.$route.query.key,
                currentPage:1, //初始页
                pagesize:10,    //    每页的数据
                total:0,
            }
        },
        mounted () {   
            this.getList(this.key);
        },
        methods: {
            // 初始页currentPage、初始每页数据数pagesize和数据data
            handleSizeChange: function (size) {
                    this.pagesize = size;
                    this.getList(this.key);
                    console.log(this.pagesize)  //每页下拉显示数据
            },
            handleCurrentChange: function(currentPage){
                    this.currentPage = currentPage;
                    this.getList(this.key);
                    console.log(this.currentPage)  //点击第几页
            },
            getList (key) {
                let that = this; 
                that.$http.get('http://123.57.61.228/index.php?a=search&m=search&d=webshow&keywords='+key+'&limit=10&offset=0').then(res => {   
                    console.log(res)  
                    that.content_list = res.data.data.list;
                    that.total = res.data.data.total;
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
            Special,
            page
        },
        watch:{
            '$route'(e){
                console.log(e.query.key)
                this.getList(e.query.key);
            }
        },
    }
</script>
<style scoped>
    .search {
        width: 100%;
    }
    .column_content {
        width: 1200px;
        margin: 0 auto;
    }
    .line img {
        width: 100%;
        float: left;
    }
    .speak {
        width: 936px;
    }
    .speak_nav {
        width: 100%;
        display: flex;
        padding: 20px;
        background: #fff;
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
    .speak_list {
        margin-top: 10px;
    }
    .speak_item {
        background: #fff;
        padding: 24px;
        border-bottom: 1px dashed #dfdfdf;
    }
    .speak_item .speak_title {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #333333;
    }
    .speak_item .speak_content {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #797979;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .speak_item .speak_date {
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #797979;
        background: url(../../static/images/icon_time.png) no-repeat left;
        padding-left: 20px;
    }
    .speak_pagination {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 40px;
    }
</style>
