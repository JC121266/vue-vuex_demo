<style lang="less" scoped>
.phoneLogin {
    font-size: 0.75rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

<style lang="less">
.weui-cell__hd {
    font-size: 14px;
}
</style>

<template>
<div class="phoneLogin">
	<div class="logo">
		logo
	</div>
	<group>
		<x-input title="手机号码" mask="999 9999 9999" v-model="phone" palceholder="请输入手机号码" :max="13" is-type="china-mobile"></x-input>
	</group>
	<group>
		<x-input title="验证码" v-model="smsCode" palceholder="请输入验证码" :max="6">
			<x-button class="login-btn" slot="right" mini :show-loading="showLoading" @click.native="sendCode" :disabled="codeDisabled">发送验证码 </x-button>
		</x-input>
	</group>
	<x-button class="login-btn" :show-loading="showLoading" @click.native="phoneLogin" :disabled="loginDisabled">登录</x-button>

	<div class="phoneLogin-login__option">
		<router-link :to="{ name: 'register'}" class="">注册</router-link>
		<router-link :to="{ name: 'forgetPwd'}" class="">忘记密码</router-link>
	</div>

	<div class="phoneLogin-login__way">

		<router-link :to="{ name: 'pwdLogin'}" class="">{{loginWay}}</router-link>
	</div>
</div>
</template>

<script>
import {
	Group,
	XInput,
	XButton
} from 'vux'

export default {
	name: "phoneLogin",
	components: {
		Group,
		XInput,
		XButton
	},
	computed: {
		loginWay() {
			return this.$route.path == '/' ? "密码登录" : "手机登录"
		}
	},
	data() {
		return {
			phone: "",
			smsCode: "",
			loginDisabled: false,
			showLoading: false,
			codeDisabled: true
		}
	},
	mounted() {
		// console.log(this.$route, '----');
		// console.log(window.location);
	},
	methods: {
		// 发送验证码
		sendCode() {},
		// 手机登录
		phoneLogin() {
			this.$router.push('/home')
		}
	}
	// computed: {
	// 	getName() {
	// 		// alert(99999999999)
	// 		return this.$store.getters.getReverseName
	// 	}
	//
	// },
	// methods: {
	// 	updateName() {
	// 		// this.$store.commit('updateName')
	// 		this.$store.dispatch('updateNameAsync')
	// 	}
	// }
}
</script>
