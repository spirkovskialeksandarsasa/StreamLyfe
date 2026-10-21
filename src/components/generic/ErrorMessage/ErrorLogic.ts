import { useCallback, useState } from "react";

export function useErrorHandling(){
  
    const [error, setError] = useState(false);
    
    const handleError = useCallback(() => {
        setError(true);
    }, []);

    return { error, handleError };
}