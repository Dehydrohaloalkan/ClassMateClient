import { TableHeaderType } from '../../types/TableCard';
import StickyEmptyCell from './StickyEmptyCell';
import TableHeader from './TableHeader';
import TableItem from './TableItem';

type Props<T> = {
    tableClass: string;
    stickyColumnHeader: TableHeaderType<T>;
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
                {stickyColumnItems.length ? (
                    stickyColumnItems.map((item, index) => {
                        return (
                            <TableItem
                                item={item}
                                index={index}
                                parseInfo={[stickyColumnHeader]}
                            />
                        );
                    })
                ) : (
                    <StickyEmptyCell />
                )}
            </tbody>
        </table>
    );
}

export default StickyColumn;
