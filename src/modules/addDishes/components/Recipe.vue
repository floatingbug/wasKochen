<script setup>
import {ref} from "vue";
import Ingredients from "./Ingredients.vue";
import dish from "../store/dishStore.js";

</script>


<template>    
	<div class="container">
		<div class="content">
			<!-- Input for recipe-name -->
			<InputGroup class="recept-name">
				<InputGroupAddon>
					<i class="pi pi-tag"></i>
				</InputGroupAddon>

				<FloatLabel variant="on">
					<InputText v-model="dish.recipeName" ></InputText>
					<label for="name">Rezeptname</label>
				</FloatLabel>
			</InputGroup>

			<Divider></Divider>

			<!-- Ingredient inputs -->
			<Ingredients></Ingredients>
		</div>
	</div>
</template>   


<style scoped>
.container {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
}

.recept-name {
	padding: 2rem 0;
}

h3 {
	margin-top: 2rem;
}

.ingredients-list {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.add-ingredients-button-container {
	margin-top: 2rem;
}
</style>
