import {defineConfig} from "vitepress";
import { defaultSidebar } from "./sidebar/defaultSidebar.ts";
import {generateNavFromDir, generateSidebarFromDir} from "./utils.ts";

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
                text: "Addons",
                items: generateNavFromDir(
                    "src/addon",
                    "/addon/",
                    {
                        ignoredPaths: ["index.md"]
                    }
                )
            }
        ],

        sidebar: {
            "/": defaultSidebar,
            "/addon/": [
                {
                    text: "Addons",
                    link: "/addon/",
                    items: generateSidebarFromDir(
                        "src/addon",
                        "/addon/",
                        {
                            ignoredPaths: ["index.md"]
                        }
                    )
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
});
