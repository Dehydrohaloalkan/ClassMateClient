import React from 'react';

type Props = {
    dayOfWeek: string;
    date: Date;
};

function ScheduleTableDateHeader({ dayOfWeek, date }: Props) {
    return (
        <tr className='table-info table-bordered border-secondary'>
            <th colSpan={3} className='border border-secondary border-end-0'>
                {dayOfWeek}
            </th>
            <th className='text-end border border-secondary border-start-0'>
                {date.getDate() +
                    '/' +
                    date.getMonth() +
                    '/' +
                    date.getFullYear()}
            </th>
        </tr>
    );
}

export default ScheduleTableDateHeader;
