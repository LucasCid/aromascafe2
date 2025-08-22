export function formatPrice(price: number){
    const priceFormated = new Intl.NumberFormat('cl-CL', {
        style:"currency",
        currency: "CLP"
    })

    const finalPrice = priceFormated.format(price)

    return finalPrice
}