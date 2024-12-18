const items = document.getElementsByClassName('item');
const infos = document.getElementsByClassName('info');

Array.from(items).forEach((item, index) => {
    const info = infos[index]; // Get the corresponding info for this item

    // Initially hide the info if the item's text is not "KFC"
    if (item.innerText !== 'KFC') {
        info.style.display = 'none';
    }

    // Add click event listener to the item
    item.addEventListener('click', () => {
        // Hide all info elements
        Array.from(infos).forEach(info => {
            info.style.display = 'none';
        });

        // Show the clicked item's corresponding info
        info.style.display = 'flex';
    });
});