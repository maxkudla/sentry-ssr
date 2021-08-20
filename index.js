import { isBrowser } from "browser-or-node";
import * as SentryBrowser from '@sentry/browser';
import * as SentryNode from '@sentry/node';

export default isBrowser ? SentryBrowser : SentryNode
