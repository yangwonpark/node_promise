const db = require('./models');

async function getProducts() {

    try {
        const product9 = await db.Products.findByPk(9);
        const product10 = await db.Products.findByPk(10);
    
        // 단순히 template에서 데이터를 넘길 때는 그냥 넘기면 되는데
        // async await에서 dataValues로 써야 값이 나옴
        console.log(product9.dataValues);
        console.log(product10.dataValues);
    } catch(err){
        console.log(err);
    }
}

getProducts();