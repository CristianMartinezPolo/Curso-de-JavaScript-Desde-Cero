function calculateDiscountedPrice (price, discountPercentage){
    const discount = (price*discountPercentage)/100
    const priceWithDiscount = price-discount
    return priceWithDiscount
}

const originalPrice = 1000
const discounPercentage = 15
const finalPrice = calculateDiscountedPrice(originalPrice, discounPercentage)

console.log('Original Price: $'+originalPrice)
console.log('Discount: '+discounPercentage+'%')
console.log('Price with discount: $'+finalPrice)