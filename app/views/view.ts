// When a class is "abstract", the instance of this class is not possible
export abstract class View<T> { // The "T" means that the class can receive a miscellaneous parameter in the class's methods when a child class implements the methods
    protected element: HTMLElement; // The "protected" allow the children to view the property by inherit

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    // The "abstract" method is not implemented in the parent class, only in the children which implements the method
    abstract template(model: T): string;

    update(model: T): void {
        const template = this.template(model);

        this.element.innerHTML = template;
    }
}