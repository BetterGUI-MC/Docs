import {
    generateItemsFromDir,
    generateSidebarFromDir,
    mapToNavbar,
    mapToSidebar,
    SidebarItemExtendedOptions
} from "../utils.ts";

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
        items: [
            {
                text: "Slot Grid",
                link: "/addon/masked-gui/slot-grid"
            },
            {
                text: "Dynamic Slot",
                link: "/addon/masked-gui/dynamic-slot"
            },
            {
                text: "Mask",
                link: "/addon/masked-gui/mask",
                collapsed: false,
                items: generateSidebarFromDir(
                    "src/addon/masked-gui/mask",
                    "/addon/masked-gui/mask/"
                )
            }
        ]
    },
    "/addon/better-forms": {
        collapsed: true,
        items: [
            {
                text: "Modal Form",
                link: "/addon/better-forms/modal",
            },
            {
                text: "Simple Form",
                link: "/addon/better-forms/simple",
            },
            {
                text: "Custom Form",
                link: "/addon/better-forms/custom",
            },
            {
                text: "View Requirement",
                link: "/addon/better-forms/view-requirement",
            }
        ]
    },
    "/addon/better-dialogs": {
        collapsed: true,
        items: [
            {
                text: "Menu",
                link: "/addon/better-dialogs/menu",
            },
            {
                text: "Component",
                link: "/addon/better-dialogs/component",
                items: [
                    {
                        text: "Text",
                        link: "/addon/better-dialogs/component/text",
                    },
                    {
                        text: "Item",
                        link: "/addon/better-dialogs/component/item",
                    },
                    {
                        text: "Input",
                        link: "/addon/better-dialogs/component/input",
                        collapsed: false,
                        items: [
                            {
                                text: "Text",
                                link: "/addon/better-dialogs/component/input/text",
                            },
                            {
                                text: "Checkbox",
                                link: "/addon/better-dialogs/component/input/checkbox",
                            },
                            {
                                text: "Slider",
                                link: "/addon/better-dialogs/component/input/slider",
                            },
                            {
                                text: "Select",
                                link: "/addon/better-dialogs/component/input/select",
                            }
                        ]
                    },
                    {
                        text: "Action",
                        link: "/addon/better-dialogs/component/action",
                    }
                ]
            },
            {
                text: "Adventure Component",
                link: "/addon/better-dialogs/adventure",
            }
        ]
    }
}

export const addonSidebar = mapToSidebar(items, extendedAddonSidebarOptions);

export const addonNavbar = mapToNavbar(items);