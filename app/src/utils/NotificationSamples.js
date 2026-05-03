import { ErrorNotification } from "./NotificationBuilder.js";

export const operationFailedNotification = (failure='', show_failure=true) => {
  // Private config for default behavior
  const defaultConfig = {
    title: "Operation Failed",
    message:
      "An unexpected error occurred. Please refresh the page or verify your internet connection and try again.",
    duration: 5000, // auto-dismiss after 5 seconds
  };

  // If failure message provided, append it
  const finalMessage = show_failure
    ? `${defaultConfig.message}Details: ${failure}`
    : defaultConfig.message;

  // Build and show notification
  return new ErrorNotification()
    .withTitle(defaultConfig.title)
    .withMessage(finalMessage)
    .setDuration(defaultConfig.duration)
    .build();
};
