<script setup>
import {ref, onMounted} from "vue";
import dishStore from "../store/dishStore.js";
import defaultDishImage from "@/assets/dish_pictures/default_dish.jpg";


onMounted(() => {
	if(!dishStore.dishImageUrl){
	   	dishStore.dishImageUrl = defaultDishImage;
	}
});

</script>


<template>    
	<div class="container">
		<h1>{{dishStore.recipeName}}</h1>

		<div class="img-container">
			<img :src="dishStore.dishImageUrl" alt="dish image">
		</div>

		<h3>Zutaten</h3>
		<div class="ingredients-container">
			<div 
				class="ingredient"
				v-for="(ingredient, index) in dishStore.ingredients"
			>
				<span>{{ingredient.quantity}} {{ingredient.unit}}: </span>
				<span>{{ingredient.ingredientName}}</span>
			</div>
		</div>

		<h3>Zubereitung</h3>
		<div class="preparation-container">
			<div class="preparation">
				{{dishStore.preparation}}
			</div>
		</div>

		<h3>Kategorien</h3>
		<div class="categories-container">
			<Badge
				v-for="(categorie, index) in dishStore.categories"
				style="background-color: var(--selected-color)"
			>
				{{categorie}}
				</Badge>
		</div>
	</div>
</template>   


<style scoped>
.container {
	width: 100%;
}

.img-container {
	width: 30%;
	min-width: 150px;
}

img {
	width: 100%;
}

.ingredients-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.categories-container {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
</style>
