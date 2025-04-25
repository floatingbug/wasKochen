<script setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";
import useUser from "@/stores/userStore.js";
import createToken from "./api/createToken.js";


const {user} = useUser();
const router = useRouter();
const inputData = reactive({
	nameOrMail: "",
	password: "",
});


async function signIn(){
	const result = await createToken(inputData);
	if(!result.success){
		console.log(result.errors);
		return;
	}

	user.token = result.data.token;
	user.isSignedIn = true;
	localStorage.setItem("isSignedIn", true);
	localStorage.setItem("token", result.data.token);

	router.push("/dashboard");
}

</script>


<template>    
	<div class="content card-bg-glass">
		<h1>Anmelden</h1>

		<div class="sign-in-body-top">
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-id-card"></i>
				</InputGroupAddon>
			
				<FloatLabel>
					<InputText v-model="inputData.nameOrMail"></InputText>
					<label for="name">Name oder E-Mail</label>
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
		</div>
		
		<Divider></Divider>

		<div class="sign-in-body-bottom">
			<p>Du hast noch kein Account? 
				<router-link to="/auth/sign-up">Registrieren</router-link>
			</p>

			<Button @click="signIn">Anmelden</Button>
		</div>
	</div>
</template>   


<style scoped>
.content {
	width: 90%;
	min-width: 280px;
	max-width: 800px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
}

.sign-in-body-top {
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 1.8rem;
	margin: 1rem 0;
}

.sign-in-body-bottom {
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 1rem;
}

.sign-in-body-bottom .p-button {
	width: 50%;
}
</style>
