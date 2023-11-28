import { DataSource } from 'typeorm';
import 'reflect-metadata'
import { Remera } from './models/producs';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "pensado",
    synchronize: true,
    logging: true,
    entities: [Remera],
    subscribers: [],
    migrations: [],
});


AppDataSource.initialize()
    .then(async() => {

        const validation_product= AppDataSource.manager.getRepository(Remera)
        const product_exist= await validation_product.find()

        if (product_exist.length == 0){
            console.log("DataBase Inicilizated")
            const remera1 = new Remera("remera1",199,"https://acdn.mitiendanube.com/stores/002/237/525/products/img_9222-e6f1cba520762d421717005774892846-320-0.webp",1)
            const remera2 = new Remera("remera2",249,"https://acdn.mitiendanube.com/stores/002/237/525/products/img_9359-bc4d8f16cbee0de79c17005784633014-320-0.webp",1)
            const remera3 = new Remera("remera3",199,"https://acdn.mitiendanube.com/stores/002/237/525/products/img_6748-09335f6d267bbeb7ed16989476283571-320-0.webp",1)
            const remera4 = new Remera("remera4",249,"https://acdn.mitiendanube.com/stores/002/237/525/products/img_6739-4a1ac33e7d06faa4d916989447897333-320-0.webp",1)
            const remera5 = new Remera("remera5",199,"https://acdn.mitiendanube.com/stores/002/237/525/products/img_6691-29c5d4cdda5604b89116989439127860-320-0.jpeg",1)
            const remera6 = new Remera("remera6",249,"https://acdn.mitiendanube.com/stores/002/237/525/products/img_6694-0d6c66664b2f079edb16989442576363-320-0.webp",1)
            const remera7 = new Remera("remera7",199,"https://acdn.mitiendanube.com/stores/002/237/525/products/produ-black-mambo-0227512-16-a-m21-a64086adf5e95e71ee16952236292454-320-0.jpg",1)
            const remera8 = new Remera("remera8",249,"https://acdn.mitiendanube.com/stores/002/237/525/products/produ-black-mambo-0232412-16-a-m1-3cbe3f274196d505c816952233490099-320-0.jpg",1)
            const remera9 = new Remera("remera9",199,"https://acdn.mitiendanube.com/stores/002/237/525/products/produ-black-mambo-0213012-16-a-m11-6c94349c349f38730d16952247269190-320-0.jpg",1)
            AppDataSource.manager.save([remera1,remera2,remera3,remera4,remera5,remera6,remera7,remera8,remera9])
            console.log(product_exist)
        }

    })
    .catch((error)=> {
        console.log(error)
    })
