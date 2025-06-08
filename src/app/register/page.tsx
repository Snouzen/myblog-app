import FormRegister from "@/components/register/form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register",
    description: "Register Page"
}

export default function Page() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="md:w-[30%] w-[90%]">
                <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                <FormRegister />
            </div>
        </div>
    )
}