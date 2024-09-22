
## Getting Started
First, run the development server:

```bash
npm run dev
- npx create-next-app@latest --ts typescript နဲ့ create လုပ်ချင်လို့
- npm install prisma --save-dev
- npm i @prisma/client 
- npx prisma ဆိုရင် prisma folder ရလာပီ project folder ထဲမှာ
- npx prisma init 
- .env ကို gitignores ထဲ ထည့်ပေးရမယ်
- npx prisma db push ဆိုရင် schema.prisma file ထဲက model တွေ db ကို သွားဆောက်သည်
- npx prisma db pull ကတော့ database ထဲက table တွေကို schema.prisma file ထဲမှာ model ဆောက်သည်
- npx prisma generate ကတော့ 
# Migration ဆိုတာကတော့ column တွေတိုးတဲ့ နေရာမှာ အသုံးပြုတယ်
- npx prisma migrate dev --name migration_name က migration လုပ်သည် ... column တွေတိုးမယ်
- npx prisma migrate reset က all data lost တယ်
- npx prisma migrate deploy က production level မှာ လုပ်သည်
# Seeding 
    လိုအပ်တဲ့ အချက်အလက်တွေကို table တွေမှာ pre-defined ထားလို့ရတယ်... laravel ကလိုပဲ ဆောင်ရွက်နိုင်တယ်...
- prisma/data.js မှာ data တွေကို pre-define ထားမယ်.
- seed.js မှာ data.js ကို require လုပ်ယူ.. prismaClient ကိုလဲ require လုပ်ယူ
- package.json မှာ 
    "prisma": {
        "seed": "node prisma/seed.js"
    },
ကို add ပေးရမယ်...
- ပြီရင် npx prisma db seed ဆိုတာနဲ့ seeding လုပ်နိုင်သည်....

# Counter Function 
- server vs client component ရှိပြီး default က server component ဖြစ်တယ်...
- client component အဖြစ်သုံးချင်တယ်ဆိုရင် file ရဲ့ ထပ်ဆုံးမှာ 'use client' ဆိုပီ သုံးရမယ်
- /counter url

# Auth with mongoDB
    ## Recource  https://www.youtube.com/watch?v=eaQc7vbV4po&list=PLRAV69dS1uWR7KF-zV6YPYtKYEHENETyE&index=6
- https://cloud.mongodb.com/  cloud db create လုပ်
- mongodb+srv://kosoe:<db_password>@cluster0.7xcvq.mongodb.net/
- npm i axios bcryptjs jsonwebtoken nodemailer react-hot-toast mongoose 
- npm i --save-dev @types/jsonwebtoken @types/bcryptjs
# Special File တွေရှိတယ် 
- not-found.tsx,error.tsx etc... 
- The path is app/not-found.tsx 