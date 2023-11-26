

# WebInsights APP layer

## .env file
First, create an .env file in the root of your project:

```
COOKIE_SECRET = "cookie secret"
KEYCLOAK_DOMAIN = "keycloak domain"
KEYCLOAK_CLIENT_SECRET = "your secret"
```

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.
