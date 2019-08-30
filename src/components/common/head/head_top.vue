<template>
    <div class="head_top">
        <div class="content">
            <div class="content_left">
                您好，欢迎来到淄博市银监局<span class="date">{{ this.getDate() }}</span><span>{{ this.getWeek() }}</span>
            </div>
            <div class="content_right">
                <ul>
                    <li>
                        <router-link to="">内网邮件系统</router-link>
                    </li>
                    <li>
                        <router-link to="">许可证管理系统</router-link>
                    </li>
                    <li>
                        <router-link to="">机构准入系统</router-link>
                    </li>
                    <li>
                        <router-link to="">高管准入系统</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        created () {
            
        },
        mounted () {
            
            
        },
        methods: {
            getDate () {
                let date = new Date();
                let y = date.getFullYear();
                let m = date.getMonth() + 1;
                let d = date.getDate(); 
                let moth = m < 10?'0'+ m:m;
                let doy = d < 10?'0'+ d:d;
                return y + '年' +  moth + '月' + doy + '日';
            },
            getWeek () {
                let arr = ["日", "一", "二", "三", "四", "五", "六"];  
                let week = new Date().getDay();  
                let str = "星期"+ arr[week];
                return str;
            }
        },
    }
</script>


<style scoped>
    .date {
        padding: 0 10px;
    }
    .head_top {
        width: 100%;
        height: 40px;
        background: #0950a2;
        color: #fff;
        font-size: 12px;
        line-height: 40px;
    }
    .content {
        width: 1200px;
        margin: 0 auto;
        display: flex;
    }
    .content_left {
        flex: 1;
    }
    .content_right ul {
        display: flex;
    }
    .content_right a {
        color: #fff;
    }
    .content_right ul li a {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #fff;
        padding: 0 20px;
        border-right: 1px solid #fff;
    }
    .content_right ul li:last-child a {
        border-right: none;
    }
</style>