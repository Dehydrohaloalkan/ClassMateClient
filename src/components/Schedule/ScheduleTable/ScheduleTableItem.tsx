import { SubjectType } from '../../../types/Schedule';

type Props = {
    item: SubjectType;
};

function ScheduleTableItem({ item }: Props) {
    return (
        <tr>
            <td className='text-start'>
                {item.startTime.toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit',
                })}
            </td>
            <td className='text-start'>
                {item.endTime.toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit',
                })}
            </td>
            <td className='text-start'>{item.title}</td>
            <td className='text-start'>{item.room}</td>
        </tr>
    );
}

export default ScheduleTableItem;
