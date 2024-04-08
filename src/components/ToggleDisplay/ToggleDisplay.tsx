import { PropsWithChildren, ReactNode, useCallback, useState } from 'react';

// // Typage des props avec la définition du children de l'element
// type ToggleDisplayProps = {
//     name?: string;
//     children?: ReactNode; // Type de tout les élément React qui peut être rendu
// };

// Typage des props sans children de l'element
type ToggleDisplayProps = {
    name?: string;
};

// Délégation de contenu
const ToggleDisplay = ({ name, children }: PropsWithChildren<ToggleDisplayProps>) => {

    const [isVisible, setVisible] = useState<boolean>(false);

    const handleToggleBtn = useCallback(() => {
        setVisible(visible => !visible);
    }, []);

    return (
        <div>
            <button onClick={handleToggleBtn}>{name ?? 'Afficher'}</button>
            {isVisible && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
};

export default ToggleDisplay;