<script setup>
import {ref, toRaw} from "vue";
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import Recipe from "./components/Recipe.vue";
import Preparation from "./components/Preparation.vue";
import Categories from "./components/Categories.vue";
import RecipeImageUpload from "./components/RecipeImageUpload.vue";
import Preview from "./components/Preview.vue";
import dishStore from "./store/dishStore.js";
import {dishImage} from "./store/dishStore.js";


async function saveDish(){
	let dish = toRaw(dishStore);

	//store image on server
	if(dishImage.value){
		const formData = new FormData();
		formData.append("image", dishImage.value);

		try{
			const response = await fetch(`${import.meta.env.VITE_API_URL}/file`, {
				method: "POST",
				body: formData,
			});

			const result = await response.json();
			if(!result.success){
				console.log(result.errors);
				return;
			}

			dish.dishImageUrl = `/upload/${result.data.filename}`;
		}
		catch(error){
			console.log(error);
			return
		}
	}
	
	//store dish on server
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({newDish: dish}),
		});

		const result = await response.json();
		if(!result.success){
			console.log(result.errors);
			return;
		}

		console.log(result);
	}
	catch(error){
		console.log(error);
		return;
	}

}

async function holder(){
}

</script>


<template>    
	 <div class="add-dish-container">
	 	<div class="add-dish-content">
	 		<Stepper value="1">
				<StepItem value="1">
					<Step>Rezept</Step>
					<StepPanel v-slot="{ activateCallback }">

						<Recipe></Recipe>

						<div class="button-container">
							<Button label="Next" @click="activateCallback('2')" />
						</div>
					</StepPanel>
				</StepItem>
				
				<StepItem value="2">
					<Step>Zubereitung</Step>
					<StepPanel v-slot="{ activateCallback }">
						
						<Preparation></Preparation>
					
						<div class="button-container">
							<Button label="Back" severity="secondary" @click="activateCallback('1')" />
							<Button label="Next" @click="activateCallback('3')" />
						</div>
					</StepPanel>
				</StepItem>
				
				<StepItem value="3">
					<Step>Kategorien</Step>
					<StepPanel v-slot="{ activateCallback }">

						<Categories></Categories>

						<div class="button-container">
							<Button label="Back" severity="secondary" @click="activateCallback('2')" />
							<Button label="Next" @click="activateCallback('4')" />
						</div>
					</StepPanel>
				</StepItem>
				
				<StepItem value="4">
					<Step>Rezeptbild</Step>
					<StepPanel v-slot="{ activateCallback }">

						<RecipeImageUpload></RecipeImageUpload>

						<div class="button-container">
							<Button label="Back" severity="secondary" @click="activateCallback('3')" />
							<Button label="Next" @click="activateCallback('5')" />
						</div>
					</StepPanel>
				</StepItem>
				
				<StepItem value="5">
					<Step>Vorschau</Step>
					<StepPanel v-slot="{ activateCallback }">

						<Preview></Preview>

						<div class="button-container">
							<Button label="Back" severity="secondary" @click="activateCallback('4')" />
						</div>
					</StepPanel>
				</StepItem>
	 		</Stepper>
			
			<!-- submit dish -->
			<Button
				class="save-dish-button"
				@click="saveDish"
			>
				Gericht speichern
			</Button>
	 	</div>
	 </div>
</template>   


<style scoped>
.add-dish-container {
	width: 100%;
	display: flex;
	justify-content: center;
	padding-bottom: 300px;
}

.add-dish-content {
	width: 95%;
	max-width: 1024px;
	margin-top: 6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.p-stepper {
	width: 100%;
}

.button-container {
	width: 100%;
	display: flex;
	justify-content: flex-end;
	gap: 1rem;
	padding: 1rem 1rem 1rem 0;
}

.save-dish-button {
	margin-top: 2rem;
}

@media(min-width: 1024px){
	.add-dish-content {
		margin-top: 2rem;
	}
}
</style>
