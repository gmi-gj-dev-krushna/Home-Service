import NextAuth from "next-auth/next";

const PROJECT_ID = process.env.DESCOPE_PROJECT_ID;
const ACCESS_KEY = process.env.DESCOPE_ACCESS_KEY;

if (!PROJECT_ID) {
  throw new Error('DESCOPE_PROJECT_ID is not defined in environment variables');
}

if (!ACCESS_KEY) {
  throw new Error('DESCOPE_ACCESS_KEY is not defined in environment variables');
}

export const authOptions = {
  providers: [
    {
      id: "descope",
      name: "Descope",
      type: "oauth",
      wellKnown: `https://api.descope.com/${PROJECT_ID}/.well-known/openid-configuration`,
      authorization: { params: { scope: "openid email profile" } },
      idToken: true,
      clientId: PROJECT_ID,
      clientSecret: ACCESS_KEY,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          icon: profile.picture,
        };
      },
    },
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };