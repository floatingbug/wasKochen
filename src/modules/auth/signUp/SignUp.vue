<script setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";
import addUser from "./api/addUser.js";


const router = useRouter();
const inputData = reactive({
	name: "",
	mail: "",
	password: "",
});


async function submit(){
	const result = await addUser(inputData);
	if(!result.success){
		console.log(result.errors);
		return;
	}

	router.push("/auth/sign-in");
}

</script>


<template>    
	<div class="content card-bg-glass">
		<h1>Registrieren</h1>

		<main>
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-user"></i>
				</InputGroupAddon>
			
				<FloatLabel>
					<InputText v-model="inputData.name"></InputText>
					<label for="name">Name</label>
				</FloatLabel>
			</InputGroup>
			
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-envelope"></i>
				</InputGroupAddon>
			
				<FloatLabel>
					<InputText type="email" v-model="inputData.mail"></InputText>
					<label for="mail">E-Mail</label>
				</FloatLabel>
			</InputGroup>
			
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-lock"></i>
				</InputGroupAddon>
			
				<FloatLabel>
					<InputText type="password" v-model="inputData.password"></InputText>
					<label for="password">Passwort</label>
				</FloatLabel>
			</InputGroup>

			<Divider></Divider>

			<p>Du bist bereits registriert? 
				<router-link to="/auth/sign-in">Anmelden</router-link>
			</p>
		</main>
		

		<footer>
			<div class="privacy-container">
				I have read and agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
			</div>

			<Button @click="submit">Registrieren</Button>
		</footer>
	</div>
</template>   


<style scoped>
.content {
	width: 90%;
	min-width: 280px;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
	margin-bottom: 22rem;
}

main {
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 2rem;
}

footer {
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 3rem;
	margin-top: 4rem;
}

footer .p-button {
	width: 50%;
}
</style>
