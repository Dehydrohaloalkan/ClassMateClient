type Props = {};

function WholeGroupTableHeader({}: Props) {
    return (
        <tr className='table-primary table-bordered border-secondary'>
            <th className='text-center fit'>№</th>
            <th className='text-center'>ФИО</th>
            <th className='text-center fit'>Подгруппа</th>
        </tr>
    );
}

export default WholeGroupTableHeader;
