import React from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layouts';
import Parallax from '../../components/Parallax';

import s from './Empty.module.scss';

interface IEmptyPageProps {
    title?: string;
}

const EmptyPage: React.FC<IEmptyPageProps> = ({ title }) => {
    return (
        <>
            <Layout className={s.root}>
                <div className={s.contentText}>
                    <Heading size="xl">
                        <span>This is empty page for {title}!</span>
                    </Heading>
                </div>
                <div className={s.contentParallax}>
                    <Parallax />
                </div>
            </Layout>
        </>
    );
};

export default EmptyPage;
