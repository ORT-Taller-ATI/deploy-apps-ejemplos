document.addEventListener('DOMContentLoaded', () => {
  const itemForm = document.getElementById('item-form');
  const itemInput = document.getElementById('item-input');
  const itemsList = document.getElementById('items-list');

  // Fetch and display items
  const fetchItems = async () => {
    const response = await fetch('/api/items');
    const items = await response.json();
    itemsList.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.textContent = item.name;
      li.dataset.id = item.id;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '✖';
      deleteButton.addEventListener('click', () => deleteItem(item.id));
      li.appendChild(deleteButton);
      itemsList.appendChild(li);
    });
  };

  // Add a new item
  itemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemName = itemInput.value;
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: itemName })
    });
    if (response.ok) {
      itemInput.value = '';
      fetchItems();
    }
  });

  // Delete an item
  const deleteItem = async (id) => {
    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      fetchItems();
    }
  };

  // Initial fetch
  fetchItems();
});