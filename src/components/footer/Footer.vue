<script setup>
</script>


<template>    
    <div class="footer">
        <div class="footer-copyright">
            <p>
                Copyright © 2024. 
                All rights reserved.
            </p>
        </div>
            
        <div class="contact-privacys">
            <div class="termsOfUse">
                <Button as="router-link" to="/legal-notice" variant="link">Legal Notice</Button>
            </div>
            
            <div class="privacyPolicy">
                <Button as="router-link" to="/privacy-policy" variant="link">Privacy Policy</Button>
            </div>
        </div>
    </div>
</template>   


<style scoped>
.footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--footer-bg-color);
}

.footer-copyright {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-privacys {
    display: flex;
    justify-content: center;
}
</style>
