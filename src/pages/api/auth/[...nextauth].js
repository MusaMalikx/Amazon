import NextAuth from "next-auth"
import Provider from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Provider.Google({
      clientId: "765104391188-ar2bggbjhgbco2asgsrlnpu1je2ntpd6.apps.googleusercontent.com",
      clientSecret: "56uJYdx7xN23jsxNgdk3etW6",
    }),
    // ...add more providers here
  ],
})

//# 64137339033-hde4es58gh3drj8gqmui6m85nhesd6va.apps.googleusercontent.com
//# CaBTOzs-R7ct1PA2X8L2-5Ge