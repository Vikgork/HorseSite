export class QuickFilter<T> {
    public columnName: string; 
    public value : T;

    public constructor(columnName: string, value: T) {
        this.columnName = columnName;
        this.value = value;
    }        
}