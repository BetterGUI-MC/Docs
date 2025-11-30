import {defineConfig} from "vitepress";
import {defaultSidebar} from "./sidebar/defaultSidebar.ts";
import {addonNavbar, addonSidebar} from "./sidebar/addonSidebar.ts";
import {tabsMarkdownPlugin} from "vitepress-plugin-tabs";

export default defineConfig({
    title: "BetterGUI",
    description: "An animated menu, a simple menu-designing tool, or just a better GUI plugin",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "https://raw.githubusercontent.com/BetterGUI-MC/.github/main/images/logo.svg",
            },
        ],
    ],

    srcDir: "src",
    base: "/Docs/",
    sitemap: {
        hostname: "https://bettergui-mc.github.io/Docs/",
    },
    metaChunk: true,

    themeConfig: {
        logo: "https://raw.githubusercontent.com/BetterGUI-MC/.github/main/images/logo.svg",

        nav: [
            {
                text: "Home",
                link: "/"
            },
            {
                text: "Wiki",
                items: [
                    {
                        text: "Basic",
                        link: "/basic"
                    },
                    {
                        text: "Menu",
                        link: "/menu"
                    },
                    {
                        text: "Button",
                        link: "/button"
                    },
                    {
                        text: "Action",
                        link: "/action"
                    },
                    {
                        text: "Requirement",
                        link: "/requirement"
                    },
                    {
                        text: "Item Modifier",
                        link: "/modifier"
                    },
                    {
                        text: "Argument Processor",
                        link: "/argument"
                    },
                    {
                        text: "Miscellaneous",
                        link: "/misc"
                    }
                ]
            },
            {
                text: "Addons",
                items: addonNavbar
            }
        ],

        sidebar: {
            "/": defaultSidebar,
            "/addon/": [
                {
                    text: "Addons",
                    link: "/addon/",
                    items: addonSidebar
                }
            ]
        },

        socialLinks: [{icon: "github", link: "https://github.com/BetterGUI-MC"}],

        search: {
            provider: "local",
        },

        editLink: {
            pattern: "https://github.com/BetterGUI-MC/Docs/edit/main/src/:path",
        },

        outline: "deep",
    },
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin)
        },
    },
});
