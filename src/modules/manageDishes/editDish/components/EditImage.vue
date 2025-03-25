<script setup>
import {ref} from "vue";


const props = defineProps({
	dish: Object,
});


const API_URL = ref(import.meta.env.VITE_API_URL);
const IMAGE_NAME_STARTS_WITH = import.meta.env.VITE_IMAGE_NAME_STARTS_WITH;

</script>


<template>    
	<img v-if="dish.dish.dishImageUrl.startsWith(IMAGE_NAME_STARTS_WITH)"
		:src="`${dish.dish.dishImageUrl}`" alt="">
	<img v-else
		:src="`${API_URL}${dish.dish.dishImageUrl}`" alt="">
</template>   


<style scoped>
img {
	width: 100%;
	max-width: 400px;
	display: block;
	object-fit: cover;
	object-position: center;
}
</style>
