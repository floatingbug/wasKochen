<script setup>
import {ref, onMounted, watch} from "vue";
import categorieTags from "@/data/categorieTags.js";
import SubmitOrCancel from "./SubmitOrCancel.vue";
import { useToast } from 'primevue/usetoast';


const props = defineProps({
	dish: Object,
});


const toast = useToast();
const categorieTagsCopy = ref([]);
let categoriesCopy = JSON.parse(JSON.stringify(props.dish.dish.categories));


onMounted(() => {
	setCategorieTagsCopy();
});


watch(() => categorieTagsCopy.value, () => {
	categoriesCopy = [];
	categoriesCopy = categorieTagsCopy.value.filter(categorie => {
		if(categorie.isSelected) return true;
		return false;
	}).map(categorie => categorie.id);
}, {deep: true});


const handleEvents = {
	submitOrCancel: function(event){
		if(event.action === "submit"){
			props.dish.dish.categories = categoriesCopy;
			updateCategoriesAPI({
				categories: props.dish.dish.categories
			});
		}
		else if(event.action === "cancel"){
			setCategorieTagsCopy();
			
			categoriesCopy = JSON.parse(JSON.stringify(props.dish.dish.categories));
		}
	},
};


function setCategorieTagsCopy(){
	categorieTagsCopy.value = JSON.parse(JSON.stringify(categorieTags));

	categorieTagsCopy.value.forEach(categorieCopy => {
		props.dish.dish.categories.forEach(categorie => {
			if(categorieCopy.id === categorie){
				categorieCopy.isSelected = true;
			}
		});
	});
}

async function updateCategoriesAPI({categories}){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				dishId: props.dish.dishId,
				updateProperty: "categories",
				update: props.dish.dish.categories,
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
	
	toast.add({ severity: 'info', summary: 'Geändert', detail: 'Die Kategorien wurden geändert.', life: 3000 });
}

</script>


<template>    
	<div class="content">
		<Badge
			v-for="(categorie, index) in categorieTagsCopy" :key="index"
			:severity="categorie.isSelected ? '' : 'secondary'"
			@click="categorie.isSelected = !categorie.isSelected"
		>
			{{categorie.label}}
		</Badge>
	</div>

	<SubmitOrCancel @submitOrCancel:action="handleEvents.submitOrCancel"></SubmitOrCancel>
</template>   


<style scoped>
.content {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
}

.p-badge {
	cursor: pointer;
	user-select: none;
}
</style>
