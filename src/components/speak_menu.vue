<template>
    <div class="speak">
        <div class="speak_nav">
            <h2>{{ tag_name }}</h2>
            <ul v-if="bread_items">
                <li>
                    <router-link :to="{ path:'/' }">首页</router-link>
                    <i>></i>
                </li>
                <li>
                    <router-link :to="{ path:'/speaks', query:{ encode:bread_items[1].key,key:bread_items[1].key } }">{{ bread_items[1].name }}</router-link>
                    <i>></i>
                </li>
            </ul>
        </div>
        <div class="line"><img src="../../static/images/icon_xiahuaxian.png" alt=""></div>
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
</template>
<script>
    import page from './common/pagination/pagination'
    export default {
        data () {
            return {
                tag_name:"",
                bread_items:'',
                content_list:"",
                key:this.$route.query.key,
                currentPage:1, //初始页
                pagesize:10,    //    每页的数据
                total:100,
            }
        },
        mounted () {   
            console.log(this.key)
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
                that.$http.get('http://123.57.61.228/index.php?a=secondPage&d=webshow&m=second&tag_key='+key+'&limit='+that.pagesize+'&offset='+that.currentPage+'').then(res => {   
                    console.log(res)  
                    that.tag_name =  res.data.data.bread_path.tag_name;
                    that.content_list = res.data.data.content_list;
                    that.bread_items = res.data.data.bread_path.bread_items;
                    that.total = res.data.data.total;
                    console.log(that.content_list)
                }).catch(err => {                 //请求失败后的处理函数   
                    console.log(err)
                })
            }
        },
        watch:{
            '$route'(e){
                console.log(e.query.key)
                this.getList(e.query.key);
            }
        },
        components: {
            page
        }
    }
</script>
<style scoped>
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
    }
</style>
