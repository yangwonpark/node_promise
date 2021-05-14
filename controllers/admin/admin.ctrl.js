// 컨트롤러 역할
const db = require('../../models');

// 밑에 나오는 Products는 models/Products.js 에서 sequelize.defint('Products')(Products)와 일치한다

exports.get_products = async ( _ , res) => {
    try {
        const products = await db.Products.findAll();
        res.render('admin/products.html', { products });
    } catch(err) {
        console.log(err);
    }
}

// exports.get_products = ( _ , res) => {
//     // res.render('admin/products.html',
//     //     { message : "hello"}
//     // );

//     db.Products.findAll({

//     }).then((products) => {
//         res.render('admin/products.html', {
//             // products : products
//             products     // key = value 면 하나만 적어도 됌
//         })
//     });
// }

exports.get_products_write = (req, res) => {
    res.render('admin/write.html');
}

exports.post_products_write = async (req, res) => {
    // res.send(req.body);
    await db.Products.create(req.body);
    
    res.redirect('/admin/products');
}

// exports.post_products_write = (req, res) => {
//     // res.send(req.body);
//     db.Products.create(req.body).then( () => {
//         res.redirect('/admin/products');
//     });
//     // db.Products.create({
//     //     name : req.body.name,
//     //     price : req.body.price,
//     //     description: req.body.description
//     // }).then( () => {
//     //     res.redirect('/admin/products');
//     // });
// }

exports.get_products_detail = async ( req , res ) => {
    const product = await db.Products.findByPk(req.params.id);
    res.render('admin/detail.html', { product });  
};

exports.get_products_edit = (req, res) => {
    db.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/write.html', { product });
    });
}

exports.post_products_edit = async (req, res) => {
    await db.Products.update(
        req.body,                           // Data
    {
        where: { id : req.params.id }       // 조건
    });

    res.redirect('/admin/products/detail/' + req.params.id);
}

exports.get_products_delete = (req, res) => {
    db.Products.destroy({
        where: {
            id : req.params.id
        }
    }).then(()=> {
        res.redirect('/admin/products');
    });
}