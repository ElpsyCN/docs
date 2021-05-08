const fs = require("fs");
const public = "docs/.vuepress/public/";

const { Logger } = require("@yunyoujun/logger");
const logger = new Logger();

/**
 * 写成 JSON
 * @param {string} name
 * @param {object} data
 */
function writeJsonFile(name, data) {
  let json = JSON.stringify(data);
  fs.writeFile(public + name + ".json", json, (err) => {
    if (err) throw err;
    logger.success("The file(" + name + ".json) has been saved!");
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
  },
};
