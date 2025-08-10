const fs = require('fs');
const path = require('path');
const parser = require("./markdownYamlParser.js");


if (process.argv.length < 4) {
  console.error('使い方: node slideMetaJsonExporter.js <markdownファイル> <URL>');
  process.exit(1);
}

const mdPath = process.argv[2];
const url = process.argv[3];
const parsedData = parser(mdPath);


let output = { data: [] };
const outPath = path.join(process.cwd(),"src","data", 'slides.json');
if (fs.existsSync(outPath)) {
  try {
    output = JSON.parse(fs.readFileSync(outPath, 'utf8'));
  } catch (e) {
    console.warn('既存slideMeta.jsonの読み込み失敗。新規作成します。');
    output = { data: [] };
  }
}

// 既存のtopicがあるか探す
const topicTitle = parsedData.talksSiteMetadata.topic || "";
const topicDescription = parsedData.talksSiteMetadata.info || "";

const slides = [
  {
    event: parsedData.talksSiteMetadata.event || "",
    location: parsedData.talksSiteMetadata.location || "",
    date: parsedData.talksSiteMetadata.date || "",
    export: {
      video: parsedData.talksSiteMetadata.video || undefined,
      pdf: `${url}/pdf`,
      slides: url
    }
  }
];

let existingTopic = output.data.find(
  (item) => item.topic.title === topicTitle
);

if (existingTopic) {
  existingTopic.slides = existingTopic.slides.concat(slides);
} else {
  output.data.push({
    topic: {
      title: topicTitle,
      description: topicDescription,
    },
    slides,
  });
}

fs.writeFileSync(outPath, JSON.stringify(output, null, 2));