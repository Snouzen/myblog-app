import FormLogin from "@/components/login/page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
    description: "Login Page"
}

export default function Page() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="md:w-[30%] w-[90%]">
                <h2 className="text-xl font-bold mb-4">Sign In</h2>
                <FormLogin />
            </div>
        </div>
    )
}