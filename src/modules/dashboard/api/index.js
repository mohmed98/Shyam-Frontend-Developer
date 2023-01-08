import api from "../../../api";
import { convertObjectToQuerystring } from "../../../utils/helper";

export const getCapsuleDataApi = (filters) => {
  return api(
    `${process.env.REACT_APP_API_URL}/v3/capsules?${convertObjectToQuerystring(
      filters
    )}`,
    { method: "get" }
  );
};
