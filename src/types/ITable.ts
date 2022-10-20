export enum FieldType {
    LINK = 'LINK',
    DATE = 'DATE',
    COMBINED_STRING = 'COMBINED_STRING',
}

export interface Columns {
    id: string;
    label: string;
    type?: FieldType;
    isSort?: boolean;
    stringStructure?: string;
}

export type TableData = Record<string, any>;
