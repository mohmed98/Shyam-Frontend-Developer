import api from "../../../api";
import { convertObjectToQuerystring } from "../../../utils/helper";

export const getSampleApi = (filters, data) => {
  return api(
    `${process.env.URL}/v3/launches?${convertObjectToQuerystring(filters)}`,
    {
      method: "get",
      body: JSON.stringify(data),
    }
  );
};
