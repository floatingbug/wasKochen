<script setup>
import categorieTags from "../data/categorieTags.js";
import dish from "../store/dishStore.js";


function addRemoveCategorie(index, categorie){
	if(dish.categories.includes(categorie.id)){
		dish.categories.splice(dish.categories.indexOf(categorie.id), 1);
		categorieTags.value[index].isSelected = false;
	}
	else {
		dish.categories.push(categorie.id);
		categorieTags.value[index].isSelected = true;
	}
}

</script>


<template>    
	<div class="categories-container">
		<Badge
			v-for="(categorie, index) in categorieTags"
			@click="addRemoveCategorie(index, categorie)"
			:class="{'badge-selected': categorie.isSelected}"
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
	padding: 1rem;
}

.p-badge {
	cursor: pointer;
	user-select: none;
}

.badge-selected {
	background-color: var(--selected-color);
}
</style>
