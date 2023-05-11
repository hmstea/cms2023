import {useEffect, useState} from 'react';
import querystring from 'query-string'
import {loginResult} from "../services/AuthService";
import {useLocation} from "react-router-dom";

function useLoginResult() {
    const {search} = useLocation();

    const query= querystring.parse(search);

    const [url, setUrl] = useState<string | null>(null);

    useEffect(  () => {
        (async function(){
            const credential = await loginResult();
            if(credential.result === 'success') {
                const rtnUrl:string = (query.rtnUrl === null || query.rtnUrl === undefined) ? "/" : query.rtnUrl as string;
                setUrl(rtnUrl);
            } else {
                setUrl("");
            }
        })();

    },[]);

    return url;
}

export default useLoginResult;