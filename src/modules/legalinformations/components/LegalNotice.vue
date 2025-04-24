<script setup>
</script>

<template>
	<div class="legal-notice">
		<div class="legal-notice-body">
			<h1 class="section-header">Imprint</h1>
			
			<div class="anschrift">
				<p>Thomas Hof<br />
				Fullstack Web Developer<br />
				Am Trift 4<br />
				56479 Westernohe<br />
				Germany</p>
			</div>
			
			<div class="contact">
				<h2>Contact</h2>
				<p>Phone: +49 (0) 1522 8958 094<br />
				Email: thomas.hof1984@gmail.com</p>
			</div>
			
			<div class="job-title">
				<h2>Job Title and Professional Regulations</h2>
				<p>Job Title:<br />
				Web Developer</p>
				<p>Awarded in:<br />
				Germany</p>
			</div>
			
			<div class="resolution">
				<h2>EU Online Dispute Resolution</h2>
				<p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br />
				You can find our email address above in the imprint.</p>
			</div>
			
			<div class="customer">
				<h2>Consumer Dispute Resolution / Universal Arbitration Board</h2>
				<p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
			</div>
			
			<div class="source">
				<p>Source: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>   
			</div>
		</div>
	</div>
</template>


<style scoped>
.legal-notice {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 12rem;
}

.legal-notice-body {
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

.anschrift {
	margin-top: 2rem;
}

.contact {
	margin-top: 2rem;
}

.job-title {
	margin-top: 5rem;
}

.resolution {
	margin-top: 1rem;
}

.customer {
	margin-top: 3rem;
}

.source {
	margin-top: 3rem;
	margin-bottom: 12rem;
}
</style>
