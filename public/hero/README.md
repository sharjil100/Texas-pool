# Hero video assets

Drop the following files into this folder. The Hero component expects these exact filenames.

## Required

| File | Purpose |
|---|---|
| `hero.mp4` | Primary video, H.264 in MP4 — broadest browser support |
| `poster.jpg` | First-frame poster, painted instantly while the video buffers |

## Recommended (optional)

| File | Purpose |
|---|---|
| `hero.webm` | VP9 or AV1 in WebM — ~30–40% smaller than MP4. Browsers that support it pick this first. |
| `hero-portrait.mp4` | A 9:16 cut for portrait mobile. Loaded automatically on phones in portrait orientation. |

## Encoding spec

| Setting | Value |
|---|---|
| Master resolution | 2560×1440 |
| Web delivery | 1920×1080 (16:9), plus 1080×1920 portrait if shipping mobile cut |
| Frame rate | 24 or 30 fps |
| Bitrate | 5 Mbps target, 8 Mbps max (2-pass VBR) |
| Length | 8–15 seconds, seamlessly looping (first frame = last frame) |
| Audio | None — strip it. Autoplay requires `muted` anyway. |
| Color | Rec.709, sRGB |
| File size target | ≤ 3–4 MB per file |

## Poster spec

| Setting | Value |
|---|---|
| Format | JPEG, q85 |
| Resolution | 2400×1350 |
| Source | Export of the first frame of `hero.mp4` |

## Tone

Slow ambient motion reads as luxury — rippling water, slow drone push-in, sun
flares on tile, surface caustics. Avoid fast cuts; this is architecture, not
an ad.

## Quick ffmpeg recipes

Re-encode an over-large MP4 to a web-ready 1080p H.264:
```
ffmpeg -i source.mp4 -an -vf "scale=1920:-2" -c:v libx264 -preset slow -crf 22 -movflags +faststart hero.mp4
```

Make a smaller WebM alongside it:
```
ffmpeg -i source.mp4 -an -vf "scale=1920:-2" -c:v libvpx-vp9 -b:v 0 -crf 32 hero.webm
```

Generate a poster from the first frame:
```
ffmpeg -i hero.mp4 -frames:v 1 -q:v 2 poster.jpg
```
