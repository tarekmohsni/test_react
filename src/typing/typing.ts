declare module "*.png";
declare module "*.otf";
declare module "*.woff";
declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.ElementType;
    const src: string;
    // @ts-ignore
    export default src;
}
