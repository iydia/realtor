import 'dotenv/config';
const env = (name, fallback = '') => process.env[name] || fallback;

export const config = {
  firstName: env('FIRST_NAME', 'First'),
  lastName: env('LAST_NAME', 'Last'),
  altName: env('ALT_NAME'),
  email: env('EMAIL', 'someone@example.com'),
  phone: env('PHONE', '+1 416 555 0134'),
  cityProvinceCountry: env('CITY_PROVINCE_COUNTRY', 'City, Province, Country'),
  officeName: env('OFFICE_NAME', 'Office Name'),
  officePhone: env('OFFICE_PHONE', '+1 416 555 0100'),
  officeAddress: env('OFFICE_ADDRESS', '100 Example Street, Suite 200, City, Province, Country'),
  officeWebsite: env('OFFICE_WEBSITE', 'https://example.com'),
  industrySinceText: env('INDUSTRY_SINCE_TEXT', '2015'),
  industryLicenseText: env('INDUSTRY_LICENSE_TEXT', 'Licensed real estate professional'),
  industryAwardsText: env('INDUSTRY_AWARDS_TEXT'),
  industryAwardsTextAlt: env('INDUSTRY_AWARDS_TEXT_ALT'),
};
