<h3 style="font-weight:600">Q) What is CDN? Why do we use it?</h3>

- CDN stands for Content Delivery Network.

- It is network of servers which are located at different geographical locations and store the static files(images, script files, styles etc.,) of your website.

- when a user visits your website, CDN loads the static files your website from the server which is closest to the user.

#### Advantages:

1. Improves the user experience by decreasing the loading time of your website.
2. Reduces the load on the main server, as CDN loads the static assets.
3. Reliable: Even when any server goes down, CDN fetches static files from other server and loads the website without breaking it.

<h3 style="font-weight:600">Q) What is crossorigin in script tag?</h3>

- The crossorigin attribute in a `<script>` tag is used to control how the browser handles Cross-Origin Resource Sharing (CORS) when fetching a script from a different origin (domain). It ensures that the request adheres to CORS policies

- when we use crossorigin in script tag, browser adds `Origin` header in the request.
- with this `Origin` header, server will understand from which domain request is coming.
- Based on this, server must respond with `Access-Control-Origin-Allow` header.
- If the server allows, browser will fetch the script and executes it.
- Otherwise, browser blocks the request and throw CORS error.

<h3 style="font-weight:600">Q) What is difference between React and ReactDOM?</h3>

- `React` object contains core features of the React library. These features are the same for `React JS` and `React Native`, whereas `ReactDOM`object acts as a bridge between `React` and `browserDOM`.

<h3 style="font-weight:600">Q) what is difference between library and framework?</h3>

#### Library:

- Library is a collection of pre-written code (function,classes,modules) that can be used to perform specific tasks.You call the library when you need it, and the application flow will be controlled by you.

- Framework is a comprehensive structure that provides foundation for building applications.Architecture will be dictated by the framework and framework calls your code.

The key difference is control. In case of libraries, you call the library, whereas in framework, framework will call your code.
