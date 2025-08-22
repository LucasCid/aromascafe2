// frontend-ecommerce/app/(routes)/payment/success/page.tsx
"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"

function PaymentSuccessContent() {
    const searchParams = useSearchParams()
    const [isConfirming, setIsConfirming] = useState(true)
    const [paymentConfirmed, setPaymentConfirmed] = useState(false)

    useEffect(() => {
        const token = searchParams.get('token')
        
        if (token) {
            // Simular confirmación automática
            // En una implementación real, podrías hacer una llamada al backend para confirmar
            setTimeout(() => {
                setIsConfirming(false)
                setPaymentConfirmed(true)
            }, 2000)
        } else {
            setIsConfirming(false)
            setPaymentConfirmed(false)
        }
    }, [searchParams])

    if (isConfirming) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
                    <p className="mt-4 text-lg">Confirmando tu pago...</p>
                </div>
            </div>
        )
    }

    if (!paymentConfirmed) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center max-w-md p-8">
                    <div className="w-16 h-16 mx-auto mb-4 text-red-500">
                        ❌
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Error en el pago
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Hubo un problema al procesar tu pago. Por favor, intenta nuevamente.
                    </p>
                    <div className="space-y-3">
                        <Button asChild className="w-full">
                            <Link href="/cart">Volver al carrito</Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                            <Link href="/">Continuar comprando</Link>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-lg">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    ¡Pago exitoso!
                </h1>
                
                <p className="text-gray-600 mb-6">
                    Tu compra ha sido procesada correctamente. 
                    Recibirás un correo de confirmación pronto.
                </p>
                
                <div className="space-y-3">
                    <Button asChild className="w-full">
                        <Link href="/">Continuar comprando</Link>
                    </Button>
                    
                    <Button asChild variant="outline" className="w-full">
                        <Link href="/orders">Ver mis pedidos</Link>
                    </Button>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                    Número de orden: {searchParams.get('commerceOrder') || 'N/A'}
                </p>
            </div>
        </div>
    )
}

// Componente de loading mientras se cargan los searchParams
function LoadingFallback() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
                <p className="mt-4 text-lg">Cargando...</p>
            </div>
        </div>
    )
}

export default function PaymentSuccessPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <PaymentSuccessContent />
        </Suspense>
    )
}