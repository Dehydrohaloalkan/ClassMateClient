type Props = {};

function ScheduleTableHeader({}: Props) {
    return (
        <tr className='table-primary table-bordered border-secondary'>
            <th className='text-center'>Начало</th>
            <th className='text-center'>Конец</th>
            <th className='text-center'>Предмет</th>
            <th className='text-center'>Аудитория</th>
        </tr>
    );
}

export default ScheduleTableHeader;
