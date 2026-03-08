## 共通コマンド

### SFTP: Config

プロジェクト用の新しい設定ファイルを作成します。

### SFTP: Set Profile

現在のプロファイルを設定します。

#### KeyBindings Args

`func(profileName: string)`

### SFTP: Upload Active File

現在のファイルをアップロードします。

### SFTP: Upload Changed Files

最後の Git コミット以降に変更または作成されたファイルをすべてアップロードします。  
既定のキーボードショートカット `Ctrl+Alt+U` で呼び出せます。

### SFTP: Upload Active Folder

現在のファイルが含まれるフォルダ全体をアップロードします。

### SFTP: Download Active File

現在のファイルに対応するリモート版をダウンロードし、ローカルファイルを上書きします。

### SFTP: Download Active Folder

現在のファイルが含まれるフォルダ全体をダウンロードします。

### SFTP: Sync Local -> Remote

1. ローカルとリモートの両方に存在し、タイムスタンプが異なるファイルをコピーします。
2. ローカルにのみ存在するファイルをコピーします。

既定動作は [syncOption](https://github.com/Natizyskunk/vscode-sftp/wiki/Configuration#syncoption) で変更できます。

### SFTP: Sync Remote -> Local

`Sync Local -> Remote` と同じ処理を逆方向に行います。

### SFTP: Sync Both Directions

ファイルの更新日時を比較し、両方の場所に常に最新ファイルが残るように同期します。

*このコマンドで有効なのは [skipCreate](https://github.com/Natizyskunk/vscode-sftp/wiki/Configuration#syncoptionskipcreate) と [ignoreExisting](https://github.com/Natizyskunk/vscode-sftp/wiki/Configuration#syncoptionignoreexisting) のみです。*

### SFTP: List Active Folder

現在のファイルがあるフォルダを一覧表示します。

### sftp.upload

ファイルまたはフォルダをアップロードします。

#### KeyBindings Args

`func(fspaths: string[])`

### sftp.download

ファイルまたはフォルダをダウンロードします。

#### KeyBindings Args

`func(fspaths: string[])`

### SFTP: Cancel All Transfers

現在の転送処理（アップロード / ダウンロード）を停止します。

### SFTP: Open SSH in Terminal

VSCode 内にターミナルを開き、指定サーバーへ自動ログインします。

## Alt コマンド

メニューを開く際に `Alt` を押すと、代替コマンドを利用できます。

### Force Download

ignore ルールを無視してファイルをダウンロードします。

### Force Upload

ignore ルールを無視してファイルをアップロードします。
