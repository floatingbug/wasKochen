<script setup>
import {ref, onMounted} from "vue";
import {useRouter} from "vue-router";
import DishCard from "@/components/DishCard.vue";


const router = useRouter();
const newestDishes = ref([]);
const randomDishes = ref([]);


onMounted(async () => {
	//get newest dishes
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish?sort=timestamp-descending&limit=3`, {
			method: "GET",
		});
		const result = await response.json();

		if(!result.success){
			console.log(result.errors);
			return;
		}

		newestDishes.value = result.data.dishes;
	}
	catch(error){
		console.log(error);
		return;
	}

	//get random dishes
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish?random=3`, {
			method: "GET",
		});
		const result = await response.json();

		if(!result.success){
			console.log(result.errors);
			return;
		}

		randomDishes.value = result.data.dishes;
	}
	catch(error){
		console.log(error);
		return;
	}
});

function openDish(id){
	router.push(`/dish-page?dishId=${id}`);
}
</script>


<template>    
	<div class="container">
		<div class="content">
			<div class="dishes">
				<header>
					<h1>Die neusten Gerichte</h1>
				</header>

				<main>
					<DishCard
						v-for="(dish, index) in newestDishes" :key="index"
						class="dish-card"
						:dish="dish"
						@click="openDish(dish.dishId)"
					>
					</DishCard>
				</main>
			</div>
				
			<div class="dishes">
				<header>
					<h1>Zufällige Gerichte</h1>
				</header>

				<main>
					<DishCard
						v-for="(dish, index) in randomDishes" :key="index"
						:dish="dish"
						:isRatingReadOnly="true"
						@click="openDish(dish.dishId)"
					>
					</DishCard>
				</main>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.container {
	width: 100%;
	min-height: 100dvh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 12rem;
}

.content {
	width: 90%;
	min-width: 300px;
	max-width: 1024px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.dishes {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.dishes header {
	width: 90%;
	padding: 1rem;
	border-radius: 8px;
	border: 1px solid var(--border-color);
	margin-top: 2rem;
	background-color: var(--text-bg);
}

.dishes header h1 {
	margin: 0;
}

.dishes main {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
	padding: 2rem;
	border-radius: 8px;
}
</style>
