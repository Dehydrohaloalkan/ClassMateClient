import { ReactNode } from 'react';
import {
    JustifyContentType,
    TableHeaderItem,
    TableItemColor,
} from '../../types/TableCard';
import TableHeader from './TableHeader';
import TableItem from './TableItem';
import TableEmptyRow from './TableEmptyRow';

type Props<T> = {
    tableHeader: TableHeaderItem<T>[];
    tableItems: T[];
    emptyRowText: string;
    header?: ReactNode;
    headerJustifyContent?: JustifyContentType;
    footer?: ReactNode;
    footerJustifyContent?: JustifyContentType;
    tableItemColor?: (item: T) => TableItemColor;
    addIndexes?: boolean;
    tableStriped?: boolean;
};

function TableCard<T>(props: Props<T>) {
    const tableClass =
        'table table-bordered border-secondary table-hover ' +
        (props.tableStriped ? 'table-striped' : '');
    return (
        <div className='card shadow'>
            {props.header && (
                <div
                    className={
                        'card-header d-flex ' +
                        (props.headerJustifyContent || '')
                    }
                >
                    {props.header}
                </div>
            )}

            <div className='card-body overflow-auto'>
                <table className={tableClass}>
                    <thead>
                        <TableHeader
                            items={props.tableHeader}
                            addIndexes={props.addIndexes}
                        />
                    </thead>
                    <tbody>
                        {props.tableItems.length ? (
                            props.tableItems.map((item, index) => {
                                return (
                                    <TableItem
                                        item={item}
                                        index={index}
                                        parseInfo={props.tableHeader}
                                        addIndexes={props.addIndexes}
                                        itemColor={props.tableItemColor}
                                    />
                                );
                            })
                        ) : (
                            <TableEmptyRow
                                columnCount={
                                    props.tableHeader.length +
                                    (props.addIndexes ? 1 : 0)
                                }
                                text={props.emptyRowText}
                            />
                        )}
                    </tbody>
                </table>
            </div>

            {props.footer && (
                <div
                    className={
                        'card-footer d-flex ' +
                        (props.footerJustifyContent || '')
                    }
                >
                    {props.footer}
                </div>
            )}
        </div>
    );
}

export default TableCard;
