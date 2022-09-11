import hats from "../../images/1.png";
import jackets from"../../images/2.jpeg";
import sneakers from"../../images/3.jpg";
import women from"../../images/4.jpg";
import men from"../../images/5.jpg";

const Shop_Data= [
    {
        id:1,
        title:'Hats',
        items:[
            {
                id:1,
                name:'Brown Brim',
                imageUrl:hats,
                price:25
            },
            {
                id:2,
                name:'Brown Beanie',
                imageUrl:jackets,
                price:18
            },
            {
                id:3,
                name:'Blue Brim',
                imageUrl:sneakers,
                price:35
            },
            {
                id:4,
                name:'Brown Coboy',
                imageUrl:women,
                price:25
            },
        ]
    },
    {
        id:2,
        title:'sneakers',
        items:[
            {
                id:1,
                name:'Brown Brim',
                imageUrl:jackets,
                price:25
            },
            {
                id:2,
                name:'Brown Beanie',
                imageUrl:sneakers,
                price:18
            },
            {
                id:3,
                name:'Blue Brim',
                imageUrl:women,
                price:35
            },
            {
                id:4,
                name:'Brown Coboy',
                imageUrl:men,
                price:25
            },
        ]
    }
    ,  {
        id:3,
        title:'jackets',
        items:[
            {
                id:1,
                name:'Brown Brim',
                imageUrl:sneakers,
                price:25
            },
            {
                id:2,
                name:'Brown Beanie',
                imageUrl:jackets,
                price:18
            },
            {
                id:3,
                name:'Blue Brim',
                imageUrl:hats,
                price:35
            },
            {
                id:4,
                name:'Brown Coboy',
                imageUrl:jackets,
                price:25
            },
        ]
    }
]
export default Shop_Data;