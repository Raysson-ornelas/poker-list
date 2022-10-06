import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
export const authOptions = {
  page: {
    signIn: '/',
    signOut: '/',
    error: '/',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    CredentialsProvider({
      name: 'NextAuthCredentials',
      credentials: {},
      async authorize(credentials) {
        console.log(credentials);

        return {
          name: 'Raysson Ornelas de Andrade',
          email: 'rayssonornelas2006@gmail.com',
          image: '',
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
  ],
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
