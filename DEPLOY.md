# LooKit - Deploy Now

## Setup (30 minutes)

### 1. Create Supabase Project
- Go to supabase.com
- Create project
- In SQL Editor, paste entire `database/schema.sql`
- Run it
- Copy API keys from Settings > API

### 2. Create Paystack Account
- Go to paystack.com
- Create account
- Get test keys from Settings > API Keys

### 3. Push to GitHub
```bash
git init
git add .
git commit -m "LooKit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lookit.git
git push -u origin main
```

### 4. Deploy on Vercel
1. Go to vercel.com/new
2. Import from GitHub
3. Select lookit repo
4. Add these 6 environment variables:
   - NEXT_PUBLIC_SUPABASE_URL (from Supabase)
   - NEXT_PUBLIC_SUPABASE_ANON_KEY (from Supabase)
   - SUPABASE_SERVICE_ROLE_KEY (from Supabase)
   - NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY (from Paystack)
   - PAYSTACK_SECRET_KEY (from Paystack)
   - NEXT_PUBLIC_APP_URL (your Vercel URL)

5. Click Deploy

## Done ✅

Your app will be live in 2-3 minutes at your Vercel URL.
