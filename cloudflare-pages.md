# Cloudflare Pages Configuration
# This file is used to configure Cloudflare Pages deployment settings

# Build Configuration
# For a static HTML site, no build command is needed
# Cloudflare Pages will serve files directly from the repository root

# Deployment Notes:
# 1. Connect your GitHub repository to Cloudflare Pages
# 2. Set the build output directory to "/" (root) or leave empty
# 3. No build command needed for static files
# 4. Framework preset: None (Static HTML)

# Optional: If you want to use a specific branch
# Production branch: main
# Preview branches: All other branches

# Environment Variables (if needed)
# Set these in the Cloudflare Pages dashboard:
# - NODE_VERSION (if using Node.js)
# - Any other custom environment variables

# For more advanced setups, you can create a wrangler.toml file
# or use Cloudflare Workers/Functions
