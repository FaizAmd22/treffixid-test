interface Metric {
    point: string;
    label: string;
}

export interface BehaviorCardProps {
    data: {
        months: string;
        total_trips: number;
        percentage: number;
        dataMetric: Metric[];
    };
    previousPercentage?: number;
}