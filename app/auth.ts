import type { NextAuthConfig } from "next-auth"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/GitHub"
import PostgresAdapter from "@auth/pg-adapter"
import { Pool } from 'pg'


const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'yankees15',
  database: 'teamster_db',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})


export const authConfig = {
  adapter: PostgresAdapter(pool),
  providers: [
    GitHub,
  ]
} satisfies NextAuthConfig

export const { 
  handlers, 
  auth, 
  signOut 
} = NextAuth(authConfig)
