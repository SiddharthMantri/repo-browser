import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useCallback, useState, useRef } from 'react';
import { useAsync } from 'react-async-hook';
import API from '../api';


/**
 * Hook that has a semantic guarantee for exactly one value at any time,
 * something useMemo doesn't guarantee
 * @param {} fn
 */
type ResBox<T> = { value: T }

const useConstant = <T>(fn: () => T): T => {
    const ref = useRef<ResBox<T>>();
    if (!ref.current) {
        ref.current = { value: fn() };
    }
    return ref.current.value;
};


const useAsyncInput = (searchVal: string) => {
    const [value, setValue] = useState(searchVal);
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(false);
    const searchGithubUser = useCallback((searchString: string) => {
        setLoading(true)
        API.searchUser(searchString).then(data => {
            setLoading(false)
            setResponse(data);
        })
    }, [])
    // @ts-ignore
    const debouncedSearch = useConstant((value: string) => AwesomeDebouncePromise(searchGithubUser, 300));
    const searchResult = useAsync(async () => {
        if (value.length === 0) {
            return {};
        }
        return debouncedSearch(value);
    }, [value]);
    const onChange = useCallback((e) => {
        setValue(e.target.value);
        if (e.target.value === '') {
            setResponse({ items: [] })
        }
    }, []);

    return [value, onChange, response, loading]
}
export default useAsyncInput;