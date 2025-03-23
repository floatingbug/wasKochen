<script setup>
import {ref, reactive, onMounted} from "vue";
import EditDish from "./editDish/EditDish.vue";
import {foundDishes} from "@/stores/dishStore.js";


const dishes = ref([]);
let dish = null;
const isVisible= ref(false);
const API_URL = ref(import.meta.env.VITE_API_URL);


onMounted(async () => {
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish`, {
			method: "GET"
		});
		const result = await response.json();
		
		if(!result.success){
			console.log(result.errors);
			return;
		}
		
		foundDishes.value = result.data.dishes;
	}
	catch(error){
		console.log(error);
		return;
	}
});


const handleEvents = {
	editDish: function(event){
		if(event.action === "editDishClose"){
			dish = foundDishes.value.find(d => d.dishId === event.dishId);
			dish = JSON.parse(JSON.stringify(dish));
			dish = reactive(dish);
			isVisible.value = false;
		}
	},
};


function editDish(dishId){
	dish = foundDishes.value.find(d => d.dishId === dishId);
	dish = JSON.parse(JSON.stringify(dish));
	dish = reactive(dish);

	isVisible.value = true;
}

</script>


<template>    
	<EditDish :dish="dish" :isVisible="isVisible" @editDish:action="handleEvents.editDish"></EditDish>

	<div class="dishes-container">
		<div class="dishes-content">
			<div class="dish-card card-bg-glass"
				v-for="(dish, index) in foundDishes" :key="index"
				@click="editDish(dish.dishId)"
			>
				<h3>{{dish.dish.recipeName}}</h3>

				<div class="image-container">
					<img :src="`${API_URL}${dish.dish.dishImageUrl}`" alt="">
				</div>

				<h3>Zutaten</h3>

				<div class="ingredients-container">
					<div class="ingredient"
						v-for="(ingredient, index) in dish.dish.ingredients" :key="index"
					>
						<span>
							{{ingredient.quantity}}{{ingredient.unit}}
						</span>

						<span>
							{{ingredient.ingredientName}}
						</span>
					</div>
				</div>

				<h3>Kategorien</h3>

				<div class="categories-container">
					<Badge
						v-for="(categorie, index) in dish.dish.categories" :key="index"
					>
						{{categorie}}
					</Badge>
				</div>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.dishes-container {
	width: 100%;
	display: flex;
	justify-content: center;
}

.dishes-content {
	width: 90%;
	min-width: 	280px;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 2rem;
	margin-top: 6rem;
}

.dish-card {
	width: 100%;
	min-width: 200px;
	max-width: 300px;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	h3 {
		text-align: center;
	}
}

.image-container {
  width: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.ingredients-container {
	width: 100%;
	flex-direction: column;
}

.ingredient {
	width: 100%;
	display: flex;

	span {
		flex: 1;
		display: flex;
		justify-content: center;
	}
}

.categories-container {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	padding: 0 1rem;
	overflow: hidden;
}
</style>
