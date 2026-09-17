const inventory = Array(10).fill("Empty");

function addItem(item) {
    const emptyIndex = inventory.indexOf("Empty");
    
    if (emptyIndex !== -1) {
        inventory[emptyIndex] = item;
        console.log(`Предмет "${item}" додано в слот ${emptyIndex}`);
        return true;
    }
    
    console.log(`Рюкзак переповнений, предмет "${item}" не вдалось додати!`);
    return false;
}

function deleteItem(item) {
    const itemIndex = inventory.indexOf(item);
    
    if (itemIndex !== -1) {
        inventory[itemIndex] = "Empty";
        console.log(`Предмет "${item}" було видалено із слота ${itemIndex}`);
        return true;
    }
    
    console.log(`Не вдалось знайти та видалити предмет "${item}"!`);
    return false;
}


function compactInventory() {
    const activeItems = inventory.filter(item => item !== "Empty");

    for (let i = 0; i < inventory.length; i++) {
        inventory[i] = activeItems[i] || "Empty";
    }
    
    console.log("Інвентар успішно ущільнено.");
}


console.log("Початковий стан:", inventory);

addItem("Меч");
addItem("Зілля");
addItem("Щит");
addItem("Меч");
addItem("Зілля");
addItem("Щит");
addItem("Меч");
addItem("Зілля");
addItem("Щит");
addItem("Меч");
addItem("Зілля");
addItem("Щит");

console.log("Після додавання 3 предметів:", inventory);

deleteItem("Зілля"); 
console.log("Після видалення 'Зілля':", inventory);

compactInventory(); 
console.log("Після ущільнення:", inventory);
