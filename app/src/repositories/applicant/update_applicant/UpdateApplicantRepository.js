/* eslint-disable @typescript-eslint/use-unknown-in-catch-callback-variable */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  createAxiosMultipartPostRequest,
  createAxiosPostRequest,
} from "../../../utils/api_client.js";
import { BaseRepository } from "../../__base__/BaseRepository.js";

/**
 * Repository class for performing API operations.
 *
 * Extend this class for specific endpoints and implement `onDevise()`
 * to define the actual API request logic.
 */
export class UpdateApplicantRepository extends BaseRepository {
  /**
   * @param {Object} payload - Data to send with the API request
   * @param {number} retryAttempts - Number of times to retry on failure
   */
  constructor(payload = {}, retryAttempts = 1) {
    super({ endpoint: "update_applicant.php", payload, retryAttempts });
  }

  /**
   * Defines how the API request should be performed.
   *
   * Child classes should implement this method to perform their own API call.
   * Use `this._onSuccess`, `this._onFailure`, and `this._onServerException`
   * to handle results and trigger chainable listeners.
   */
  onDevise() {
    createAxiosMultipartPostRequest(this.endpoint, this.payload)
      .then(({ state, data }) => {
        if (state === "OK") {
          this._onSuccess(data.applicant);
        } else if (state === "FAILURE") {
          const { exceptions } = data;
          this._onFailure(Object.entries(exceptions)[0][0]);
        }
      })
      .catch((err) => {
        this._onServerException(err);
      });
  }
}
