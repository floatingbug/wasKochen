import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import semantic from "./theming/semantic.js";
import Button from "primevue/button";
import Divider from "primevue/divider";
import InputText from "primevue/inputtext";
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Badge from "primevue/badge";


const app = createApp(App)

const MyPreset = definePreset(Aura, {
	semantic,
});

app.use(PrimeVue, {
    theme: {
        preset:	MyPreset 
    }
});

app.use(router)

app.component("Button", Button);
app.component("Divider", Divider);
app.component("InputText", InputText);
app.component("InputGroup", InputGroup);
app.component("InputGroupAddon", InputGroupAddon);
app.component("FloatLabel", FloatLabel);
app.component("InputNumber", InputNumber);
app.component("Textarea", Textarea);
app.component("Badge", Badge);

app.mount('#app')
