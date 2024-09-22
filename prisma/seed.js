
// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const { users }   = require('./data.js');
const prisma = new PrismaClient();
async function main() {
  try {
    await prisma.user.createMany({
      data: users
    })
    console.log('Database has been seeded.');
  }catch(e)
  {
    console.error(e);
  }finally{
    await prisma.$disconnect();
  }
  
}

main();
