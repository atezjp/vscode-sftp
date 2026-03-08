# vscode-sftp へのコントリビュート

あなたのフォーク上で変更用ブランチを作成したら、[プルリクエスト][pr-link] を作成してください。

*vscode-sftp への Pull Request を作成する際は、以下のガイドラインに従ってください。*

## Pull Request ガイドライン

* 説明文は 100 文字以内に収めてください。
* PR タイトルは `Add/Remove/Fix <feature>` の形式にしてください。例: `Add OpenSSH`
* コミットメッセージは短く説明的にしてください。例: ❌ `Update Readme.md` / ✔ `Add OpenSSH connection Method`
* 新しい PR を作成する前に、既存の Pull Request や Issue を検索してください。重複している可能性があります。
* 機能には適切なドキュメントを必ず追加してください。
* プルリクエストを開く前に、コミットは squash して 1 つにまとめてください。レビュー後に追加修正を行った場合も同様にまとめてください。手順は [この wiki ページ][squash-link] を参照してください。
* Pull Request の送信先ブランチは `vscode-sftp` の `master` にしてください。

プルリクエストを送信すると、コラボレーターが変更内容を確認し、取り込むかどうかを判断します。

### Pull Request のコツ

* リポジトリを [fork][fork-link] して、ローカルに [clone][clone-link] してください。
* 元の `upstream` リポジトリを [remote][remote-link] として追加してください。
* `upstream` から定期的に変更を取り込み、最新状態を保ってください。そうすることで、プルリクエスト時のマージコンフリクトを減らせます。詳しくは [こちら][syncing-link] を参照してください。
* 変更用の [branch][branch-link] を作成してください。
* 上記のプロジェクトスタイルに従ってコントリビュートしてください。そのほうがコラボレーターがマージしやすく、他の人も将来理解・保守しやすくなります。

### Open Pull Requests

プルリクエストを開くと、提案した変更内容について議論が始まります。

他のコントリビューターやユーザーも参加できますが、最終判断はコラボレーターが行います。

議論の中で、プルリクエストに追加修正を依頼されることがあります。

その場合は、ブランチに追加コミットして push してください。既存のプルリクエストに自動で反映されます。ただし、最終的には squash を忘れないでください。

プルリクエストを作成すると、プロジェクト内のリンクの有効性を確認するビルドが実行されます。ビルド完了後は、**必ずビルドが成功していることを確認してください**。失敗した場合は、ビルドログを確認して、あなたの変更に起因するエラーを修正してください。

*このプロジェクトに参加していただきありがとうございます。あなたの貢献を楽しみにしています。*

[branch-link]: <http://guides.github.com/introduction/flow/>
[clone-link]: <https://help.github.com/articles/cloning-a-repository/>
[fork-link]: <http://guides.github.com/activities/forking/>
[oauth-link]: <https://en.wikipedia.org/wiki/OAuth>
[pr-link]: <https://help.github.com/articles/creating-a-pull-request/>
[remote-link]: <https://help.github.com/articles/configuring-a-remote-for-a-fork/>
[syncing-link]: <https://help.github.com/articles/syncing-a-fork>
[squash-link]: <https://github.com/todotxt/todo.txt-android/wiki/Squash-All-Commits-Related-to-a-Single-Issue-into-a-Single-Commit>
