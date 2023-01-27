import { View } from "./View.js";

export class MessageView extends View<string> { // This replate the "T" in the parent class
    template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}