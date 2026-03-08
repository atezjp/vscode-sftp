- [エラー: Failure](#エラー-failure)
  - [エラー: Failure - 解決策 1](#エラー-failure---解決策-1)
  - [エラー: Failure - 解決策 2](#エラー-failure---解決策-2)
- [エラー: Connection closed](#エラー-connection-closed)
- [エラー: Upload Changed Files をクリックしても動かない](#エラー-upload-changed-files-をクリックしても動かない)
- [ENFILE: file table overflow ...](#enfile-file-table-overflow-)
  - [ENFILE: file table overflow ... - macOS の制限に対する解決策](#enfile-file-table-overflow----macos-の制限に対する解決策)
- [フォルダ自体ではなく中身だけをアップロードしたい](#フォルダ自体ではなく中身だけをアップロードしたい)
- [root 権限でファイルをアップロードするには？](#root-権限でファイルをアップロードするには)
- [ユーザー操作なしで双方向同期したい](#ユーザー操作なしで双方向同期したい)
- [リモートエクスプローラーにドットファイルや隠しファイルを表示したい](#リモートエクスプローラーにドットファイルや隠しファイルを表示したい)

## エラー: Failure

`Failure` エラーメッセージはリモート側から返される、比較的一般的な失敗メッセージです。  
SFTP サーバー側で syscall などが失敗したときに返されることがあります。

何が起きているか正確に知るには、SFTP サーバー側のデバッグ出力を有効にし、その状態で再度転送を実行して、ログに何が出るか確認してください。

### エラー: Failure - 解決策 1

`remotePath` がシンボリックリンクを指している場合は、実際のパスへ変更してください。

### エラー: Failure - 解決策 2

サーバー側のファイルディスクリプタが不足している可能性があります。  
ファイルディスクリプタの上限を増やしてみてください。

権限がなく増やせない場合は、設定の [limitOpenFilesOnRemote](https://github.com/Natizyskunk/vscode-sftp/wiki/Configuration#limitopenfilesonremote) を使用してください。

## エラー: Connection closed

古いシステムやレガシー環境では、SFTP 拡張機能が接続をすぐ閉じてしまうことがあります。

この場合は、接続時に使用するトランスポート層アルゴリズムを明示的に上書きし、問題を起こす `"diffie-hellman-group-exchange-sha256"` を `kex` から外してください。`sftp.json` に以下を追加すると動作する場合があります。

```json
{
  "algorithms": {
    "kex": [
      "ecdh-sha2-nistp256",
      "ecdh-sha2-nistp384",
      "ecdh-sha2-nistp521"
    ],
    "cipher": [
      "aes128-gcm",
      "aes128-gcm@openssh.com",
      "aes256-gcm",
      "aes256-gcm@openssh.com",
      "aes128-cbc",
      "aes192-cbc",
      "aes256-cbc",
      "aes128-ctr",
      "aes192-ctr",
      "aes256-ctr"
    ],
    "serverHostKey": [
      "ssh-rsa",
      "ssh-dss",
      "ssh-ed25519",
      "ecdsa-sha2-nistp256",
      "ecdsa-sha2-nistp384",
      "ecdsa-sha2-nistp521",
      "rsa-sha2-256",
      "rsa-sha2-512"
    ],
    "hmac": [
      "hmac-sha2-256",
      "hmac-sha2-512"
    ]
  }
}
```

## エラー: Upload Changed Files をクリックしても動かない

[vscode-sftp issue #854](https://github.com/liximomo/vscode-sftp/issues/854) を参照してください。

**@PaPa31** により、`Upload Changed Files` コマンドが表示される修正と、呼び出し用のデフォルトキーボードショートカットが追加されました。

![upload changed files keyboard shortcut](assets/faq/upload_changed_files_shortcut.png)

## ENFILE: file table overflow ...

macOS では、開けるファイル数に比較的厳しい上限があります。

### ENFILE: file table overflow ... - macOS の制限に対する解決策

次のコマンドを実行してください。

```sh
echo kern.maxfiles=65536 | sudo tee -a /etc/sysctl.conf
echo kern.maxfilesperproc=65536 | sudo tee -a /etc/sysctl.conf
sudo sysctl -w kern.maxfiles=65536
sudo sysctl -w kern.maxfilesperproc=65536
ulimit -n 65536
```

## フォルダ自体ではなく中身だけをアップロードしたい

[vscode-sftp issue #852](https://github.com/liximomo/vscode-sftp/issues/852) を参照してください。

**raoul2000** の説明によると、`context` を `./[path]`（例: `./build`）に設定すれば動作します。

設定例（`./build` 配下の JS / HTML をすべて `/folder1/folder2/folder3` にコピーする場合）:

```json
{
  "name": "My Server",
  "host": "<host_ip_address>",
  "protocol": "sftp",
  "port": 22,
  "username": "user1",
  "remotePath": "/folder1/folder2/folder3",
  "context": "./build",
  "uploadOnSave": false,
  "watcher": {
    "files": "*.{js,html}",
    "autoUpload": true,
    "autoDelete": false
  }
}
```

## root 権限でファイルをアップロードするには？

[vscode-sftp issue #559](https://github.com/liximomo/vscode-sftp/issues/559) を参照してください。

**Yevhen-development** による回避策がありますが、環境によっては動作しない場合があります。`sftp.json` に以下を設定してください。

```json
"sshCustomParams": "sudo su -;"
```

## ユーザー操作なしで双方向同期したい

[vscode-sftp issue #136](https://github.com/Natizyskunk/vscode-sftp/issues/136) を参照してください。

> *これは **GIT** と組み合わせても使えます。ブランチ切り替えや変更・コミットの巻き戻し時に、サーバー側もあわせて更新できます。*

```json
{
  "name": "My Server",
  "host": "<host_ip_address>",
  "protocol": "sftp",
  "port": 22,
  "username": "user1",
  "remotePath": "/folder1/folder2/folder3",
  "uploadOnSave": false,
  "watcher": {
    "files": "**/*",
    "autoUpload": true,
    "autoDelete": true
  },
  "syncOption": {
    "delete": true
  }
}
```

## リモートエクスプローラーにドットファイルや隠しファイルを表示したい

### proftpd を使っている場合

`proftpd.conf` を編集してください。インストール環境によって、場所は以下のいずれかです。

- `/etc/proftpd.conf`
- `/etc/proftpd/proftpd.conf`
- `/usr/local/etc/proftpd.conf`
- `/usr/local/etc/proftpd/proftpd.conf`

`ListOptions` を探し、`"-l"` から `"-la"` に変更してください。

次のような設定になります。

```conf
#Global settings
<Global>
[...]
ListOptions 		"-la"
[...]
</Global>
```
