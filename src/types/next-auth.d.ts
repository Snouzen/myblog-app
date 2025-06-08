import "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            objectId?: string,
            name: string,
            email: string
        }
        userToken?: string
    }

    interface JWT {
        objectId?: string,
        name: string
        email: string
        userToken?: string
    }

    interface User {
        objectId?: string,
        name: string
        email: string
        userToken?: string
    }
}