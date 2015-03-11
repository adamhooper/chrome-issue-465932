Displays Chrome [issue #465932](https://code.google.com/p/chromium/issues/detail?id=465932)

To use:

1. Install Node
2. `npm install`
3. `npm run`
4. Browse to [http://localhost:46593](http://localhost:46593) with Chrome Inspector open

The page sets a cookie and includes an &lt;object&gt; tag with a relative path.

The issue: when Chrome requests the object, it does not set a cookie.
