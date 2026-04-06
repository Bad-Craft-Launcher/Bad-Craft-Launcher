import { mount } from "svelte";
import App from "./App.svelte";
import { addCollection } from "@iconify/svelte";
import mdiData from "@iconify-json/mdi/icons.json";

// Register MDI icon collection
addCollection(mdiData);

const app = mount(App, {
    target: document.getElementById("app")!,
})

export default app;




