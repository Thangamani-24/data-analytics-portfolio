// Builds responsive, original data-analytics artwork and the portfolio social preview.
// No third-party or previous-owner portrait images are used.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });
const source = `${OUT}/analytics-portrait.svg`;

for (const w of [1100, 720, 420]) {
  await sharp(source).resize({ width: w }).webp({ quality: 88, alphaQuality: 92 }).toFile(`${OUT}/portrait-${w}.webp`);
}

const art = await sharp(source).resize({ height: 590 }).png().toBuffer();
const title = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="g" cx="78%" cy="45%" r="55%"><stop offset="0" stop-color="#e5132b" stop-opacity=".32"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="#07070a"/><rect width="1200" height="630" fill="url(#g)"/>
  <text x="68" y="264" font-family="Arial,Helvetica,sans-serif" font-size="80" font-weight="700" letter-spacing="1" fill="#f4f1ec">THANGAMANI K</text>
  <text x="74" y="326" font-family="Arial,Helvetica,sans-serif" font-size="28" font-weight="700" letter-spacing="9" fill="#ff3d5a">THE DATA SERIES</text>
  <text x="74" y="390" font-family="Arial,Helvetica,sans-serif" font-size="19" font-weight="600" letter-spacing="2" fill="#a7a6ad">DATA ANALYST • SQL • PYTHON • BI</text>
  <text x="74" y="428" font-family="Arial,Helvetica,sans-serif" font-size="17" fill="#b9b7c2">E-commerce analytics, experimentation & CRO</text>
</svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    { input: title },
    { input: art, left: 770, top: 26 },
  ])
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('Analytics artwork and social image built.');
