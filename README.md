# Next.js 15 Dynamic Route 404 Issue

This repository demonstrates a bug encountered in Next.js 15 related to dynamic routes and nested layouts.  Intermittently, navigation to dynamic routes results in a 404 error, even when the route is correctly defined. This issue seems to be related to the client-side routing behavior and how it interacts with nested layout components.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the '/about' page and refresh the page multiple times.
5. Observe that intermittently, a 404 error occurs.

## Solution
The solution involves ensuring that the dynamic route is correctly handled within the nested layout and proper loading mechanisms are in place.  The solution file provides a revised component that correctly manages the routing.