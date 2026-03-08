import * as vscode from 'vscode';
import { GitExtension, API, Status, Change, Repository } from './git';

let git: API | undefined;

export { API as GitAPI, Repository, Status, Change };

export function getGitService(): API | undefined {
  if (git) {
    return git;
  }

  const extension = vscode.extensions.getExtension<GitExtension>('vscode.git');
  if (!extension) {
    return undefined;
  }

  const gitExtension = extension.exports;
  if (!gitExtension) {
    return undefined;
  }

  git = gitExtension.getAPI(1);
  return git;
}
