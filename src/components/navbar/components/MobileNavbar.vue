<script setup>
import {ref} from "vue";


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
		<ul class=" card-bg-glass"
 			:class="{'nav-open': !isNavbarClose}"
			@click="closeNavbar"
		>
			<li class="header">
				<div class="top">
					<h1>wasKochen Menü</h1>
					
					<!-- close button -->
					<Button 
						variant="text"
						@click="isNavbarClose = true;"
					>
						<i class="pi pi-times" style="font-size: 2rem;"></i>
					</Button>
				</div>
				
				<Divider></Divider>
			</li>
			
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
		</ul>
	</nav>
</template>   


<style scoped>
nav {
	height: 70px;
	position: relative;
	display: flex;
	justify-content: center;
	z-index: 1000;
}

nav ul {
	width: 90%;
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	list-style: none;
	margin: 0;
	padding: 0;
	padding-bottom: 2rem;
	z-index: 1000;
	transform: translateY(-100%);
	transition: transform 250ms;
}

.nav-open {
	transform: translateY(0);
}

nav ul li {
	max-width: 400px;
	width: 90%;
}

nav ul li a {
	width: 100%;
	text-decoration: none;
}

nav ul .header {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.p-divider {
		margin-top: 0;
	}
}

nav ul .header .top {
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	h1 {
		font-size: 2rem;
	}
}
</style>
