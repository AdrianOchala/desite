import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler'

import { languages, defaultLocale } from "@/assets/i18n/index";
const messages = Object.assign(languages);

const app = createApp(App);

app.use(createI18n({
    locale: defaultLocale,
    fallbackLocale: 'pl',
    messages
}));

app.mount('#app');

