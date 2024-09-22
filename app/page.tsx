import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export default async function Home() {
   const allPosts  = await prisma.post.findMany();
   console.log(allPosts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='users'>Users</Link>
      <Link href='counter'>Counter</Link>
      <ProductCard />
      {
        allPosts.map(post => {
          return (
             <>
               <p>{post.title}/{post.content}</p>
             </>
          )
        })
      }
    </main>
  )
}
