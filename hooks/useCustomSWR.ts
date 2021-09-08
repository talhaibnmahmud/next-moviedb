import useSWR from "swr";

import { fetcher } from "@helpers/fetcher";

interface SWRReturn {
    data: any;
    error: any;
    isError: boolean;
    isLoading: boolean;
}

const useCustomSWR = <Data = any, Error = any>(
    url: string,
    isReady: boolean
): {
    data: Data | undefined;
    error: Error | undefined;
    isError: boolean;
    isLoading: boolean;
} => {
    const { data, error } = useSWR<Data, Error>(isReady ? url : null, fetcher);

    return {
        data,
        error,
        isError: !!error,
        isLoading: !data && !error,
    };
};

export { useCustomSWR };
