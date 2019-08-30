<template>
    <div class="head_title">
        <img src="../../../../static/images/head_title.png" alt="">
        <div class="head_input">
            <input type="text" placeholder="搜索" v-model="value" @keyup.enter="bindClick">
            <i @click="bindClick"><img src="../../../../static/images/icon_secrch.png" alt=""></i>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value:""
            }
        },
        methods: {
            bindClick () {
                console.log(this.value)
                this.$router.push({ path:'/search',query:{ key:this.value } })
            }
        },
        mounted() {
            
        },
    }
</script>
<style scoped>
    .head_title {
        width: 100%;
        height: 164px;
        position: relative;
    }
    .head_title img {
        width: 100%;
        height: 100%;
    }
    .head_input {
        position: absolute;
        width: 286px;
	    height: 32px;
        display: flex;
        top: 70px;
        right: 20%;
    }
    .head_input input {
        padding-left: 10px;
        background-color: #d1d7f0;
        border: none;
        outline: none;
    }
</style>
