<script setup>
import {ref, reactive, onMounted} from "vue";
import EditDish from "./editDish/EditDish.vue";
import {foundDishes} from "@/stores/dishStore.js";
import DishCard from "@/components/DishCard.vue";


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
		<div class="dish-content">
			<DishCard 
				v-for="(dish, index) in foundDishes" :key="index"
				:dish="dish"
				@click="editDish(dish.dishId)"
			>
			</DishCard>
		</div>
	</div>
</template>   


<style scoped>
.dishes-container {
	width: 100%;
	display: flex;
	justify-content: center;
}

.dish-content {
	width: 90%;
	min-width: 280px;
	max-width: 1024px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2rem;
	margin-top: 5rem;
}
</style>
