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
const axios_1 = __importDefault(require("axios"));
const API_URL = 'http://localhost:5000';
class APIClient {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Getting books");
                const response = yield axios_1.default.get(`${this.apiUrl}/books`);
                return response.data;
            }
            catch (error) {
                throw new Error('Error fetching books');
            }
        });
    }
    getBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${this.apiUrl}/books/${id}`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error fetching book with ID ${id}`);
            }
        });
    }
    createBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post(`${this.apiUrl}/books`, book);
                return response.data;
            }
            catch (error) {
                throw new Error('Error creating a new book');
            }
        });
    }
    updateBook(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.put(`${this.apiUrl}/books/${id}`, book);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error updating book with ID ${id}`);
            }
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield axios_1.default.delete(`${this.apiUrl}/books/${id}`);
            }
            catch (error) {
                throw new Error(`Error deleting book with ID ${id}`);
            }
        });
    }
}
const client = new APIClient(API_URL);
exports.default = client;
