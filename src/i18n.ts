import * as vscode from 'vscode';

const bundleEn = require('./l10n/bundle.json') as { [key: string]: string };
const bundleJa = require('./l10n/bundle.ja.json') as { [key: string]: string };

type Bundle = { [key: string]: string };

const bundles: { [locale: string]: Bundle } = {
  en: bundleEn,
  ja: bundleJa,
};

function getBundle(): Bundle {
  const language = vscode.env.language.toLowerCase();
  const lang = language.split('-')[0];
  return bundles[lang] || bundles.en;
}

let cachedBundle: Bundle | null = null;

function bundle(): Bundle {
  if (!cachedBundle) {
    cachedBundle = getBundle();
  }
  return cachedBundle;
}

/**
 * Get localized string for key. Falls back to fallback or key if not found.
 */
export function localize(key: string, fallback?: string): string {
  const b = bundle();
  const value = b[key];
  if (value !== undefined) {
    return value;
  }
  return fallback !== undefined ? fallback : key;
}

/**
 * Get localized string with placeholder replacement. Use {0}, {1}, ... in bundle for args.
 */
export function localizeWithArgs(key: string, ...args: string[]): string {
  let s = localize(key, key);
  args.forEach((arg, i) => {
    s = s.replace(new RegExp('\\{' + i + '\\}', 'g'), arg);
  });
  return s;
}
