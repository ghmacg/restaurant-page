const createMenuItem = (name, price, description='') => {
    const container = document.createElement('div');
    container.classList.add('item-container');

    const itemName = document.createElement('div');
    itemName.textContent = name;
    itemName.classList.add('item-name');

    const itemPrice = document.createElement('div');
    itemPrice.textContent = price;
    itemPrice.classList.add('item-price');
    
    container.appendChild(itemName);

    if (description) {
        const itemDescription = document.createElement('div');
        itemDescription.textContent = description
        itemDescription.classList.add('item-description');
        container.appendChild(itemDescription);
    };

    container.appendChild(itemPrice);
}

export default createMenuItem;