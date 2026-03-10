# atezjp SFTP v1.16.8 リリースノート

このリリースは、Cursor / Antigravity で `config` が効きにくい問題を修正することを主な目的としています。

## 変更概要

- `version` を `1.16.8` に更新
- Cursor / Antigravity では、使っているエディタ向けの `sftp.json` を優先して探索するよう修正
- 対応済みの設定パスだけを設定ファイルとして扱うよう見直し
- 設定ファイル保存後の再読み込みが安定して反映されるよう改善

## 動作確認

- `npm run compile` 成功
- `npm test` 成功
  - 42 tests passed

## 注意

- 著作権表示とライセンス表記は元のまま維持しています
- このフォークは `atezjp` が保守しています
- Marketplace 公開時は VS Code Marketplace の審査反映に数分かかる場合があります
