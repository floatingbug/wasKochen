<script setup>
import {ref} from "vue";
import useUser from "@/stores/userStore.js";
import UserMenu from "./UserMenu.vue";


const {user} = useUser();
const isNavbarClose = ref(true);


function closeNavbar(event){
	if(event.target.dataset.pcName === "button") isNavbarClose.value = true;
}

</script>


<template>    
	<nav>
		<!-- open button -->
		<Button 
			v-if="isNavbarClose"
			variant="text"
			@click="isNavbarClose = false;"
		>
			<i class="pi pi-bars" style="font-size: 2rem;"></i>
		</Button>


		<!-- navbar buttons -->
		<ul class=" card-bg-glass nav-content"
 			:class="{'nav-open': !isNavbarClose}"
			@click="closeNavbar"
		>
			<li class="header">
				<ul>
					<li>
						<h1>wasKochen Menü</h1>
					</li>
					
					<!-- close button -->
					<li>
						<Button 
							variant="text"
							@click="isNavbarClose = true;"
						>
							<i class="pi pi-times" style="font-size: 2rem;"></i>
						</Button>
					</li>
				</ul>
				
				<Divider style="margin-top: 0"></Divider>
			</li>
			
			<!-- buttons when signed in -->
			<li v-if="user.isSignedIn" class="main">
				<ul>
					<li class="menu-button-container">
						<Button as="router-link" to="/dashboard" severity="secondary" variant="outlined">
							Start
						</Button>
					</li>
					
					<li class="menu-button-container">
						<Button as="router-link" to="/meal-plan" severity="secondary" variant="outlined">
							Wochenplaner
						</Button>
					</li>
					
					<li class="menu-button-container">
						<Button as="router-link" to="/dish/find-dishes" severity="secondary" variant="outlined">
							Gerichte Finden
						</Button>
					</li>
					
					<li class="menu-button-container">
						<Button as="router-link" to="/dish/manage-dishes" severity="secondary" variant="outlined">
							Gerichte Verwalten
						</Button>
					</li>
					
					<li class="menu-button-container">
						<Button as="router-link" to="/dish/add-dish" severity="secondary" variant="outlined">
							Gericht Hinzufügen
						</Button>
					</li>
					
					<li class="user-menu" @click.stop>
						<UserMenu></UserMenu>
					</li>
				</ul>
			</li>

			<!-- buttons when signed out -->
			<li v-else class="main">
				<ul>
					<li class="menu-button-container">
						<Button
							as="router-link" to="/auth/sign-in"
							severity="secondary"
						>
							Anmelden
						</Button>
					</li>

					<li class="menu-button-container">
						<Button
							as="router-link" to="/auth/sign-up"
							severity="secondary"
						>
							Registrieren
						</Button>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>   


<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

a {
	text-decoration: none;
}

nav {
	width: 100%;
	height: 70px;
	position: relative;
	display: flex;
	justify-content: center;
	z-index: 1000;
}

.nav-content {
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 4rem;
	transform: translateY(-100%);
	transition: transform 250ms;
}

.nav-open {
	transform: translateY(0);
}

.nav-content .header {
	width: 100%;
}

.nav-content .header h1 {
	margin-left: 1rem;
}

.nav-content .header ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
}

.nav-content .main {
	width: 80%;
	max-width: 400px;
	display: flex;
	justify-content: center;
	margin-top: 2rem;
}

.nav-content .main ul {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
}

.nav-content .main ul li .p-button {
	width: 100%;
}

.user-menu {
	width: 50px;
	margin-left: auto;
}

</style>
