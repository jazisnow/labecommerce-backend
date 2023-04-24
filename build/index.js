"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = require("./database/knex");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield knex_1.db.raw('SELECT * FROM users;');
        res.status(200).send({ result });
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
app.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield knex_1.db.raw('SELECT * FROM products;');
        res.status(200).send({ result });
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
app.get("/products/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = req.query.name;
        const result = yield knex_1.db.raw(`SELECT * FROM products WHERE LIKE "${q}";`);
        res.status(200).send({ result });
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
app.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, email, password, createdAt } = req.body;
        if (!id || typeof id !== "string") {
            res.status(400);
            throw new Error("'id' deve ser do tipo 'string'");
        }
        if (!email || typeof email !== "string") {
            res.status(400);
            throw new Error("'email' deve ser do tipo 'string'");
        }
        if (!password || typeof password !== "string") {
            res.status(400);
            throw new Error("'password' deve ser do tipo 'string'");
        }
        const idExist = yield knex_1.db.raw(`SELECT * FROM users WHERE id = ?`, [id]);
        if (idExist.length > 0) {
            res.status(400);
            throw new Error("Já existe uma conta com esse id");
        }
        const newUser = yield knex_1.db.raw(`INSERT INTO users (id, name, email, password, createdAt) VALUES (?, ?, ?, ?, ?)`, [id, name, email, password, createdAt]);
        res.status(200).send({ message: "Cadastro realizado com sucesso!" });
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
app.post("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, price, description, imageUrl } = req.body;
        if (!id || typeof id !== "string") {
            res.status(400);
            throw new Error("'id' deve ser do tipo 'string'");
        }
        if (!name || typeof name !== "string") {
            res.status(400);
            throw new Error("'name' deve ser do tipo 'string'");
        }
        if (!price || typeof price !== "number") {
            res.status(400);
            throw new Error("'price' deve ser do tipo 'number'");
        }
        if (!description || typeof description !== "string") {
            res.status(400);
            throw new Error("'descripition' deve ser do tipo 'string'");
        }
        const idExist = yield knex_1.db.raw(`SELECT * FROM products WHERE id = ?`, [id]);
        if (idExist.length > 0) {
            res.status(400);
            throw new Error("Já existe um produto com esse id");
        }
        const newProduct = yield knex_1.db.raw(`INSERT INTO products (id, name, price, description, imageUrl) VALUES (?, ?, ?, ?, ?)`, [id, name, price, description, imageUrl]);
        res.status(200).send({ message: "Cadastro realizado com sucesso!" });
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
//# sourceMappingURL=index.js.map