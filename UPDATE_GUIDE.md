# Update Guide

This site is content-driven from `data/projects.json`.

## Add a new project
1. Create a slug (kebab-case): e.g. `my-new-project`.
2. Add media to `public/media/<slug>/`:
   - Images in PNG/JPG.
   - Videos in MP4.
3. Add optional thumbnails in `public/media/<slug>/thumbs/` or reuse the full image path.
4. Add a new entry in `data/projects.json` under `projects`.

### Required fields
- `slug`
- `title`
- `category`
- `year`
- `summary`
- `tools`
- `tags`
- `sections` (overview, build, design, results, futureWork)
- `media.images` and/or `media.videos`

### Example media object
```json
"media": {
  "images": [
    {
      "src": "/media/my-new-project/my-new-project-01.png",
      "thumb": "/media/my-new-project/thumbs/my-new-project-01.jpg",
      "alt": "Short alt text"
    }
  ],
  "videos": [
    {
      "src": "/media/my-new-project/my-new-project-video-01.mp4",
      "label": "Short label"
    }
  ]
}
```

## Update an existing project
1. Edit the project in `data/projects.json`.
2. Add/remove media files in `public/media/<slug>/`.
3. Restart `npm run dev` if needed.

## Notes
- Replace any `TODO:` placeholders with real details when available.
- If you change a slug, update the media folder name to match.
