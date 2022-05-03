import { Injectable } from '@angular/core';

export class Product {
    ID!: string;
    name!: string;
    categoryId?: string;
    image?: string;
    price?: number;
}

const IMAGE_URL = "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/";

const products: Product[] = [
    {
        ID: "1",
        name: "Stores"
    }, {
        ID: "1_1",
        categoryId: "1",
        name: "Super Mart of the West"
    }, {
        ID: "1_1_1",
        categoryId: "1_1",
        name: "Video Players"
    }, {
        ID: "1_1_1_1",
        categoryId: "1_1_1",
        name: "HD Video Player",
        image: IMAGE_URL + "1.png",
        price: 220
    }, {
        ID: "1_1_1_2",
        categoryId: "1_1_1",
        name: "SuperHD Video Player",
        image: IMAGE_URL + "2.png",
        price: 270
    }, {
        ID: "1_1_2",
        categoryId: "1_1",
        name: "Televisions"
    }, {
        ID: "1_1_2_1",
        categoryId: "1_1_2",
        name: "SuperLCD 42",
        image: IMAGE_URL + "7.png",
        price: 1200
    }, {
        ID: "1_1_2_2",
        categoryId: "1_1_2",
        name: "SuperLED 42",
        image: IMAGE_URL + "5.png",
        price: 1450
    }, {
        ID: "1_1_2_3",
        categoryId: "1_1_2",
        name: "SuperLED 50",
        image: IMAGE_URL + "4.png",
        price: 1600
    }, {
        ID: "1_1_2_4",
        categoryId: "1_1_2",
        name: "SuperLCD 55",
        image: IMAGE_URL + "6.png",
        price: 1750
    }, {
        ID: "1_1_2_5",
        categoryId: "1_1_2",
        name: "SuperLCD 70",
        image: IMAGE_URL + "9.png",
        price: 4000
    }, {
        ID: "1_1_3",
        categoryId: "1_1",
        name: "Monitors"
    }, {
        ID: "1_1_3_1",
        categoryId: "1_1_3",
        name: "19\"",
    }, {
        ID: "1_1_3_1_1",
        categoryId: "1_1_3_1",
        name: "DesktopLCD 19",
        image: IMAGE_URL + "10.png",
        price: 160
    }, {
        ID: "1_1_4",
        categoryId: "1_1",
        name: "Projectors"
    }, {
        ID: "1_1_4_1",
        categoryId: "1_1_4",
        name: "Projector Plus",
        image: IMAGE_URL + "14.png",
        price: 550
    }, {
        ID: "1_1_4_2",
        categoryId: "1_1_4",
        name: "Projector PlusHD",
        image: IMAGE_URL + "15.png",
        price: 750
    }
];

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    getProducts(): Product[] {
        return products;
    }
}