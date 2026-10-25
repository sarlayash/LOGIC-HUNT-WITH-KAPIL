import math
import os
from PIL import Image, ImageDraw, ImageFont

ASSETS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'assets')
os.makedirs(ASSETS_DIR, exist_ok=True)

def create_icon(size):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    center = size / 2
    radius = size * 0.46

    # Base rounded background with dark space gradient simulation
    for r in range(int(radius), 0, -1):
        ratio = r / radius
        # Interpolate between deep purple #120e30 and navy #060414
        red = int(18 * ratio + 6 * (1 - ratio))
        green = int(14 * ratio + 4 * (1 - ratio))
        blue = int(48 * ratio + 20 * (1 - ratio))
        draw.ellipse([center - r, center - r, center + r, center + r], fill=(red, green, blue, 255))

    # Outer Neon Cyan Ring
    ring_width = max(3, int(size * 0.025))
    draw.ellipse(
        [center - radius, center - radius, center + radius, center + radius],
        outline=(0, 242, 254, 255),
        width=ring_width
    )

    # Inner Gold Ring
    inner_r = radius * 0.88
    draw.ellipse(
        [center - inner_r, center - inner_r, center + inner_r, center + inner_r],
        outline=(255, 215, 0, 200),
        width=max(1, int(size * 0.012))
    )

    # Central Brain / Gem Cyber Shape
    s = size / 512.0
    # Central Polygon / Node Circuit
    poly_points = [
        (center, center - 130 * s),
        (center + 120 * s, center - 40 * s),
        (center + 90 * s, center + 90 * s),
        (center - 90 * s, center + 90 * s),
        (center - 120 * s, center - 40 * s)
    ]
    draw.polygon(poly_points, fill=(24, 18, 65, 255), outline=(0, 242, 254, 255))

    # Draw circuit connections
    draw.line([(center, center - 130 * s), (center, center + 90 * s)], fill=(255, 0, 127, 230), width=max(2, int(4 * s)))
    draw.line([(center - 120 * s, center - 40 * s), (center + 120 * s, center - 40 * s)], fill=(255, 215, 0, 230), width=max(2, int(4 * s)))

    # Node dots
    for pt in poly_points:
        nr = 10 * s
        draw.ellipse([pt[0] - nr, pt[1] - nr, pt[0] + nr, pt[1] + nr], fill=(0, 242, 254, 255), outline=(255, 255, 255, 255))

    # Center glowing core
    core_r = 26 * s
    draw.ellipse([center - core_r, center - core_r, center + core_r, center + core_r], fill=(255, 0, 127, 255), outline=(255, 215, 0, 255), width=max(2, int(3 * s)))

    return img

# Generate Icons
icon_512 = create_icon(512)
icon_512.save(os.path.join(ASSETS_DIR, 'icon-512.png'), 'PNG')

icon_192 = create_icon(192)
icon_192.save(os.path.join(ASSETS_DIR, 'icon-192.png'), 'PNG')

icon_apple = create_icon(180)
icon_apple.save(os.path.join(ASSETS_DIR, 'apple-touch-icon.png'), 'PNG')

icon_fav = create_icon(64)
icon_fav.save(os.path.join(ASSETS_DIR, 'favicon.png'), 'PNG')

print("All PWA icons successfully generated in assets/!")
