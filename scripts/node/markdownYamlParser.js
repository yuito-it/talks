const fs = require('fs');
const yaml = require('js-yaml');

function parseMarkdownYaml(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!yamlMatch) {
    throw new Error('YAML Header not found');
  }
  return yaml.load(yamlMatch[1]);
}

module.exports = parseMarkdownYaml;