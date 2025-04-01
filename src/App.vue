<script setup>
import {onMounted} from "vue";
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from "./components/navbar/TheNavbar.vue";
import device from "./utils/device.js";
import Toast from 'primevue/toast';
import useUser from "@/stores/userStore.js";
import useGroups from "@/stores/groupsStore.js";


const {user} = useUser();
const {groups} = useGroups();


onMounted(() => {
	//hangle device
	if(window.innerWidth < 1024) device.value = "mobile";
	else device.value = "desktop";

	window.addEventListener("resize", (event)=> {
		if(event.target.window.innerWidth < 1024) device.value = "mobile";
		else device.value = "desktop";
	});

	/****** store data ******/

	const isSignedIn = localStorage.getItem("isSignedIn");
	if(isSignedIn === true || isSignedIn === "true"){
		//handle auth
		user.isSignedIn = true;
		user.token = localStorage.getItem("token");

		//get user data from api
		storeUserData(user);

		//get group data from api
		storeGroupData({groups, token: user.token});
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

async function storeGroupData({groups, token}){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/group/get-groups`, {
			method: "GET",
			headers: {
				authorization: token,
			},
		});

		const result = await response.json();
		if(!result.success){
			console.log(result.errors);
			return;
		}

		groups.value = result.data.groups;
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
