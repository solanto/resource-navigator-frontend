const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy")
// const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss")

/** @param {import("@11ty/eleventy/src/UserConfig")} config */
module.exports = config => {
    config.addPlugin(EleventyServerlessBundlerPlugin, {
        name: "serverless",
        functionsDir: "netlify/functions/",
        copy: [
            "styles/",
            "node_modules/@11tyrocks/eleventy-plugin-lightningcss/.eleventy.js"
        ]
    })

    config.setServerOptions({
        port: 3000
    })

    // config.addPlugin(lightningCSS)
}