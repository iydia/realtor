import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';

// Resolved against the current working directory (where `npm run dev`/`build` is
// invoked from) rather than `import.meta.url`: Astro's build relocates this module
// into `dist/` as part of SSR bundling, which would otherwise point the manifest
// path at the build output instead of the source tree.
const repoRoot = process.cwd();
const manifestPath = path.join(repoRoot, 'src', 'generated', 'assets-manifest.json');

function readManifest() {
  try {
    return JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  } catch {
    return { headshot: null, officeLogo: null };
  }
}

const manifest = readManifest();

const env = (name, fallback = '') => process.env[name] || fallback;

export const config = {
  firstName: env('FIRST_NAME', 'First'),
  lastName: env('LAST_NAME', 'Last'),
  altName: env('ALT_NAME'),
  email: env('EMAIL', 'someone@example.com'),
  phone: env('PHONE', '+1 416 555 0134'),
  cityProvinceCountry: env('CITY_PROVINCE_COUNTRY', 'City, Province, Country'),
  headshotSrc: manifest.headshot,
  officeName: env('OFFICE_NAME', 'Office Name'),
  officePhone: env('OFFICE_PHONE', '+1 416 555 0100'),
  officeAddress: env('OFFICE_ADDRESS', '100 Example Street, Suite 200, City, Province, Country'),
  officeWebsite: env('OFFICE_WEBSITE', 'https://example.com'),
  officeLogoSrc: manifest.officeLogo,
  industrySinceYear: env('INDUSTRY_SINCE_YEAR', '2015'),
  industryLicenseText: env('INDUSTRY_LICENSE_TEXT', 'Licensed real estate professional'),
  industryAwardsText: env('INDUSTRY_AWARDS_TEXT', 'Awards Text'),
  industryAwardsTextAlt: env('INDUSTRY_AWARDS_TEXT_ALT'),
};
