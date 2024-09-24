import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/signup';
    const token = request.cookies.get('token')?.value || '';
    // login and signup route ကို လာရင် profile route ကို redirect လုပ်သည်
    // authenticated ဖြစ်တဲ့အတွက်ကြောင့်ပါ
    if(isPublicPath && token){
        return NextResponse.redirect(new URL("/",request.nextUrl));
    }
    // private route ကို login မလုပ်ပဲ ဝင်ရင် /login route ကို redirect လုပ်သည်
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/login",request.nextUrl));
    }
}
 
// See "Matching Paths" below to learn more
// အောက်က route တွေကိုပဲ manage လုပ်မယ်... public ကိုဖွင့် ပြမည့်  landing page လိုဟာမျိုးဆို 
// အောက်က route group ထဲ ထည့်စရာမလိုဘူး... 
export const config = {
  matcher: [
    "/",
    "/profile/:path*",
    "/signup",
    "/login",
    "/users/:path*"
  ]
}