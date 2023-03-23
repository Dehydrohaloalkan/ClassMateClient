type Props = {};

function SubGroupTableHeader({}: Props) {
    return (
        <tr className='table-primary table-bordered border-secondary'>
            <th className='text-center fit'>№</th>
            <th className='text-center'>ФИО</th>
        </tr>
    );
}

export default SubGroupTableHeader;
