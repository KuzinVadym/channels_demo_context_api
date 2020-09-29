import { API_URL } from '../config'
import { IPath } from "./interfaces";

class Path implements IPath {
    private static instance: Path;

    private constructor() { }

    public static getInstance(): Path {
        if (!Path.instance) {
            Path.instance = new Path();
        }

        return Path.instance;
    }

    channelsPath() {
        return `${API_URL}/api/v1/channels`;
    }
}

/**
 * Клиентский код.
 */
const pathUtils = (function () {
    return Path.getInstance()
}());

export default pathUtils;