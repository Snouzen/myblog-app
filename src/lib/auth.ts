import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = {
          objectId: "user-123",
          name: "Jane Doe",
          email: credentials.email,
          userToken: "secure-token-456", 
        };

        return user as {
          name: string;
          email: string;
          objectId: string;
          userToken: string;
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.objectId = user.objectId;
        token.name = user.name;
        token.email = user.email;
        token.userToken = user.userToken;
      }
      return token;
    },
    async session({ token, session }) {
      session.user = {
        ...session.user,
        objectId: token.objectId as string,
        name: token.name as string,
        email: token.email as string,
      };
      session.userToken = token.userToken as string;
      return session;
    },
  },
});
