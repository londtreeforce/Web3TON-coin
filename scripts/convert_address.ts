import { Address } from 'ton-core';

const rawAddress = '0:a3935861f79daf59a13d6d182e1640210c02f98e3df18fda74b8f5ab141abf18'; 
//Тут обязательно добавить перед адресом workchain, 
//в данном случае stepik просил 'Используя библиотеку ton-core, 
//преобразуйте адрес в workchain: 0 в удобном формате

// Парсинг адреса из Raw формата
const parsedAddress = Address.parse(rawAddress);

// Преобразование адреса в Human-friendly формат для Workchain 0
const humanFriendlyAddress = parsedAddress.toString();

console.log(humanFriendlyAddress);