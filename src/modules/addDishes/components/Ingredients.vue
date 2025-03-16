<script setup>
import {ref} from "vue";
import Select from "primevue/select";
import dish from "../store/dishStore.js";


const units = ref([
	{
		name: "g",
		id: "g",
	},
	{
		name: "kg",
		id: "kg",
	},
	{
		name: "cm",
		id: "cm",
	},
]);


function addIngredient(){
	dish.ingredients.push({
		quantity: 1,
		unit: "",
		ingredientName: "",
	});

	console.log(dish.ingredients);
};

function removeIngredient(index){
	dish.ingredients.splice(index, 1);
}

</script>


<template>    
	<div class="ingredients-container">
		<div class="input-container"
			v-for="(ingredient, index) in dish.ingredients"
		>
			<!-- Ingredient inputs -->
			<div class="input-content quantity">
				<span>Menge:</span>
				<InputNumber v-model="ingredient.quantity"></InputNumber>
			</div>
		
			<div class="input-content unit">
				<span>Einheit:</span>
				<Select v-model="ingredient.unit" :options="units" optionValue="id" optionLabel="name" placeholder="-" />
			</div>
		
			<div class="input-content ingredient-name">
				<span>Zutatenname:</span>
				<InputText v-model="ingredient.ingredientName"></InputText>
			</div>
			
			<!-- button for removing the ingredient -->
			<Button
				variant="text"
				severity="danger"
				@click="removeIngredient(index)"
			>
				<i class="pi pi-trash"></i>
			</Button>
		</div>

		<!-- button for adding a ingredient -->
		<Button
			style="max-width: 150px; margin-top: 1rem;"
			severity="secondary"
			@click="addIngredient"
		>
			Zutat hinzufügen
		</Button>

		
		<Divider></Divider>
	</div>
</template>   


<style scoped>
.ingredients-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.input-container {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}

.input-content {
	display: flex;
	flex-direction: column;
}

.quantity {
	:deep(.p-inputtext) {
		width: 24px;
	}
}

.ingredient-name {
	max-width: 124px;
}

@media(min-width: 768px){
	.ingredient-name {
		max-width: unset;
	}

	.quantity {
		:deep(.p-inputtext) {
			width: 100px;
		}
	}

	.ingredient-name {
		width: 50%;
	}
}
</style>
