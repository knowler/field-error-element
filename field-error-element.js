export class FieldErrorElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	get observedAttributes() { return ["for"]; }
	attributeChangedCallback() {
	}
}
