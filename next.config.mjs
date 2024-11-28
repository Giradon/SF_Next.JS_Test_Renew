/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SUPABASEURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        SUPABASEKEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
};

export default nextConfig;
