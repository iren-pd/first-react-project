import React, { useEffect, useState } from 'react';
import { Button } from '../../ui';

export const HomeWorkPage = () => {
    const [num, setNum] = useState(0);
    const [text, setText] = useState(false);
    const handler = (operation) => {
        if (operation === 'minus') setNum((prev) => prev - 1);
        if (operation === 'plus') setNum((prev) => prev + 1);
    };

    useEffect(() => {
        num !== 0 ? setText(true) : setText(false);
    }, [num]);

    return (
        <div>
            <p>Твое число: {num}</p>
            {text && <p>Число равно {num}</p>}
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
