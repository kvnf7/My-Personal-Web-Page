var loadedDiv = document.getElementById('loaded');

loadedDiv.onclick = function () {
    loadedDiv.style.color = 'red';
    loadedDiv.innerText = 'Just changed it to red';
};