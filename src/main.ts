import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleUp,
  faSearch,
  faExternalLinkAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faTwitter,
  faYoutube,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import router from "@/router";

import "@/index.css";
import App from "@/App.vue";

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);
library.add(faInstagramSquare);
library.add(faTwitter);
library.add(faYoutube);
library.add(faLinkedin);
library.add(faFacebook);
library.add(faExternalLinkAlt);
library.add(faQuestionCircle);

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
