# VSCode-SFTP 設定リファレンス

設定ファイルは、プロジェクトの作業ディレクトリ内の `../.vscode/sftp.json` に保存されます。<br>
設定ファイルは `CTRL` + `Shift` + `P` でコマンドパレットを開き、`SFTP: Config` を検索するといつでも作成・表示できます。

![image](https://github.com/user-attachments/assets/5ceff350-7678-4264-98d4-2741a98a9dbe)

## 目次

### 共通設定

- [name](./common_configuration.ja.md#name)
- [context](./common_configuration.ja.md#context)
- [protocol](./common_configuration.ja.md#protocol)
- [host](./common_configuration.ja.md#host)
- [port](./common_configuration.ja.md#port)
- [username](./common_configuration.ja.md#username)
- [password](./common_configuration.ja.md#password)
- [remotePath](./common_configuration.ja.md#remotepath)
- [filePerm](./common_configuration.ja.md#fileperm)
- [dirPerm](./common_configuration.ja.md#dirperm)
- [uploadOnSave](./common_configuration.ja.md#uploadonsave)
- [useTempFile](./common_configuration.ja.md#usetempfile)
- [openSsh](./common_configuration.ja.md#openssh)
- [downloadOnOpen](./common_configuration.ja.md#downloadonopen)
- [syncOption](./common_configuration.ja.md#syncoption)
- [ignore](./common_configuration.ja.md#ignore)
- [ignoreFile](./common_configuration.ja.md#ignorefile)
- [watcher](./common_configuration.ja.md#watcher)
- [remoteTimeOffsetInHours](./common_configuration.ja.md#remotetimeoffsetinhours)
- [remoteExplorer](./common_configuration.ja.md#remoteexplorer)
- [concurrency](./common_configuration.ja.md#concurrency)
- [connectTimeout](./common_configuration.ja.md#connecttimeout)
- [limitOpenFilesOnRemote](./common_configuration.ja.md#limitopenfilesonremote)

### SFTP 専用設定

- [agent](./sftp_configuration.ja.md#agent)
- [privateKeyPath](./sftp_configuration.ja.md#privatekeypath)
- [passphrase](./sftp_configuration.ja.md#passphrase)
- [interactiveAuth](./sftp_configuration.ja.md#interactiveauth)
- [algorithms](./sftp_configuration.ja.md#algorithms)
- [sshConfigPath](./sftp_configuration.ja.md#sshconfigpath)
- [sshCustomParams](./sftp_configuration.ja.md#sshcustomparams)

### FTP(s) 専用設定

- [secure](./ftp_configuration.ja.md#secure)
- [secureOptions](./ftp_configuration.ja.md#secureoptions)

## 概要

このページは、日本語版ドキュメントへの入口です。  
設定項目の詳細説明、型、既定値、JSON サンプルは以下の各ページで確認してください。

- [共通設定の詳細](./common_configuration.ja.md)
- [SFTP 専用設定の詳細](./sftp_configuration.ja.md)
- [FTP(s) 専用設定の詳細](./ftp_configuration.ja.md)

## 最小構成の例

```json
{
  "host": "host",
  "username": "username",
  "remotePath": "/remote/workspace"
}
```

## よく使う設定の例

### 保存時に自動アップロード

```json
{
  "host": "host",
  "username": "username",
  "remotePath": "/remote/workspace",
  "uploadOnSave": true
}
```

### 監視による自動同期

```json
{
  "host": "host",
  "username": "username",
  "remotePath": "/remote/workspace",
  "uploadOnSave": false,
  "watcher": {
    "files": "**/*",
    "autoUpload": true,
    "autoDelete": true
  }
}
```

### 秘密鍵認証を使う SFTP

```json
{
  "protocol": "sftp",
  "host": "host",
  "username": "username",
  "privateKeyPath": "/Users/yourname/.ssh/id_rsa",
  "remotePath": "/remote/workspace"
}
```

### FTPS を使う場合

```json
{
  "protocol": "ftp",
  "host": "host",
  "username": "username",
  "remotePath": "/remote/workspace",
  "secure": true
}
```

## 注意事項

- `password` は平文で保存されるため、可能であれば秘密鍵認証や入力ダイアログを使ってください。
- `openSsh` を使う場合は `useTempFile` も `true` にしてください。
- すべてを監視する `watcher.files: "**/*"` を使う場合は、通常 `uploadOnSave` は `false` にします。
- 古いサーバーでは、`algorithms` や `limitOpenFilesOnRemote` の調整が必要になることがあります。
