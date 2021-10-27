import { useEffect, useState } from 'react';
import axios from 'axios';

const Parametrecomptes = function () {
    const [parametrecomptes, setParametrecomptes] = useState([]);
    const [refresh, toggleRefresh] = useState(0);
    const refreshParent = () => {
        toggleRefresh(refresh + 1);
    };

    useEffect(() => {
        fetchParametrecomptes();
    }, [refresh]);

    async function fetchParametrecomptes() {
        const { data } = await axios.get('/api/parametrecomptes');
        setParametrecomptes(data);
    }
    return (
        <div>
            <h2>Remarques</h2>
            <ol>
                {parametrecomptes.map(Parametrecompte => {
                    return (
                        <li key={Parametrecompte.id}>
                            <strong>{Parametrecompte.typecompte}</strong> {Parametrecompte.typecompte} 
                            <sub>de: {Parametrecompte.sourcing}</sub>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Parametrecomptes;