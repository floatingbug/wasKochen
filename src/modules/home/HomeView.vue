<script setup>
import device from "@/utils/device.js";

</script>


<template>    
	<div class="container">
		<div class="content">
			<main>
				<h1>Hallo und willkommen auf wasKochen</h1>
				
				<p>
					Die Frage, „Was kochen?“ stellt sich täglich in sehr vielen Haushalten. Viele habe Zettel am
					Kühlschrank hängen mit den 10 Lieblingsrichten, andere haben in Kochbüchern Seiten markiert.
					Wir schaffen da Abhilfe und wollen das Problem lösen!
				</p>
				<p>
					"WasKochen" ist eine Web-Applikation zur Verwaltung von Gerichten und zur Unterstützung bei
					der Essensplanung. 
				</p>
			</main>

			<Divider :layout="device === 'mobile' ? 'horizontal' : 'vertical'"></Divider>

			<footer>
				<p>
					Um die App nutzen zu können, ist eine Anmeldung erforderlich.
					<Button as="router-link" to="/auth/sign-in" variant="link">Anmelden</Button>
				</p>

				<div class="bottom">
					<p>
						Du hast noch kein Konto auf dem du dich anmelden kannst? 
						<Button as="router-link" to="/auth/sign-up" variant="link">Konto erstellen</Button>
					</p>
				</div>
			</footer>
		</div>
	</div>
</template>   


<style scoped>
.container {
	width: 100%;
	display: flex;
	justify-content: center;
}

.content {
	width: 90%;
	text-align: center;
}

footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
}

footer .bottom {
	width: 80%;
	margin-top: 2rem;
}

footer .bottom p {
	display: inline;
}

footer p{
	width: 80%;
	display: inline;
	margin: 0;
}

@media(min-width: 768px){
	.container {
		margin-top: 5rem;
	}
}

@media(min-width: 1024px){
	.container {
		margin-top: 12rem;
	}

	.content {
		display: flex;
		align-items: center;
		text-align: start;
	}

	main, footer {
		flex: 1;
	}

	footer {
		margin: 0;
	}
}
</style>
