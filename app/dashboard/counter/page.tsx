import { CartCounter } from "@/app/shopping-cart/components/CartCounter";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "CounterPage",
    description: "Pantalla contador",
};


export default function CounterPage() {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            <CartCounter value={20}/>
        </div>
    );
    }