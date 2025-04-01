<script setup>
import {ref} from "vue";
import dishStore from "@/stores/dishStore.js";
import {dishImage} from "@/stores/dishStore.js";


const value = ref("");
const previewUrl = ref(null);


async function storeImage(event){
	const file = event.target.files[0];
	if(!file) return
	dishImage.value = file;
	dishStore.dishImageUrl = URL.createObjectURL(file);
}

</script>


<template>
	<div class="file-upload-container">
		<div class="file-upload-content">
			<InputText type="file" @change="storeImage"></InputText>
			<img v-if="dishStore.dishImageUrl" :src="dishStore.dishImageUrl" alt="Bildvorschau" style="max-width: 200px; margin-top: 10px;" />
		</div>
	</div>
</template>


<style scoped>
.file-upload-container {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.file-upload-content {
	width: 90%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem 0;
}

input {
	width: 100%;
}
</style>
