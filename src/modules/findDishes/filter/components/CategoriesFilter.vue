<script setup>
import {ref} from "vue";


const emit = defineEmits(["categoriesFilter:action"]);


const categories = ref([
  {
    "label": "Lieblingsessen",
    "id": "favorite_food",
    "isSelected": false
  },
  {
    "label": "Gesund",
    "id": "healthy",
    "isSelected": false
  },
  {
    "label": "Ungesund",
    "id": "unhealthy",
    "isSelected": false
  },
  {
    "label": "Alltagstauglich",
    "id": "everyday_suitable",
    "isSelected": false
  },
  {
    "label": "Schnell",
    "id": "quick",
    "isSelected": false
  },
  {
    "label": "Sehr aufwendig",
    "id": "very_complex",
    "isSelected": false
  },
  {
    "label": "Spargericht",
    "id": "budget_meal",
    "isSelected": false
  },
  {
    "label": "Teures Gericht",
    "id": "expensive_meal",
    "isSelected": false
  },
  {
    "label": "Festtagsgericht",
    "id": "holiday_meal",
    "isSelected": false
  },
  {
    "label": "Vegetarisch",
    "id": "vegetarian",
    "isSelected": false
  },
  {
    "label": "Vegan",
    "id": "vegan",
    "isSelected": false
  },
  {
    "label": "Low Carb",
    "id": "low_carb",
    "isSelected": false
  },
  {
    "label": "Ketogen",
    "id": "ketogenic",
    "isSelected": false
  },
  {
    "label": "Fettarm",
    "id": "low_fat",
    "isSelected": false
  },
  {
    "label": "Kalorienarm",
    "id": "low_calorie",
    "isSelected": false
  },
  {
    "label": "Laktosefrei",
    "id": "lactose_free",
    "isSelected": false
  },
  {
    "label": "Glutenfrei",
    "id": "gluten_free",
    "isSelected": false
  },
  {
    "label": "Proteinreich",
    "id": "high_protein",
    "isSelected": false
  },
  {
    "label": "Ballaststoffreich",
    "id": "high_fiber",
    "isSelected": false
  },
  {
    "label": "Zuckerfrei",
    "id": "sugar_free",
    "isSelected": false
  },
  {
    "label": "Fleischhaltig",
    "id": "contains_meat",
    "isSelected": false
  }
]);

const selectedCategories = [];


function handleCategorie(categorie){
	categorie.isSelected = !categorie.isSelected;

	if(categorie.isSelected){
		selectedCategories.push(categorie.id);
	}
	else{
		selectedCategories.splice(selectedCategories.indexOf(categorie.id), 1);
	}

	emit("categoriesFilter:action", {
		action: "categoriesChanged",
		data: {
			categories: selectedCategories,
		}
	});
}

</script>


<template>    
	<div class="categories-container">
		<Badge
			v-for="(categorie, index) in categories" :key="index"
			@click="handleCategorie(categorie)"
			:class="{'selected-categorie': categorie.isSelected}"
			:severity="categorie.isSelected ? '' : 'secondary'"
		>
			{{categorie.label}}
		</Badge>
	</div>
</template>   


<style scoped>
.categories-container {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}

.p-badge {
	cursor: pointer;
	user-select: none;
}

.selected-categorie {
	background-color: var(--selected-color);
}
</style>
