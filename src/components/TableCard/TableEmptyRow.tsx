type Props = {
    columnCount: number;
    text: string;
};

function TableEmptyRow({ columnCount, text }: Props) {
    return (
        <tr>
            <td
                colSpan={columnCount}
                className='table-bordered border-secondary table-light text-center fs-5'
            >
                {text}
            </td>
        </tr>
    );
}

export default TableEmptyRow;
