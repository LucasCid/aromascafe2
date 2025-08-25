// "use client"

// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"
// import { useCart } from "@/hooks/use-cart"
// import {formatPrice} from "@/lib/formatPrice"
// import CartItem from "./components/cart-item"
// // import {loadStripe} from '@stripe/stripe-js'

// export default function Page() {
//     const {items, removeAll} = useCart()

//     const prices = items.map((product => product.attributes.price))
//     const totalPrice = prices.reduce((total, price) => total + price, 0)
//     // const stripePromise = loadStripe()

//     // const buyStripe = async () =>{
//     //     try{
//     //         const stripe = await stripePromise
//     //     }catch (error){
//     //         console.log(error)
//     //     }
//     // }

//     return(
//         <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
//             <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
//             <div className="grid sm:grid-cols-2 sm:gap-5">
//                 <div>
//                     {items.length == 0 && (
//                         <p>No hay productos en el carrito</p>
//                     )}
//                     <ul>
//                         {items.map((item) => (
//                             <CartItem key={item.id} product={item} />
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="max-w-xl">
//                         <div className="p-6 rounded-lg bg-slate-100">
//                             <p className="mb-3 text-lg font-semibold">Order Summary</p>
//                             <Separator />
//                             <div className="flex justify-between gap-5 my-4">
//                                 <p>Order Total</p>
//                                 <p>{formatPrice(totalPrice)}</p>
//                             </div>
//                             <div className="flex items-center justify-center w-full mt-3">
//                                 <Button className="w-full" onClick={() => console.log("Buy")}>Comprar</Button>
//                             </div>
//                         </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// "use client"

// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"
// import { useCart } from "@/hooks/use-cart"
// import { formatPrice } from "@/lib/formatPrice"
// import CartItem from "./components/cart-item"
// import { useState } from "react"
// import axios from "axios"
// import { toast } from "react-hot-toast" // Asegúrate de tener react-hot-toast instalado

// export default function Page() {
//     const { items, removeAll } = useCart()
//     const [loading, setLoading] = useState(false)

//     const prices = items.map((product => product.attributes.price))
//     const totalPrice = prices.reduce((total, price) => total + price, 0)

//     const buyWithFlow = async () => {
//         if (items.length === 0) {
//             toast.error("No hay productos en el carrito")
//             return
//         }

//         try {
//             setLoading(true)
            
//             // Preparar los datos de la orden
//             const orderData = {
//                 amount: totalPrice,
//                 subject: `Compra en Aromas de Café - ${items.length} producto(s)`,
//                 items: items.map(item => ({
//                     id: item.id,
//                     name: item.attributes.productName,
//                     price: item.attributes.price,
//                     quantity: 1 // Ajustar según tu lógica de cantidad
//                 })),
//                 email: "cliente@example.com" // Reemplazar con el email del cliente
//             }

//             // Llamar a tu API backend para crear el pago
//             const response = await axios.post(
//                 `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment/create-flow-payment`,
//                 orderData
//             )

//             if (response.data.success) {
//                 // Limpiar el carrito antes de redireccionar
//                 removeAll()
                
//                 // Redireccionar a la página de pago de Flow
//                 window.location.href = response.data.paymentUrl
//             } else {
//                 toast.error("Error al procesar el pago: " + response.data.message)
//             }

//         } catch (error) {
//             console.error("Error al procesar el pago:", error)
//             toast.error("Error al procesar el pago. Intenta nuevamente.")
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
//             <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
//             <div className="grid sm:grid-cols-2 sm:gap-5">
//                 <div>
//                     {items.length == 0 && (
//                         <p>No hay productos en el carrito</p>
//                     )}
//                     <ul>
//                         {items.map((item) => (
//                             <CartItem key={item.id} product={item} />
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="max-w-xl">
//                     <div className="p-6 rounded-lg bg-slate-100">
//                         <p className="mb-3 text-lg font-semibold">Order Summary</p>
//                         <Separator />
//                         <div className="flex justify-between gap-5 my-4">
//                             <p>Order Total</p>
//                             <p>{formatPrice(totalPrice)}</p>
//                         </div>
//                         <div className="flex items-center justify-center w-full mt-3">
//                             <Button 
//                                 className="w-full" 
//                                 onClick={buyWithFlow}
//                                 disabled={loading || items.length === 0}
//                             >
//                                 {loading ? "Procesando..." : "Pagar con Flow"}
//                             </Button>
//                         </div>
//                         <p className="text-xs text-center text-gray-500 mt-2">
//                             Serás redirigido a Flow para completar tu pago
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import CartItem from "./components/cart-item"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast" 

export default function Page() {
    const { items, removeAll } = useCart()
    const [loading, setLoading] = useState(false)

    const prices = items.map((product => product.attributes.price))
    const totalPrice = prices.reduce((total, price) => total + price, 0)

    const buyWithFlow = async () => {
        if (items.length === 0) {
            toast.error("No hay productos en el carrito")
            return
        }

        try {
            setLoading(true)
            
            // Preparar los datos de la orden
            const orderData = {
                amount: totalPrice,
                subject: `Compra en Aromas de Café - ${items.length} producto(s)`,
                items: items.map(item => ({
                    id: item.id,
                    name: item.attributes.productName,
                    price: item.attributes.price,
                    quantity: 1 // Ajustar según tu lógica de cantidad
                })),
                email: "lucascidcanetegames@gmail.com" // Email más realista para Flow
            }

            // Llamar a tu API backend para crear el pago
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment/create-flow-payment`,
                orderData
            )

            if (response.data.success) {
                // Limpiar el carrito antes de redireccionar
                removeAll()
                
                // Redireccionar a la página de pago de Flow
                window.location.href = response.data.paymentUrl
            } else {
                toast.error("Error al procesar el pago: " + response.data.message)
            }

        } catch (error) {
            console.error("Error al procesar el pago:", error)
            toast.error("Error al procesar el pago. Intenta nuevamente.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
            <div className="grid sm:grid-cols-2 sm:gap-5">
                <div>
                    {items.length == 0 && (
                        <p>No hay productos en el carrito</p>
                    )}
                    <ul>
                        {items.map((item) => (
                            <CartItem key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
                <div className="max-w-xl">
                    <div className="p-6 rounded-lg bg-slate-100">
                        <p className="mb-3 text-lg font-semibold">Order Summary</p>
                        <Separator />
                        <div className="flex justify-between gap-5 my-4">
                            <p>Order Total</p>
                            <p>{formatPrice(totalPrice)}</p>
                        </div>
                        <div className="flex items-center justify-center w-full mt-3">
                            <Button 
                                className="w-full" 
                                onClick={buyWithFlow}
                                disabled={loading || items.length === 0}
                            >
                                {loading ? "Procesando..." : "Pagar con Flow"}
                            </Button>
                        </div>
                        <p className="text-xs text-center text-gray-500 mt-2">
                            Serás redirigido a Flow para completar tu pago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}