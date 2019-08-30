<template>
    <div class="footer">
        <div class="content">
            <div class="footer_name">
                <img src="../../../../static/images/icon_guohui.png" alt="国徽">
                <p>中国银行保险监督管理委员会淄博监管分局</p>
            </div> 
            <div class="footer_router">
                <ul>
                    <li><router-link to="">内网邮件系统</router-link></li>
                    <li><router-link to="">许可证管理系统</router-link></li>
                    <li><router-link to="">机构准入系统</router-link></li>
                    <li><router-link to="">高管准入系统</router-link></li>
                </ul>
            </div>
            <div class="footer_sel">
                <select name="">
                    <option value="">
                        <router-link to="">-机构连接-</router-link>
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .footer {
        width: 100%;
        height: 175px;
        background-color: #1f2022;
    }
    .content {
        width: 1200px;
        height: 175px;
        margin: 0 auto;
        display: flex;
        display: -webkit-flex;
        align-items:center;
    }
    .footer_router {
        flex: 1;
        margin-left: 57px;
    }
    .footer_name  {
        display: flex;
        display: -webkit-flex;
        align-items:center;
    }
    .footer_name img {
        width: 39px;
        height: 39px;
    }
    .footer_name p {
        margin-left: 10px;
    }
    .footer_name p {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 0px;
        color: #e1e1f3;
    }
    .footer_router ul li {
        float: left;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 0px;
        color: #909091;
        padding: 0 20px;
        border-right: 1px solid #909091;
    }
    .footer_router ul li:last-child {
        border-right: none;
    }
    .footer_router ul li a {
        color: #909091;
    }
    .footer_sel{
        width: 178px;
        height: 35px;
        position: relative;
    }
    select{
        border: none;
        outline: none;
        width: 178px;
        height: 35px;
        line-height: 35px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding-left: 10px;
        background: none;
        border: solid 1px #909091;
        color: #909091;
    }
    .footer_sel:after{
        content: "";
        width: 13px;
        height: 7px;
        background: url(../../../../static/images/icon_arrows.png) no-repeat;
        position: absolute;
        right: 20px;
        top: 45%;
        pointer-events: none;
    }
</style>
