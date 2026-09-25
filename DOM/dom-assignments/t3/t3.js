const target = document.querySelector('#target');
const browser = navigator.userAgent;
const operatingSystem = navigator.platform;
const screenWidth = screen.width;
const screenHeight = screen.height;
const availableWidth = screen.availWidth;
const availableHeight = screen.availHeight;
const now = new Date();
const date = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const time = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

target.innerHTML = `
  <p>Browser: ${browser}</p>
  <p>Operating system: ${operatingSystem}</p>
  <p>Screen size: ${screenWidth} x ${screenHeight}</p>
  <p>Available screen space: ${availableWidth} x ${availableHeight}</p>
  <p>Date: ${date}</p>
  <p>Time: ${time}</p>`;
