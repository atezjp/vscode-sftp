# atezjp SFTP v1.16.11 リリースノート

このリリースは、README と Marketplace 説明文の見せ方を整理し、対応エディタや共通設定の利点が最初に伝わるようにすることを主な目的としています。

## 変更概要

- `version` を `1.16.11` に更新
- `README.md` / `README.ja.md` 冒頭に、現行公開版の改善点が伝わる短い案内を追加
- 不要になった issue / pull request 案内文を README から削除
- Marketplace の短い説明文を更新し、VS Code / Cursor / Antigravity で `.vscode/sftp.json` を共通利用できる点を明確化

## 動作確認

- `npm run compile` 成功
- `npm test` 成功
  - 42 tests passed
- `npx @vscode/vsce package` 成功

## 注意

- 著作権表示とライセンス表記は元のまま維持しています
- このフォークは `atezjp` が保守しています
- Marketplace 公開時は VS Code Marketplace の審査反映に数分かかる場合があります
