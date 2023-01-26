export class Negociacao {
    // When the property name is the same of the parameters name, only add the access property before the name, after the TS set the property with the same name of the parameter in the class
    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ) {}

    get data(): Date {
        const data = new Date(this._data.getTime());

        return data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }
}