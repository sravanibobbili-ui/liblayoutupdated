import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GridsterExample() {
    const [erSystems, setErSystems] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://libapps.tamucc.edu/api/liblayout/read_Avail_Angular.php?param=ER');
            setErSystems(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div style={{ padding: '120px' }}>
            <h1>ER</h1>
            {erSystems && (
                <div className="options-header">
                    {erSystems.data.map(erSystem => (
                        <div key={erSystem.host_name}>
                            <div className="gridster-item" style={{ fontSize: '14px' }}>
                                {erSystem.status === '0' && (
                                    <img src="assets/images/free.gif" height="40" width="40"
                                        alt={`${erSystem.host_name}\n${erSystem.position} (Available)`}
                                        className="test" />
                                )}
                                {erSystem.status === '1' && (
                                    <img src="assets/images/occupied.gif" height="40" width="40"
                                        alt={`${erSystem.host_name}\n${erSystem.position} (In-Use)`}
                                        className="test" />
                                )}
                                {erSystem.status === '2' && (
                                    <img src="assets/images/warning.gif" height="40" width="40"
                                        alt={`${erSystem.host_name}\n${erSystem.position} (Available)`}
                                        className="test" />
                                )}
                                <br />
                                {erSystem.position}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}



export default GridsterExample;
