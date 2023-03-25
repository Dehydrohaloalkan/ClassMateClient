export type PerformanceType = {
    subjectTitle: string;
    subjectId: number;
    date: Date;
    absence?: boolean;
    grade?: number;
};

export type PerformanceTableType = {
    subjectTitle: string;
    subjectId: number;
    items: {
        date: Date;
        absence?: boolean;
        grade?: number;
    }[];
};
