<template>
    <div class="tab">
        <router-link :to="{ path:'/speaks', query:{ encode:data.tag_key,key:data.tag_key } }">
        <div class="item_gover_title">
            
                <img :src="icon" alt="" class="left">
                <p>{{ title }}</p>
                <img src="../../../../static/images/icon_menu.png" alt="" class="right">
            
        </div>
        </router-link>
        <div class="item_3_tab_conctent">
            <div class="item_3_tab_conctent_btn">
                <ul>
                    <li v-for="(data,index) in tabData" :class="data.encode == judgeIndex ? 'highlight' : ''" @click="bindClickIndex(data.encode)">{{ data.name }}</li>
                </ul>
            </div>
            <div class="item_3_tab_conctent_box">
                <div class="item_gover_content">
                    <ul>
                        <li v-for="item in content_list">
                            <router-link :to="{ path:'/activity', query:{ encode:data.tag_key,id:item.id } }">
                                <p>{{ item.title }}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props:[
        'title',
        'data',
        'icon'
    ],
    data () {              
        return {
            tabData:[
                { name: "各科室信息报送", encode: "gksxxbs" },
                { name: "办公室信息采编", encode: "bgsxxcb" },
                { name: "省局采用信息", encode: "sjcyxx" }
            ],
            judgeIndex:"gksxxbs",
            content:"",
            content_list:""
        }
    },
    mounted () {
        
        console.log(this.content)
    },
    methods: {
        bindClickIndex (encode) {
            this.judgeIndex = encode;
        }
    },
    watch: {
        data (val) {
            let that = this;
            that.content = val;
            let arr = val.children_tag;
            for (let index = 0; index < arr.length; index++) {
                if ( that.judgeIndex == arr[index].tag_key ) {    
                    that.content_list = arr[index].content_list;
                    console.log(arr[index].content_list)
                }      
            }
        },
        judgeIndex (key) {
            console.log(key)
            let that = this;
            let arr = this.content.children_tag;
            for (let index = 0; index < arr.length; index++) {
                if ( key == arr[index].tag_key ) {    
                    that.content_list = arr[index].content_list;
                    console.log(arr[index].content_list)
                }      
            }
        }
    }
}
</script>

<style scoped>
    .tab {
        width: 100%;
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
        background: url(../../../../static/images/tab_bg.png) no-repeat;
        display: flex;
        align-items: center;
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
    .item_3_tab_conctent_box {
        border: 1px solid #e5e5e5;
        border-top: none;
        padding: 21px;
    }
    .item_3_tab_conctent {
        width: 100%;
    }
    .item_3_tab_conctent_btn {
        width: 100%;
    }
    .item_3_tab_conctent_btn ul  {
        display: flex;
        border: solid 1px #e5e5e5;
    }
    .item_3_tab_conctent_btn ul li {
        width: 146px;
        height: 53px;
        background-color: #ffffff;
        border: solid 1px #e5e5e5;
        border-bottom: none;
        border-top: none;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 53px;
        letter-spacing: 0px;
        color: #383838;
        text-align: center;
    }
    .item_gover_content {
        width: 100%;
    }
    .item_gover_content ul li {  
        width: 50%;
        float: left;
        margin-bottom: 10px;
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
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .highlight {
        border-bottom: 1px solid #b47f3f !important;
    }
</style>
