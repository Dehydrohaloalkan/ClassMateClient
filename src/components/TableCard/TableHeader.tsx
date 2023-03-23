import { TableHeaderItem } from '../../types/TableCard';

type Props<T> = {
    items: TableHeaderItem<T>[];
    addIndexes?: boolean;
};

function TableHeader<T>({ items, addIndexes }: Props<T>) {
    const thClassName = (item: TableHeaderItem<T>) => {
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
