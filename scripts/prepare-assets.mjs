import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicGeneratedDir = path.join(repoRoot, 'public', 'generated');
const manifestPath = path.join(repoRoot, 'src', 'generated', 'assets-manifest.json');

function resolveAsset(envVar, destBaseName) {
  const value = process.env[envVar];
  if (!value) return null;

  const srcPath = path.resolve(repoRoot, value);
  if (!fs.existsSync(srcPath) || !fs.statSync(srcPath).isFile()) return null;

  fs.mkdirSync(publicGeneratedDir, { recursive: true });
  const destName = `${destBaseName}${path.extname(srcPath)}`;
  fs.copyFileSync(srcPath, path.join(publicGeneratedDir, destName));
  return `/generated/${destName}`;
}

const manifest = {
  headshot: resolveAsset('PATH_HEADSHOT', 'headshot'),
  officeLogo: resolveAsset('PATH_OFFICE_LOGO', 'office-logo'),
};

fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
