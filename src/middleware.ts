import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(request: NextRequest) {
    const session = await auth()
    const protectedUrl = ["/blog/create", "/profile"]
    const {pathname} = request.nextUrl

    const isProtected = protectedUrl.some((path) => pathname.startsWith(path)) // Untuk mengetahui tujuan berikutnya persis sama dengan yang di protect
    if (isProtected && !session) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/blog/create", "/profile/:path*"]
}