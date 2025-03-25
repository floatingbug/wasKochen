<script setup>
import {ref, onMounted, watch} from "vue";
import {useRouter} from "vue-router";
import Filter from "./filter/Filter.vue";
import {foundDishes} from "@/stores/dishStore.js";
import DishCard from "@/components/DishCard.vue";


const API_URL = ref(import.meta.env.VITE_API_URL);
const router = useRouter();
const recipeName = ref("");


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
		console.log(foundDishes.value);
	}
	catch(error){
		console.log(error);
		return;
	}
});


function openDish(dishId){
	router.push(`/dish-page?dishId=${dishId}`);
}

</script>


<template>    
	<div class="find-dishes-container">
		<div class="find-dishes-content">
			<h1>Gerichte finden</h1>

			<Filter></Filter>

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

			<Divider style="margin-top: 3rem;"></Divider>

			<div class="dishes-container">
				<DishCard 
					v-for="(dish, index) in foundDishes" :key="index" 
					:dish="dish"
					@click="openDish(dish.dishId)"
				/>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.find-dishes-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	padding-bottom: 16rem;
}

.find-dishes-content {
	width: 90%;
	max-width: 1024px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 5rem;
}

.dishes-container {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 3rem;
	margin-top: 4rem;
}

h1 {
	text-align: center;
}

.input-search-field {
	margin-top: 2rem;
}
</style>
