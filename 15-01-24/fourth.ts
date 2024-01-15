//Вывести из объекта (тут fetch'ем отправить запрос надо) адрес в формате 'Город: city2 Улица: street2 Дом: house2'.
// Из этого же объекта вывести 'фамилия personLastName имя personFirstName купил 5 штук товаров name'

type Address = {
    city: string,
    street: string,
    house: string
}

type Person = {
    lastName: string,
    firstName: string,
}

type ProductsOrder = {
    count: string,
    product: {
        name: string
    }
}

type Data = {
    address: Address;
    person: Person;
    productsOrder: ProductsOrder;
}

const getData = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/jakiichu/data/main/data.json');
        const data: Data = await response.json();

        console.log(`Город: ${data.address.city} Улица: ${data.address.street} Дом: ${data.address.house}`);
        console.log(`Фамилия ${data.person.lastName} имя ${data.person.firstName} купил ${data.productsOrder.count} штук товаров ${data.productsOrder.product.name} `);

    } catch (error) {
        console.error('Произошла ошибка', error);
    }
}

getData();
