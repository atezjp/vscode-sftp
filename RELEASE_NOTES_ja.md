# atezjp SFTP v1.16.5 リリースノート

このリリースは `atezjp` publisher への正式切り替えと、現在のソース状態のリリース整合を主な目的としています。

## 変更概要

- `version` を `1.16.5` に更新
- `publisher` を小文字の `atezjp` として正式化
- `README.md` / `README.ja.md` の Marketplace リンクと保守者表記を `atezjp` に統一
- `onCommand:sftp.config` の activation event 削除を現在のソース状態として反映
- `CHANGELOG.md` / `CHANGELOG.ja.md` / 公開チェックリストを更新

## 動作確認

- `npm run compile` 成功
- `npm test` 成功
  - 42 tests passed

## 注意

- 著作権表示とライセンス表記は元のまま維持しています
- このフォークは `atezjp` が保守しています
- Marketplace 公開時は VS Code Marketplace の審査反映に数分かかる場合があります
