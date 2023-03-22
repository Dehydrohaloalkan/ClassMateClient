type Props = {};

function CoursesTableHeader({}: Props) {
    return (
        <tr className='table-primary table-bordered border-secondary'>
            <th className='text-center'>Тип</th>
            <th className='text-center'>Название</th>
            <th className='text-center'>Старт</th>
            <th className='text-center'>Конец</th>
            <th className='text-center'>Учитель</th>
        </tr>
    );
}

export default CoursesTableHeader;
