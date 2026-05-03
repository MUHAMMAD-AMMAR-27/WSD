/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { queueNotification } from "../../components/ui_kit/wsd_notification_system/wsdNotificationsSlice.js";
import { WarningNotification } from "./NotificationBuilder.js";

export const tokenValidationMiddleware = (dispatch, navigate, next) => {
  return (exception) => {
    const possibleExceptions = [
      "missing_access_token",
      "missing_access_token_cookie",
      "invalid_bearer_access_token",
    ];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (exception?.message && possibleExceptions.includes(exception.message)) {
      window.localStorage.removeItem("user");
      navigate("/login", { replace: true });
      dispatch(
        queueNotification(
          new WarningNotification()
            .withTitle("Session Expired")
            .withMessage("Your session has expired. Please sign in again.")
            .setDuration(3000)
            .build()
        )
      );
      return;
    }

    next?.(exception);
  }
}
