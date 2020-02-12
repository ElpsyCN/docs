const fs = require("fs");
const public = "docs/.vuepress/public/";
function writeJsonFile(name, data) {
  let json = JSON.stringify(data);
  fs.writeFile(public + name + ".json", json, err => {
    if (err) throw err;
    console.log("The file(" + name + ".json) has been saved!");
  });
}
module.exports = {
  extendPageData($page) {
    const { frontmatter } = $page;
    if (frontmatter.sentences) {
      writeJsonFile("sentences", frontmatter.sentences);
    } else if (frontmatter.words) {
      writeJsonFile("sentences", frontmatter.words);
    }
  }
};
