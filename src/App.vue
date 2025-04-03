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

		//get user data from api
		await storeUserData(user);

		router.push("/dashboard");
	}
});


async function storeUserData(user){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
			method: "GET",
			headers: {
				authorization: user.token,
			},
		});

		const result = await response.json();
		if(!result.success){
			console.log(result.errors);
			return;
		}

		user.groupIds = result.data.user.groupIds;
	}
	catch(error){
		console.log(error);
	}
}

</script>

<template>
	<Toast></Toast>
	<TheNavbar></TheNavbar>

  <RouterView />
</template>

<style scoped>
</style>
