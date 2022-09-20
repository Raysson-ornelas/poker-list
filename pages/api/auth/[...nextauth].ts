import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
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
  ],
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
