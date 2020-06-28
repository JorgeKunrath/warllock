module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./assets/styles/");
  eleventyConfig.addPassthroughCopy("./assets/styles/style.css");

  eleventyConfig.addWatchTarget("./assets/js/");
  eleventyConfig.addPassthroughCopy("./assets/js/parallax.js");


  return {
    PassthroughFileCopy: true
  }
}



// module.exports = function(eleventyConfig) {
//   eleventyConfig.addWatchTarget("./src/styles/");
// }

//   return {
//     dir: {
//       input: "src",
//       output: "dist"
//     }
//   };
// };

// module.exports = function(config) {

//   config.addWatchTarget("./src/scss/");

//   return {
//     dir: {
//       input: "src",
//       output: "dist",
//       //include: "templates"
//     },
//     templateFormats: ["html", "md"],
//     htmlTemplateEngine: "liquid",
//     markdownTemplateEngine: "liquid"
//   };
// }