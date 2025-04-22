<script setup>
import {ref} from "vue";
import useUser from "@/stores/userStore.js";
import UserMenu from "./UserMenu.vue";
import navbarButtons from "../data/navbarButtons.js";


const {user} = useUser();


function activateButton(index){
	navbarButtons.value.forEach(button => button.isActive = false);
	navbarButtons.value[index].isActive = true;
}

</script>


<template>    
	<nav>
		<ul class="menu-container">
			<li class="container-left">
				<span class="logo">wasKochen</span>
			</li>

			<!-- buttons for signed in users -->
			<li v-if="user.isSignedIn">
				<ul class="container-right">
					<li 
						class="navigation-button"
						:class="{'active-button': button.isActive}"
						v-for="(button, index) in navbarButtons"
						:key="index"
					>
						<Button 
							as="router-link" 
							:to="button.url" 
							severity="contrast"
							variant="text" 
							@click="activateButton(index)"
						>
							{{button.label}}
						</Button>
					</li>

					<li class="user-menu">
						<UserMenu></UserMenu>
					</li>
				</ul>
			</li>

			<!-- buttons for signed out  users -->
			<li v-else>
				<div class="container-right">
					<Button 
						as="router-link" 
						to="/auth/sign-in"
					>
						Anmelden
					</Button>

					<Button 
						as="router-link" 
						to="/auth/sign-up"
						variant="text"
					>
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

.logo {
	color: var(--p-primary-color);
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

.navigation-button {
	position: relative;
}

.navigation-button:before {
	width: 90%;
	height: 1px;
	position: absolute;
	bottom: 0;
	content: "";
	margin-left: 5%;
	transform: translateY(5px) scale(0, 1);
	background-color: var(--p-primary-color);
	transition: 250ms;
}

.navigation-button:hover:before {
	transform: translateY(5px) scale(1, 1);
	margin-left: 5%;
}

.active-button:before {
	transform: translateY(5px) scale(1, 1);
	margin-left: 5%;
}
</style>
