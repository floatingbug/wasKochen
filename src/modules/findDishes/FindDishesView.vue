<script setup>
import Filter from "./filter/Filter.vue";
</script>


<template>    
	<div class="find-dishes-container">
		<div class="find-dishes-content">
			<h1>Gerichte finden</h1>

			<Filter></Filter>

			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-search"></i>
				</InputGroupAddon>

				<FloatLabel variant="in">
					<InputText class="input-search-field"></InputText>
					<label for="input-search-field">Name des Gerichts</label>
				</FloatLabel>
			</InputGroup>


		</div>
	</div>
</template>   


<style scoped>
.find-dishes-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	padding-bottom: 8rem;
}

.find-dishes-content {
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 5rem;
}

h1 {
	text-align: center;
}

.input-search-field {
	margin-top: 2rem;
}
</style>
