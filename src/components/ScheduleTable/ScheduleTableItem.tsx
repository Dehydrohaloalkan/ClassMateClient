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
                {startTime.toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit',
                })}
            </td>
            <td className='text-start'>
                {endTime.toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit',
                })}
            </td>
            <td className='text-start'>{title}</td>
            <td className='text-start'>{room}</td>
        </tr>
    );
}

export default ScheduleTableItem;
