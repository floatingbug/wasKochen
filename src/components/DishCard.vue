<script setup>
import {ref} from "vue";


const props = defineProps({
	dish: Object,
});


const API_URL = ref(import.meta.env.VITE_API_URL);

</script>


<template>    
	<div class="dish-card card-bg-glass">
		<h3>{{dish.dish.recipeName}}</h3>

		<div class="image-container">
			<img
				v-if="dish.dish.dishImageUrl.startsWith('/src')"
				:src="`${dish.dish.dishImageUrl}`" alt="">
			<img
				v-else
				:src="`${API_URL}${dish.dish.dishImageUrl}`" alt="">
		</div>

		<div class="categories-container">
			<Badge
				v-for="(categorie, index) in dish.dish.categories" :key="index"
			>
				{{categorie}}
			</Badge>
		</div>
	</div>
</template>   


<style scoped>
.dish-card {
	width: 90%;
	max-width: 300px;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	overflow: hidden;

	h3 {
		text-align: center;
	}
}

h1 {
	text-align: center;
}

.input-search-field {
	margin-top: 2rem;
}

.image-container {
	width: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
}

img {
	width: 80%;
	max-height: 150px;
}

.categories-container {
	width: 80%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
	padding: 1rem;
	margin: 1rem 0;
}
</style>
