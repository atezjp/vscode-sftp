# atezjp SFTP v1.16.9 リリースノート

このリリースは、初心者向け公開ページの追加と、Cursor での拡張起動まわりの安定化を主な目的としています。

## 変更概要

- `version` を `1.16.9` に更新
- 別ドメイン公開用の初心者向け HTML を `web/index.html` として追加
- VS Code / Cursor / Antigravity で `.vscode/sftp.json` を共通利用する形に整理
- `ssh2` を拡張へ同梱し、Cursor で `sftp.config` が出ない原因だった起動失敗を修正

## 動作確認

- `npm run compile` 成功
- `npm test` 成功
  - 42 tests passed

## 注意

- 著作権表示とライセンス表記は元のまま維持しています
- このフォークは `atezjp` が保守しています
- Marketplace 公開時は VS Code Marketplace の審査反映に数分かかる場合があります
