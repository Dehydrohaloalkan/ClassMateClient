type Props = {};

function GroupTableHeader({}: Props) {
    return (
        <tr className='table-primary table-bordered border-secondary'>
            <th className='text-center'>№</th>
            <th className='text-center'>ФИО</th>
            <th className='text-center'>Подгруппа</th>
        </tr>
    );
}

export default GroupTableHeader;
