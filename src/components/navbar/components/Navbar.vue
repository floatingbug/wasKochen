<script setup>
import {ref} from "vue";
import useUser from "@/stores/userStore.js";
import UserMenu from "./UserMenu.vue";


const {user} = useUser();
</script>


<template>    
	<nav>
		<ul class="menu-container">
			<li class="container-left">
				<span>wasKochen</span>
			</li>

			<!-- buttons for signed in users -->
			<li v-if="user.isSignedIn">
				<ul class="container-right">
					<li>
						<Button as="router-link" to="/dashboard" variant="text" raised>Start</Button>
					</li>
					
					<li>
						<Button as="router-link" to="/meal-plan" variant="text" raised>Wochenplaner</Button>
					</li>
					
					<li>
						<Button as="router-link" to="/dish/find-dishes" variant="text" raised>Gerichte Finden</Button>
					</li>
					
					<li>
						<Button as="router-link" to="/dish/manage-dishes" variant="text" raised>Gerichte Verwalten</Button>
					</li>

					<li>
						<Button as="router-link" to="/dish/add-dish" variant="text" raised>Gericht Hinzufügen</Button>
					</li>

					<li class="user-menu">
						<UserMenu></UserMenu>
					</li>
				</ul>
			</li>

			<!-- buttons for signed out  users -->
			<li v-else>
				<div class="container-right">
					<Button as="router-link" to="/auth/sign-in">
						Anmelden
					</Button>

					<Button as="router-link" to="/auth/sign-up">
						Registrieren
					</Button>
				</div>
			</li>
		</ul>
	</nav>
</template>   


<style scoped>
nav {
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid var(--border-color);
}

.menu-container {
	background-color: var(--navbar-bg);
}

ul {
	list-style: none;
}

.menu-container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	border-radius: 0;
	margin: 0;
}

.container-right {
	display: flex;
	gap: 1rem;

	li {
		min-width: 150px;

	}
	
	.p-button {
		width: 100%;
		text-decoration: none;
	}
}

.container-right .user-menu {
	width: 50px;
	min-width: 0;
}

.container-left {
	display: flex;
	align-items: center;
	
	span {
		font-size: 1.4rem;
	}
}
</style>
