<script setup>
import {ref, toRaw} from "vue";
import Select from "primevue/select";
import SubmitOrCancel from "./SubmitOrCancel.vue";
import { useToast } from 'primevue/usetoast';


const props = defineProps({
	dish: Object,
});


const toast = useToast();
const ingredientsCopy = JSON.parse(JSON.stringify(props.dish.dish.ingredients));
const units = ref([
	{
		name: "g",
	},
	{
		name: "kg",
	},
	{
		name: "cm",
	},
]);



const handleEvents = {
	submitOrCancel: function(event){
		if(event.action === "submit"){
			updateIngredientsAPI(); 
		}
		else if(event.action === "cancel"){
			props.dish.dish.ingredients = JSON.parse(JSON.stringify(ingredientsCopy));
			console.log(ingredientsCopy);
			console.log(props.dish.dish);
		}
	},
}

async function updateIngredientsAPI(){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				dishId: props.dish.dishId,
				updateProperty: "ingredients",
				update: props.dish.dish.ingredients,
			}),
		});

		const result = await response.json();
		if(!result.success){
			console.log(result.errors);
			return;
		}
	}
	catch(error){
		console.log(error);
	}

    toast.add({ severity: 'info', summary: 'Geändert', detail: 'Die Zutaten wurden geändert.', life: 3000 });
}

</script>


<template>    
	<div class="ingredient"
		v-for="(ingredient, index) in dish.dish.ingredients" :key="index"
	>
		<div class="quantity">
			<InputNumber v-model="ingredient.quantity"></InputNumber>
			<Select
				v-model="ingredient.unit"
				:options="units" optionLabel="name"
				optionValue="name" 
				:placeholder="ingredient.unit" 
			/>
		</div>

		<div class="ingredient-name">
			<InputText v-model="ingredient.ingredientName"></InputText>
		</div>
	</div>

	<SubmitOrCancel @submitOrCancel:action="handleEvents.submitOrCancel"></SubmitOrCancel>
</template>   


<style scoped>
.ingredient {
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 1rem;
}

.quantity {
	width: 150px;
	display: flex;
	gap: 0.5rem;
	flex-grow: 0;

	:deep(.p-inputtext) {
		width: 50px;
	}
	.p-select {
		width: 100px;
	}
}

.ingredient-name {
	width: 50%;

	.p-inputtext {
		width: 100%;
	}
}
</style>
