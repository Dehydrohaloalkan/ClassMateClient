export type TableHeaderType<T> = {
    title: string;
    key: (item: T) => string | ReactNode;
    fit?: boolean;
};

export type DoubleHeaderType = {
    title: string;
    count: number;
};

export type JustifyContentType =
    | 'justify-content-start'
    | 'justify-content-end'
    | 'justify-content-center'
    | 'justify-content-between'
    | 'justify-content-around'
    | 'justify-content-evenly';

export type TableItemColor =
    | 'table-primary'
    | 'table-secondary'
    | 'table-success'
    | 'table-danger'
    | 'table-warning'
    | 'table-info'
    | 'table-light'
    | 'table-dark'
    | '';
