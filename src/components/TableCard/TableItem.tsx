import { TableHeaderItem, TableItemColor } from '../../types/TableCard';

type Props<T> = {
    item: T;
    index: number;
    parseInfo: TableHeaderItem<T>[];
    itemColor?: (item: T) => TableItemColor;
    addIndexes?: boolean;
};

function TableItem<T>({
    item,
    index,
    parseInfo,
    itemColor,
    addIndexes,
}: Props<T>) {
    const trClassName = 'table-bordered border-secondary ' + itemColor?.(item);
    return (
        <tr className={trClassName}>
            {addIndexes && <th className='text-start'>{index + 1}</th>}
            {parseInfo.map((parseItem) => (
                <td className='text-start'>{parseItem.key(item)}</td>
            ))}
        </tr>
    );
}

export default TableItem;
