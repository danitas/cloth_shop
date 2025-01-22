import axios from 'axios';

type RequestTypes = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type TAxiosRequest =
  | {
      method: 'GET' | 'DELETE';
      url: string;
      params?: Record<string, unknown>;
    }
  | {
      method: RequestTypes;
      url: string;
      params: Record<string, unknown>;
    };

const axiosRequest = async <Response extends object>({
  method,
  url,
  params,
}: TAxiosRequest) => {
  try {
    const result = await axios<Response>({
      method,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      url: `${import.meta.env.VITE_REACT_APP_API_BASE_URL}${url}`,
      data: params,
    });

    return result.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error('Axios error:', e.message);
    } else {
      console.error('General error:', (e as Error).message);
    }
    throw e;
  }
};

export default axiosRequest;
