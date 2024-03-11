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
const apiClient_1 = __importDefault(require("./apiClient"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newBook = yield apiClient_1.default.createBook({ id: '1', title: 'New Title', author: 'New Author', year: '2021' });
            console.log('New Book:', newBook);
            const books = yield apiClient_1.default.getBooks();
            console.log('Books:', books);
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();
