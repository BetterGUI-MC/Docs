import {generateItemsFromDir, mapToNavbar, mapToSidebar} from "../utils.ts";

const items = generateItemsFromDir(
    "src/addon",
    "/addon/",
    {
        ignoredPaths: ["index.md"]
    }
)

export const addonSidebar = mapToSidebar(items);

export const addonNavbar = mapToNavbar(items);