<script setup>
import {ref} from "vue";


const props = defineProps({
	dish: Object,
});


const API_URL = ref(import.meta.env.VITE_API_URL);

</script>


<template>    
	<img :src="`${API_URL}${dish.dish.dishImageUrl}`" alt="">
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
