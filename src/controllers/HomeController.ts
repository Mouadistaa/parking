import { Context } from "hono";
import { html } from "hono/html";
export const HomeController = (c: Context) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to EuroPark</title>
      <link rel="stylesheet" href="/assets/css/style.css">
    </head>
    <body>
      <div class="container">
        <h1>Welcome to EuroPark</h1>
        <img src="/assets/images/parking.png" alt="Parking">
        <p>
          Save time and money with EuroPark! Enjoy a 100% contactless parking experience for a short or long duration in our car parks in Europe!
        </p>
        <a href="/cities">Our Cities</a>
        <a href="/parkings">Our Car Parks</a>
      </div>
    </html>
  `);
};