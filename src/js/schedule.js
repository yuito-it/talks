async function getSlides() {
  const response = await fetch('/data/schedule.json');
  const scheduleData = await response.json();
  return scheduleData.data;
}

getSlides().then(data => {
  const scheduleContainer = document.getElementById('schedule');
  const table = scheduleContainer.querySelector('table');
  const tableBody = table.querySelector('tbody');
  data.forEach(item => {
    const row = document.createElement('tr');
    const dateCell = document.createElement('td');
    dateCell.textContent = item.date || "TBA";
    const eventCell = document.createElement('td');
    eventCell.textContent = item.event;
    const locationCell = document.createElement('td');
    locationCell.textContent = item.location;
    const topicCell = document.createElement('td');
    topicCell.textContent = item.topic;
    const langCell = document.createElement('td');
    langCell.textContent = item.language;
    row.appendChild(dateCell);
    row.appendChild(eventCell);
    row.appendChild(locationCell);
    row.appendChild(topicCell);
    row.appendChild(langCell);
    tableBody.appendChild(row);
  });
});
