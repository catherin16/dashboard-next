import { SimpleWidget } from "@/app/components/dashboard/SimpleWidget";
import { WidgetsGrid } from "@/app/components/dashboard/WidgetsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Generated by create next app",
};


export default function MainPage() {
    return (
        <div className="text-black p-2">
            <h1 className="mt-2 text-3xl"> Dashboard Page</h1>
            <span className="text-xl"> Información general</span>
            <div className="flex flex-wrap p-2 items-center justify-center">
                <WidgetsGrid />
            </div>
        </div>
    )
}
