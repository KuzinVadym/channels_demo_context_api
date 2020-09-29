import { getChannels } from "../rest";

interface IFetchData {
    (
        load: (payload: any[]) => void,
        setLoading: (payload: boolean) => void,
        setError: (payload: string) => void
    ): void
}

const fetchData: IFetchData = async (load, setLoading, setError) => {
    console.log('Fetch Data');
    setLoading(true);
    try {
        const channels = await getChannels();
        load(channels);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        setError(error.message);
    }
};

export {
    fetchData
}