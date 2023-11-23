const pizzaOrderForm = document.forms.namedItem('pizzaOrder');

pizzaOrderForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(pizzaOrderForm);

    const pizzaOrder = {
        pizzas: formData.getAll('pizza'),
        addons: formData.getAll('addon'),
        paymentType: formData.get('paymentType'),
        customerName: String(formData.get('customerName')).trim(),
        shippingAdress: String(formData.get('shippingAdress')).trim()

    };

    console.log(pizzaOrder);
})