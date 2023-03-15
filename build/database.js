"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchase = exports.product = exports.user = void 0;
const types_1 = require("./types");
exports.user = [
    {
        id: "01",
        email: "jaziorcc@hotmail.com",
        password: "naoSei123",
    },
    {
        id: "02",
        email: "helenaFairy@hotmail.com",
        password: "euSei123",
    },
];
exports.product = [
    {
        id: "03",
        name: "Playstion",
        price: 5.0,
        category: types_1.ProductCategory.CONSOLE,
    },
    {
        id: "04",
        name: "Resident Evil 4 remake",
        price: 350,
        category: types_1.ProductCategory.JOGOS,
    },
];
exports.purchase = [
    {
        userId: "01",
        productId: "03",
        quantity: 50,
        totalPrice: 250.0,
    },
    {
        userId: "02",
        productId: "04",
        quantity: 40,
        totalPrice: 14.000,
    },
];
function createUser(id, email, password) {
    exports.user.push({ id, email, password });
    return "Cadastro realizado com sucesso";
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.user;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    exports.product.push({ id, name, price, category });
    return "Produto adicionado com sucesso";
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.product;
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    return exports.product.find((prod) => prod.id === idToSearch);
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    return exports.product.filter((prod) => prod.name.toLowerCase().includes(q.toLowerCase()));
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    exports.purchase.push({ userId, productId, quantity, totalPrice });
    return "Compra realizada com sucesso";
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    return exports.purchase.filter((purchase) => purchase.userId === userIdToSearch);
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map