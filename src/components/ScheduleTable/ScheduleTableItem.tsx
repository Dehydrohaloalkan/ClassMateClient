type Props = {
    startTime: Date;
    endTime: Date;
    title: string;
    room: string;
};

function ScheduleTableItem({ startTime, endTime, title, room }: Props) {
    return (
        <tr>
            <td className='text-start'>
                {startTime.getHours() + ':' + startTime.getMinutes()}
            </td>
            <td className='text-start'>
                {endTime.getHours() + ':' + endTime.getMinutes()}
            </td>
            <td className='text-start'>{title}</td>
            <td className='text-start'>{room}</td>
        </tr>
    );
}

export default ScheduleTableItem;
