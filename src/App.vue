<script setup>
import {onMounted} from "vue";
import { RouterLink, RouterView, useRouter } from 'vue-router'
import TheNavbar from "./components/navbar/TheNavbar.vue";
import device from "./utils/device.js";
import Toast from 'primevue/toast';
import useUser from "@/stores/userStore.js";
import getWeekPlanAPI from "@/api/getWeekPlanAPI.js";


const {user} = useUser();
const router = useRouter();


onMounted(async () => {
	//hangle device
	if(window.innerWidth < 1150) device.value = "mobile";
	else device.value = "desktop";

	window.addEventListener("resize", (event)=> {
		if(event.target.window.innerWidth < 1150) device.value = "mobile";
		else device.value = "desktop";
	});

	/****** store data ******/

	const isSignedIn = localStorage.getItem("isSignedIn");
	if(isSignedIn === true || isSignedIn === "true"){
		//handle auth
		user.isSignedIn = true;
		user.token = localStorage.getItem("token");

		router.push("/dashboard");
	}
});

</script>

<template>
	<Toast></Toast>
	<TheNavbar></TheNavbar>

  <RouterView />
</template>

<style scoped>
</style>
