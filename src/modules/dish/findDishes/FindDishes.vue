<script setup>
import {ref, onMounted, watch} from "vue";
import {useRouter, useRoute} from "vue-router";
import Filter from "./filter/Filter.vue";
import {foundDishes} from "@/stores/dishStore.js";
import DishCard from "@/components/DishCard.vue";
import useDevice from "@/composables/useDevice.js";


const API_URL = ref(import.meta.env.VITE_API_URL);
const router = useRouter();
const route = useRoute();
const {displaySize} = useDevice();
const recipeName = ref("");
const isFilterOpen = ref(false);
const mealId = ref("");


onMounted(async () => {
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish`, {
			method: "GET",
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

	if(route.query.mealId) mealId.value = route.query.mealId;
});

//get dishes by recipeName
watch(recipeName, async () => {
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish?recipeName=${recipeName.value}`, {
			method: "GET",
		});

		const result = await response.json();
		if(!result.success){
			console.log(result.errors);
			foundDishes.value = [];
			return;
		}

		foundDishes.value = result.data.dishes;
	}
	catch(error){
		console.log(error);
		return;
	}
});


function openDish(dishId){
	if(!mealId.value){
		router.push(`/dish-page?dishId=${dishId}`);
	}
}

function addMealToPlan(dishId){
	router.push(`/meal-plan?dishId=${dishId}&mealId=${mealId.value}`);
}
</script>


<template>    
	<div class="container">
		<div class="content-left" 
			:class="displaySize < 1024 ? 'card-bg' : '', isFilterOpen || displaySize >= 1024 ? 'open-filter' : ''"
		>
			<div class="filter-header">
				<h1>Filter</h1>

				<Button 
					v-if="displaySize < 1024"
					variant="outlined"
					rounded
					@click="isFilterOpen = false"
				>
					<i class="pi pi-chevron-left"></i>
				</Button>
			</div>

			<div class="found-dishes">
				<span>Gefuntene gerichte: </span>
				{{foundDishes.length}}
			</div>

			<Divider></Divider>

			<Filter></Filter>
		</div>

		<Divider v-if="displaySize >= 1024" layout="vertical"></Divider>
			
		<div class="content-right">
			<div class="find-dishes-container">
				<div class="find-dishes-header">
					<div class="open-filter-button">
						<Button v-if="displaySize < 1024"
							variant="text"
							@click="isFilterOpen = true;"
						>
							Filter öffnen
							<i class="pi pi-chevron-right"></i>
						</Button>
					</div>

					<InputGroup>
						<InputGroupAddon>
							<i class="pi pi-search"></i>
						</InputGroupAddon>
					
						<FloatLabel variant="in">
							<InputText class="input-search-field"
								v-model="recipeName"
							>
							</InputText>
							<label for="input-search-field">Name des Gerichts</label>
						</FloatLabel>
					</InputGroup>
					
					<Divider></Divider>
				</div>
			
			
				<div class="dishes-container">
					<DishCard 
						v-for="(dish, index) in foundDishes" :key="index" 
						:dish="dish"
						:isRatingReadOnly="true"
						:isAddMealButtonActive="mealId ? true : false"
						:isCardHover="mealId ? false : true"
						@click="openDish(dish.dishId)"
					>
						<template v-if="mealId" #addMealButton>
							<Button @click="addMealToPlan(dish.dishId)">
								hinzufügen
							</Button>
						</template>
					</DishCard>
				</div>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.container {
	width: 100%;
	max-width: 2000px;
	min-height: 100dvh;
	position: relative;
	display: flex;
	justify-content: center;
	margin-bottom: 12rem;
	overflow: hidden;
}

.content-left {
	width: 80%;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: 0;
	padding: 0 1rem 1rem 1rem;
	z-index: 900;
	transform: translateX(-100%);
	transition: transform 250ms;
}

.filter-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.find-dishes-header {
	width: 90%;
	display: flex;
	flex-direction: column;

	.p-button {
		padding-left: 0;
	}
}


.open-filter {
	transform: translateX(0);
}

.content-right {
	display: flex;
	justify-content: center;
}

.find-dishes-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
}

.find-dishes-container header {
	width: 90%;
}

.dishes-container {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 3rem;
	margin-top: 1rem;
}

.input-search-field {
	margin-top: 2rem;
}

.open-filter-button {
	align-self: flex-start;
	margin-bottom: 0.5rem;
	z-index: 500;
}

@media(min-width: 768px) {
	.dishes-container {
		width: 90%;
	}
}

@media(min-width: 1024px) {
	.content-left {
		width: 30%;
		position: static;
	}
	.content-right {
		width: 70%;
		position: static;
		margin: 0;
	}
}

@media(min-width: 1150px) {
	.find-dishes-container {
		margin-top: 2rem;
	}

	.dishes-container {
		margin-top: 1rem;
	}
}
</style>
