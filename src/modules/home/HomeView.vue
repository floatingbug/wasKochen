<script setup>
import useDevice from "@/composables/useDevice.js";


const {displaySize} = useDevice();

</script>


<template>    
	<div class="layout">
		<div class="layout-body">
			<div class="layout-body-left">
				<h1>Willkommen auf <span style="color: var(--p-primary-color)">wasKochen</span></h1>
				
				<p>
					Die Frage, „Was kochen?“ stellt sich täglich in sehr vielen Haushalten. Viele habe Zettel am
					Kühlschrank hängen mit den 10 Lieblingsrichten, andere haben in Kochbüchern Seiten markiert.
					Wir schaffen da Abhilfe und wollen das Problem lösen!
				</p>
			</div>

			<Divider v-if="displaySize >= 1024" layout="vertical"></Divider>
			<Divider v-else ></Divider>

			<div class="layout-body-right">
				<p class="layout-body-right-intro">
					<span style="color: var(--p-primary-color)">wasKochen</span> ist eine Web-Applikation zur Verwaltung von Gerichten und zur Unterstützung bei
					der Essensplanung. 
				</p>

				<div class="layout-body-sign-buttons">
					<p>
						Um die App nutzen zu können, ist eine Anmeldung erforderlich.
						<Button
							as="router-link" 
							to="/auth/sign-in" 
							variant="link"
						>
							Anmelden
						</Button>
					</p>
					
					<p>
						Du hast noch kein Konto auf dem du dich anmelden kannst? 
						<Button 
							as="router-link" 
							to="/auth/sign-up" 
							variant="link"
						>
							Konto erstellen
						</Button>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.layout {
	width: 100%;
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.layout-body {
	width: 90%;
	max-width: 1024px;
	margin-top: 2rem;
}

.layout-body-left {
	display: flex;
	flex-direction: column;
	align-items: center;

	h1, p {
		text-align: center;
	}
}

.layout-body-right {
	margin-top: 4rem;
	
	p {
		text-align: center;
	}

	.p-button {
		padding: 0;
	}
}

.layout-body-sign-buttons {
	margin-top: 4rem;
}

@media(min-width: 480px) {
	p {
		font-size: 1.2rem;
	}

	h1 {
		font-size: 3rem;
	}
}

@media(min-width: 1024px) {
	.layout {
		margin-top: 12rem;
	}
	
	.layout-body {
		display: flex;
		gap: 4rem;
		margin: 0;
	}

	.layout-body-left, .layout-body-right {
		flex: 1;
		
		h1, p {
			text-align: start;
			margin: 0;
		}
	}

	.layout-body-left {
		gap: 1rem;
	}

	.layout-body-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0;
	}

	.layout-body-right-intro {
		font-size: 1.5rem;
	}

	.layout-body-sign-buttons {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin: 0;

		.p-button {
			color: var(--color-contrast);
		}
	}
}
</style>
