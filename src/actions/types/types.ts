interface BaseResponse {
  status: boolean;
  headers?: Record<string, string>;
}
export interface SuccessResponse<T> extends BaseResponse {
  status: true;
  data: T;
}

interface ErrorResponse extends BaseResponse {
  status: false;
  code: number;
}

export type AnyResponse<T> = SuccessResponse<T> | ErrorResponse;
