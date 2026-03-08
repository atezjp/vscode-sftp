## SFTP 専用設定

### agent

ssh-agent ベース認証で使用する ssh-agent の UNIX ソケットへのパスです。<br>
Windows では Pageant を使う場合に `pageant` を指定するか、Cygwin の UNIX ソケット実パスを指定してください。<br>
一部のクライアント / サーバーには制限があるため、安定性向上につながる場合があります。

| Key | Value |
| --- | --- |
| *agent* | *string* |

```json
{
  "agent": "/_subfolder_/agent"
}
```

### privateKeyPath

ユーザーの秘密鍵への絶対パスです。

| Key | Value |
| --- | --- |
| *privateKeyPath* | *string* |

```json
{
  "privateKeyPath": "/.ssh/key.pem"
}
```

### passphrase

暗号化された秘密鍵を復号するためのパスフレーズです。<br>
`true` にするとパスフレーズ入力ダイアログを有効化し、この設定ファイルへ平文で書かずに済みます。

| Key | Value |
| --- | --- |
| *passphrase* | *mixed* |

```json
{
  "passphrase": true
}
```

### interactiveAuth

キーボードインタラクティブ認証を有効にします。`true` にすると `verifyCode` ダイアログが有効になります。<br>
たとえば Google Authentication のような多要素認証で利用できます。あらかじめ文字列配列を渡して、ユーザーへ確認せず自動入力することもできます。

| 💡 Note |
| :--- |
| *サーバー側で keyboard-interactive 認証が有効になっている必要があります。* |

| Key | Value | Default |
| --- | --- | --- |
| *interactiveAuth* | *boolean*\|*string[]* | `false` |

```json
{
  "interactiveAuth": true
}
```

### algorithms

接続で使用するトランスポート層アルゴリズムを明示的に上書きします。

**既定値**:

```json
{
  "algorithms": {
    "kex": [
      "ecdh-sha2-nistp256",
      "ecdh-sha2-nistp384",
      "ecdh-sha2-nistp521",
      "diffie-hellman-group-exchange-sha256"
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
      "rsa-sha2-512",
      "rsa-sha2-256"
    ],
    "hmac": [
      "hmac-sha2-256",
      "hmac-sha2-512"
    ]
  }
}
```

### sshConfigPath

SSH 設定ファイルへの絶対パスです。

| Key | Value | Default |
| --- | --- | --- |
| *sshConfigPath* | *string* | `~/.ssh/config` |

```json
{
  "sshConfigPath": "~/.ssh/config"
}
```

### sshCustomParams

`Open SSH in Terminal` が使用する SSH コマンドへ追加される追加パラメータです。

| Key | Value |
| --- | --- |
| *sshCustomParams* | *string* |

```json
{
  "sshCustomParams": "-g"
}
```
