# 公開チェックリスト

このフォークを `ATEZJP` 名義で公開する際のチェックリストです。

## 現在の状態

- コミット済み
- 日本語ローカライズ済み
- 日本語ドキュメント追加済み
- VSIX 作成済み: `atezjp-sftp-1.16.3.vsix`
- ブランチ状態: `develop` が `origin/develop` より 1 コミット先行

## GitHub Release 前チェック

- `git status` が意図した状態であることを確認
- `atezjp-sftp-1.16.3.vsix` が最新ビルドであることを確認
- `RELEASE_NOTES_ja.md` の内容を最終確認
- 必要なら英語版のリリースノートも用意
- リリース対象コミットを push

## GitHub Release の推奨手順

### 1. 変更を push

```sh
git push origin develop
```

### 2. タグを作成

タグ名の例:

```sh
git tag -a v1.16.3-atezjp.1 -m "ATEZJP Japanese localization release"
git push origin v1.16.3-atezjp.1
```

### 3. GitHub Release を作成

Web UI でも `gh` でも構いません。`gh` を使う場合の例:

```sh
gh release create v1.16.3-atezjp.1 \
  "atezjp-sftp-1.16.3.vsix" \
  --title "ATEZJP SFTP v1.16.3" \
  --notes-file "RELEASE_NOTES_ja.md"
```

## Marketplace 公開前チェック

- VS Code Marketplace に `ATEZJP` publisher を作成済み
- `vsce login ATEZJP` で認証済み
- `publisher` が `package.json` で `ATEZJP` になっている
- README 内の Marketplace 文言を公開後の URL に差し替える
- アイコン / 表示名 / 説明文が公開用途として問題ない
- 既存拡張と混同しない説明になっている
- ライセンスとクレジット表記が維持されている

## Marketplace 公開コマンド例

### VSIX を作り直す場合

```sh
npx @vscode/vsce package --out "atezjp-sftp-1.16.3.vsix"
```

### Marketplace に公開する場合

```sh
npx @vscode/vsce publish
```

### まずはプレリリース用に VSIX 配布だけ行う場合

- GitHub Releases に VSIX を添付
- README に VSIX からのインストール手順を案内
- Marketplace 公開後に README の案内を更新

## 公開後にやること

- README の Marketplace リンクを `ATEZJP` の公開ページへ変更
- GitHub Releases に公開手順や更新履歴を継続追加
- 必要なら `CHANGELOG.ja.md` を運用継続
- Issue テンプレートや bug report 内リンクをフォーク先へ寄せる
