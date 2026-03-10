# かんたん使い方ガイド

このページは、`SFTP Japanese` をはじめて使う人向けの最短ガイドです。  
VS Code だけでなく、Cursor / Antigravity でも同じ流れで使えます。

## 1. 事前に準備するもの

接続前に、次の情報を用意してください。

- サーバーのホスト名または IP アドレス
- 接続方式: `sftp` または `ftp`
- ポート番号
- ユーザー名
- パスワード、または秘密鍵
- リモート側の作業ディレクトリ

よくある例:

- SFTP: `protocol: "sftp"`, `port: 22`
- FTP: `protocol: "ftp"`, `port: 21`

## 2. まずはローカルフォルダを開く

1. 同期したいプロジェクト用のフォルダを開きます。
2. リモート側のファイルをこれから取得したい場合は、空のフォルダから始めるのがおすすめです。

## 3. 設定ファイルを作る

コマンドパレットを開いて `SFTP: Config` を実行します。

設定ファイルは、使っているエディタに関係なく共通で次の場所に作成・利用できます。

- 共通: `.vscode/sftp.json`

既存ファイルがあれば、それを自動的に開きます。  
見つからない場合は、新しい設定ファイルを作成します。  
過去バージョンで作成した `.cursor/sftp.json` や `.antigravity/sftp.json` も互換用に読み込めますが、今後は `.vscode/sftp.json` を使うのがおすすめです。

## 4. 最小構成を書き込む

最初は次のような最小構成で十分です。

```json
{
  "name": "My Server",
  "host": "example.com",
  "protocol": "sftp",
  "port": 22,
  "username": "your-user",
  "remotePath": "/var/www/project",
  "uploadOnSave": false
}
```

パスワード認証を使うなら、必要に応じて `password` を追加します。

```json
{
  "host": "example.com",
  "protocol": "sftp",
  "port": 22,
  "username": "your-user",
  "password": "your-password",
  "remotePath": "/var/www/project"
}
```

注意:

- `remotePath` は、リモート側で同期したいフォルダです
- `password` は省略できます。省略すると接続時に入力を求められます
- 鍵認証を使う場合は `privateKeyPath` を利用します

## 5. 最初のおすすめ操作

### リモートの内容を先に持ってきたい場合

空フォルダで始めたなら、まず `SFTP: Download Project` を実行するのがおすすめです。

これにより:

- `remotePath` で指定したフォルダ全体をローカルへ取得
- ローカルを編集の起点にできる
- 上書き事故を減らせる

### ローカルの内容を先に送る場合

すでにローカルに完成済みのファイルがあるなら、`SFTP: Upload Project` を使います。

## 6. 日常的な使い方

よく使う流れは次の 3 パターンです。

### 保存のたびに自動アップロードしたい

`sftp.json` に次を追加します。

```json
{
  "uploadOnSave": true
}
```

これで、保存時に現在のファイルが自動アップロードされます。

### 今開いているファイルだけ手動で送りたい

`SFTP: Upload Active File` を実行します。

### リモートの最新版を取り込みたい

`SFTP: Download Active File` または `SFTP: Download Project` を使います。

## 7. Remote Explorer の使い方

サイドバーの `SFTP` ビューから、リモートファイルを参照できます。

よく使う操作:

- リモートファイルを一覧表示
- リモートファイルを開く
- ローカルにダウンロードして編集
- フォルダ単位でアップロード / ダウンロード
- リモート上でファイル / フォルダを作成、削除

もしサイドバーに表示されない場合でも、コマンドパレットから主要コマンドは実行できます。

## 8. よく使うコマンド

- `SFTP: Config`
  設定ファイルを作成または開く
- `SFTP: Download Project`
  リモート全体をローカルへ取得
- `SFTP: Upload Project`
  ローカル全体をリモートへ送信
- `SFTP: Upload Active File`
  現在のファイルだけアップロード
- `SFTP: Download Active File`
  現在のファイルに対応するリモート版を取得
- `SFTP: Diff`
  ローカルとリモートの差分を確認
- `SFTP: Sync Local -> Remote`
  ローカル基準で同期
- `SFTP: Sync Remote -> Local`
  リモート基準で同期

## 9. まず覚えておくと安全なポイント

- 初回は空フォルダで `Download Project` から始めると安全です
- いきなり `uploadOnSave: true` にせず、最初は手動アップロードで確認すると安心です
- 本番環境に直接つなぐ場合は、最初に `Diff` で差分確認を挟むのがおすすめです
- 除外したいファイルがある場合は `ignore` を設定します

例:

```json
{
  "ignore": [
    ".vscode",
    ".cursor",
    ".antigravity",
    ".git",
    "node_modules"
  ]
}
```

## 10. うまく動かないとき

まずは次を確認してください。

- `host`, `protocol`, `port`, `username`, `remotePath` が正しいか
- 設定ファイルの場所が正しいか
- 出力パネルの `SFTP` ログにエラーが出ていないか
- Git 連携コマンドを使っている場合は、エディタ側の Git 機能が有効か

詳しくは次も参照してください。

- [設定](./setting.ja.md)
- [コマンド](./commands.ja.md)
- [FAQ](./../FAQ.ja.md)
