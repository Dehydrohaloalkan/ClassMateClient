export type JustifyContentType =
    | 'justify-content-start'
    | 'justify-content-end'
    | 'justify-content-center'
    | 'justify-content-between'
    | 'justify-content-around'
    | 'justify-content-evenly';

export type TableHeaderItem<T> = {
    title: string;
    key: (item: T) => string;
    fit: bool;
};

export type TableItemColor =
    | 'table-primary'
    | 'table-secondary'
    | 'table-success'
    | 'table-danger'
    | 'table-warning'
    | 'table-info'
    | 'table-light'
    | 'table-dark';
