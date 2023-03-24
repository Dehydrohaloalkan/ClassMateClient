import { TableHeaderItem } from '../../types/TableCard';
import TableHeader from './TableHeader';
import TableItem from './TableItem';

type Props<T> = {
    tableClass: string;
    stickyColumnHeader: TableHeaderItem<T>;
    stickyColumnItems: T[];
};

function StickyColumn<T>({
    tableClass,
    stickyColumnHeader,
    stickyColumnItems,
}: Props<T>) {
    return (
        <table className={tableClass}>
            <thead>
                <TableHeader<T> items={[stickyColumnHeader]} />
            </thead>
            <tbody>
                {stickyColumnItems.map((item, index) => {
                    return (
                        <TableItem
                            item={item}
                            index={index}
                            parseInfo={[stickyColumnHeader]}
                        />
                    );
                })}
            </tbody>
        </table>
    );
}

export default StickyColumn;
