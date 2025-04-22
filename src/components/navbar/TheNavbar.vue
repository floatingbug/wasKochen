<script setup>
import MobileNavbar from "./components/MobileNavbar.vue";
import Navbar from "./components/Navbar.vue";
import useDevice from "@/composables/useDevice.js";


const {displaySize} = useDevice();

</script>


<template>    
	<MobileNavbar v-if="displaySize < 1150"></MobileNavbar>
	<Navbar v-else></Navbar>
</template>   


<style scoped>
</style>
