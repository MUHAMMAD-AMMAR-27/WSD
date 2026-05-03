/**
 * BaseRepository
 *
 * Abstract class for API repositories.
 * Provides chainable listeners and retry logic for network/server errors.
 *
 * Child classes should override `onDevise()` with the actual API call logic.
 */
export class BaseRepository {
  /**
   * @param {Object} config
   * @param {string} config.endpoint - API endpoint
   * @param {Object} config.payload - Data to send with API call
   * @param {number} config.retryAttempts - Number of retry attempts
   */
  constructor({ endpoint = "", payload = {}, retryAttempts = 1 } = {}) {
    this.endpoint = endpoint;
    this.payload = payload;
    this.retryAttempts = retryAttempts;
    this._attempt = 0;

    // Chainable listeners
    this._onSuccess = () => { /* empty */ };
    this._onFailure = () => { /* empty */ };
    this._onServerException = () => { /* empty */ };
    this._onLoading = () => { /* empty */ };
  }

  /**
   * Add a listener for successful API response
   * @param {Function} callback
   * @returns {BaseRepository}
   */
  addOnSuccessListener(callback) {
    this._onSuccess = callback;
    return this;
  }

  /**
   * Add a listener for API failure response
   * @param {Function} callback
   * @returns {BaseRepository}
   */
  addOnFailureListener(callback) {
    this._onFailure = callback;
    return this;
  }

  /**
   * Add a listener for server/network exception
   * @param {Function} callback
   * @returns {BaseRepository}
   */
  addOnServerExceptionListener(callback) {
    this._onServerException = callback;
    return this;
  }

  /**
   * Add a listener for when API call starts
   * @param {Function} callback
   * @returns {BaseRepository}
   */
  addOnLoadingListener(callback) {
    this._onLoading = callback;
    return this;
  }

  /**
   * Child classes must override this method with actual API logic.
   * This is called internally by execute().
   *
   * Inside this method, child class should call:
   *   this._onSuccess(data)       -> for successful API response
   *   this._onFailure(error)      -> for API returned failure
   *   this._onServerException(err)-> for network/server exceptions
   */
  onDevise() {
    throw new Error("onDevise() must be implemented in child class");
  }

  /**
   * Execute the API call with retry logic.
   * Only retries for server/network exceptions.
   */
  execute() {
    this._attempt = 0;
    this._onLoading();

    const attemptCall = () => {
      this._attempt++;
      this.onDevise();
    };

    // Wrap server exception to retry if attempt < retryAttempts
    const originalOnException = this._onServerException;
    this._onServerException = (exception) => {
      console.log(exception);
      if (this._attempt < this.retryAttempts) {
        attemptCall(); // retry for network/server error
      } else {
        originalOnException(exception); // final exception callback
      }
    };

    // Start first attempt
    attemptCall();
  }
}
