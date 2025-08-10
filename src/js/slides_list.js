async function getSlides() {
  const response = await fetch("/data/slides.json");
  const scheduleData = await response.json();
  return scheduleData.data;
}

getSlides().then((data) => {
  const slideSection = document.getElementById("slides");
  const slidesListContainer = slideSection.querySelector(".list-container");
  data.forEach((element) => {
    console.log(element);
    const topicCard = document.createElement("div");
    topicCard.classList.add("talk-card");
    topicCard.innerHTML = `
        <h3>${element.topic.title}</h3>
        <p>${element.topic.description}</p>
    `;
    const talksContainer = document.createElement("div");
    talksContainer.classList.add("talks-container");
    element.slides.forEach((talk) => {
      const talkCard = document.createElement("div");
      talkCard.classList.add("talk-card");
      talkCard.innerHTML = `
            <div class="talk-info">
              <h3>${talk.event}</h3>
              <span>${talk.location} &#183; ${talk.date}</span>
            </div>
            <div class="talk-export">
              ${
                talk.export.video
                  ? `<a href="${talk.export.video}">Video</a>`
                  : ""
              }
              ${
                talk.export.slides
                  ? `<a href="${talk.export.slides}">Slides</a>`
                  : ""
              }
              ${talk.export.pdf ? `<a href="${talk.export.pdf}">PDF</a>` : ""}
            </div>`;
      talksContainer.appendChild(talkCard);
    });
    topicCard.appendChild(talksContainer);
    slidesListContainer.appendChild(topicCard);
  });
});
