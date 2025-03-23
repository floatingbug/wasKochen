<script setup>
import SubmitOrCancel from "./SubmitOrCancel.vue";
import { useToast } from 'primevue/usetoast';


const props = defineProps({
	dish: Object,
});


const emit = defineEmits(["editDishName:action"]);


const toast = useToast();
const headerCopy = JSON.parse(JSON.stringify(props.dish.dish.recipeName))


const handleEvents = {
	submitOrCancel: function(event){
		if(event.action === "submit"){
			updateRecipeName();
		}
		else if(event.action === "cancel"){
			props.dish.dish.recipeName = JSON.parse(JSON.stringify(headerCopy));
		}
	},
};

async function updateRecipeName(){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				dishId: props.dish.dishId,
				updateProperty: "recipeName",
				update: props.dish.dish.recipeName,
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

    toast.add({ severity: 'info', summary: 'Geändert', detail: 'Der Gerichtname wurde geändert.', life: 3000 });
}

</script>


<template>    
	<InputText v-model="dish.dish.recipeName"></InputText>

	<SubmitOrCancel @submitOrCancel:action="handleEvents.submitOrCancel"></SubmitOrCancel>
</template>   


<style scoped>
h1 {
	text-align: center;
}

.p-inputtext {
	font-size: 2rem;
}
</style>
