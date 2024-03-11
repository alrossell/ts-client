import client from './apiClient';

async function main() {
    try {
        
        const newBook = await client.createBook({ id: '1', title: 'New Title', author: 'New Author', year: '2021' });
        console.log('New Book:', newBook);
        
        const books = await client.getBooks();
        console.log('Books:', books);
    } catch (error) {
        console.error(error);
    }
}

main();

