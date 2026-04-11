# Personal Website

This is the source code for my personal website ([taranglasson.com](https://www.taranglasson.com/)), built with modern web technologies. It replaces my previous Squarespace-hosted website to save costs and improve customisability. It is deployed and hosted for free using **Vercel** with **Cloudflare** for domain & DNS management.

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router) with MDX
- **Styling:** Tailwind CSS
- **Hosting & Deployment:** Vercel
- **Domain & DNS Management:** Cloudflare
- **Version Control:** Git & GitHub

## 📂 Project Structure

```
/website
├── /app              # Next.js app router pages
├── /components       # Reusable UI components
├── /pages            # Static pages
├── /public           # Static assets
├── /styles          # Global styles (Tailwind CSS)
├── tailwind.config.ts # Tailwind configuration
├── next.config.js    # Next.js configuration
├── package.json      # Dependencies and scripts
└── README.md         # Project documentation
```

## 🛠️ Setup & Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/glastara/personal-website.git
cd your-repo
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Run the local development server
```sh
npm run dev
```
- The website will be available at `http://localhost:3000/`

## 🔄 Updating the Website

### Pulling the latest changes from GitHub
```sh
git pull origin main
```

### Committing and pushing changes
1. Stage your changes:
   ```sh
   git add .
   ```
2. Commit with a message:
   ```sh
   git commit -m "Your commit message here"
   ```
3. Push to GitHub:
   ```sh
   git push origin main
   ```

## 🌍 Hosting & Deployment

- The website is hosted and deployed via **Vercel**. **Vercel** handles both the deployment of your site and the automatic updates when changes are pushed to GitHub.
- The domain is managed via **Cloudflare**. **Cloudflare** handles the DNS configuration, including routing traffic to Vercel.
- Additional domains are redirected to `taranglasson.com`.

## 🔥 Features & Customizations
- **Typography:** Uses **Cal Sans** font for a clean and modern look.
- **Dark Mode Support** (optional if implemented)
- **SEO Optimized** with Next.js best practices

## 🛑 Disabling the Old Squarespace Website
To fully migrate, I **transferred my domain from Squarespace to Cloudflare**.

## 🎯 Possible Improvements
- Enhancing animations and hover effects
- Adding interactive elements for better engagement
- Improving blog post formatting with MDX enhancements (if relevant)

---

### 📌 License
This project is licensed under the **MIT License** – feel free to fork, modify, and use it! 🚀

