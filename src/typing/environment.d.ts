declare global {
    namespace NodeJS {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        interface ProcessEnv {
            API_URL: string;
            API_TOKEN: string;
        }
    }
}

export {};
