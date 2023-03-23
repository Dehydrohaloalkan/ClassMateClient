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
    header?: ReactNode;
    headerJustifyContent?: JustifyContentType;
    footer?: ReactNode;
    footerJustifyContent?: JustifyContentType;
    tableHeader: TableHeaderItem<T>[];
    tableItems: T[];
    emptyRowText: string;
    tableItemColor?: (item: T) => TableItemColor;
    addIndexes?: boolean;
};

function TableCard<T>(props: Props<T>) {
    return (
        <div className='card shadow'>
            {props.header && (
                <div
                    className={
                        'card-header d-flex ' + props.headerJustifyContent || ''
                    }
                >
                    {props.header}
                </div>
            )}

            <div className='card-body'>
                <table className='table table-bordered border-secondary table-striped table-hover'>
                    <thead>
                        <TableHeader items={props.tableHeader} />
                    </thead>
                    <tbody>
                        {props.tableItems.length ? (
                            props.tableItems.map((item, index) => {
                                return (
                                    <TableItem
                                        item={item}
                                        index={index}
                                        parseInfo={props.tableHeader}
                                        addIndexes
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
                        'card-footer d-flex ' + props.footerJustifyContent || ''
                    }
                >
                    {props.footer}
                </div>
            )}
        </div>
    );
}

export default TableCard;
