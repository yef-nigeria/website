This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
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

## Deployment on cPanel (Staging)

This project is deployed to a staging environment at **http://staging.yefnigeria.org/** using a custom Node.js server setup with Phusion Passenger on cPanel.

### Staging Environment Details
- **Staging URL:** [staging.yefnigeria.org](http://staging.yefnigeria.org/)
- **Application Root (SSH Path):** `/home/yefnigeria/yef-website-staging`
- **Document Root (Subdomain Path):** `/home/yefnigeria/public_html/staging` or `/home/yefnigeria/staging.yefnigeria.org`

---

### Subsequent Updates & Deployments (Workflow)

When you make changes to components, pages, or styling, deploy the updates using these steps:

#### 1. Build the Project Locally
Ensure `output: "export"` remains commented out in [next.config.js](file:///Users/mowanuolaakin-jimoh/Desktop/work/yef-website/next.config.js). Then run:
```bash
npm run build
```

#### 2. Create the Deployment Zip Locally
Zip the `.next` directory while excluding the heavy cache folder to keep it lightweight (~3MB):
```bash
zip -r next-folder.zip .next -x ".next/cache/*"
```

#### 3. Upload the Zip File to the Server
From your local terminal, upload `next-folder.zip` to the staging application root directory:
```bash
scp next-folder.zip yefnigeria@<your-server-ip>:/home/yefnigeria/yef-website-staging/
```
*(Replace `<your-server-ip>` with the actual server IP address).*

#### 4. Extract on the Server (via SSH)
In your server SSH terminal, navigate to the application root and run:
```bash
# Delete the old build
rm -rf .next

# Unzip the new build
unzip next-folder.zip

# Clean up the zip file
rm next-folder.zip
```

#### 5. Restart the Application
Tell Phusion Passenger to reload the website by updating the restart file:
```bash
touch tmp/restart.txt
```

---

### Key Notes:
1. **Adding npm Packages:** If you install new packages locally, upload the updated `package.json` to the server, activate the virtual environment, and run `npm install --production`.
2. **Adding Static Assets:** If you add assets to the `public/` folder, upload them directly to `/home/yefnigeria/yef-website-staging/public/`.

