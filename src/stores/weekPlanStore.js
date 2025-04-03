import {reactive} from "vue";


let weekPlan = null;


function setWeekPlan(plan){
	weekPlan = reactive(plan);
}

function setMeal({newMeal, mealId}){
	for(const day in weekPlan){
		for(const mealType in weekPlan[day]){
			if(weekPlan[day][mealType].id === mealId){
				weekPlan[day][mealType].name = newMeal.recipeName;
				weekPlan[day][mealType].preparationTime = newMeal.preparationTime;
				weekPlan[day][mealType].difficulty = newMeal.difficulty;
				weekPlan[day][mealType].portions = newMeal.portions;
			}
		}
	}
}

function deleteMealStore({mealId}){
	for(const day in weekPlan){
		for(const mealType in weekPlan[day]){
			if(weekPlan[day][mealType].id === mealId){
				weekPlan[day][mealType].name = "";
				weekPlan[day][mealType].preparationTime = 0;
				weekPlan[day][mealType].difficulty = 0;
				weekPlan[day][mealType].portions = 0;
			}
		}
	}
}


export {weekPlan, setWeekPlan, setMeal, deleteMealStore};
