import { useCallback } from "react";

export const useHttp = () => {
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type' : 'application/json'}) => {
        try {
            
            const response = await fetch(url, {method, body, headers});
            if (!response.ok) {
                throw new Error(`Error: ${response.status}, url: ${url}`)
            }
            const data = response.json();
            return data;

        } catch (error) {

            throw error;

        }
    }, []);

    return {
        request
    }
}