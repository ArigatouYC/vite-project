<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <div class="loginBox">
                    <div class="login_text">
                        <h1 class="welcome">欢迎使用CC后台管理系统</h1>
                        <h1 class="plz">请先登录</h1>
                    </div>
                    <div class="account">账号：<input type="text" placeholder="输入账号" v-model="account"></div>
                    <div class="pswd">密码：<input type="password" placeholder="输入密码" v-model="password"></div>
                    <div class="lgButton"><el-button type="primary" size="default" @click="login">登录</el-button></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { reactive } from 'vue'
// import request from '@/utils/request'
// import userStore from "@/store/modules/user.ts";

let account = ref('')
let password = ref('')

let login = async function () {
    // request({
    //     url: 'user/login',
    //     method: 'post',
    //     data: {
    //         username: account.value,
    //         password: password.value
    //     }
    // }).then((res)=>{
    //     if(res.code ==200){
    //         localStorage.setItem("TOKEN",res.data.token)
    //     }else{
    //         console.log("fail");
    //     }
    // })
}


</script>

<style scoped lang="scss">
.login_container {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url("@/assets/imgs/bg2.jpg")no-repeat;
    // background-size: cover;
}

.loginBox {
    position: absolute;
    right: 200px;
    top: 300px;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 20px;
    width: 500px;

    .welcome {
        margin: 10px;
        margin-left: 0;
        font-size: 30px;
    }

    .plz {
        margin: 10px;
        margin-left: 0;
        font-size: 30px;
    }

    .account {
        margin: 10px 0;
    }

    .pswd {
        margin: 10px 0;
    }

    .lgButton {
        margin: 20px auto;
        margin-bottom: 0;
    }
}
</style>