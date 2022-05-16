# Tech task (Frontend dev role)

## Task description

As an assignment, you need to create a PoC of the e-commerce solution. One of our clients wants to have an
application where he could sell images and artworks. He gave us designs and we need to transfer his vision to real
code.

## Scoring

To meet requirements you need to accomplish between **3 and 7 features** (when 3 is a minimum and 7 is a maximum).

## Tech Stack

We want to encourage you to use libraries and tools that you feel comfortable with. Our favorite stack is Next.JS +
Typescript but you can propose your own solutions. The only thing that is mandatory is the usage of React.JS.

## Database Design

You can create your own database of products or use our schema proposition. Create min 20 products. You could get
images from https://www.pexels.com/search/lifestyle/

```
{
   "products":[
      {
         "name":"Red Bench",
         "category":"people",
         "price":3.89,
         "currency":"USD",
         "image":{
            "src":"",
            "alt":""
         },
         "bestseller":true,
         "featured":false,
         "details":null
      },
      {
         "name":"Egg Balloon",
         "category":"food",
         "price":93.89,
         "currency":"USD",
         "image":"",
         "bestseller":false,
         "featured":false,
         "details":null
      },
      {
         "name":"Man",
         "category":"people",
         "price":100,
         "currency":"USD",
         "image":{
            "src":"",
            "alt":""
         },
         "bestseller":false,
         "featured":false,
         "details":null
      },
      {
         "name":"Architecture",
         "category":"landmarks",
         "price":101,
         "currency":"USD",
         "dimmentions":{
            "width":1020,
            "height":1020
         },
         "image":"",
         "bestseller":false,
         "featured":false,
         "details":null
      },
      {
         "name":"Samurai King Restling",
         "category":"landmarks",
         "price":101,
         "currency":"USD",
         "image":{
            "src":"",
            "alt":""
         },
         "bestseller":false,
         "featured":true,
         "details":{
            "dimmentions":{
               "width":1020,
               "height":1020
            },
            "size":15000,
            "description":"So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations":[
               {
                  "src":"",
                  "alt":""
               },
               {
                  "src":"",
                  "alt":""
               },
               {
                  "src":"",
                  "alt":""
               }
            ]
         }
      }
   ]
}
```

## Features:

1. **Featured Product**
One of the products should have a flag that it's a featured artwork. It should be displayed above the product list.

2. **Product List**
The product list should contain 6 artworks. After hovering over the image, you should display the "add to cart" bar.
Remember that some products have the bestseller flag.

3. **Add to Cart**
After clicking "Add to cart" in the cart icon in the header should appear the badge with the counter of elements in
the cart. Each 'Add to cart' action should open the cart dropdown with items. The dropdown should be also visible
after clicking the basket icon in the header. Clicking in the "Clear" button should remove items from the cart and
hide the dropdown.

4. **Pagination**
Products should be paginated. On one page should be 6 items. The pagination should show the current page. Hide
the 'prev' arrow on the first page and hide the 'next' arrow on the last page

5. **Sorting**
Implement 2 types of sorting: alphabetically or by price. Use basic HTML select. Clicking on arrows should change
the order to 'ascending' or 'descending'.

6. **Filtering**
Products should be filterable. You can filter products by multiple categories (multiple filters) and only one price
range (single filter). Using filters should affect the pagination. Try to build filter options dynamically (don't hardcode
them).

7. **Web performance***
Optimise Your website using lighthouse reports. Try to achieve 80+ score in web core vitals. (mobile and desktop)

8. **API implementation***
Try to implement your own database solution. You can use tools like Fauna, Hasura, Amplify, Firebase)

## **Designs:**
https://www.figma.com/file/wYrjKlxB 3 g 80 yge 1 kcahWx/Bejamas-Recruitment-task?node-id= 7 % 3 A 376

**Sent the finished solution as a .zip file to hr** **_@bejamas.io_**


## Description
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
