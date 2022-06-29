export interface IHitApi {
  url: string;
  ignoreBaseUrl: boolean;
  requestMethod: RequestMethod;
  input?: any;
}

export enum RequestMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}
