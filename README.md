# Joe Outside

This site is built with **Next.js** using the App Router and styled with **Tailwind CSS**. It provides outdoor guides, gear reviews and other resources.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create an `.env.local` file and provide the following environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
3. Run the development server:
   ```bash
   npm run dev
   ```

## Building and deploying on Netlify

The project includes a `netlify.toml` configuration that uses the official Next.js Netlify plugin. To create a production build locally run:

```bash
npm run build
```

Netlify will run this command automatically and serve the contents of the `.next` directory. Push your repository to Netlify or connect it via the Netlify dashboard to deploy.

