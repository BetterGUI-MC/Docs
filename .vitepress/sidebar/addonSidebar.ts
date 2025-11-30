import {generateItemsFromDir, mapToNavbar, mapToSidebar, SidebarItemExtendedOptions} from "../utils.ts";

const items = generateItemsFromDir(
    "src/addon",
    "/addon/",
    {
        ignoredPaths: ["index.md"]
    }
)

const extendedAddonSidebarOptions: SidebarItemExtendedOptions = {
    "/addon/masked-gui": {
        collapsed: true,
    },
    "/addon/better-forms": {
        collapsed: true,
    },
    "/addon/better-dialogs": {
        collapsed: true,
    }
}

export const addonSidebar = mapToSidebar(items, extendedAddonSidebarOptions);

export const addonNavbar = mapToNavbar(items);