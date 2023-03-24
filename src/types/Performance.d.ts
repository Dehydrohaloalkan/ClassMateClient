export type PerformanceItem = {
    subjectTitle: string;
    subjectId: number;
    date: Date;
    absence?: boolean;
    grade?: number;
};

export type PerformanceTableRow = {
    subjectTitle: string;
    subjectId: number;
    items: {
        date: Date;
        absence?: boolean;
        grade?: number;
    }[];
};
