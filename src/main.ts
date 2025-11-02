import "@material/web/button/filled-button.js";
import "@material/web/switch/switch.js";
import "@material/web/dialog/dialog.js";
import "@material/web/icon/icon.js";

import { createApp } from "vue";
<<<<<<< HEAD
import App from "./home.vue";
=======
import App from "./App.vue";
import {
  provideFluentDesignSystem,
  fluentButton,
  fluentCard,
  fluentSwitch,
} from "@fluentui/web-components";

provideFluentDesignSystem().register(
  fluentButton(),
  fluentCard(),
  fluentSwitch(),
);
>>>>>>> 12dd949d5b2bba9556835a1238c5fd7d6fee3f06

createApp(App).mount("#app");
