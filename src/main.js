import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler'
import {library} from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { languages, defaultLocale } from "@/assets/i18n/index";
import Toaster from "@incuca/vue3-toaster";

const messages = Object.assign(languages);

library.add(faFacebookSquare, faLinkedin, faEnvelope, faMobileAlt);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createI18n({
    locale: defaultLocale,
    fallbackLocale: 'pl',
    messages
}));

app.use(Toaster);

app.mount('#app');

