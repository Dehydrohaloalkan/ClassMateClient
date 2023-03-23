type Props = {};

function WholeGroupTableEmptyRow({}: Props) {
    return (
        <tr>
            <td
                colSpan={3}
                className='table-bordered border-secondary table-light text-center fs-5'
            >
                В группе никого нет
            </td>
        </tr>
    );
}

export default WholeGroupTableEmptyRow;
