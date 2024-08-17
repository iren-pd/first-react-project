import { useEffect, useState } from 'react';
import './Body.css';

export const Body = () => {
    const [toggle, setToggle] = useState(false);
    const title = `title${toggle ? ' title-white' : ''}`;

    const handleToggle = () => setToggle((prev) => !prev);

    useEffect(() => {
        console.log(toggle);
    }, [toggle]);

    return (
        <main className="main">
            <div className="container p-4">
                <h2 className={title}>Title</h2>
                <p className={`text${toggle ? '' : ' hide'}`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque amet voluptate, ut architecto modi consequatur
                    quidem assumenda quos nesciunt veritatis. Animi labore
                    voluptatem dolor odit unde ducimus distinctio aspernatur
                    inventore.
                </p>

                <button onClick={handleToggle} className="btn-submit">
                    Submit
                </button>
            </div>
        </main>
    );
};
