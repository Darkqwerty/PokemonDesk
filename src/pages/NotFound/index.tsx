import React, { useEffect, useState } from 'react';

import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import TeamR from './assets/TeamR.png';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
    const [screenX, setScreenX] = useState(0);
    const [screenY, setScreenY] = useState(0);

    useEffect(() => {
        const mouseMoveHandler = (event: MouseEvent) => {
            setScreenX(event.screenX);
            setScreenY(event.screenY);
        };

        window.addEventListener('mousemove', mouseMoveHandler);
        return () => window.removeEventListener('mousemove', mouseMoveHandler);
    }, [screenX, screenY]);

    return (
        <div className={s.root}>
            <div className={s.text404}>404</div>
            <div className={s.wrap}>
                <div
                    className={s.teamR}
                    style={{
                        transform: `translate(${screenY * 0.05}px, ${screenX * 0.05}px)`,
                    }}>
                    <img src={TeamR} alt="Team Rocket Trio" />
                </div>
                <div className={s.text}>
                    <span>The rocket team</span> has won this time.
                </div>
                <Button onClick={() => navigate(LinkEnum.HOME)}>Return</Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
