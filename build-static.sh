#!/bin/bash
echo "Building static site for deployment..."
npm run build
echo "Static site built successfully!"
echo "Files are ready in dist/public/ directory"
echo "You can now deploy these files to Netlify, GitHub Pages, or any static hosting service"