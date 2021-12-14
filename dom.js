let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//Form Submit EVENT
form.addEventListener('submit', addItem);

//Delet Event
itemList.addEventListener('click', removeItem);
//Filter Event
filter.addEventListener('keyup', filterItems);


//Add Item
function addItem(e) {
    e.preventDefault();
    
    //Get input Value
    let newItem = document.getElementById('item').value;

    //Create new li item
    let li = document.createElement('li');
    //Add Class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create Delet button element

    let deleteBtn = document.createElement('button');

    //Add classes to deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append  button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li); 
}

//Remove Item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter Items
function filterItems(e) {
    //Convert to lowercase
    let text = e.target.value.toLowerCase();
    //Get list
    let items = itemList.getElementsByTagName('li');
    //Converting to an array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });


}