/* eslint-disable @typescript-eslint/no-explicit-any */
const defaultHeaders = {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
    "Content-Type": "application/json",
};

export interface IFetchResult<T> {
    data: T;
    headers: Headers;
}

export const fetcher = <T = any>(
    url: string,
    init?: RequestInit,
    shouldReturnHeaders?: boolean
): Promise<T | IFetchResult<T>> => {
    const headers = new Headers({ ...defaultHeaders, ...init?.headers });

    return fetch(url, {
        ...init,
        headers,
    }).then(async (response) => {
        const contentType = response.headers.get("content-type");
        if (response.ok && (contentType === null || response.status === 204)) {
            return true;
        }

        if (!response.ok || response.status >= 400) {
            throw await response.json();
        }

        return shouldReturnHeaders
            ? Promise.resolve({ data: await response.json(), headers: response.headers } as IFetchResult<T>)
            : response.json();
    });
};
