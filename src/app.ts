import * as LRU from 'lru-cache';
import StatusBarItem from './ui/statusBarItem';
import { COMMAND_TOGGLE_OUTPUT } from './constants';
import AppState from './modules/appState';
import RemoteExplorer from './modules/remoteExplorer';
import { localize, localizeWithArgs } from './i18n';

interface App {
  fsCache: LRU.Cache<string, string>;
  state: AppState;
  sftpBarItem: StatusBarItem;
  remoteExplorer: RemoteExplorer;
}

const app: App = Object.create(null);

app.state = new AppState();
app.sftpBarItem = new StatusBarItem(
  () => {
    if (app.state.profile) {
      return localizeWithArgs('statusBar.sftpProfile', app.state.profile);
    } else {
      return localize('statusBar.sftp', 'SFTP');
    }
  },
  localize('statusBar.tooltip', 'SFTP@Natizyskunk'),
  COMMAND_TOGGLE_OUTPUT
);
app.fsCache = LRU<string, string>({ max: 6 });

export default app;
