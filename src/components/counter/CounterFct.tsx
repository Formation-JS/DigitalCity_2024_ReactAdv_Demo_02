import { useCallback, useEffect, useState } from "react";

// Composant "Counter" de type "fonction"
const CounterFct = () => {

    //? State
    const [count, setCount] = useState(0);

    //? Effet : Montage + Démontage (Restore Title)
    useEffect(() => {
        const backupTitle = document.title;
        return () => {
            document.title = backupTitle;
        }
    }, []);

    //? Effet : Montage + Update (Display Count)
    useEffect(() => {
        document.title = `Count : ${count}`;
    }, [count]);
    
    //? Deux méthodes pour traiter les click
    const handleIncr = useCallback(() => {
        setCount(count => count + 1);
    }, []);   

    const handleDecr = useCallback(() => {
        setCount(count => count - 1);
    }, []);

    //? Le rendu
    return (
        <div>
            <p>Counter Fct : {count}</p>
            <button onClick={handleIncr}>+ 1</button>
            <button onClick={handleDecr}>- 1</button>
        </div>
    );
}

export default CounterFct;