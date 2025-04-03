<script setup>
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
import {foundDishes} from "@/stores/dishStore.js";
import getDishAPI from "@/api/getDishAPI.js";


const API_URL = import.meta.env.VITE_API_URL;
const IMAGE_NAME_STARTS_WITH = import.meta.env.VITE_IMAGE_NAME_STARTS_WITH;
const route = useRoute();
const dish = ref(null);


onMounted(async () => {
	const dishId = route.query.dishId;
	const result = await getDishAPI({dishId});
	dish.value = result.data.dish;
});

</script>


<template>    
	<div class="dish-container">
		<div v-if="dish" class="dish">
			<div class="image-container">
				<img
					v-if="dish.dishImageUrl.startsWith(IMAGE_NAME_STARTS_WITH)"
					:src="`${dish.dishImageUrl}`" alt="">
				<img
					v-else
					:src="`${API_URL}${dish.dishImageUrl}`" alt="">
			</div>
			
			<h1>{{dish.recipeName}}</h1>

			<div class="description">
				{{dish.description}}
			</div>

			<Divider></Divider>

			<h3>Zutaten</h3>
			<div class="ingredients-container">
				<div class="ingredient"
					v-for="(ingredient, index) in dish.ingredients" :key="index"
				>
					<div class="quantity-and-unit">
						<span>Menge: &nbsp</span>
						{{ingredient.quantity}}{{ingredient.unit}}
					</div>

					<div class="ingredient-name">
						<span>Zutat: &nbsp</span>
						{{ingredient.ingredientName}}
					</div>
				</div>
			</div>

			<Divider></Divider>

			<h3>Zubereitung</h3>
			<div class="preparation">
				{{dish.preparation}}
			</div>

			<Divider></Divider>

			<h3>Kategorien</h3>
			<div class="categories-container">
				<Badge
					v-for="(categorie, index) in dish.categories" :key="index"
				>
					{{categorie}}
				</Badge>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.dish-container {
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 12rem;
}

.dish {
	width: 90%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 4rem;
}

.ingredients-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.ingredient {
	display: flex;
	gap: 2rem;

	div {
		flex: 1;
		display: flex;
		justify-content: center;
	}
}

.categories-container {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}

h1 {
	text-align: center;
	margin-bottom: 2rem;
}

.image-container {
	width: 90%;
	min-width: 280px;
	max-width: 400px;
}

img {
	width: 100%;
}
</style>
