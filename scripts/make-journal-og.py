"""Builds one 1200x630 social-share image per Journal article into public/og/j-<slug>.jpg.

Each image is the article's own hero photo, darkened at the bottom, with the topic, the title and the
Fenza wordmark in the site's ink / gold look. Run it from the repo root after adding or changing an
article or its hero photo:   python scripts/make-journal-og.py

Needs Pillow. It only writes missing or outdated files unless you pass --all.
"""
import json, os, re, sys, textwrap
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART_DIR = os.path.join(ROOT, "src", "lib", "journal-articles")
IMAGES = json.load(open(os.path.join(ROOT, "src", "lib", "journal-images.json"), encoding="utf-8"))
OUT = os.path.join(ROOT, "public", "og")
FONTS = "C:/Windows/Fonts"
GOLD, CREAM = (201, 168, 106), (245, 239, 226)
W, H = 1200, 630

def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)

def field(src, key):
    m = re.search(r'\b%s:\s*"((?:[^"\\]|\\.)*)"' % key, src)
    return m.group(1).replace('\\"', '"') if m else None

def build(slug, title, topic, hero_file):
    src = os.path.join(ROOT, "public", "images", hero_file + ".webp")
    im = ImageOps.fit(Image.open(src).convert("RGB"), (W, H), Image.LANCZOS, centering=(0.5, 0.45))
    # darken: stronger toward the bottom where the text sits
    shade = Image.new("L", (1, H))
    for y in range(H):
        t = max(0.0, (y - H * 0.18) / (H * 0.82))
        shade.putpixel((0, y), int(105 + 130 * t ** 1.15))
    shade = shade.resize((W, H))
    im = Image.composite(Image.new("RGB", (W, H), (16, 14, 10)), im, shade)
    d = ImageDraw.Draw(im)
    d.text((64, 52), "FENZA", font=font("georgiab.ttf", 30), fill=CREAM)
    d.text((184, 60), "FACADE ENGINEERING", font=font("arialbd.ttf", 15), fill=GOLD)
    f = font("georgiab.ttf", 56)
    lines = textwrap.wrap(title, 30)
    while len(lines) > 3 or max(d.textlength(l, font=f) for l in lines) > W - 128:
        f = font("georgiab.ttf", f.size - 4)
        lines = textwrap.wrap(title, 30 if f.size >= 48 else 36)
        if f.size < 36:
            break
    y = H - 64 - len(lines) * int(f.size * 1.18)
    d.text((64, y - 46), topic.upper(), font=font("arialbd.ttf", 18), fill=GOLD)
    for l in lines:
        d.text((64, y), l, font=f, fill=CREAM)
        y += int(f.size * 1.18)
    os.makedirs(OUT, exist_ok=True)
    im.save(os.path.join(OUT, "j-%s.jpg" % slug), "JPEG", quality=82, optimize=True, progressive=True)

made = 0
for fn in sorted(os.listdir(ART_DIR)):
    if not fn.endswith(".ts"):
        continue
    s = open(os.path.join(ART_DIR, fn), encoding="utf-8").read()
    slug, title, topic, hero = (field(s, k) for k in ("slug", "title", "topic", "hero"))
    target = os.path.join(OUT, "j-%s.jpg" % slug)
    hero_file = IMAGES[hero]["file"]
    src = os.path.join(ROOT, "public", "images", hero_file + ".webp")
    if "--all" not in sys.argv and os.path.exists(target) and os.path.getmtime(target) >= max(
        os.path.getmtime(src), os.path.getmtime(os.path.join(ART_DIR, fn))
    ):
        continue
    build(slug, title, topic, hero_file)
    made += 1
print("made %d share images in public/og" % made)
