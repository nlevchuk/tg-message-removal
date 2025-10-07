import { GrammyError } from 'grammy'

import { MessageRemovalConfig } from './types.js'

// Add a tiny delay before deleting a message to avoid fast blinking
const DELETION_MESSAGE_TIMEOUT = 1000; // 1 sec

// A delay before the status message is deleted
const STATUS_MESSAGE_TIMEOUT = 3000; // 3 sec

const removeMessage = ({ textFormatter, logger }: MessageRemovalConfig) => {
  return (ctx): void => {
    setTimeout(async () => {
      try {
        await ctx.deleteMessage()
      } catch (error) {
        if (error instanceof GrammyError) {
          const statusMessage = await ctx.reply(
            textFormatter.warn('The message is over 48 hours old and cannot be deleted'),
            { parse_mode: 'HTML' },
          );

          setTimeout(statusMessage.delete, STATUS_MESSAGE_TIMEOUT);
        } else {
          logger.error(error);
        }
      }
    }, DELETION_MESSAGE_TIMEOUT);
  }
}

export default removeMessage;
