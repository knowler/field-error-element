# Field Error Element

A custom element that associates itself with a field and displays
constraint violations when they are reported.

## Usage

You can define the custom element the standard way or use it’s static
`define()` method which will define it and add the class to the `window`
object.

```javascript
import { FieldErrorElement } from "https://esm.sh/gh/knowler/field-error-element/field-error-element.js?raw";

FieldErrorElement.define();
```

```html
<form>
	<div>
		<label for="website">Website</label>
		<field-error for="website"></field-error>
		<input type="url" id="website" name="website">
	</div>
	<button>Submit</button>
</form>
```

```html
<form>
	<div>
		<label for="website">Website</label>
		<field-error for="website" typeMismatch="Enter a valid URL (including the protocol)">
		</field-error>
		<input type="url" id="website" name="website">
	</div>
	<button>Submit</button>
</form>
```
