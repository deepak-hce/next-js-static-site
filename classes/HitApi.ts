import axios from "axios";
import { environment } from "../Environment/environment";
import { IHitApi, RequestMethod } from "../interfaces/IHitApi";

export class HitApi {
  static async HitApi(apiParams: IHitApi) {
    return new Promise((resolve, reject) => {
      let url = apiParams.url;
      if (!apiParams.ignoreBaseUrl) {
        url = environment.baseUrl + url;
      }

      console.log(
        "----------------------------------------------API PARAMS CONSOLE------------------------------------------------",
        apiParams
      );

      let axiosInstance = null;

      const configuration = {
        headers: {
          // authorization: null,
          // 'Content-Type': apiParams.ignoreBaseUrl ? 'application/octet-stream' : 'application/json'
        },
      };

      switch (apiParams.requestMethod) {
        case RequestMethod.GET:
          axiosInstance = axios.get(url, configuration);
          break;

        case RequestMethod.POST:
          axiosInstance = axios.post(url, apiParams.input, configuration);
          break;

        case RequestMethod.PUT:
          axiosInstance = axios.put(url, apiParams.input, configuration);
          break;

        case RequestMethod.DELETE:
          axiosInstance = axios.delete(url, configuration);
          break;

        default:
          axiosInstance = axios.get(url, configuration);
          break;
      }

      axiosInstance
        .then((response) => {
          console.log(
            "-----------------------------------------------API RESPONSE--------------------------------------------------------------",
            response
          );

          if (response && response.data) {
            resolve(response.data);
          }
        })

        .catch((error) => {
          console.log(
            "-------------------------------------------API ERROR ---------------------------------------------------------------------------",
            error
          );

          reject(error);
        });
    });
  }
}
