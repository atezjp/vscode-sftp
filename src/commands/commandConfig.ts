import * as vscode from 'vscode';
import { COMMAND_CONFIG } from '../constants';
import { newConfig } from '../modules/config';
import {
  getWorkspaceFolders,
  showConfirmMessage,
  showOpenDialog,
  openFolder,
  addWorkspaceFolder,
} from '../host';
import { checkCommand } from './abstract/createCommand';
import { localize } from '../i18n';

export default checkCommand({
  id: COMMAND_CONFIG,

  async handleCommand() {
    const workspaceFolders = getWorkspaceFolders();
    if (!workspaceFolders) {
      const result = await showConfirmMessage(
        localize('message.sftpExpectsFolder', 'SFTP expects to work at a folder.'),
        localize('button.openFolder', 'Open Folder'),
        localize('button.ok', 'Ok')
      );

      if (!result) {
        return;
      }

      return openFolder();
    }

    if (workspaceFolders.length <= 0) {
      const result = await showConfirmMessage(
        localize('message.noAvailableFolders', 'There are no available folders in current workspace.'),
        localize('button.addFolderToWorkspace', 'Add Folder to Workspace'),
        localize('button.ok', 'Ok')
      );

      if (!result) {
        return;
      }

      const resources = await showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: true,
      });

      if (!resources) {
        return;
      }

      addWorkspaceFolder(...resources.map(uri => ({ uri })));
      return;
    }

    if (workspaceFolders.length === 1) {
      newConfig(workspaceFolders[0].uri.fsPath);
      return;
    }

    const initDirs = workspaceFolders.map(folder => ({
      value: folder.uri.fsPath,
      label: folder.name,
      description: folder.uri.fsPath,
    }));

    vscode.window
      .showQuickPick(initDirs, {
        placeHolder: localize('prompt.selectFolder', 'Select a folder...'),
      })
      .then(item => {
        if (item === undefined) {
          return;
        }

        newConfig(item.value);
      });
  },
});
