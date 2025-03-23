<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import CategoriesFilter from "./components/CategoriesFilter.vue";
import KilocaloriesFilter from "./components/KilocaloriesFilter.vue";
import {foundDishes} from "@/stores/dishStore.js";


let filterQueryObject = {
	categoriesString: "",
	kilocaloriesString: "",
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
}


async function getDishes(filterQueryObject){
	let query = "";

	//create query string
	if(filterQueryObject.categoriesString !== ""){
		if(query === "") query = "?";
		else query += "&";
		query += `categories=${filterQueryObject.categoriesString}`;
	}

	if(filterQueryObject.kilocaloriesString !== ""){
		if(query === "") query = "?";
		else query += "&";
		query += `kilocalories=${filterQueryObject.kilocaloriesString}`;
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
	<div class="filter-container">
		<Accordion value="0">
			<AccordionPanel value="null">
				<AccordionHeader>Filter</AccordionHeader>
				<AccordionContent>
					<h3>Eigenschaften:</h3>
					<CategoriesFilter @categoriesFilter:action="handleEvents.categories">
					</CategoriesFilter>

					<Divider></Divider>

					<div class="further-filters-container">
						<div class="further-filter">
							<KilocaloriesFilter @kilocaloriesFilter:action="handleEvents.kilocalories"></KilocaloriesFilter>
						</div>
					</div>
				</AccordionContent>
			</AccordionPanel>
		</Accordion>
	</div>
</template>   


<style scoped>
.filter-container {
	width: 100%;
	padding: 2rem 0;
}

.further-filters-container {
	display: flex;
	flex-wrap: wrap;
}

.further-filter {
	width: 90%;
	min-width: 100px;
}
</style>
