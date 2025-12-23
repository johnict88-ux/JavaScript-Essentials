const cartItems = [
	{id: 1, name: "Laptop", price: 12000, stock: true},
	{id: 2, name: "Mouse", price: 1000, stock: false},
	{id: 3, name: "Keyboard", price: 1500, stock: true},
	{id: 4, name: "Coffee Mug", price: 100, stock: true},
];

const processOrder = (items, taxRate = 0.08, discountCode = "SAVE10") => {
	const availableItems = items.filter(item => item.stock);
	const subtotal = availableItems.reduce((acc, curr) => acc + curr.price, 0);
	const discount = discountCode === "SAVE10" ? subtotal * 0.10 : 0;
	const finalTotal = (subtotal - discount) * (1 + taxRate);

	return {
		names: availableItems.map(i => i.name),
		subtotal: subtotal.toFixed(2),
		discount: discount.toFixed(2),
		total: finalTotal.toFixed(2)
	};
};

const listContainer = document.getElementById('item-list');
cartItems.forEach(item => {
	const div = document.createElement('div');
	div.className = `card ${!item.stock ? 'out-of-stock' :''}`
	div.innerHTML = `<strong>${item.name}</strong> - $${item.price} ${!item.stock ? '(Out of Stock' : ''}`;
	listContainer.appendChild(div);
});

document.getElementById('checkout-btn').addEventListener('click', () => {
    // Run our logic function
    const result = processOrder(cartItems);

    // Update the HTML with the result
    const invoiceDiv = document.getElementById('invoice');
    invoiceDiv.innerHTML = `
        <h2>Invoice Summary</h2>
        <p><strong>Items:</strong> ${result.names.join(', ')}</p>
        <p>Subtotal: $${result.subtotal}</p>
        <p>Discount: -$${result.discount}</p>
        <hr>
        <p class="total-line">Final Total: $${result.total}</p>
        <small>Processed at: ${new Date().toLocaleTimeString()}</small>
    `;
});