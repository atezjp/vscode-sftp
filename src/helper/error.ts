import * as output from '../ui/output';
import logger from '../logger';
import { showErrorMessage } from '../host';
import { localize } from '../i18n';

export function reportError(err: Error | string, ctx?: string) {
  let errorString: string;
  if (err instanceof Error) {
    errorString = err.message;
    logger.error(`${err.stack}`, ctx);
  } else {
    errorString = err;
    logger.error(errorString, ctx);
  }

  const detailLabel = localize('button.detail', 'Detail');
  showErrorMessage(errorString, detailLabel).then(result => {
    if (result === detailLabel) {
      output.show();
    }
  });
  return;
}
