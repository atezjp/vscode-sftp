# VS Code 用 SFTP 同期拡張機能

このフォークは `ATEZJP` がメンテナンスしています。<br>
元の著作物は [@Natizyskunk](https://github.com/Natizyskunk/) および過去の貢献者によるものです。

[@Natizyskunk](https://github.com/Natizyskunk/) による新規メンテナンス・更新版 😀 <br>
（メンテ終了した [liximomo の SFTP プラグイン](https://github.com/liximomo/vscode-sftp.git) のフォークです）

- このフォークのリポジトリ: https://github.com/atezjp/vscode-sftp <br>
- VSIX リリース: https://github.com/atezjp/vscode-sftp/releases/
- 元の Marketplace ページ: https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp

✳ このフォークへの issue や pull request は歓迎です。投稿時は、このフォークの [テンプレート](https://github.com/atezjp/vscode-sftp/issues/new/choose) を利用してください。

## ℹ お知らせ - 2025/03/13
できる限りこの拡張機能を最新の状態に保ち、多くの新機能を追加してきました。残念ながら、ここ1年半ほどは個人的な事情でプロジェクトに取り組めず、今後いつまた時間を割けるか不透明な状況です。そのため、現時点では [v1.16.3](https://github.com/Natizyskunk/vscode-sftp/releases/tag/v1.16.3) を最新の公式安定版としてご利用ください。

## ℹ お知らせ - 2023/06/23
[@liximomo](https://github.com/liximomo) が VSCode マーケットプレース上で自リポジトリを非推奨とし、本リポジトリを本流として指定したため、SFTP 拡張機能のメインリポジトリはここになりました。
他にもフォークが存在します。お気軽にお試しください。

バグ修正や新機能の追加など多くの作業が行われ、約2年間で 50 以上のアップデートがリリースされ、安定性と改善が重ねられてきました。😎

約3年間、多くの修正と 50 以上の新リリースによる改善・安定化、および新機能の追加に取り組んできました。

---

VSCode-SFTP は、ローカルディレクトリ内でファイルの追加・編集・削除を行い、FTP や SSH などのさまざまな転送プロトコルでリモートサーバーのディレクトリと同期できます。最小限の設定で始められ、細かい設定も豊富に用意されています。使い慣れたエディタと環境で開発でき、強力かつ高速に動作し、開発時間の短縮に役立ちます。

- 機能
  - [リモートエクスプローラーでリモートを参照](#remote-explorer)
  - ローカルとリモートの差分表示
  - ディレクトリの同期
  - アップロード/ダウンロード
  - 保存時のアップロード
  - ファイルウォッチャー
  - 複数設定
  - 切り替え可能なプロファイル
  - 一時ファイル対応
- [コマンド](./docs/commands.ja.md)
- [デバッグ](#debug)
- [FAQ](./FAQ.ja.md)

## インストール

### 方法 1（推奨: 自動更新）
このフォークを将来的に VS Code Marketplace へ公開した場合:
1. 拡張機能（Ctrl + Shift + X）を開く。
2. @liximomo の現在の sftp 拡張機能をアンインストールする。
3. VS Code Marketplace から `ATEZJP` 公開版をインストールする。
4. 完了です。

### 方法 2（手動更新）
VSCode 内で次の手順に従ってインストールしてください。
1. 拡張機能（Ctrl + Shift + X）を開く。
2. @liximomo の現在の sftp 拡張機能をアンインストールする。
3. 「その他の操作」メニュー（上部の省略記号）を開き、「VSIX からインストール…」をクリックする。
4. VSIX ファイルの場所を指定して選択する。
5. VSCode を再読み込みする。
6. 完了です。

## ドキュメント
- [ホーム](./docs/home.ja.md)
- [設定](./docs/setting.ja.md)
- [共通設定](./docs/common_configuration.ja.md)
- [SFTP 設定](./docs/sftp_configuration.ja.md)
- [FTP 設定](./docs/ftp_configuration.ja.md)
- [コマンド](./docs/commands.ja.md)
- [FAQ](./FAQ.ja.md)
- [変更履歴](./CHANGELOG.ja.md)
- [コントリビュート](./CONTRIBUTING.ja.md)

## 使い方
リモートサーバーに最新のファイルがある場合は、空のローカルフォルダから始め、プロジェクトをダウンロードしてから同期できます。

1. `VS Code` で、リモートサーバーと同期したいローカルディレクトリを開く（または、リモートサーバーのフォルダの内容をまずダウンロードしてローカルで編集したい場合は空のディレクトリを作成する）。
2. Windows/Linux では `Ctrl+Shift+P`、Mac では `Cmd+Shift+P` でコマンドパレットを開き、`SFTP: config` コマンドを実行する。
3. `.vscode` ディレクトリに `sftp.json` という基本設定ファイルが作成される。開いて、リモートサーバーの情報でパラメータを編集する。

例:
```json
{
    "name": "Profile Name",
    "host": "name_of_remote_host",
    "protocol": "ftp",
    "port": 21,
    "secure": true,
    "username": "username",
    "remotePath": "/public_html/project", // <--- 「プロジェクトをダウンロード」でダウンロードされるパス
    "password": "password",
    "uploadOnSave": false
}
```
`sftp.json` の password は省略可能です。省略した場合は同期時にパスワードの入力が求められます。
_注意:_ バックスラッシュなどの特殊文字はバックスラッシュでエスケープしてください。

4. `sftp.json` を保存して閉じる。
5. Windows/Linux では `Ctrl+Shift+P`、Mac では `Cmd+Shift+P` でコマンドパレットを開く。
6. `sftp` と入力すると、多数のコマンドが表示される。プロジェクトのファイルエクスプローラーのコンテキストメニューからも多くのコマンドにアクセスできる。
7. リモートフォルダと同期したい場合は、まず `SFTP: Download Project` がおすすめ。`sftp.json` の `remotePath` で指定したディレクトリが、開いているローカルディレクトリにダウンロードされる。
8. これでローカルで編集でき、保存のたびにアップロードされてリモートと同期される。
9. お楽しみください。

詳しくは [日本語ドキュメント](./docs/home.ja.md) または元の wiki を参照してください。

## 設定例
設定オプションの一覧は [こちら](./docs/configuration.ja.md) で確認できます。

- [sftp sync extension for VS Code](#sftp-sync-extension-for-vs-code)
  - [インストール](#インストール)
    - [方法 1（推奨: 自動更新）](#方法-1推奨--自動更新)
    - [方法 2（手動更新）](#方法-2手動更新)
  - [ドキュメント](#ドキュメント)
  - [使い方](#使い方)
  - [設定例](#設定例)
    - [シンプル](#simple)
    - [プロファイル](#profiles)
    - [複数コンテキスト](#multiple-context)
    - [接続ホッピング](#connection-hopping)
      - [単一ホップ](#single-hop)
      - [複数ホップ](#multiple-hop)
    - [ユーザー設定での設定](#configuration-in-user-setting)
  - [リモートエクスプローラー](#remote-explorer)
    - [複数選択](#multiple-select)
    - [表示順](#order)
  - [デバッグ](#debug)
  - [FAQ](#faq)
  - [寄付](#donation)
    - [Buy Me a Coffee](#buy-me-a-coffee)
    - [PayPal](#paypal)

### Simple
```json
{
  "host": "host",
  "username": "username",
  "remotePath": "/remote/workspace"
}
```

### Profiles
```json
{
  "username": "username",
  "password": "password",
  "remotePath": "/remote/workspace/a",
  "watcher": {
    "files": "dist/*.{js,css}",
    "autoUpload": false,
    "autoDelete": false
  },
  "profiles": {
    "dev": {
      "host": "dev-host",
      "remotePath": "/dev",
      "uploadOnSave": true
    },
    "prod": {
      "host": "prod-host",
      "remotePath": "/prod"
    }
  },
  "defaultProfile": "dev"
}
```

_注意:_ `context` と `watcher` はルートレベルでのみ利用可能です。

プロファイルの切り替えには `SFTP: Set Profile` を使用してください。

### Multiple Context
コンテキストは**同じにしないでください**。
```json
[
  {
    "name": "server1",
    "context": "project/build",
    "host": "host",
    "username": "username",
    "password": "password",
    "remotePath": "/remote/project/build"
  },
  {
    "name": "server2",
    "context": "project/src",
    "host": "host",
    "username": "username",
    "password": "password",
    "remotePath": "/remote/project/src"
  }
]
```

_注意:_ このモードでは `name` が必須です。

### Connection Hopping
SSH プロトコルでプロキシ経由でターゲットサーバーに接続できます。

_注意:_ ホップ設定では変数置換は動作しません。

#### Single Hop
local -> hop -> target
```json
{
  "name": "target",
  "remotePath": "/path/in/target",

  // hop
  "host": "hopHost",
  "username": "hopUsername",
  "privateKeyPath": "/Users/localUser/.ssh/id_rsa", // <-- 鍵ファイルはローカルにあるものとします。

  "hop": {
    // target
    "host": "targetHost",
    "username": "targetUsername",
    "privateKeyPath": "/Users/hopUser/.ssh/id_rsa", // <-- 鍵ファイルは hop 上にあるものとします。
  }
}
```

#### Multiple Hop
local -> hopa -> hopb -> target
```json
{
  "name": "target",
  "remotePath": "/path/in/target",

  // hopa
  "host": "hopAHost",
  "username": "hopAUsername",
  "privateKeyPath": "/Users/hopAUsername/.ssh/id_rsa" // <-- 鍵ファイルはローカルにあるものとします。

  "hop": [
    // hopb
    {
      "host": "hopBHost",
      "username": "hopBUsername",
      "privateKeyPath": "/Users/hopaUser/.ssh/id_rsa" // <-- 鍵ファイルは hopa 上にあるものとします。
    },

    // target
    {
      "host": "targetHost",
      "username": "targetUsername",
      "privateKeyPath": "/Users/hopbUser/.ssh/id_rsa", // <-- 鍵ファイルは hopb 上にあるものとします。
    }
  ]
}
```

### Configuration in User Setting
[remote-fs](https://github.com/liximomo/vscode-remote-fs) から設定を取得するよう `remote` で指定できます。

ユーザー設定で:
```json
"remotefs.remote": {
  "dev": {
    "scheme": "sftp",
    "host": "host",
    "username": "username",
    "rootPath": "/path/to/somewhere"
  },
  "projectX": {
    "scheme": "sftp",
    "host": "host",
    "username": "username",
    "privateKeyPath": "/Users/xx/.ssh/id_rsa",
    "rootPath": "/home/foo/some/projectx"
  }
}
```

sftp.json で:
```json
{
  "remote": "dev",
  "remotePath": "/home/xx/",
  "uploadOnSave": false,
  "ignore": [".vscode", ".git", ".DS_Store"]
}
```

## Remote Explorer
![remote-explorer-preview](https://raw.githubusercontent.com/Natizyskunk/vscode-sftp/master/assets/showcase/remote-explorer.png)

リモートエクスプローラーでリモートのファイルを参照できます。開く方法:

1. コマンド `View: Show SFTP` を実行する。
2. アクティビティバーの SFTP ビューをクリックする。

リモートエクスプローラーではファイルの内容の表示のみ可能です。ローカルで編集するにはコマンド `SFTP: Edit in Local` を実行してください。

### Multiple Select
リモートサーバー上で複数のファイル/フォルダをまとめて選択してダウンロード・アップロードできます。通常のエクスプローラーと同様に、Ctrl または Shift を押しながら選択するだけです。

_注意:_ ファイルを**削除**した後にエクスプローラーの表示が正しく更新されない場合は、親フォルダを手動で更新してください。

### Order
`sftp.json` の設定に `remoteExplorer.order` を追加すると、リモートエクスプローラーの表示順を指定できます。

sftp.json で:
```json
{
  "remoteExplorer": {
    "order": 1 // <-- 既定値は 0。
  }
}
```

## Debug
1. ユーザー設定を開く。
  - Windows/Linux: `ファイル > 設定 > 設定`
  - macOS: `Code > 環境設定 > 設定`
2. `sftp.debug` を `true` にし、VSCode を再読み込みする。
3. ログは `表示 > 出力 > sftp` で確認する。

## FAQ
よくある質問は [こちら](./FAQ.ja.md) で確認できます。

## Donation
このプロジェクトで開発時間の短縮に役立った場合、寄付で貢献いただくことができます。

### Buy Me a Coffee
[![Buy Me A Coffee](https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png)](https://www.buymeacoffee.com/Natizyskunk)

### PayPal
<!-- [![PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BY89QD47D7MPS&source=url) -->
[![PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/donate?business=DELD7APHHM3BC&no_recurring=0&currency_code=EUR)
[![PayPal Me](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/natanfourie)
