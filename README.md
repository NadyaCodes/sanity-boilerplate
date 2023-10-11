This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Sanity Boilerplate Stuff

Helpful tutorial is here: [https://www.youtube.com/watch?v=OcTPaUfay5I](https://www.youtube.com/watch?v=OcTPaUfay5I)

1. Create a Sanity project in terminal

- npm create sanity@latest

2. Add url to sanity

- Go to [https://manage.sanity.io/](https://manage.sanity.io/) and select that project

- Go to API and add CORS origins

- Add url and 'allow credentials'

3. Update sanity.config.ts with correct projectID and other items

4. To add schemas

- add a new schema file (sanity/schemas)
- add schema file to index.ts

5. Data grabbing functions

- in sanity/sanity-utils.ts
- uses groq

6. Create defaults for About Page and Contact Page schemas

- just in case everything is deleted by accident

7. To find embed links

- Youtube should be formatted like this: https://www.youtube.com/embed/E53nxfAVJxU?si=ArP-xebpW7s6isGl
- play video
- go to share
- copy snippet from embed link
- soundcloud is annoying to find...it's the src link in the iFrame

8. Make create icon disappear in studio where necessary

- in this one, it's the about page

- #about-about-0 > div > div.sc-fHjqPf.jMLRGX.sc-hdFWlR.cJSNcO > div > div.sc-jXbUNg.jHZIZE.sc-jlZhew.eqarxG.sc-biptUy.cYvOaX > div > div > a {
  display: none
  }

  9. Make a default for cases where they might accidentally delete the one that can't be recreated

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
