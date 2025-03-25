<script setup>
import {ref} from "vue";
import Dialog from 'primevue/dialog';
import EditMenu from "./components/EditMenu.vue";
import {foundDishes} from "@/stores/dishStore.js";
import EditIngredients from "./components/EditIngredients.vue";
import EditImage from "./components/EditImage.vue";
import EditCategories from "./components/EditCategories.vue";
import EditPreparation from "./components/EditPreparation.vue";
import EditDishName from "./components/EditDishName.vue";

const props = defineProps({
	dish: Object,
	isVisible: Boolean,
});


const emit = defineEmits(["editDish:action"]);


const handleEvents = {
	dishMenu: function(event){
		if(event.action === "delete"){
			deleteDish();
		}
	},

	editDishName: function(event){
		if(event.action === "change"){
		}
	}
}


async function deleteDish(){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish`, {
			method: "delete",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({dishId: props.dish.dishId})
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

	closeDialog();
	foundDishes.value = foundDishes.value.filter(d => d.dishId !== props.dish.dishId);
}


function closeDialog(){
	emit("editDish:action", {
		action: "editDishClose",
		dishId: props.dish.dishId,
	});
}

</script>


<template>    
	<Dialog 
		:visible="isVisible" 
		@update:visible="closeDialog"
		:pt="{
			root: {
				style: 'width: 90%; min-width: 280px; max-width: 800px',
			},
			mask: {
				class: 'card-bg-glass',
			}
		}"
	>
		<template #header>
			<EditMenu @dishMenu:action="handleEvents.dishMenu"></EditMenu>
		</template>

		<div class="dish-container">
			<div class="dish-content">
				<div class="menu-container">
				</div>
				
				<div class="image-container">
					<EditImage :dish="dish"></EditImage>
				</div>

				<h3>Gerichtname</h3>

				<div class="dish-header-container">
					<EditDishName :dish="dish" @editDishName:action="handleEvents.editDishName"></EditDishName>
				</div>
				
				<Divider></Divider>

				<h3>Zutaten</h3>


				<div class="ingredients-container">
					<EditIngredients :dish="dish"></EditIngredients>
				</div>

				<Divider></Divider>

				<h3>Zubereitung</h3>

				<div class="preparation-container">
					<EditPreparation :dish="dish"></EditPreparation>
				</div>

				<Divider></Divider>

				<h3>Kategorien</h3>

				<div class="categories-container">
					<EditCategories :dish="dish"></EditCategories>
				</div>
			</div>
		</div>
	</Dialog>
</template>   


<style scoped>
.dish-container {
	width: 100%;
}

.dish-content {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

h3 {
	text-align: center;
}

.image-container {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 4rem;
	overflow: hidden;
}

.ingredients-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
}


.preparation-container {
	width: 100%;
	padding: 1rem;
}

.categories-container {
	width: 80%;
	min-width: 280px;
	max-width: 800px;
	padding: 1rem;
}

.dish-header-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center; 
	padding: 1rem;
}
</style>
