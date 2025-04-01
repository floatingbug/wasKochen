<script setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";
import useUser from "@/stores/userStore.js";
import useGroups from "@/stores/groupsStore.js";
import createToken from "./api/createToken.js";
import getGroupsAPI from "@/api/getGroupsAPI.js";


const {user} = useUser();
const {groups} = useGroups();
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
	const fetchedGroups = await getGroupsAPI();
	groups.value = fetchedGroups.data.groups;

	router.push("/dashboard");
}

</script>


<template>    
	<div class="content card-bg-glass">
		<h1>Anmelden</h1>

		<main>
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

			<Divider></Divider>
			
			<p>Du hast noch kein Account? 
				<router-link to="/auth/sign-up">Registrieren</router-link>
			</p>
		</main>

		<footer>
			<Button @click="signIn">Anmelden</Button>
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
	justify-content: flex-end;
	gap: 1rem;
	margin-top: 4rem;
}

footer .p-button {
	width: 50%;
}
</style>
