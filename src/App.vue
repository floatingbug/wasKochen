<script setup>
import {onMounted} from "vue";
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from "./components/navbar/TheNavbar.vue";
import device from "./utils/device.js";
import Toast from 'primevue/toast';


onMounted(() => {
	if(window.innerWidth < 1024) device.value = "mobile";
	else device.value = "desktop";

	window.addEventListener("resize", (event)=> {
		if(event.target.window.innerWidth < 1024) device.value = "mobile";
		else device.value = "desktop";
	});
});
</script>

<template>
	<Toast></Toast>
	<TheNavbar></TheNavbar>

  <RouterView />
</template>

<style scoped>
</style>
