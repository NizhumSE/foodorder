let order = [];
let total = 0;

function addToOrder(item, price) {
    order.push({ item, price });
    total += price;
    updateOrderList();
    updateTotal();
}

function updateOrderList() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    order.forEach((orderItem, index) => {
        const li = document.createElement('li');
        li.textContent = `${orderItem.item} - $${orderItem.price}`;
        orderList.appendChild(li);
    });
}

function updateTotal() {
    document.getElementById('total').textContent = total;
}

function placeOrder() {
    if (order.length === 0) {
        alert('Your order is empty!');
        return;
    }
    alert('Thank you for your order!');
    order = [];
    total = 0;
    updateOrderList();
    updateTotal();
}

// Initialize Locomotive Scroll
document.addEventListener('DOMContentLoaded', () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
});
