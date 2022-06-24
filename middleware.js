import amplitude from 'amplitude-js';
// import Amplitude from '@amplitude/node'
// import type { NextRequest } from "next/server";
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from "next/server";



const routesToUseMiddleware = ['/'];

export function middleware(req){
    let res = NextResponse.next()
    res.headers.set('x-modified-edge', 'true')

    res.cookies.set('test', 'new cookie')
    
    console.log('im the middleware')
    console.log(77777, req, 666, res)

}

// https://nextjs.org/docs/api-reference/edge-runtime
// https://developers.amplitude.com/docs/javascript
// https://nextjs.org/docs/api-reference/edge-runtime
// https://www.smashingmagazine.com/2022/04/next-js-middleware-feature/#:~:text=js'%20middleware%20works.-,Next.,headers%2C%20or%20even%20streaming%20HTML.
