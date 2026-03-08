## 共通設定

### name

設定を識別するための文字列です。

| Key | Value |
| --- | --- |
| *name* | *string* |

```json
{
  "name": "My Server"
}
```

### context

ワークスペースルートからの相対パスです。<br>
サブフォルダを `remotePath` に対応付けたいときに使います。

| Key | Value | Default |
| --- | --- | --- |
| *context* | *string* | *ワークスペースルート* |

```json
{
  "context": "/_subfolder_"
}
```

### protocol

使用するプロトコルです。

| Key | Value | Default |
| --- | --- | --- |
| *protocol* | `sftp` *または* `ftp` | `sftp` |

```json
{
  "protocol": "sftp"
}
```

### host

サーバーのホスト名または IP アドレスです。

| Key | Value |
| --- | --- |
| *host* | *string* |

```json
{
  "host": "server.example.com"
}
```

### port

サーバーのポート番号です。

| Key | Value |
| --- | --- |
| *port* | *integer* |

```json
{
  "port": 22
}
```

### username

認証に使用するユーザー名です。

| Key | Value |
| --- | --- |
| *username* | *string* |

```json
{
  "username": "user1"
}
```

### password

[!WARNING]
**パスワードは平文で保存されます。**

パスワード認証に使うパスワードです。

| Key | Value |
| --- | --- |
| *password* | *string* |

```json
{
  "password": "Password123"
}
```

### remotePath

リモートホスト上の絶対パスです。

| Key | Value | Default |
| --- | --- | --- |
| *remotePath* | *string* | `/` |

```json
{
  "remotePath": "/_subfolder_"
}
```

### filePerm

新規ファイルに設定する 8 進数パーミッションです。

| Key | Value | Default |
| --- | --- | --- |
| *filePerm* | *number* | `false` |

```json
{
  "filePerm": 644
}
```

### dirPerm

新規ディレクトリに設定する 8 進数パーミッションです。

| Key | Value | Default |
| --- | --- | --- |
| *dirPerm* | *number* | `false` |

```json
{
  "dirPerm": 750
}
```

### uploadOnSave

VSCode で保存するたびにアップロードします。

| Key | Value | Default |
| --- | --- | --- |
| *uploadOnSave* | *boolean* | `false` |

```json
{
  "uploadOnSave": true
}
```

### useTempFile

保存時に一時ファイル経由でアップロードします。アップロード途中の不完全なファイルをユーザーが参照してしまうのを避けたい場合に有効です。

| Key | Value | Default |
| --- | --- | --- |
| *useTempFile* | *boolean* | `false` |

```json
{
  "useTempFile": true
}
```

### openSsh

アトミックなファイルアップロードを有効にします（*openSSH サーバーのみ対応*）。

| 💡 Important |
| :--- |
| *`true` にする場合は `useTempFile` も `true` に設定してください。* |

| Key | Value | Default |
| --- | --- | --- |
| *openSsh* | *boolean* | `false` |

```json
{
  "openSsh": true,
  "useTempFile": true
}
```

### downloadOnOpen

ファイルを開いたときに、毎回リモートからダウンロードします。

| Key | Value | Default |
| --- | --- | --- |
| *downloadOnOpen* | *boolean* | `false` |

```json
{
  "downloadOnOpen": true
}
```

### syncOption

`Sync` コマンドの動作を設定します。

| Key | Value | Default |
| --- | --- | --- |
| *syncOption* | *object* | `{}` |

#### syncOption.delete

宛先ディレクトリにだけ存在する余分なファイルを削除します。

| Key | Value |
| --- | --- |
| *syncOption.delete* | *boolean* |

#### syncOption.skipCreate

宛先に新規ファイルを作成しません。

| Key | Value |
| --- | --- |
| *syncOption.skipCreate* | *boolean* |

#### syncOption.ignoreExisting

宛先に既に存在するファイルは更新しません。

| Key | Value |
| --- | --- |
| *syncOption.ignoreExisting* | *boolean* |

