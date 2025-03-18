<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import CategoriesFilter from "./components/CategoriesFilter.vue";


let filterQueryObject = {
	categoriesString: "",
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
}


async function getDishes(filterQueryObject){
	let query = "";

	//create query string
	if(filterQueryObject.categoriesString !== ""){
		if(query === "") query = "?";
		else query += "&";
		query += `categories=${filterQueryObject.categoriesString}`;
	}

	//get dishes
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish${query}`, {
			method: "GET",
		});

		const result = await response.json();
		if(!result.success){
			console.log(result.errors);
			return;
		}

		console.log("-------->", result);
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
</style>
