<template>
    <div class="login">
        <div class="login-title">linked auth in test</div>
        <div class="login-form">
            <img v-on:click="githubClick" src="../../../static/images/github.png" />
            <label>{{step}}</label>
        </div>
    </div>
</template>

<script>
	import VueResource from 'vue-resource'
	import Vue from 'vue'
  import axios from '@/lib/api.request'

	Vue.use(VueResource);
    export default {
        data: function(){
            return {
              //linked in config:
              clientId: '86bhwn2dujtvth',
              responseType: 'code',
              redirectUri: 'http://localhost:8080/authCallback',
              scope: 'r_liteprofile%20r_emailaddress%20w_share',

              step: "wait for click linkedin icon",
              linkedAuthCode: ''
            }
        },
        components: {
        },
      created: function(){
        		// 获取url里面的code
        		this.linkedAuthCode = this.getUrlData('code') || '';
            console.log("this.linkedAuthCode is" + this.linkedAuthCode)
            if (this.linkedAuthCode === '')
            {
              return
            } else {
              this.step = "request BE to get access token"
            }
            this.authLinkedinCode(this.linkedAuthCode)
        },
        methods: {
            // github登录点击事件
            githubClick: function(){
              window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?' +
                'client_id=' + this.clientId +
                '&response_type=' + this.responseType +
                '&redirect_uri=' + this.redirectUri +
                '&scope=' + this.scope
            },
            getUrlData:function(name){
            		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r != null)
                return unescape(r[2]);
                return null;
            },
            authLinkedinCode: function (code) {
              console.info('send request to BE for auth code')
              axios.request({
                url: 'linkedInAccessToken',
                params: {
                  code
                },
                headers: {
                  'Access-Control-Allow-Origin': '*'
                },
                method: 'get'
              })
            }
        }
    }
</script>

<style scoped>
    .login{
        position: relative;
        width:100%;
        height:100%;
        background-color: #354152;
    }
    .login-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;
    }
    .login-form{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:200px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
    img {
    		width: 80px;
    		height: 80px;
    }
</style>
