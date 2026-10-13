# Adding Videos to AORÈN

You can upload videos to your website in two simple ways:

### Method 1: Local Files (Recommended for offline/direct files)
1. Drop your vertical `.mp4` or `.webm` video files directly into this directory (`public/videos/`):
   - Example: `public/videos/reel-fashion.mp4`
   - Example: `public/videos/reel-product.mp4`
2. Open `lib/content.ts` and set `videoUrl` for your reel item:
   ```ts
   {
     title: "My Brand Campaign",
     category: "Fashion Reel",
     duration: "0:15",
     views: "1.2M",
     thumbnail: "https://images.unsplash.com/photo-...", // or /my-thumb.jpg
     videoUrl: "/videos/reel-fashion.mp4",
   }
   ```

### Method 2: Cloud / CDN Links
1. Upload your video to any hosted storage (Cloudflare Stream, AWS S3, Supabase, Vimeo Direct MP4, Bunny.net, etc.).
2. Set the direct URL in `lib/content.ts`:
   ```ts
   {
     title: "Cloud Stream Reel",
     videoUrl: "https://your-cdn.com/videos/stream-1.mp4",
     ...
   }
   ```

### Carousel Rules
- **1 to 3 videos**: Displayed as a clean responsive grid.
- **More than 3 videos**: Automatically turns into a minimal auto-swiping reel carousel with navigation buttons, progress tracking, and pause-on-play behavior.

