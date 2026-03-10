# atezjp SFTP v1.16.10 リリースノート

このリリースは、SSH 切断時の後始末を安定させつつ、`password` 設定の扱いを分かりやすくすることを主な目的としています。

## 変更概要

- `version` を `1.16.10` に更新
- SSH 切断イベントのハンドラ登録を修正し、`close` / `end` が重なっても終了処理が多重実行されにくいよう改善
- 設定バリデーションで `password: ""` を許可
- `password` を省略した場合と `""` を明示した場合の違いが分かるよう、README / ガイド / Web FAQ を補足

## 動作確認

- `npm run compile` 成功
- `npm test` 成功
  - 42 tests passed
- `npx @vscode/vsce package` 成功

## 注意

- 著作権表示とライセンス表記は元のまま維持しています
- このフォークは `atezjp` が保守しています
- Marketplace 公開時は VS Code Marketplace の審査反映に数分かかる場合があります
