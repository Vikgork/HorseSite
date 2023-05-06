import { QuickFilter } from "./quick-filter";
export class ItemsRequest<T> {
    public page?: number;
    public itemsPerPage?: number;
    public total?: number;
    public searchQuery: string = "";
    public quickFilters?: QuickFilter<any>[];
    public items?: T[];
}