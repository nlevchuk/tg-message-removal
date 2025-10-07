import type { Composer, Context } from 'grammy'

import type { MessageRemovalConfig, Logger } from './types.js'
import removeMessage from './removeMessage.js'

export type { MessageRemovalConfig, Logger }

export function messageRemoval<C extends Context>(
  composer: Composer<C>,
  config: MessageRemovalConfig
): Composer<C> {
  composer.reaction('💩', removeMessage(config));

  return composer;
}
