<script setup>
import {ref, reactive, onMounted} from "vue";
import EditDish from "./editDish/EditDish.vue";
import {foundDishes} from "@/stores/dishStore.js";
import DishCard from "@/components/DishCard.vue";
import useUser from "@/stores/userStore.js";


const {user} = useUser();
const dishes = ref([]);
let dish = null;
const isVisible= ref(false);
const API_URL = ref(import.meta.env.VITE_API_URL);


onMounted(async () => {
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish/get-own-dishes`, {
			method: "GET",
			headers: {
				authorization: user.token,
			}
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
			<div class="dish-card-container">
				<DishCard
					v-for="(dish, index) in foundDishes" :key="index"
					:dish="dish"
					@click="editDish(dish.dishId)"
				>
				</DishCard>
			</div>
		</div>
	</div>
</template>   


<style scoped>
h1 {
	text-align: center;
	font-size: 2rem;
}

.dishes-container {
	width: 100%;
	min-height: 100dvh;
	display: flex;
	justify-content: center;
	margin-bottom: 12rem;
}

.dish-content {
	width: 90%;
	min-width: 300px;
	max-width: 1024px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
	margin-bottom: 12rem;
}

.dish-card-container {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2rem;
	margin-top: 2rem;
}

@media(min-width: 480px){
	h1 {
		font-size: 3rem;
	}
}
</style>
