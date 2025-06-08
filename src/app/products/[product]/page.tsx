export default async function Page({ params }: { params: Promise<{ product: string }> }) {
    const { product } = await params
    return (
        <div className="px-20">
            <h2 className="text-3xl">Ini Page Untuk Product {product} </h2>
        </div>
    )
}