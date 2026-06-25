# Anura by Anjana — Fine Jewelry Storefront

A real, runnable React + TypeScript + Tailwind storefront (no backend — frontend-only demo with a working cart, checkout flow, and contact form).

## Getting started

```bash
npm install
npm run dev      # starts dev server at http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  types/index.ts          → shared TypeScript interfaces + PRODUCT_CATEGORIES
  data/
    products.ts            → ⭐ THE PRODUCT CATALOG — add/edit/remove items here
    heroSlides.ts           → homepage slider content
  context/
    CartContext.tsx         → global cart state (add/update/remove, totals)
  components/
    Header.tsx, Footer.tsx, HeroSlider.tsx
    ProductCard.tsx          → renders a single product
    ProductGrid.tsx          → maps an array of products into cards
    CartDrawer.tsx            → slide-in bag panel
  pages/
    Home.tsx, Collections.tsx, ProductDetail.tsx
    Contact.tsx, Checkout.tsx, OrderConfirmed.tsx
  App.tsx                   → routes
  main.tsx                  → app entry (Router + CartProvider)
```

## Adding a new product

Open `src/data/products.ts` and append an object to the `PRODUCTS` array:

```ts
{
  id: 26,
  name: 'Your New Product Name',
  category: 'Gold Jewelry', // must match a value in PRODUCT_CATEGORIES (src/types/index.ts)
  price: 50000,
  originalPrice: 60000,
  image: 'https://...',
  description: '...',
  rating: 4.8,
  reviews: 0,
  inStock: true,
  stockCount: 5,
  specs: { material: '...', weight: '...', purity: '...', certification: '...' },
},
```

That's it — no other file needs to change. The Home page spotlight and the Collections grid/filters both read from this same array automatically.

## Adding a new category

Add the label to `PRODUCT_CATEGORIES` in `src/types/index.ts`. It will automatically appear as a filter pill on the Collections page.

## Notes

- This is a **frontend-only demo**: the checkout page does not call any real payment provider, and the contact form does not send email. Both are wired up with realistic UI/UX so a backend can be dropped in later (e.g. swap the `setTimeout` in `Checkout.tsx` and `Contact.tsx` for a real API call).
- Currency formatting (`₹`) lives in `src/utils/format.ts`.
