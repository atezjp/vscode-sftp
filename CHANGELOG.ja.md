# 変更履歴

このファイルは `CHANGELOG.md` の日本語版です。  
Issue / Pull Request / コミットへのリンクやバージョン番号は原文に合わせて維持しています。

## 1.16.6 - 2026-03-08
* Cursor / Antigravity 互換のため、設定ファイル探索と activation 条件を拡張。
* Git 連携やワークベンチ内部コマンドが未対応でも、拡張全体が落ちにくいようフォールバックを追加。

## 1.16.5 - 2026-03-08
* `atezjp` publisher で正式公開するため、公開メタデータと Marketplace リンクを小文字表記に統一。
* `onCommand:sftp.config` の activation event 削除を含む現在のソース状態を、正式リリースとして反映。

## 1.16.4 - 2026-03-08
* atezjp フォーク向けの公開メタデータを反映し、Marketplace の説明文と README 冒頭を日本語優先に調整。
* Marketplace 再公開のため、拡張バージョンを更新。

## 1.16.3 - 2023-06-16
* [#356] 新機能: 全プロファイルへのアップロードを追加（Pull Request [#313](https://github.com/Natizyskunk/vscode-sftp/pull/313) by @wewawa）。
* [#357] 修正: Typo `avaliable` を `available` に修正（Pull Request [#343](https://github.com/Natizyskunk/vscode-sftp/pull/343) by @kjo-sdds）。
* [#358] 権限設定: `filePerm` / `dirPerm` オプションを追加（Pull Request [#347](https://github.com/Natizyskunk/vscode-sftp/pull/347) by @Jchase2）。
* [#359] 修正: 公開鍵を使う SFTP 接続を修正（Pull Request [#350](https://github.com/Natizyskunk/vscode-sftp/pull/350) by @inu1255）。
* `ssh2` を公式 v1.13.0 に更新（@mscdex）。

## pre-1.16.2 - 2022-11-30
* [#271] 大文字小文字だけが変わるファイル名変更が正しく送信されない問題を修正（Pull Request [#249](https://github.com/Natizyskunk/vscode-sftp/pull/249) by @NyaPPuu）。
* npm `types/node` を v9.6.51 に更新。

## 1.16.1 - 2022-11-02
* [#251] 複数選択を追加し、リモートビューに `Download File` / `Download Folder` / `Upload File` / `Upload Folder` を追加（Pull Request [#221](https://github.com/Natizyskunk/vscode-sftp/pull/221) by @NyaPPuu）。

## 1.16.0 - 2022-10-29
* [#242] 並び順オプションを追加し、ドキュメントの typo を修正（Pull Request [#157](https://github.com/Natizyskunk/vscode-sftp/pull/157) by @NyaPPuu）。
* [#243] ファイル / フォルダ作成・削除時の refresh と `Reveal in Remote Explorer`、Remote Explorer の更新ボタンを修正（Pull Request [#159](https://github.com/Natizyskunk/vscode-sftp/pull/159) by @NyaPPuu）。
* [#244] Markdown ファイル内テキストを整理（Pull Request [#213](https://github.com/Natizyskunk/vscode-sftp/pull/213) by @BrayFlex）。

## 1.15.20 - 2022-08-28
* typo `worksapce` を `workspace` に修正（Pull Request [#158](https://github.com/Natizyskunk/vscode-sftp/pull/158) by @NyaPPuu）。
* リモートビューに `Download File` と `Download Folder` を追加（issue #97, thanks @mrandrey）。
* npm `types/fs-extra` を v9.0.13 に更新。
* npm `typescript-tslint-plugin` を v1.0.2 に更新。
* npm `tslint` を v6.1.3 に更新。
* npm `ts-loader` を v9.4.1 に更新。
* npm `typescript` を v3.9.7 に更新。
* npm `jest` を v29.0.3 に更新。

## 1.15.19 - 2022-08-26
* [#72] `uploadOnSave` の既定値を `true` から `false` に変更。

## 1.15.18 - 2022-08-26
* npm `async` を v3.2.4 に更新。
* npm `fs-extra` を v10.1.0 に更新。
* npm `tmp` を v0.2.1 に更新。
* npm `upath` を v2.0.1 に更新。

## 1.15.17 - 2022-08-26
* `ssh2` を公式 v1.11.0 に更新（@mscdex）。

## 1.15.16 - 2022-05-26
* `cipher` と `serverHostKey` アルゴリズムの順序を調整。
* [FAQ.md](https://github.com/Natizyskunk/vscode-sftp/blob/master/FAQ.md) と [docs](https://github.com/Natizyskunk/vscode-sftp/tree/master/docs) を更新。

## 1.15.15 - 2022-08-21
* `"terminal.integrated.shell.windows"` 非推奨化により `Open SSH in Terminal` が動かない問題を修正し、`src/commands/commandOpenSshConnection.ts` の typo も修正（Pull Request [#155](https://github.com/Natizyskunk/vscode-sftp/pull/155) by @mean-cj）。

## 1.15.14 - 2022-05-06
* npm `async` を v2.6.4 に更新。
* npm `minimist` を v1.2.6 に更新。

## 1.15.13 - 2022-02-11
* OpenSSH v8.8 の秘密鍵をサポート。SHA-1 の代わりに SHA-2 を使い SSH 公開鍵署名問題を修正（issue [#112](https://github.com/Natizyskunk/vscode-sftp/issues/112)）。

## 1.15.12 - 2022-02-11
* `Upload Changed Files` コマンドに削除検出対応を追加（Pull Request [#113](https://github.com/Natizyskunk/vscode-sftp/pull/113) by @brykov, merged in [#117](https://github.com/Natizyskunk/vscode-sftp/pull/117)）。

## 1.15.11 - 2022-02-09
* SFTP の `interactiveAuth` モードを強化（[Wiki](https://github.com/Natizyskunk/vscode-sftp/wiki/SFTP-only-Configuration#interactiveauth) 参照、Pull Request [#94](https://github.com/Natizyskunk/vscode-sftp/pull/94) by @lacastorine, merged in [#114](https://github.com/Natizyskunk/vscode-sftp/pull/114)）。

## 1.15.10 - 2021-11-22
* npm `json-schema` devDependency を v0.2.3 に更新。

## 1.15.9 - 2021-11-21
* Pull Request [#69](https://github.com/Natizyskunk/vscode-sftp/pull/69) で入った SSH 設定関連の不具合を、一時的に別案が見つかるまで除去。

## 1.15.8 - 2021-11-12
* `Upload Changed Files` と `No Such File` の不具合を修正。
* `Upload Changed Files` コマンドを表示し、既定ショートカット `Ctrl+Alt+U` を追加。
* Webpack を 4.39.2 から 5.0.0 に更新。
* Webpack-cli を 3.3.7 から 4.7.0 に更新。

## 1.15.7 - 2021-11-12
* `ssh2` を公式 v1.5.0 に更新（@mscdex）。

## 1.15.6 - 2021-10-27
* SSH 設定解決処理を修正（Pull Request [#69](https://github.com/Natizyskunk/vscode-sftp/pull/69) by @clemyan）。

## 1.15.5 - 2021-10-27
* アップロード前に保存済みファイルの mtime を更新。
* Pull Request issue template を追加。
* funding / sponsors ページを追加。
* code scanning alert を追加。

## 1.15.4 - 2021-10-04
* `vscode tasks.json` から `sftp.sync.remoteToLocal` を呼ぶ際の不要なエラーメッセージを削除。

## 1.15.3 - 2021-09-10
* `ssh2` を公式 v1.4.0 に更新（@mscdex）。

## 1.15.2 - 2021-08-24
* `useTempFile` の不具合を修正。
* `useTempFile` の既定値を `true` から `false` に変更。
* `Cannot read property 'handle' of undefined` を修正。
* `fd argument must be of type number. Received undefined` を修正。
* アップロード時の `Permission denied` を修正。
* 新オプション [openSsh](https://github.com/Natizyskunk/vscode-sftp/wiki/Common-Configuration#openssh) を追加。
* wiki を更新して `openSsh` の説明を追加。

## 1.15.1 - 2021-08-24
* テスト設定仕様に `useTempFile` オプションを追加。
* ターゲットモード取得エラーを修正し、転送タスクの logger 情報をより詳細に改善。

## 1.15.0 - 2021-08-23
* 新オプション [useTempFile](https://github.com/Natizyskunk/vscode-sftp/wiki/Common-Configuration#usetempfile) を追加。
* wiki を更新して `useTempFile` の説明を追加。

## 1.14.0 - 2021-08-06
* FAQ を更新し、古い / レガシー環境の説明を追加。
* beta から stable へ移行。

## 1.14.0-beta - 2021-07-15
* `create remote file` と `create remote folder` コマンドを追加。

## 1.13.6 - 2021-07-15
* `src\fileHandlers\transfer\__tests__\transfer-test.ts` の構文を修正。

## 1.13.5 - 2021-07-10
* `keepalive` のテストパラメータ順を調整。
* `REQUEST_FAILURE` が残る場合のみ v1.13.5-beta を案内。

## 1.13.4 - 2021-07-10
* `Error with the transfer direction.` を修正。
* 転送情報用の logger を追加。

## 1.13.3 - 2021-07-09
* `braces >=2.3.1` を package.json に再追加。
* `yargs-parser ^20.2.4` を package.json に再追加。
* `yarn.lock` を削除。
* `package-lock.json` を追加。
* `Writing CHANNEL_DATA (0)` / `Writing FSETSTAT` を修正。
* Windows 向け transfer-test を修正。

## 1.13.2 - 2021-07-07
* `braces >=2.3.1` を package.json から削除。
* `yargs-parser ^20.2.4` を package.json から削除。
* ssh2 v1.1.0 に含まれた修正により、VSCode 1.56 の `No such file` 回避パッチを削除。

## 1.13.1 - 2021-07-06
* `braces >=2.3.1` を追加。
* `node-notifier >=8.0.1` を追加。
* `yargs-parser ^20.2.4` を追加。
* publisher と repository リンクを変更。
* VSCode 1.56 の `No such file` を修正。
* 未保存変更を含むファイルのアップロード問題を修正。

## 1.13.0 - 2021-07-06
* `ssh2` を公式 v1.1.0 に更新。

## 1.12.10 - 2021-05-15
* SFTP の信頼性を改善。

## 1.12.3 - 2019-04-27
* 小規模改善。
* バグ修正。

## 1.12.1 - 2019-03-28
* [#510](https://github.com/liximomo/vscode-sftp/issues/510) を修正。

## 1.12.0 - 2019-03-21
* 新オプション [sshCustomParams](https://github.com/liximomo/vscode-sftp/wiki/SFTP-only-Configuration#sshcustomparams) を追加。

## 1.11.0 - 2019-03-15
* アップロード前に保存するよう変更。
* [#490](https://github.com/liximomo/vscode-sftp/issues/490) を修正。

## 1.9.4 - 2019-02-26
* `sshConfig` ファイルが効かない問題を修正。
* `Open SSH in Terminal` からリモートパスへ入れるよう改善。

## 1.9.3 - 2019-01-30
* RemoteExplorer 用の新アイコンを追加。
* 生成される設定内の `port` を number に変更。

## 1.9.2 - 2019-01-22
* [#388](https://github.com/liximomo/vscode-sftp/issues/388) を修正。
* [#456](https://github.com/liximomo/vscode-sftp/issues/456) を修正。
* [#459](https://github.com/liximomo/vscode-sftp/issues/459) を修正。

## 1.9.0 - 2019-01-08
* `remoteExplorer.filesExclude` で Remote Explorer の表示制御を可能に。
* 新しい OpenSSH 鍵形式をサポート。
* パフォーマンス改善。

## 1.8.4 - 2018-12-16
* プロファイル使用時に ignore が効かない問題を修正。

## 1.8.3 - 2018-12-14
* VSCode engine version を更新。

## 1.8.2 - 2018-12-13
* RemoteExplorer に **Collapse All** を追加。

## 1.8.0 - 2018-12-06
* 新コマンド [Upload Changed Files](https://github.com/liximomo/vscode-sftp/wiki/Commands#sftp-upload-changed-files) を追加。
* バグ修正。

## 1.7.6 - 2018-11-22
* 起動時間を *80%* 短縮。
* [#396](https://github.com/liximomo/vscode-sftp/issues/396) を修正。

## 1.7.5 - 2018-11-15
* [#394](https://github.com/liximomo/vscode-sftp/issues/394) を修正。

## 1.7.4 - 2018-11-09
* [#362](https://github.com/liximomo/vscode-sftp/issues/362) を修正。
* ダウンロード中のファイルをアップロードしないよう修正。

## 1.7.3 - 2018-11-03
* 新設定 [limitOpenFilesOnRemote](https://github.com/liximomo/vscode-sftp/wiki/Configuration#limitopenfilesonremote) を追加。
* SCM に `upload file` コンテキストメニューを表示。

## 1.7.2 - 2018-10-29
* 新コマンド [Open SSH in Terminal](https://github.com/liximomo/vscode-sftp/wiki/Commands#open-ssh-in-terminal) を追加。

## 1.7.1 - 2018-10-25
* 新設定 [downloadwhenopeninremoteexplorer](https://github.com/liximomo/vscode-sftp/wiki/Setting#downloadwhenopeninremoteexplorer) を追加。
* いくつかのバグを修正。

## 1.7.0 - 2018-10-19
### 新機能
* 新コマンド [Upload Active Folder](https://github.com/liximomo/vscode-sftp/wiki/Commands#sftp-upload-active-folder) を追加。
* 新コマンド [Download Active Folder](https://github.com/liximomo/vscode-sftp/wiki/Commands#sftp-download-active-folder) を追加。
* 新コマンド [List Active Folder](https://github.com/liximomo/vscode-sftp/wiki/Commands#sftp-list-active-folder) を追加。
* 新コマンド [Cancel All Transfers](https://github.com/liximomo/vscode-sftp/wiki/Commands#cancel-all-transfers) を追加。
* 新設定 [remotetimeoffsetinhours](https://github.com/liximomo/vscode-sftp/wiki/Configuration#remotetimeoffsetinhours) を追加。

## 1.6.0 - 2018-10-12
### 新機能
* 新コマンド [Sync Local -> Remote](https://github.com/liximomo/vscode-sftp/wiki/Commands#sftp-sync-local---remote) を追加。
* 新コマンド [Sync Remote -> Local](https://github.com/liximomo/vscode-sftp/wiki/Commands#sftp-sync-remote---local) を追加。
* 新コマンド [Sync Both Directions](https://github.com/liximomo/vscode-sftp/wiki/Commands#sftp-sync-both-directions) を追加。
* `Sync` コマンド用の新設定 [syncOption](https://github.com/liximomo/vscode-sftp/wiki/Configuration#syncoption) を追加。

### 破壊的変更
* `SFTP: Sync To Remote` を削除。
* `SFTP: Sync To Local` を削除。
* 設定オプション `syncModel` を削除。

## 1.5.13 - 2018-10-08
* [#344](https://github.com/liximomo/vscode-sftp/issues/344) を修正。

## 1.5.12 - 2018-10-07
* 新コマンド `Diff Active File with Remote` を追加。
* `Set Profile` コマンドが keybindings から引数を受け取れるように変更。

```json
{
  "key": "ctrl+shift+cmd+d",
  "command": "sftp.setProfile",
  "args": "dev"
}
```

## 1.5.10 - 2018-09-28
* [#332](https://github.com/liximomo/vscode-sftp/issues/332) を修正。

## 1.5.9 - 2018-09-27
* [#330](https://github.com/liximomo/vscode-sftp/issues/330) を修正。

## 1.5.8 - 2018-09-25
* remote explorer に name を表示。
* [#308](https://github.com/liximomo/vscode-sftp/issues/308) を修正。

## 1.5.0 - 2018-09-13
### 新機能
* 新しい [alt commands](https://github.com/liximomo/vscode-sftp#alt-commands) として `Force Download` / `Force Upload` を追加。ignore ルールを無視したアップロード / ダウンロードが可能に。

### 破壊的変更
* `sftp.trans.remote(SFTP: Upload)` を `sftp.upload.activeFile` に変更。
* `sftp.trans.local(SFTP: Download)` を `sftp.download.activeFile` に変更。

### 非推奨
* `SFTP: List` と `SFTP: List All` は次リリースで `Remote Explorer` に置き換え予定。

## 1.4.1 - 2018-09-03
### 機能
* [Configuration in User Setting](https://github.com/liximomo/vscode-sftp#configuration-in-user-setting) を追加。

### 修正
* `sshConfig` が既定設定を上書きしない問題を修正。

## 1.4.0 - 2018-08-27
### 機能
* [Connection Hopping](https://github.com/liximomo/vscode-sftp#connection-hopping) を追加。

## 1.3.9 - 2018-08-14
* [#286](https://github.com/liximomo/vscode-sftp/issues/286) を修正。
* [#287](https://github.com/liximomo/vscode-sftp/issues/287) を修正。

## 1.3.8 - 2018-08-13
* [#285](https://github.com/liximomo/vscode-sftp/issues/285) を修正。

## 1.3.7 - 2018-08-10
* `remoteExplorer.refresh` の不具合を修正。

## 1.3.0 - 2018-08-02
### 新機能
* [Remote Explorer](https://github.com/liximomo/vscode-sftp#remote-explorer) を追加。

## 1.2.7 - 2018-07-27
### 新機能
* `ignoreFile` [option](https://github.com/liximomo/vscode-sftp/wiki/Configuration#ignorefile) を追加。

## 1.2.3 - 2018-06-19
### 新機能
* [Switchable Profiles](https://github.com/liximomo/vscode-sftp/#profiles) を追加。

## 1.2.0 - 2018-06-19
* [SSH configuration file](https://www.ssh.com/ssh/config/) をサポート。既定は `~/.ssh/config` で、`sshConfigPath` で変更可能。

## 1.1.12 - 2018-06-08
* [#200](https://github.com/liximomo/vscode-sftp/issues/200) を修正。

## 1.1.11 - 2018-05-21
* [#198](https://github.com/liximomo/vscode-sftp/issues/198) を修正。

## 1.1.10 - 2018-05-18
* `sftp:config` でフォルダを開くプロンプトを表示するよう改善。
* [#174](https://github.com/liximomo/vscode-sftp/issues/174) を修正。

## 1.1.9 - 2018-05-17
* `downloadOnOpen` に `confirm` オプションを追加。
* [#160](https://github.com/liximomo/vscode-sftp/issues/160) を修正。
* [#195](https://github.com/liximomo/vscode-sftp/issues/195) を修正。

## 1.1.8 - 2018-05-15
* UX を改善。
  * 拡張機能が有効化されたときだけ `sftp` メニューを表示。
  * 不要な warning を削除。
* FTP の信頼性を改善。
* `ssh2` を更新。

## 1.1.7 - 2018-03-31
* `name` 設定を追加。
* バグ修正。

## 1.1.6 - 2018-03-24
* ステータスバーの手順メッセージを改善。
* 同期先が存在しない場合の sync エラーを修正。
* [#146](https://github.com/liximomo/vscode-sftp/issues/146) を修正。

## 1.1.5 - 2018-03-23
* `ftp` の安定性を改善。
* `list` コマンド経由でファイル選択後、自動表示されない問題を修正。
* [#113](https://github.com/liximomo/vscode-sftp/issues/113) を修正。

## 1.1.4 - 2018-03-21
* `connectTimeout` 設定を追加。
* `downloadOnOpen` 設定を追加。
* FTP が上位ディレクトリへ予期せず移動する問題を修正。

## 1.1.3 - 2018-03-18
* 既定の ignore 設定を削除。`ignore` を明示しない限り、何も除外しないよう変更。
* [#133](https://github.com/liximomo/vscode-sftp/issues/133) を修正。
* [#136](https://github.com/liximomo/vscode-sftp/issues/136) を修正。

## 1.1.0 - 2018-03-13
* `diff` コマンドを追加。
* [#113](https://github.com/liximomo/vscode-sftp/issues/113) を修正。
* [#124](https://github.com/liximomo/vscode-sftp/issues/124) を修正。

## 1.0.5 - 2018-02-24
* Explorer の複数選択をサポート。
* いくつかのバグを修正。

## 1.0.4 - 2018-02-08
* 新設定 `concurrency` を追加。
* 新設定 `algorithms` を追加。
* [#103](https://github.com/liximomo/vscode-sftp/issues/103) を修正。

## 1.0.3 - 2018-02-05
* `sftp: config` 実行時の既定設定ファイル内容を簡素化。
* 設定オートコンプリートを追加。
* `download` や `sync to local` 後に watcher が止まる問題を修正。

## 1.0.2 - 2018-01-30
* FTPS をサポート。
* passphrase / password ダイアログをサポート。
* 設定変更後に configuration not found が出る問題を修正。
* `sftp config` 実行時に作成された設定ファイルが表示されない問題を修正。

## 1.0.0 - 2018-01-26
このリリースには新機能、バグ修正、改善が含まれます。新たな不具合が含まれる可能性もあるため、フィードバックを歓迎します。

### 新機能
* `list` と `list all` コマンドを追加。
  * `list` は ignore ルールに一致しないリモートファイルを一覧表示。
  * `list all` はすべてのリモートファイルを一覧表示。
* 選択後は対象をダウンロードし、ファイルなら VSCode で開きます。
* コマンド経由でフォルダをダウンロードしたとき、完了後に explorer を更新。

### 破壊的変更
* ignore の仕様を gitignore 準拠へ変更。より強力かつ簡潔になった反面、既存の ignore 設定は見直しが必要な場合があります。

## 0.9.4 - 2017-12-18
* `Context` が相対パスを受け取るよう変更。
* [#69](https://github.com/liximomo/vscode-sftp/issues/69), [#70](https://github.com/liximomo/vscode-sftp/issues/70) を修正。

## 0.9.0 - 2017-12-16
* リモートパスに対応するローカルパス設定オプションを追加。
* 1 つの設定ファイルで複数設定をサポート。
* `.sftpConfig.json` のサポートを削除。
* ワークスペースルート以外の設定ファイルのサポートを削除。

## 0.8.11 - 2017-11-30
* FTP でファイル権限を保持できない問題を修正。

## 0.8.10 - 2017-11-20
* ワークスペースルート以外では設定作成を無効化。

## 0.8.9 - 2017-11-17
* ファイル権限保持をサポート。
* README を改善。
* ダウンロード / アップロード時に空ファイル (0kb) になる問題を修正。
* 既存のワークスペースルート外設定ファイルに warning を表示。

## 0.8.8 - 2017-11-11
### バグ修正
* 設定セットアップ時のファイルフィルタリングが不正だった問題を修正。

## 0.8.7 - 2017-11-07
### バグ修正
* ディレクトリ名が `.vscode` で終わる場合に設定セットアップが動かない問題を修正。

## 0.8.6 - 2017-11-06
* パフォーマンス改善。
* 古い `.sftpConfig.json` に warning を表示。

### 挙動変更
* `uploadOnSave` は VSCode の保存操作時のみ発火するよう変更。

## 0.8.5 - 2017-10-18
### 改善
* 対応 cipher アルゴリズムを増加。

## 0.8.4 - 2017-10-10
### 改善
* 出力パネルにより多くの情報を記録。

## 0.8.3 - 2017-09-26
### バグ修正
* 選択先ディレクトリに子ファイルがないと file picker で設定作成できない問題を修正。

## 0.8.2 - 2017-09-24
### 改善
* `SFTP: config` 実行後に VSCode の再読み込みが不要に。
* `SFTP: config` は `sftp.json` を作成するよう変更。

## 0.8.1 - 2017-09-22
### バグ修正
* Windows で設定が見つからない問題（path 正規化不足）を修正。

## 0.8.0 - 2017-09-22
### 機能
* multi-root workspace をサポート。

### 変更
* 設定ファイル名を `.sftpConfig.json` から `sftp.json` に変更。

### バグ修正
* ワークスペース内に複数設定がある場合、常に同じ ssh session が返る不具合を修正。

## 0.7.11 - 2017-09-13
### バグ修正
* `tribe retrive` を修正。

## 0.7.10 - 2017-09-13
### バグ修正
* ワークスペースに複数設定ファイルがあると configuration not found になる問題を修正。

## 0.7.9 - 2017-09-01
### バグ修正
* ダウンロード / アップロード時の tip text を `uploading` から `sync` に変更。

## 0.7.8 - 2017-08-20
### バグ修正
* フォルダ未オープン時の `command not found error` を修正。

## 0.7.7 - 2017-07-25
### バグ修正
* ignore のフォルダ一致判定を修正。

## 0.7.6 - 2017-07-24
### バグ修正
* ignore されたディレクトリ配下のファイルがアップロードされる問題を修正。

## 0.7.5 - 2017-07-18
### 機能
* 新しいエディタ設定 `sftp.printDebugLog` を追加（既定値は false）。

## 0.7.4 - 2017-07-14
### 改善
* 起動時の設定検証失敗後でも、再読み込みなしで拡張機能が動作するよう改善。

## 0.7.3 - 2017-07-13
### 機能
* 設定バリデーションを追加。

### その他
* watcher 説明をより正確に改善。

## 0.7.2 - 2017-07-04
### 機能
* 検出した全設定ルートフォルダに対してコマンドを実行する手段を追加。

## 0.7.1 - 2017-07-04
### バグ修正
* スロットリングでファイルを取りこぼす問題を修正。

## 0.7.0 - 2017-06-30
### 破壊的変更
* 設定ファイルは `.vscode` フォルダ配下に配置する方式へ変更。

## 0.6.14 - 2017-06-29
### 改善
* 認証入力をアスタリスク表示に。

## 0.6.13 - 2017-06-28
### 機能
* ssh agent 認証を追加。

## 0.6.12 - 2017-06-26
### 機能
* Interactive authentication を追加。

## 0.6.11 - 2017-06-22
### 機能
* ダウンロード / remote-to-local sync でも ignore が効くように。

## 0.6.10 - 2017-06-13
### 改善
* ログを改善。

## 0.6.9 - 2017-06-11
### バグ修正
* 不要なエラーメッセージを削除。
* シンボリックリンクで sync が詰まる問題を修正。

## 0.6.8 - 2017-06-09
### 改善
* 必要なときだけ拡張機能を有効化するよう改善。

## 0.6.7 - 2017-06-07
### 改善
* 初回設定ファイル作成時、再読み込みせずに SFTP を有効化できるよう改善。

## 0.6.6 - 2017-06-06
### バグ修正
* Windows で存在しないディレクトリを自動作成できない問題を修正。

## 0.6.2 - 2017-06-05
### バグ修正
* configuration not found エラーポップアップの誤表示を修正。

## 0.6.1 - 2017-06-03
### バグ修正
* `.sftpConfig` がない場合はファイル監視しないよう修正。

## 0.6.0 - 2017-06-02
### 機能
* FTP をサポート。

### フィードバック
* より多くのデバッグ情報を表示。

### バグ修正
* `SFTPFileSystem.rmdir` の resolve が正しくない問題を修正。
* ファイル取得時は watcher を無効化。
* 必要時のみ真の再接続を行うよう改善。

## 0.5.4 - 2017-05-30
### フィードバック
* エラーログを改善。
* sftp 出力チャネルにデバッグ情報を表示。

### バグ修正
* スロットリングにより更新済みファイルのアップロードが漏れる問題を修正。

## 0.5.3 - 2017-05-26
### 機能
* 外部更新でも AutoSave が動作。
* 新設定 `watcher` を追加し、外部ファイル変更（作成 / 削除）を検知可能に。

## 0.5.2 - 2017-05-22
### バグ修正
* ショートカットから実行したコマンドが active document を正しく見つけられない問題を修正。

### フィードバック
* ステータスバーにはフルパスではなくワークスペース相対パスを表示。

## 0.5.1 - 2017-05-22
### 改善
* ワークスペースルートに対してコマンドを実行する方法を追加。

## 0.5.0 - 2017-05-19
### 機能
* ssh 接続を維持し、必要時のみ再接続するよう改善。

## 0.4.12 - 2017-05-18
### バグ修正
* バイナリファイルアップロードを修正。

## 0.4.11 - 2017-05-18
### フィードバック
* ステータス表示を改善。

## 0.4.10 - 2017-05-18
### バグ修正
* Windows で configuration file not found になる問題を修正。
* `privateKeyPath` の存在確認を追加。

## 0.4.0 - 2017-05-17
### 設定
* `syncModel` オプションを追加。

### コマンド
* 新コマンド Upload を追加。
* 新コマンド Download を追加。
