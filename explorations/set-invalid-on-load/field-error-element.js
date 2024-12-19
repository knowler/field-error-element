export class FieldErrorElement extends HTMLElement {
	static get observedAttributes() { return ["for"]; }

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case "for": {
				const forElement = this.getRootNode()?.getElementById(newValue);
				if (!forElement) break;

				forElement.setCustomValidity(this.textContent);
				forElement.addEventListener("focus", this);
				forElement.addEventListener("input", this, { capture: true, once: true });
				document.adoptedStyleSheets.push(this.createInvalidStylesForControl(forElement.id));

				break;
			}
		}
	}

	handleEvent(event) {
		switch (event.type) {
			case "focus":
				event.target.reportValidity();
				break;
			case "input":
				event.target.setCustomValidity("");
				event.target.removeEventListener("focus", this);
				break;
		}
	}

	createInvalidStylesForControl(forElement) {
		const sheet = new CSSStyleSheet();
		sheet.replaceSync(`
			:where(#${forElement}):not(:focus-visible):invalid {
				color: color-mix(in hsl, FieldText, Crimson 50%);
			}
		`);
		return sheet;
	}
}

if (new URL(import.meta.url).searchParams.has("define")) {
	customElements.define("field-error", FieldErrorElement);
}
