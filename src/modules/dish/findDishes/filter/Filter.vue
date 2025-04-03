<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import CategoriesFilter from "./components/CategoriesFilter.vue";
import KilocaloriesFilter from "./components/KilocaloriesFilter.vue";
import PreparationTimeFilter from "./components/PreparationTimeFilter.vue";
import DifficultyFilter from "./components/DifficultyFilter.vue";
import PortionsFilter from "./components/PortionsFilter.vue";
import {foundDishes} from "@/stores/dishStore.js";


let filterQueryObject = {
	categoriesString: "",
	kilocaloriesString: "",
	preparationTimeNumber: null,
	difficultyNumber: null,
	portionsNumber: null,
};


const handleEvents = {
	categories: function(event){
		if(event.action === "categoriesChanged"){
			//create categories string
			let categoriesString = event.data.categories.reduce((accumulator, categorie) => {
				accumulator += `${categorie},`;
				return accumulator;
			}, "");

			//remove last comma
			categoriesString = categoriesString.slice(0, -1);
			
			filterQueryObject.categoriesString  = categoriesString;
			getDishes(filterQueryObject);
		}
	},

	kilocalories: function(event){
		if(event.action === "kilocaloriesChanged"){
			filterQueryObject.kilocaloriesString = `${event.data[0]}-${event.data[1]}`;
		}

		getDishes(filterQueryObject);
	},

	preparationTime: function(event){
		if(event.action === "preparationTimeChanged"){
			filterQueryObject.preparationTimeNumber = event.data;
		}

		getDishes(filterQueryObject);
	},

	difficulty: function(event){
		if(event.action === "difficultyChanged"){
			filterQueryObject.difficultyNumber = event.data;
		}

		getDishes(filterQueryObject);
	},

	portions: function(event){
		if(event.action === "portionsChanged"){
			filterQueryObject.portionsNumber = event.data;
		}

		getDishes(filterQueryObject);
	}
}


async function getDishes(filterQueryObject){
	let query = "";

	//create query string
	if(!query){
		query += "?";
	}

	if(filterQueryObject.categoriesString !== ""){
		query += `categories=${filterQueryObject.categoriesString}&`;
	}
	if(filterQueryObject.kilocaloriesString !== ""){
		query += `kilocalories=${filterQueryObject.kilocaloriesString}&`;
	}
	if(filterQueryObject.preparationTimeNumber){
		query += `preparationTime=${filterQueryObject.preparationTimeNumber}&`;
	}
	if(filterQueryObject.difficultyNumber){
		query += `difficulty=${filterQueryObject.difficultyNumber}&`;
	}
	if(filterQueryObject.portionsNumber){
		query += `portions=${filterQueryObject.portionsNumber}&`;
	}

	//get dishes
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish${query}`, {
			method: "GET",
		});

		const result = await response.json();
		if(!result.success){
			foundDishes.value = [];
			console.log(result.errors);
			return;
		}

		foundDishes.value = result.data.dishes;
	}
	catch(error){
		console.log(error);
		return;
	}
}


</script>


<template>    
	<div class="filter-content">
		<h3>Eigenschaften:</h3>
		<CategoriesFilter @categoriesFilter:action="handleEvents.categories">
		</CategoriesFilter>

		<Divider></Divider>

		<div class="further-filters-container">
			<div class="further-filter">
				<KilocaloriesFilter @kilocaloriesFilter:action="handleEvents.kilocalories"></KilocaloriesFilter>

				<Divider></Divider>

				<PreparationTimeFilter @preparationTimeFilter:action="handleEvents.preparationTime"></PreparationTimeFilter>

				<Divider></Divider>

				<DifficultyFilter @difficultyFilter:action="handleEvents.difficulty"></DifficultyFilter>

				<Divider></Divider>

				<PortionsFilter @portionsFilter:action="handleEvents.portions"></PortionsFilter>
			</div>
		</div>
		
		<Divider style="margin-top: 2rem;"></Divider>
	</div>
</template>   


<style scoped>
.filter-content {
	width: 100%;
	height: 100%;
}
</style>
