## FTP(s) 専用設定

### secure

制御接続とデータ接続の両方を暗号化するには `true` を指定します。<br>
制御接続のみ暗号化する場合は `control`、暗黙的に暗号化された制御接続を使う場合は `implicit` を指定します（この方式は現在では非推奨ですが、通常はポート 990 を使います）。

| Key | Value | Default |
| --- | --- | --- |
| *secure* | *mixed* | `false` |

```json
{
  "secure": control
}
```

### secureOptions

`tls.connect()` に渡す追加オプションです。

| 💡 Note |
| :--- |
| *詳しくは [TLS connect options callback](https://nodejs.org/api/tls.html#tls_tls_connect_options_callback) を参照してください。* |

| Key | Value |
| --- | --- |
| *secureOptions* | *object* |

```json
{
  "secureOptions": {
    "enableTrace": true
  }
}
```
