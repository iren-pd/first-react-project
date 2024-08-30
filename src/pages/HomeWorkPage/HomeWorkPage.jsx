import React, { useState } from 'react';
import { Button } from '../../ui';

export const HomeWorkPage = () => {
    const [num, setNum] = useState(0);
    const handler = (operation) => {
        if (operation === 'minus') setNum((prev) => prev - 1);
        if (operation === 'plus') setNum((prev) => prev + 1);
    };

    return (
        <div>
            <p>Твое число: {num}</p>
            <div className="container flex">
                <Button
                    onClick={() => handler('minus')}
                    variant="warning"
                    className="mr-4"
                >
                    -1
                </Button>
                <Button onClick={() => handler('plus')} variant="danger">
                    +1
                </Button>
            </div>
        </div>
    );
};
