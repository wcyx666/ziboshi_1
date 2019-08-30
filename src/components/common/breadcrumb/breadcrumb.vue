<template>
    <div class="breadcrumb">
        <div class="breadcrumb_content">
            <h2>{{ bread.tag_name }}</h2>
            <img :src="bread.icon" alt="" class="icon_front">
            <ul>
                <li v-for="item in bread.bread_items">
                    <i v-if="item.key != 'front'">></i>
                    <router-link :to="item.key">{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:['data'],
    data () {
        return {
            bread:""
        }
    },
    mounted () {
        console.log(this.$route)
    },
    watch:{
        data (val){
            this.bread = val;
        },
    }
}
</script>
<style scoped>
    .icon_front {
        width: 13px;
        height: 13px;
        margin-right: 10px;
    }
    .breadcrumb {
        width: 936px;
        height: 70px;
        background: #fff;
        padding: 0 27px;
    }
    .breadcrumb_content {
        display: flex;
        align-items: center;
    }
    .breadcrumb_content h2 {
        flex: 1;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 70px;
        letter-spacing: 0px;
        color: #333333;
    }
    .breadcrumb_content ul li {
        float: left;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 70px;
        letter-spacing: 0px;
        color: #797979;
    }
    .breadcrumb_content ul li i {
        padding: 0 10px;
    }
    .breadcrumb_content ul li a {
        color: #797979;
    }
</style>

