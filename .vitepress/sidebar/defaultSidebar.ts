import {DefaultTheme} from "vitepress";
import {generateSidebarFromDir} from "../utils.ts";

export const defaultSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Basic",
        link: "/basic",
        collapsed: false,
        items: [
            {
                text: "Install the plugin",
                link: "/basic/installation",
            },
            {
                text: "Add a menu",
                link: "/basic/menu",
            },
            {
                text: "Add an addon",
                link: "/basic/addon",
            },
            {
                text: "Command & Permission",
                link: "/basic/command",
            },
            {
                text: "Config",
                link: "/basic/config",
            },
            {
                text: "Frequently Asked Questions",
                link: "/basic/faq",
            }
        ]
    },
    {
        text: "Menu",
        link: "/menu",
        collapsed: false,
        items: generateSidebarFromDir(
            "src/menu",
            "/menu/"
        )
    },
    {
        text: "Button",
        link: "/button",
        collapsed: false,
        items: [
            {
                text: "Slot",
                link: "/button/slot",
            },
            ...generateSidebarFromDir(
                "src/button",
                "/button/",
                {
                    ignoredPaths: ["slot.md"]
                }
            ),
        ]
    },
    {
        text: "Action",
        link: "/action",
        collapsed: false,
        items: generateSidebarFromDir(
            "src/action",
            "/action/"
        ),
    },
    {
        text: "Requirement",
        link: "/requirement",
        collapsed: false,
        items: [
            {
                text: "Requirement Set",
                link: "/requirement/set",
            },
            ...generateSidebarFromDir(
                "src/requirement",
                "/requirement/",
                {
                    ignoredPaths: ["set.md"]
                }
            )
        ]
    },
    {
        text: "Item Modifier",
        link: "/modifier",
        collapsed: false,
        items: generateSidebarFromDir(
            "src/modifier",
            "/modifier/",
        )
    },
    {
        text: "Argument Processor",
        link: "/argument",
        collapsed: false,
        items: generateSidebarFromDir(
            "src/argument",
            "/argument/",
        )
    },
    {
        text: "Miscellaneous",
        link: "/misc",
        collapsed: false,
        items: [
            {
                text: "Variable",
                link: "/misc/variable",
            },
            {
                text: "Message Color",
                link: "/misc/color",
            },
            {
                text: "Click Type",
                link: "/misc/click",
            }
        ]
    }
];
