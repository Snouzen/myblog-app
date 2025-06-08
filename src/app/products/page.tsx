import Link from "next/link"

export default function Page() {
    const products = ["Topi", "Sepatu", "Baju", "Celana"]
    return (
        <div className="px-20">
            {products.map((item, idx) => {
                return (
                    <div key={idx}>
                        <Link href={`/products/${item}`}>{item}</Link>
                    </div>
                )
            })}
        </div>
    )
}