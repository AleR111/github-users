export enum FieldType {
    SORTING = 'SORTING',
    LINK = 'LINK',
}

export interface Columns {
    id: string;
    label: string;
    type?: FieldType;
}

export type TableDate = Record<string, any>;
