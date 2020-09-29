
interface HTTHeader {
    [name: string]: string;
}

interface IHeader {
    headers: HTTHeader,
    credentials?: string,
    method?: string,
    body?: string
}

export interface IHeaders {
    getHeader: () => IHeader;
    postHeader: (form: any) => IHeader;
    deleteHeader: () => IHeader;
}

export interface IPath {
    channelsPath: () => string;
}