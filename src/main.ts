import { createApp } from "vue";
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

createApp(App).mount("#app");
