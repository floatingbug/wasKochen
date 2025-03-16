<script setup>
import MobileNavbar from "./components/MobileNavbar.vue";
import Navbar from "./components/Navbar.vue";
import device from "../../utils/device.js";
</script>


<template>    
	<MobileNavbar v-if="device === 'mobile'"></MobileNavbar>
	<Navbar v-if="device ==='desktop'"></Navbar>
</template>   


<style scoped>
</style>
