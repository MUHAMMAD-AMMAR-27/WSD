/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const createApiRoute = (route = "") => {
  return `${BASE_URL.replace(/\/+$/, "")}/${route.replace(/^\/+/, "")}`;
};

export const axiosXwwwFormUrlEncodedHeadersConfig = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  withCredentials: true,
};

export const createDataForEevee = (params = {}) => {
  return {
    __api_key__: "hi,-its-eevee. I can do wonderful things in api creation.",
    ...params,
  };
};

export const createMultipartDataForEevee = (params = {}) => {
  const formData = new FormData();

  formData.append("__api_key__", "hi,-its-eevee. I can do wonderful things in api creation.");

  for (const [key, value] of Object.entries(params)) {
    formData.append(key, value);
  }

  return formData;
};

/**
 * Sends an Axios POST request using `application/x-www-form-urlencoded`
 * and returns a Promise that resolves with the response data.
 *
 * @param {string} route - API endpoint route (relative)
 * @param {Object} [params={}] - Key-value pairs to be sent as POST data
 *
 * @returns {Promise<any>}
 * Resolves with `response.data` when the HTTP status is 200.
 * Rejects with an Error when the server responds with a non-200 status
 * or when the request fails.
 */
export const createAxiosPostRequest = (route, params = {}) => {
  return axios
    .post(
      createApiRoute(route),
      new URLSearchParams(createDataForEevee(params)),
      axiosXwwwFormUrlEncodedHeadersConfig
    )
    .then((res) => {
      console.group(`++++++++ Response for ROUTE: ${route}`);
      console.log("STATUS:", res.status);
      console.log("HEADERS:", res.headers);
      console.log("REQUEST:", res.request);
      console.log("CONFIG:", res.config);

      // Require HTTP 200
      if (res.status !== 200) {
        console.error("❌ Non-200 response");
        throw new Error("Server Error");
      }

      const payload = res.data;

      // Payload must be object
      if (typeof payload !== "object" || payload === null) {
        console.error("❌ Malformed payload:", payload);
        throw new Error("Server Error");
      }

      const { state, data } = payload;

      console.log("STATE:", state ?? "(missing)");
      console.log("DATA :", data ? JSON.stringify(data, null, 2) : "(none)");

      // missing state — unusable
      if (!state) {
        throw new Error("Server Error");
      }

      // ---- BAD_REQUEST errors ----
      if (state === "BAD_REQUEST") {
        const ex = data?.exceptions ?? {};
        const entries = Object.entries(ex);

        if (ex.missing_param === "__access_token__") {
          throw new Error("missing_access_token");
        }

        if (entries.length > 0) {
          const [key, val] = entries[0];
          throw new Error(`${key} ${String(val)}`);
        }
      }

      // ---- FAILURE errors ----
      if (state === "FAILURE") {
        const ex = data?.exceptions ?? {};

        if ("missing_bearer_access_token_cookie" in ex) {
          throw new Error("missing_access_token_cookie");
        }
        if ("invalid_bearer_access_token" in ex) {
          throw new Error("invalid_bearer_access_token");
        }
      }

      // ---- SUCCESS ----
      console.log("✔ OK");
      console.groupEnd();
      return payload; // <- IMPORTANT: returns intact for caller
    });
};

/**
 * Sends an Axios POST request using `application/form-data`
 * and returns a Promise that resolves with the response data.
 *
 * @param {string} route - API endpoint route (relative)
 * @param {Object} [params={}] - Key-value pairs to be sent as POST data
 *
 * @returns {Promise<any>}
 * Resolves with `response.data` when the HTTP status is 200.
 * Rejects with an Error when the server responds with a non-200 status
 * or when the request fails.
 */
export const createAxiosMultipartPostRequest = (route, params = {}) => {
  return axios
    .post(createApiRoute(route), createMultipartDataForEevee(params), {
      withCredentials: true,
    })
    .then((res) => {
      console.group(`+++ Response for ROUTE: ${route}`);
      console.log("STATUS:", res.status);
      console.log("HEADERS:", res.headers);
      console.log("REQUEST:", res.request);
      console.log("CONFIG:", res.config);

      // Require HTTP 200
      if (res.status !== 200) {
        console.error("❌ Non-200 response");
        throw new Error("Server Error");
      }

      const payload = res.data;

      // Payload must be object
      if (typeof payload !== "object" || payload === null) {
        console.error("❌ Malformed payload:", payload);
        throw new Error("Server Error");
      }

      const { state, data } = payload;

      console.log("STATE:", state ?? "(missing)");
      console.log("DATA :", data ? JSON.stringify(data, null, 2) : "(none)");

      // missing state — unusable
      if (!state) {
        throw new Error("Server Error");
      }

      // ---- BAD_REQUEST errors ----
      if (state === "BAD_REQUEST") {
        const ex = data?.exceptions ?? {};
        const entries = Object.entries(ex);

        if (ex.missing_param === "__access_token__") {
          throw new Error("missing_access_token");
        }

        if (entries.length > 0) {
          const [key, val] = entries[0];
          throw new Error(`${key} ${String(val)}`);
        }
      }

      // ---- FAILURE errors ----
      if (state === "FAILURE") {
        const ex = data?.exceptions ?? {};

        if ("missing_bearer_access_token_cookie" in ex) {
          throw new Error("missing_access_token_cookie");
        }
        if ("invalid_bearer_access_token" in ex) {
          throw new Error("invalid_bearer_access_token");
        }
      }

      // ---- SUCCESS ----
      console.log("✔ OK");
      console.groupEnd();
      return payload; // <- IMPORTANT: returns intact for caller
    });
};
