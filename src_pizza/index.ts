import { FormValidator } from "./FormValidator";
import { maxLength, nonEmptyArray, requiredText } from "./validators";

const pizzaOrderForm = document.forms.namedItem('pizzaOrder');

interface pizzaOrder {
    pizzas: string[],
    addons: string[],
    paymentType: string,
    customerName: string,
    shippingAdress: string 
}

const pizzaOrderValidator = new FormValidator<pizzaOrder>({
    pizzas: [
        nonEmptyArray,

    ],

    paymentType: [
        requiredText
    ],

    customerName: [
        requiredText,
        maxLength(100)
    ],

    shippingAdress: [
        requiredText,
        maxLength(200)
    ]
}

);

pizzaOrderForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(pizzaOrderForm);

    const pizzaOrder: pizzaOrder = {
        pizzas: formData.getAll('pizza') as string[],
        addons: formData.getAll('addon') as string[],
        paymentType:  String(formData.get('paymentType')),
        customerName: String(formData.get('customerName')).trim(),
        shippingAdress: String(formData.get('shippingAdress')).trim()

    };

    const errors = pizzaOrderValidator.validate(pizzaOrder);
    
    console.log(errors);
    console.log(pizzaOrder);
})