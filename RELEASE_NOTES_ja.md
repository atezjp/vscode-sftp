# atezjp SFTP v1.16.7 リリースノート

このリリースは、日本語の導入ガイドを追加し、インストール後もドキュメントを辿りやすくすることを主な目的としています。

## 変更概要

- `version` を `1.16.7` に更新
- `docs/getting_started.ja.md` として日本語の「かんたん使い方ガイド」を追加
- `README.md` / `README.ja.md` / `docs/home.ja.md` から新ガイドへ辿れるように更新
- `.vscodeignore` を見直し、日本語ドキュメントを VSIX に含めるよう改善

## 動作確認

- `npm run compile` 成功
- `npm test` 成功
  - 42 tests passed

## 注意

- 著作権表示とライセンス表記は元のまま維持しています
- このフォークは `atezjp` が保守しています
- Marketplace 公開時は VS Code Marketplace の審査反映に数分かかる場合があります
