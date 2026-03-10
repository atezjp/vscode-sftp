import * as path from 'path';
import * as tmp from 'tmp';
import * as vscode from 'vscode';
import { CONGIF_FILENAME, CONFIG_PATHS } from '../constants';
import { upath } from '../core';

export function isValidFile(uri: vscode.Uri) {
  return uri.scheme === 'file';
}

export function isConfigFile(uri: vscode.Uri) {
  const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);
  if (!workspaceFolder) {
    return path.basename(uri.fsPath) === CONGIF_FILENAME;
  }

  const relativePath = path.relative(workspaceFolder.uri.fsPath, uri.fsPath);
  return CONFIG_PATHS.some(configPath => path.normalize(configPath) === path.normalize(relativePath));
}

export function fileDepth(file: string) {
  return upath.normalize(file).split('/').length;
}

export function makeTmpFile(option): Promise<string> {
  return new Promise((resolve, reject) => {
    tmp.file({ ...option, discardDescriptor: true }, (err, tmpPath) => {
      if (err) reject(err);

      resolve(tmpPath);
    });
  });
}
