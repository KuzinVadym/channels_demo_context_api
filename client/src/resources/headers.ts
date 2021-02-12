import {IHeaders} from "./interfaces";

class Headers implements IHeaders {
    private static instance: Headers;

    private constructor() { }

    public static getInstance(): Headers {
        if (!Headers.instance) {
            Headers.instance = new Headers();
        }

        return Headers.instance;
    }

    getHeader() {
        return{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        }
    }
    postHeader(form: any){
        return {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(form)
        }
    }
    deleteHeader(){
        return {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            method: 'DELETE'
        }
    }
}

const headers = (function () {
    return Headers.getInstance()
}());

export default headers;