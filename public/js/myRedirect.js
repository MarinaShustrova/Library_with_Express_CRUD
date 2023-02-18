const mainContainer = document.querySelector('.mainContainer');

const myRedirect = async (event, path) => {
  const link = event.target;
  const url = link.href;
  const response = await fetch(url);
  const html = await response.text();
  mainContainer.innerHTML = '';
  mainContainer.innerHTML = html;
  window.history.pushState(null, null, path);
};
