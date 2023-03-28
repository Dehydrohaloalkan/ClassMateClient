import { TableHeaderType } from '../../types/TableCard';
import StickyEmptyCell from './StickyEmptyCell';
import TableHeader from './TableHeader';
import TableItem from './TableItem';

type Props<T> = {
    tableClassName: string;
    stickyColumnHeader?: TableHeaderType<T>;
    stickyColumnItems?: T[];
};

function StickyColumn<T>({
    tableClassName: tableClass,
    stickyColumnHeader,
    stickyColumnItems,
}: Props<T>) {
    return (
        <>
            {stickyColumnItems && stickyColumnHeader && (
                <div>
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
                </div>
            )}
        </>
    );
}

export default StickyColumn;
