import { fetcher } from "@utils/fetcher";
import { SWRConfiguration } from "swr";

export const defaultSWRTestOptions: SWRConfiguration = {
    errorRetryCount: 0,
    shouldRetryOnError: false,
    revalidateOnReconnect: false,
    dedupingInterval: 0,
    // @ts-ignore
    provider: () => new Map(),
    fetcher,
};
