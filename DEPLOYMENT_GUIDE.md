# Netlify Deployment Guide for this Vite Project

It appears your Netlify deployment is failing because the site is configured to be a Next.js project, but it is actually a Vite project.

Please follow these steps to correct the build settings in your Netlify dashboard.

## Instructions to Fix Deployment

1.  **Log in to Netlify:** Go to [app.netlify.com](https://app.netlify.com) and log in to your account.
2.  **Select Your Site:** Navigate to the site that is failing to deploy.
3.  **Go to Build & Deploy Settings:**
    *   Click on **Site settings** (or **Site configuration**).
    *   In the sidebar, go to **Build & deploy**.
    *   Under the "Build settings" section, click **Edit settings**.
4.  **Update Build Settings:**
    *   **Build command:** Set this to `npm run build` (or `vite build`). `npm run build` is standard as it will use the script from `package.json`.
    *   **Publish directory:** Set this to `dist`. Vite projects build their output to a `dist` directory by default.
    *   **Framework / Package detector:** If there is an option to set or override the framework, make sure it is **not** set to Next.js. You can often set it to "None" or "Vite".
5.  **Save and Redeploy:**
    *   Click **Save** to apply the new settings.
    *   Go to the **Deploys** tab.
    *   Click the **Trigger deploy** dropdown and select **Deploy site**.

This should resolve the deployment issue. If you continue to have problems, please check the build logs in Netlify for more specific errors.
