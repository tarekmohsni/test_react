const path = require("path");

module.exports = {
    process(_src: any, filename: any, _config: any, _options: any) {
        return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";
    },
};
