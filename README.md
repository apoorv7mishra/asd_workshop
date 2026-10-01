# ASD Workshop Product API

A small Express API that stores products in `db.json`.

## Run locally

```sh
npm install
npm start
```

The server listens on port 3000 by default. Set `PORT` to use a different port.

## Endpoints

- `GET /products` lists products.
- `GET /products/:id` returns one product.
- `POST /products` creates a product with a JSON `name` and `price`.
- `PUT /products/:id` and `PATCH /products/:id` update a product.
- `DELETE /products/:id` removes a product.
