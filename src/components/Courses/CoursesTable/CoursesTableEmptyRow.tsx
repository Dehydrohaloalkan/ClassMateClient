type Props = {};

function CoursesTableEmptyRow({}: Props) {
    return (
        <tr>
            <td
                colSpan={5}
                className='table-bordered border-secondary table-light text-center fs-5'
            >
                Текущих курсов нет
            </td>
        </tr>
    );
}

export default CoursesTableEmptyRow;
