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

		setMeal({
			newMeal: dish,
			mealId,
		});

		const result = await saveWeekPlanAPI({
			weekPlan: toRaw(weekPlan), 
			token: user.token
		});

		console.log(result);
	}

});


async function createRandomMeal(id){
	const result = await getRandomDish();
	const dish = result.data.dishes[0].dish;

	setMeal({
		newMeal: dish,
		mealId: id,
	});
	
	const resultPlan = await saveWeekPlanAPI({
		weekPlan: toRaw(weekPlan), 
		token: user.token
	});

	console.log(resultPlan);
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

	console.log(result);
}

</script>

<template>
	<div class="week-plan-content">
		<main>
			<div class="week">
				<div class="day-container card-bg-glass"
					v-for="(day, index) in weekPlan" :key="index"
				>
					<h1>{{index}}</h1>
					
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

						<div v-else class="meal card-bg-glass">
							<div class="meal-entry">
								<span>Gerichtname: </span>{{day.breakfast.name}}
							</div>
							<div class="meal-entry">
								<span>Zubereitungszeit: </span>{{day.breakfast.preparationTime}}
							</div>
							<div class="meal-entry">
								<span>Schwierigkeitsgrad: </span>{{day.breakfast.difficulty}}
							</div>
							<div class="meal-entry">
								<span>Portionen: </span>{{day.breakfast.portions}}
							</div>
						</div>

						<div v-if="day.breakfast.name" class="manage-meal">
							<Button severity="danger" variant="text" @click="deleteMeal(day.breakfast.id)">
								<i class="pi pi-trash" style="font-size: 1.6rem;"></i>
							</Button>
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

						<div v-else class="meal card-bg-glass">
							<div class="meal-entry">
								<span>Gerichtname: </span>{{day.lunch.name}}
							</div>
							<div class="meal-entry">
								<span>Zubereitungszeit: </span>{{day.lunch.preparationTime}}
							</div>
							<div class="meal-entry">
								<span>Schwierigkeitsgrad: </span>{{day.lunch.difficulty}}
							</div>
							<div class="meal-entry">
								<span>Portionen: </span>{{day.lunch.portions}}
							</div>
						</div>

						<div v-if="day.lunch.name" class="manage-meal">
							<Button severity="danger" variant="text" @click="deleteMeal(day.lunch.id)">
								<i class="pi pi-trash" style="font-size: 1.6rem;"></i>
							</Button>
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

						<div v-else class="meal card-bg-glass">
							<div class="meal-entry">
								<span>Gerichtname: </span>{{day.dinner.name}}
							</div>
							<div class="meal-entry">
								<span>Zubereitungszeit: </span>{{day.dinner.preparationTime}}
							</div>
							<div class="meal-entry">
								<span>Schwierigkeitsgrad: </span>{{day.dinner.difficulty}}
							</div>
							<div class="meal-entry">
								<span>Portionen: </span>{{day.dinner.portions}}
							</div>
						</div>

						<div v-if="day.dinner.name" class="manage-meal">
							<Button severity="danger" variant="text" @click="deleteMeal(day.dinner.id)">
								<i class="pi pi-trash" style="font-size: 1.6rem;"></i>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<style scoped>
.week {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
	margin-top: 2rem;
}

.day-container {
	max-width: 700px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.choose-meal {
	flex: 4;
	display: flex;
	align-items: center;
	gap: 1rem;
}

.day {
	min-height: 100px;
	display: flex;
	flex-wrap: wrap;
	padding: 1rem;
}

h1 {
	padding-left: 1rem;
	color: var(--p-primary-color);
	background-color: var(--background-surface);
}

.day h3 {
	min-width: 150px;
	flex: 2;
	display: flex;
	align-items: center;
}

.meal {
	flex: 4;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
}

.manage-meal {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
