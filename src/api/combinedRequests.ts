import * as requests from "./appRequests";

export const combinedRequests = {
  ...requests,
};

export type CombinedRequests = typeof combinedRequests
