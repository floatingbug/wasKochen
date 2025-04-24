<script setup>
</script>


<template>    
	<div class="privacy-policy">
		<div class="privacy-policy-body">
			<div class="section-content">
				<h1 class="section-header">Privacy Policy</h1>
				
				<div class="description">
					<p>This privacy policy explains the nature, scope, and purpose of the collection and use of personal data on this website by the site operator:</p>
				</div>
				
				<div class="anschrift">
					<p>Thomas Hof<br />
					Am Trift 4<br />
					56479 Westernohe<br />
					Germany</p>
				</div>
				
				<div class="list">
					<div class="list-item">
						<p><strong>1. Access Data</strong></p>
						<p>We collect data about accesses to the website and store them as “server log files”. The following data are logged: visited page, time of access, amount of data sent, source/referrer, browser used, operating system, and IP address (anonymized).</p>
					</div>
					
					<div class="list-item">
						<p><strong>2. Contact</strong></p>
						<p>If you contact us via the contact form, your details including email address will be stored for the purpose of processing the request. This data will not be passed on without your consent.</p>
					</div>
					
					<div class="list-item">
						<p><strong>3. Your Rights</strong></p>
						<p>You have the right to request information about your stored personal data, its origin, recipients, and the purpose of data processing. You also have the right to request correction, blocking, or deletion of your data.</p>
					</div>
					
					<div class="list-item">
						<p><strong>4. Google Fonts</strong></p>
						<p>This website uses Google Fonts, which are hosted locally. No data is sent to Google when loading fonts.</p>
					</div>
					
					<div class="list-item">
						<p><strong>5. Server Location</strong></p>
						<p>This website is hosted in Germany. No data is transferred to third countries.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.privacy-policy {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 22rem;
}

.privacy-policy-body {
	width: 90%;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

.description {
	margin-top: 2rem;
}

.anschrift {
	margin-top: 2rem;
}

.list {
	margin-top: 2rem;
}

.list-item {
	margin-top: 1rem;
}
</style>
