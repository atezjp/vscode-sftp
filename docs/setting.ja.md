## 設定

SFTP にはいくつかの設定項目があり、以下から変更できます。

- Windows/Linux: `File --> Preferences --> Settings`
- macOS: `Code --> Preferences --> Settings`

### debug

SFTP 出力パネルにデバッグ情報を表示します。<br>
ログは `View --> Output --> SFTP` で確認できます。変更後は VSCode の再読み込みが必要です。

| Key | Value | Default |
| --- | --- | --- |
| *debug* | *boolean* | *false* |

```json
{
  "name": "My Server"
}
```

### downloadWhenOpenInRemoteExplorer

Remote Explorer でファイルを開いたときの既定動作を、`View Content` から `Edit in Local` に変更します。

| Key | Value | Default |
| --- | --- | --- |
| *debug* | *boolean* | *false* |

```json
{
  "name": "My Server"
}
```
