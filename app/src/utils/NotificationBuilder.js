/**
 * NotificationBuilder
 *
 * Fluent builder for notification payloads.
 * Only explicitly set fields are included in the final object.
 */

/* =========================
   Base Builder
========================= */
class BaseNotificationBuilder {
  constructor(type = null) {
    this._payload = {};

    if (type) {
      this._payload.type = type;
    }
  }

  /**
   * Set custom notification ID
   * @param {string} id
   */
  withId(id) {
    this._payload.id = id;
    return this;
  }

  /**
   * Set notification title
   * @param {string} title
   */
  withTitle(title) {
    this._payload.title = title;
    return this;
  }

  /**
   * Set notification message
   * @param {string} message
   */
  withMessage(message) {
    this._payload.message = message;
    return this;
  }

  /**
   * Set auto-dismiss duration (ms)
   * @param {number} duration
   */
  setDuration(duration) {
    this._payload.duration = duration;
    return this;
  }

  /**
   * Build final notification object
   */
  build() {
    return {
      id: crypto.randomUUID(),
      ...this._payload,
    };
  }
}

/* =========================
   Notification Types
========================= */

/**
 * Error notification
 */
export class ErrorNotification extends BaseNotificationBuilder {
  constructor() {
    super("error");
  }
}

/**
 * Warning notification
 */
export class WarningNotification extends BaseNotificationBuilder {
  constructor() {
    super("warning");
  }
}

/**
 * Success notification
 */
export class SuccessNotification extends BaseNotificationBuilder {
  constructor() {
    super("success");
  }
}
