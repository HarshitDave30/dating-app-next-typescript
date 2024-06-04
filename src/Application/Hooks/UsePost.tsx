import { Dispatch, SetStateAction, useState } from 'react';
import { FormData } from '../Components/SignUp/SignUp';

async function postData(path: string, userFormData: FormData, setData: Dispatch<SetStateAction<FormData[]>>, setError: Dispatch<SetStateAction<any>>) {
    const response = await fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userFormData)
    })

    const json = await response.json()

    if (!response.ok) {
        setError(json?.error)
        return
    }

    if (response.ok) {
        setData(json)
        return
    }
}

export const UsePost = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<FormData[]>([]);

    const handlePostData = async (path: string, userFormData: FormData) => {
        setLoading(true);
        try {
            const responseData = await postData(path, userFormData, setData, setError);

            return responseData;

        } catch (error) {
            setError('Something went wrong');
        }
        setLoading(false);
    };

    return { handlePostData, data, error, loading };
}
