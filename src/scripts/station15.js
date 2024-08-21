function displayList() {
    const fruitsElement = document.getElementById('fruits');
    const items = fruitsElement.children;

    const ulElement = document.createElement('ul');

    for (let i = 0; i < items.length; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = items[i].textContent;
        ulElement.appendChild(liElement);
    }

    fruitsElement.replaceChildren(ulElement);
}
