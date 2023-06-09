import { TableHeaderType, TableItemColor } from '../../types/TableCard';

type Props<T> = {
    item: T;
    index: number;
    parseInfo: TableHeaderType<T>[];
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
            {addIndexes && <td className='text-start'>{index + 1}</td>}
            {parseInfo.map((parseItem) => (
                <td className={'text-start ' + (parseItem.fit ? 'fit' : '')}>
                    {parseItem.key(item)}
                </td>
            ))}
        </tr>
    );
}

export default TableItem;
