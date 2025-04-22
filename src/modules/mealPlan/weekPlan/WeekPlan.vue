<script setup>
import {ref, reactive, watchEffect, toRaw} from "vue";
import {useRouter, useRoute} from "vue-router";
import getRandomDish from "./api/getRandomDish.js";
import {foundDishes} from "@/stores/dishStore.js";
import {weekPlan, setMeal, deleteMealStore} from "@/stores/weekPlanStore.js";
import saveWeekPlanAPI from "@/api/saveWeekPlanAPI.js";
import useUser from "@/stores/userStore.js";


const router = useRouter();
const route = useRoute();
const {user} = useUser();


//add new meal
watchEffect(async () => {
	if(route.query.dishId){
		const dishId = route.query.dishId;
		const mealId = route.query.mealId;
		const dish = toRaw(foundDishes.value.find(dish => dish.dishId === dishId).dish);

		//add meal to weekPlanStore
		setMeal({
			newMeal: dish,
			mealId,
		});

		//store weekPlan on Server
		const result = await saveWeekPlanAPI({
			weekPlan: toRaw(weekPlan), 
			token: user.token
		});
	}
});


async function createRandomMeal(id){
	const result = await getRandomDish();
	const dish = result.data.dishes[0].dish;
	const dishId = result.data.dishes[0].dishId;

	//add meal to weekPlanStore
	setMeal({
		newMeal: dish,
		mealId: id,
		dishId,
	});
	
	//store weekPlan on Server
	const resultPlan = await saveWeekPlanAPI({
		weekPlan: toRaw(weekPlan), 
		token: user.token
	});
}

function addDish(id){
	router.push(`/dish/find-dishes?mealId=${id}`);
}

async function deleteMeal(id){
	deleteMealStore({mealId: id});

	const result = await saveWeekPlanAPI({
		weekPlan: toRaw(weekPlan), 
		token: user.token
	});
}

function openRecipe(dishId){
	console.log(dishId);
	router.push(`/dish-page?dishId=${dishId}`);
}

</script>

<template>
	<div class="meal-plan">
		<div class="day-container card-bg-glass"
			v-for="(day, index) in weekPlan" :key="index"
		>
			<h1>{{day.dayName}}</h1>
			
			<div class="day">
				<h3>Frühstück</h3>
				<div v-if="!day.breakfast.name" class="choose-meal">
					<Button severity="secondary" variant="outlined" @click="addDish(day.breakfast.id)">
						Gericht hinzufügen
					</Button>

					<Button severity="secondary" variant="outlined" @click="createRandomMeal(day.breakfast.id)">
						Zufälliges Gericht
					</Button>
				</div>

				<div v-else class="meal">
					<div class="meal-entry">
						<Button
							variant="link"
							style="padding: 0;"
							@click="openRecipe(day.breakfast.dishId)"
						>
							{{day.breakfast.name}}
						</Button>
					</div>
					
					<div v-if="day.breakfast.name" class="manage-meal">
						<Button severity="danger" variant="text" @click="deleteMeal(day.breakfast.id)">
							<i class="pi pi-trash"></i>
						</Button>
					</div>
				</div>

			</div>

			<Divider></Divider>
			
			<div class="day">
				<h3>Mitagessen</h3>
				<div v-if="!day.lunch.name" class="choose-meal">
					<Button severity="secondary" variant="outlined" @click="addDish(day.lunch.id)">
						Gericht hinzufügen
					</Button>

					<Button severity="secondary" variant="outlined" @click="createRandomMeal(day.lunch.id)">
						Zufälliges Gericht
					</Button>
				</div>

				<div v-else class="meal">
					<div class="meal-entry">
						<Button
							variant="link"
							style="padding: 0;"
							@click="openRecipe(day.lunch.dishId)"
						>
							{{day.lunch.name}}
						</Button>
					</div>
					
					<div v-if="day.lunch.name" class="manage-meal">
						<Button severity="danger" variant="text" @click="deleteMeal(day.lunch.id)">
							<i class="pi pi-trash"></i>
						</Button>
					</div>
				</div>

			</div>
			
			<Divider></Divider>
			
			<div class="day">
				<h3>Abendessen</h3>
				<div v-if="!day.dinner.name" class="choose-meal">
					<Button severity="secondary" variant="outlined" @click="addDish(day.dinner.id)">
						Gericht hinzufügen
					</Button>

					<Button severity="secondary" variant="outlined" @click="createRandomMeal(day.dinner.id)">
						Zufälliges Gericht
					</Button>
				</div>

				<div v-else class="meal">
					<div class="meal-entry">
						<Button
							variant="link"
							style="padding: 0;"
							@click="openRecipe(day.dinner.dishId)"
						>
							{{day.dinner.name}}
						</Button>
					</div>
					
					<div v-if="day.dinner.name" class="manage-meal">
						<Button severity="danger" variant="text" @click="deleteMeal(day.dinner.id)">
							<i class="pi pi-trash"></i>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.meal-plan {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	justify-items: center;
	column-gap: 1rem;
	row-gap: 1rem;
}

.day-container {
	width: 100%;
	max-width: 300px;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
}

.choose-meal {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.day {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0 1rem;
	
	h3 {
		margin: 0;
	}
}

.manage-meal .p-button {
	padding: 0;
}

h1 {
	border-radius: var(--border-radius);
	padding: 0.3rem 1rem;
	margin: 0 0 1rem 0;
	color: var(--p-primary-color);
	background-color: var(--background-surface);
}


.meal {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}
</style>
