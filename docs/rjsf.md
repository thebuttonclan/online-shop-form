# RJSF

This folder uses schemas from [react json schema form](https://github.com/rjsf-team/react-jsonschema-form) with some helper functions to easily split a schema into multiple pages.

## Split-schema

This function will split an rjsf schema into an array of schemas with one question per page. Note:
- To keep some properties together on one page, group them into an object
- Dependent properties will be grouped together automatically. See below for currently supported dependencies. Dependent properties should be included in the ui schemas `ui:order` property to order them together.
- For dependencies, currently only `oneOf` dependencies that toggle a required field is supported. This should be expanded later to support anyOf, and more dependency types.
