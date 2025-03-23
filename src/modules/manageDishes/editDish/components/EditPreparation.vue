<script setup>
import submitOrCancel from "./SubmitOrCancel.vue";
import { useToast } from 'primevue/usetoast';


const props = defineProps({
	dish: Object,
});


const toast = useToast();
const textCopy = JSON.parse(JSON.stringify(props.dish.dish.preparation));


const handleEvents = {
	submitOrCancel: function(event){
		if(event.action === "submit"){
			updatePreparationAPI();
		}
		else if(event.action === "cancel"){
			props.dish.dish.preparation = JSON.parse(JSON.stringify(textCopy));
		}
	},
};


async function updatePreparationAPI(){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				dishId: props.dish.dishId,
				updateProperty: "preparation",
				update: props.dish.dish.preparation,
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
	
	toast.add({ severity: 'info', summary: 'Geändert', detail: 'Die Zubereitung wurde geändert.', life: 3000 });
}

</script>


<template>    
	<Textarea v-model="dish.dish.preparation" />

	<submitOrCancel @submitOrCancel:action="handleEvents.submitOrCancel"></submitOrCancel>
</template>   


<style scoped>
.p-textarea {
	width: 100%;
	min-height: 300px;
}
</style>
