# atezjp SFTP v1.16.6 リリースノート

このリリースは Cursor / Antigravity を含む VS Code 互換エディタでの利用しやすさを高めることを主な目的としています。

## 変更概要

- `version` を `1.16.6` に更新
- `.vscode/sftp.json` に加えて `.cursor/sftp.json` / `.antigravity/sftp.json` / `sftp.json` も設定候補として探索
- `onStartupFinished` と `onCommand:sftp.config` を activation 条件に追加
- リモート表示用 URI scheme を `sftp-remote` に変更し、互換エディタでの競合リスクを軽減
- Git 拡張や内部ワークベンチコマンドが存在しない場合のフォールバックを追加
- README に Cursor / Antigravity 向けの導入案内を追記

## 動作確認

- `npm run compile` 成功
- `npm test` 成功
  - 42 tests passed

## 注意

- 著作権表示とライセンス表記は元のまま維持しています
- このフォークは `atezjp` が保守しています
- Marketplace 公開時は VS Code Marketplace の審査反映に数分かかる場合があります
