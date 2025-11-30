import {readdirSync, readFileSync} from "fs";
import {join, resolve} from "path";
import matter from "gray-matter";
import {DefaultTheme} from "vitepress";

export interface Item {
    title: string;
    link: string;
    order: number;
}

export interface GenerateSidebarOptions {
    ignoredPaths?: string[];
}

function sortItems(items: Item[]): Item[] {
    return items.sort((a, b) => {
        if (a.order !== b.order) {
            return a.order - b.order;
        }
        return a.title.localeCompare(b.title);
    });
}

export function generateItemsFromDir(
    searchDir: string,
    resolvePath: string,
    options?: GenerateSidebarOptions
): Item[] {
    const resolvedDir = resolve(process.cwd(), searchDir);
    const ignoredPaths = options?.ignoredPaths || [];

    try {
        const items: Item[] = [];
        const files = readdirSync(resolvedDir, {encoding: "utf-8"});

        for (const file of files) {
            if (!file.endsWith(".md")) {
                continue;
            }

            if (ignoredPaths.includes(file)) {
                continue;
            }

            const fullPath = join(resolvedDir, file);
            const content = readFileSync(fullPath, "utf-8");
            const {data: frontmatter} = matter(content);

            const relativeMdPath = file.replace(/\.md$/, "");
            const link = `${resolvePath}${relativeMdPath}`;
            const title = frontmatter.title || relativeMdPath;
            const order = typeof frontmatter.order === "number" ? frontmatter.order : Infinity;

            items.push({
                title,
                link,
                order,
            });
        }

        return sortItems(items);
    } catch (error) {
        console.error(`Error reading directory ${resolvedDir}:`, error);
        return [];
    }
}

export function mapToSidebar(
    items: Item[],
): DefaultTheme.SidebarItem[] {
    return items.map((item) => ({
        text: item.title,
        link: item.link,
    }));
}

export function mapToNavbar(
    items: Item[],
): DefaultTheme.NavItemWithLink[] {
    return items.map((item) => ({
        text: item.title,
        link: item.link,
    }));
}

export function generateSidebarFromDir(
    searchDir: string,
    resolvePath: string,
    options?: GenerateSidebarOptions
): DefaultTheme.SidebarItem[] {
    const items = generateItemsFromDir(searchDir, resolvePath, options);
    return mapToSidebar(items);
}

export function generateNavFromDir(
    searchDir: string,
    resolvePath: string,
    options?: GenerateSidebarOptions
): DefaultTheme.NavItemWithLink[] {
    const items = generateItemsFromDir(searchDir, resolvePath, options);
    return mapToNavbar(items);
}
