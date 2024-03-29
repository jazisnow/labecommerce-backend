"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
-app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get('/ping', (req, res) => {
    res.send('Pong!');
});
app.get('/users', (req, res) => {
    res.status(200).send(database_1.user);
});
app.get('/products', (req, res) => {
    res.status(200).send(database_1.product);
});
app.get('/products/search', (req, res) => {
    const q = req.query.q;
    const result = database_1.product.filter((product) => product.name.toLowerCase().includes(q.toLowerCase()));
    res.status(200).send(result);
});
app.post('/users', (req, res) => {
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = {
        id,
        email,
        password
    };
    database_1.user.push(newUser);
    res.status(201).send("Cadastro realizado com sucesso");
});
app.post('/products', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const newProduct = {
        id,
        name,
        price,
        category
    };
    database_1.product.push(newProduct);
    res.status(201).send("Produto cadastrado com sucesso");
});
app.post('/purchases', (req, res) => {
    const userId = req.body.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const totalPrice = req.body.totalPrice;
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    };
    database_1.purchase.push(newPurchase);
    res.status(201).send("Compra realizada com sucesso");
});
app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    const result = database_1.product.find((item) => item.id === id);
    res.status(200).send("objeto product encontrado");
});
app.get("/user/:id/purchase", (req, res) => {
    const userId = req.params.id;
    const result = database_1.purchase.find((item) => item.userId === userId);
    res.status(200).send(result);
});
app.delete("/user/:id", (req, res) => {
    const id = req.params.id;
    const index = database_1.user.findIndex((item) => item.id === id);
    database_1.user.splice(index, 1);
    console.log(database_1.user);
    res.status(200).send("User apagado com sucesso");
});
app.delete("/product/:id", (req, res) => {
    const id = req.params.id;
    const index = database_1.product.findIndex((item) => item.id === id);
    database_1.user.splice(index, 1);
    console.log(database_1.product);
    res.status(200).send("User apagado com sucesso");
});
//# sourceMappingURL=index.js.map