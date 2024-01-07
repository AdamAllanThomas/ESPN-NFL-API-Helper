export interface VenuesReferenceList {
    count:     number;
    pageIndex: number;
    pageSize:  number;
    pageCount: number;
    items:     Item[];
}

export interface Item {
    $ref: string;
}
