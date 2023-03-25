import { TableHeaderType } from '../../types/TableCard';

type Props<T> = {
    items: TableHeaderType<T>[];
    addIndexes?: boolean;
};

function TableHeader<T>({ items, addIndexes }: Props<T>) {
    const thClassName = (item: TableHeaderType<T>) => {
        return 'text-center' + (item.fit ? ' fit' : '');
    };
    return (
        <tr className='table-primary table-bordered border-secondary'>
            {addIndexes && <th className='text-center fit'>#</th>}
            {items.map((item) => (
                <th className={thClassName(item)}>{item.title}</th>
            ))}
        </tr>
    );
}

export default TableHeader;