#### syncOption.update

ソース側のほうが新しい場合にのみ宛先を更新します。

| Key | Value |
| --- | --- |
| *syncOption.update* | *boolean* |

```json
{
  "syncOption": {
    "delete": true,
    "skipCreate": false,
    "ignoreExisting": false,
    "update": true
  }
}
```

### ignore

同期対象から除外するファイルやフォルダを指定します。`*` などのワイルドカードにも対応しています。<br>
挙動は `gitignore` と同様で、パスは現在の設定の `context` からの相対パスです。

| Key | Value | Default |
| --- | --- | --- |
| *ignore* | *string[]* | `[]` |

```json
{
  "ignore": [
    "/.vscode",
    "/.git",
    "/.cache",
    "/_subfolder_",
    ".DS_Store",
    "*.gz",
    "*.log"
  ]
}
```

### ignoreFile

ignore ファイルへの絶対パス、またはワークスペースルートからの相対パスです。

| Key | Value |
| --- | --- |
| *ignoreFile* | *string* |

```json
{
  "ignoreFile": "/.vscode/sftp.json"
}
```

### watcher

`watcher` コマンドの動作を設定します。

| Key | Value | Default |
| --- | --- | --- |
| *watcher* | *object* | `{}` |

#### watcher.files

監視対象の Glob パターンです。VSCode エディタ外で編集されたときにも処理されます。

| 💡 Important |
| :--- |
| *すべてを監視する場合は `uploadOnSave` を `false` にしてください。* |

| Key | Value |
| --- | --- |
| *watcher.files* | *string* |

#### watcher.autoUpload

ファイル変更時にアップロードします。

| Key | Value |
| --- | --- |
| *watcher.autoUpload* | *boolean* |

#### watcher.autoDelete

ファイル削除時にリモート側も削除します。

| Key | Value |
| --- | --- |
| *watcher.autoDelete* | *boolean* |

```json
{
  "watcher": {
    "files": "**/*",
    "autoUpload": true,
    "autoDelete": true
  }
}
```

### remoteTimeOffsetInHours

ローカルマシンとリモートサーバーの時差を時間単位で指定します（remote - local）。

| Key | Value | Default |
| --- | --- | --- |
| *remoteTimeOffsetInHours* | *number* | `0` |

```json
{
  "remoteTimeOffsetInHours": 3
}
```

### remoteExplorer

`remoteExplorer` の動作を設定します。

| Key | Value | Default |
| --- | --- | --- |
| *remoteExplorer* | *object* | `{}` |

#### remoteExplorer.filesExclude

除外するファイル / フォルダのパターンを設定します。<br>
Remote Explorer はこの設定に基づいて表示・非表示を決定します。

| Key | Value |
| --- | --- |
| *remoteExplorer.filesExclude* | *string[]* |

#### remoteExplorer.order

| Key | Value |
| --- | --- |
| *remoteExplorer.order* | *number* |

```json
{
  "remoteExplorer": {
    "filesExclude": [],
    "order": 0
  }
}
```

### concurrency

並列数を下げると、一部クライアント / サーバーの制限回避につながり、安定性が向上する場合があります。

| Key | Value | Default |
| --- | --- | --- |
| *concurrency* | *number* | `4` |

```json
{
  "concurrency": 3
}
```

### connectTimeout

接続の最大待機時間です。

| Key | Value | Default |
| --- | --- | --- |
| *connectTimeout* | *number* | `10000` |

```json
{
  "connectTimeout": 15000
}
```

### limitOpenFilesOnRemote

リモートサーバー上で同時に開くファイルディスクリプタ数の上限を設定します。<br>
`true` を指定すると既定値 `limit(222)` を使います。

| 💡 Important |
| :--- |
| *必要な場合を除き設定しないでください。* |

| Key | Value | Default |
| --- | --- | --- |
| *limitOpenFilesOnRemote* | *mixed* | `false` |

```json
{
  "limitOpenFilesOnRemote": 15000
}
```
