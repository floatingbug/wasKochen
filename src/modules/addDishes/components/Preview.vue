<script setup>
import {ref, onMounted, watch} from "vue";
import dishStore from "@/stores/dishStore.js";
import defaultDishImage from "@/public/dish_pictures/default_dish.jpg";
import categorieTags from "../data/categorieTags.js";


const categories = ref([]);


onMounted(() => {
	if(!dishStore.dishImageUrl){
	   	dishStore.dishImageUrl = defaultDishImage;
	}
});


watch(dishStore.categories, () => {
	categories.value = dishStore.categories.map(categorie => {
		const categorieTag = categorieTags.value.find(categorieTag => categorieTag.id === categorie);
		return categorieTag.label;
	});
});

</script>


<template>    
	<div class="container">
		<div class="content">
			<div class="img-container">
				<img :src="dishStore.dishImageUrl" alt="dish image">
			</div>
			
			<h1>{{dishStore.recipeName}}</h1>

			<div class="description">
				<h3>Beschreibung</h3>
				{{dishStore.description}}
			</div>
			
			<div class="ingredients-container">
				<h3>Zutaten</h3>
				<div 
					class="ingredient"
					v-for="(ingredient, index) in dishStore.ingredients"
				>
					<span>{{ingredient.quantity}} {{ingredient.unit}}: </span>
					<span>{{ingredient.ingredientName}}</span>
				</div>
			</div>
			
			<div class="preparation-container">
				<h3>Zubereitung</h3>
				<div class="preparation">
					{{dishStore.preparation}}
				</div>
			</div>
			
			<div class="categories-container">
				<h3>Kategorien</h3>
				<div class="categories-content">
					<Badge
						v-for="(categorie, index) in categories"
						style="background-color: var(--selected-color)"
					>
						{{categorie}}
					</Badge>
				</div>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
}

.content {
	width: 100%;
	max-width: 300px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0 1rem;
}

.img-container {
	width: 100%;
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
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.categories-content{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	padding-bottom: 1rem;
}

@media(min-width: 480px){
}
</style>
