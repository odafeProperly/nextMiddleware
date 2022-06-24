This is a POC for implementation of Next Middleware and Amplictute client A/B Testing.

## Getting Started

Install THE BETA version of nextJS that supports middleware and amplitude-JS:

```bash
npm install next@canary
npm install amplitude-js
```

In the root of the application create a file called middleware.js (ts) and export a niddleware fuction like below

```bash
export function middleware(req){
#   add any line of code to be executed by the middleware
}
```


## Scenarios and Use cases

### Accesing the request body
```sh
# NextRequest class extends the Requst Interface of the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

# This gives access to importand properties like headers, cookies, path ets

```

### Limiting the middleware to run on certain pages

With the release of @canary version of nextJS, Vercel enforced that the middleware file be located at the root of the project as seen [here](https://nextjs.org/docs/messages/nested-middleware). 

For this reason, we re able to specify the endpoints we want to run a middleware as shown below.
```bash

 const routesToUseMiddleware = ['/'];
 const path = req.nextUrl.pathname

 if (routesToUseMiddleware.includes(path)) {
     #execute middleware function
 }

 # Also we can have specific fuctions to run depending on the path 

  if (path.startsWith('/area')) {
    // This logic is only applied to /area
  }

  if (path.startsWith('/buy/')) {
    // This logic is only applied to /buy
  }


```


### Using amplitude fo A/B testing
```bash
    import amplitude from 'amplitude-js';

    let amplitudeInit = amplitude.getInstance().init("API_KEY")
```

## Resources
[NextJS official docs on Next Middleware](http://localhost:3000) with your browser to see the result.

[Vercel git examples for edge cases](https://github.com/vercel/examples/tree/main/edge-functions)

[Vercel mIDDLEWARE API Refernces](https://vercel.com/docs/concepts/functions/edge-functions/middleware-api#)

[Edge Functions](https://nextjs.org/docs/api-reference/edge-runtime) 

[Amplititude Docs for amplitude-js](https://developers.amplitude.com/docs/javascript)

