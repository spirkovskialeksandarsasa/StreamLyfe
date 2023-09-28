import { useState } from "react";

export function useErrorHandling(){
  
    const [error, setError] = useState(false);
    
    const handleError = () => {
        setError(true);
    }

    return { error, handleError };
}