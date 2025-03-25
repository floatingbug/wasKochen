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
		<span class="quantity">
			<InputNumber v-model="ingredient.quantity"></InputNumber>
			<Select
				v-model="ingredient.unit"
				:options="units" optionLabel="name"
				optionValue="name" 
				:placeholder="ingredient.unit" 
			/>
		</span>

		<span>
			<InputText v-model="ingredient.ingredientName"></InputText>
		</span>
	</div>

	<SubmitOrCancel @submitOrCancel:action="handleEvents.submitOrCancel"></SubmitOrCancel>
</template>   


<style scoped>
.ingredient {
	width: 100%;
	display: flex;

	span {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.p-inputnumber {
		width: 50px;
	}

	:deep(.p-inputnumber-input) {
		flex: none;
		width: 100px;
	}

	.p-select {
		width: 100px;
	}
}
</style>
