# ATEZJP SFTP v1.16.3 リリースノート

このリリースは `vscode-sftp` フォークの日本語化と、公開向けの整備を主な目的としています。

## 変更概要

- VS Code 拡張の日本語表示に対応
  - `package.nls.ja.json` を追加
  - コマンド名、設定説明、ビュー名などを日本語化
- 拡張内部メッセージの日本語化
  - `src/i18n.ts` を追加
  - ダイアログ、エラー、プレースホルダー、ステータスバー文言をローカライズ
- ドキュメントの日本語化
  - `README.ja.md`
  - `FAQ.ja.md`
  - `CONTRIBUTING.ja.md`
  - `CHANGELOG.ja.md`
  - `docs/*.ja.md`
- 配布メタデータを `ATEZJP` フォーク向けに調整
  - `publisher`
  - `repository`
  - `homepage`
  - `bugs`
- 公開前の整備
  - VSIX 生成設定を見直し
  - 不要な `node_modules` を VSIX から除外

## 動作確認

- `npm run compile` 成功
- `npm test` 成功
  - 42 tests passed

## 互換修正

- Jest 28+ 互換のため `test/preprocessor.js` を修正
- 時差付き同期判定のテストが通るよう、更新判定を秒単位比較に調整
- テスト用 `fs` モックを Node の新しい挙動に合わせて修正

## 注意

- 著作権表示とライセンス表記は元のまま維持しています
- このフォークは `ATEZJP` が保守しています
- Marketplace 公開前は VSIX 配布を前提としています
