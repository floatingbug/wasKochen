<script setup>
import {reactive} from "vue";
import createGroupAPI from "./api/createGroup.js";
import useUser from "@/stores/userStore.js";
import { useToast } from 'primevue/usetoast';


const {user} = useUser();
const toast = useToast();
const inputData = reactive({
	name: "",
});


async function createGroup(){
	const token = user.token;
	const result = await createGroupAPI({inputData, token});
	if(!result.success){
		console.log(result.errors);
		return;
	}

	user.groupIds.push(result.data.groupId);
	
	toast.add({ severity: 'info', summary: 'Gruppe erstellt.', detail: `Die Gruppe ${inputData.name} wurde erstellt.`, life: 3000 });

	inputData.name = "";
}

</script>


<template>    
	<div class="content">
		<header>
			<h1>Gruppe Erstellen</h1>
		</header>
		
		<main>
			<div class="input-container">
				<InputGroup>
					<InputGroupAddon>
						<i class="pi pi-tag"></i>
					</InputGroupAddon>
				
					<FloatLabel>
						<InputText v-model="inputData.name"></InputText>
						<label for="name">Name der Gruppe</label>
					</FloatLabel>
				</InputGroup>
			</div>
		</main>

		<footer>
			<Button @click="createGroup">Gruppe Erstellen</Button>
		</footer>
	</div>
</template>   


<style scoped>
.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

main {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
}

main .input-container {
	width: 50%;
}

footer {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
}

footer .p-button {
	width: 50%;
}
</style>
