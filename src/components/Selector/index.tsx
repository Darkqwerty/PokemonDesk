import React from 'react';

interface ISelectorProps {
    /** Идентификатор */
    selOptions?: string[] | null;
}

const Selector: React.FC<ISelectorProps> = ({ selOptions }) => {
    return (
        <>
            <select>
                {selOptions?.map((item: string) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Selector;
