const bookPrices = [300,120,30,440,56,76,89,201];

for (let i = 0; i < bookPrices.length; i++) {
    const bookPrice = bookPrices[i];
    
    if (bookPrice > 200) {
        continue;
    }

    console.log(`Book price: ${bookPrice}`);
}