Migrate the content in old folder to src. It's a Hugo to Vitepress conversion.

Check the file tree and do the following condition:
- If `_index.md` is the only file inside the folder contains the file, rename `_index.md` to the name of the folder containing it, move it out of the folder then remove the folder. For example:
```
requirement/condition/_index.md
```
Will be converted to
```
requirement/condition.md
```

- If the folder contains other files than `_index.md`, rename `_index.md` to the name of the folder containing it, move it out of the folder, while also keep the other files inside the folder. For example:
```
addon/better-dialogs/menu/_index.md
addon/better-dialogs/menu/example.png
```
Will be converted to
```
addon/better-dialogs/menu.md
addon/better-dialogs/menu/example.png
```

Convert the frontmatter to always use YAML format. Keep only the `title` option. Remove the current frontmatter in the new files.

All Markdown files are missing a H1 heading for the title of the files. Add or rename the heading as `# {{ $frontmatter.title }}`. If the file has badges (converted from button tags), place them on the same line after the H1 heading.

Resolve the Hugo syntax:
- Notice tag: Convert to one that use Custom Container or GitHub-flavored Alerts, depend on whether or not it has a custom title. Check "https://vitepress.dev/guide/markdown" for reference
- Button tag: Convert to Vitepress's Badge Component, wrap with an anchor tag, and place on the same line as the H1 heading. Check "https://vitepress.dev/reference/default-theme-badge" for reference. Example:
```md
# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/AdvancedCooldown/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/AdvancedCooldown/)
```

Resolve Markdown relative link and Page link to correctly links the files in the new structure.

Always keep the old folder and leave it untouched.

Always use built-in Python functions and libraries. You cannot install any new Python library.

The bash tool is broken. You can only use Python code if you want to interact with the files. You must create scripts in a temporary folder.
