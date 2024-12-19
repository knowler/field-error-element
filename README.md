# `<field-error>`

Exploring what a `<field-error>` element might look like.

## Exploration: set invalid on load

This strategy sets the form control as invalid with a custom error message on
load. The error message needs to be custom as that’s all we can set for built-in
elements, however, we could set non-custom constraint validation errors for
custom elements. I might explore that in the future.

Also, in the current implementation this will always report the validation when
focusing the element until it receives input at which time the custom error is
cleared (i.e. since that processing lives on the server). This likely is
annoying.

Some nice benefits here is that using the constraint validation API
automatically causes the element to receive the correct implicit ARIA values. Of
course, this doesn’t work without JS, but that’s besides the point of this
exploration.
