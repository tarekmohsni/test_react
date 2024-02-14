/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
    const PATH_SOURCE = path.join(__dirname, "./src");
    const ENV_CONFIG = require(`./env_${mode}.json`);

    const plugins = [react()];

    return {
        mode,
        plugins,
        esbuild: {
            treeShaking: true,
        },
        server: {
            port: 8080,
            open: true,
        },
        define: {
            "process.env": {
                ...ENV_CONFIG,
            },
        },
        resolve: {
            alias: [
                {
                    find: "@common",
                    replacement: path.join(PATH_SOURCE, "./common"),
                },
                {
                    find: "@utils",
                    replacement: path.join(PATH_SOURCE, "./utils"),
                },
                {
                    find: "@features",
                    replacement: path.join(PATH_SOURCE, "./features"),
                },
                {
                    find: "@pages",
                    replacement: path.join(PATH_SOURCE, "./pages"),
                },
                {
                    find: "@mappers",
                    replacement: path.join(PATH_SOURCE, "./mappers"),
                },
                {
                    find: "@static",
                    replacement: path.join(PATH_SOURCE, "./static"),
                },
                {
                    find: "@context",
                    replacement: path.join(PATH_SOURCE, "./context"),
                },
                {
                    find: "@hooks",
                    replacement: path.join(PATH_SOURCE, "./hooks"),
                },
                {
                    find: "@translations",
                    replacement: path.join(PATH_SOURCE, "./translations"),
                },
                {
                    find: "@api-routes",
                    replacement: path.join(PATH_SOURCE, "./apiRoutes"),
                },
                {
                    find: "@constants",
                    replacement: path.join(PATH_SOURCE, "./constants.ts"),
                },
                {
                    find: "@appRoutes",
                    replacement: path.join(PATH_SOURCE, "./appRoutes.ts"),
                },
                {
                    find: "@styles",
                    replacement: path.join(PATH_SOURCE, "./styles"),
                },
            ],
        },
    };
});
