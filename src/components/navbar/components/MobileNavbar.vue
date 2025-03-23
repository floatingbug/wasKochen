<script setup>
import {ref} from "vue";


const isNavbarClose = ref(true);


function closeNavbar(event){
	if(event.target.dataset.pcName === "button") isNavbarClose.value = true;
}
</script>


<template>    
	<nav :class="{'nav-closed': isNavbarClose}">
		<ul class="navbar-container 
			card-bg-glass"
			:class="{'navbar-closed': isNavbarClose}"
			@click="closeNavbar"
		>
			<li>
				<h1>wasKochen Menü</h1>
			</li>

			<Divider></Divider>
			
			<li class="menu-button-container">
				<Button as="router-link" to="/">
					Home
				</Button>
			</li>

			<li class="menu-button-container">
				<Button as="router-link" to="/add-dish">
					Gericht anlegen
				</Button>
			</li>
		
			<li class="menu-button-container">
				<Button as="router-link" to="/find-dishes">
					Gerichte finden
				</Button>
			</li>
		
			<li class="menu-button-container">
				<Button as="router-link" to="/manage-dishes">
					Gerichte verwalten
				</Button>
			</li>

			<li class="menu-close-button-container">
				<Button 
					variant="text"
					@click="isNavbarClose = true;"
				>
					<i class="pi pi-bars" style="font-size: 2rem;"></i>
				</Button>
				
			</li>
		</ul>
	</nav>

	<div class="navbar-open-button-container">
		<Button 
			v-if="isNavbarClose"
			variant="text"
			@click="isNavbarClose = false;"
		>
			<i class="pi pi-bars" style="font-size: 2rem;"></i>
		</Button>
	</div>
</template>   


<style scoped>
nav {
	width: 100%;
	height: 100dvh;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 1000;
}

.navbar-container {
	width: 80%;
	max-width: 500px;
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	list-style: none;
	padding: 1rem;
	transition: transform 250ms;
}

.menu-button-container {
	width: 100%;

	.p-button {
		width: 100%;
	}
}

.menu-close-button-container {
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-top: auto;
}

.navbar-open-button-container {
	width: 100%;
	position: absolute;
	display: flex;
	justify-content: flex-end;
	padding: 1rem 1rem 0 0;
}

.navbar-closed {
	transform: translateY(-110%);
}

.nav-closed {
	z-index: -1;
}


@media(min-width: 480px){

	.menu-button-container {
		height: 50px;
	}
}
</style>
