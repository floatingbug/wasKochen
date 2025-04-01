<script setup>
import {ref, onMounted, watch} from "vue";
import {useRouter} from "vue-router";
import Filter from "./filter/Filter.vue";
import {foundDishes} from "@/stores/dishStore.js";
import DishCard from "@/components/DishCard.vue";
import device from "@/utils/device.js";


const API_URL = ref(import.meta.env.VITE_API_URL);
const router = useRouter();
const recipeName = ref("");
const isFilterOpen = ref(false);


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
	<div class="container">
		<div class="open-filter-button">
			<Button v-if="device === 'mobile'"
				variant="text"
				@click="isFilterOpen = true;"
			>
				Filter öffnen
				<i class="pi pi-chevron-right"></i>
			</Button>
		</div>

		<div class="content-left" 
			:class="device === 'mobile' ? 'card-bg-glass' : '', isFilterOpen || device === 'desktop' ? 'open-filter' : ''"
			@click="isFilterOpen = !isFilterOpen"
		>
			<Button v-if="device === 'mobile'"
				variant="outlined"
				rounded
			>
				<i class="pi pi-chevron-left"></i>
			</Button>
			<h1>Filter</h1>

			<Divider></Divider>

			<Filter></Filter>
		</div>

		<Divider v-if="device === 'desktop'" layout="vertical"></Divider>
			
		<div class="content-right">
			<div class="find-dishes-container">
				<header>
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
				</header>
			
			
				<div class="dishes-container">
					<DishCard 
						v-for="(dish, index) in foundDishes" :key="index" 
						:dish="dish"
						@click="openDish(dish.dishId)"
					/>
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

.open-filter {
	transform: translateX(0);
}

.content-right {
	display: flex;
	justify-content: center;
	margin-top: 5rem;
}

.find-dishes-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
	margin-top: 2rem;
}

.input-search-field {
	margin-top: 2rem;
}

.content-left .p-button{
	position: absolute;
	top: 1rem;
	right: 1rem;
	border-color: var(--p-primary-color);
}

.open-filter-button {
	position: absolute;
	left: 1rem;
	top: 1.5rem;
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
</style>
