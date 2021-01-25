# online-shop-form

### Logging
Logging is recorded through express middleware morgan. Add a custom log to `res.log` to override the default message.

To see production logs in Azure UI:

  - Navigate to the launchonline cluster in azure
  - In the panel, under monitoring select `Logs`
  - Select `Container Logs` in the new popup
  - Select how you want to query the data. For example:
    - To see all invalid submission attempts with a timestamp, select `Find a value in Container logs table` and set `invalid` as the findString in the query.
    - To find all submissions with timestamp and submission number, use `submitted` as the findString.

The table can be filtered through the UI and the query language. Currently, custom logs are sent when an application is submitted successfully,
fails backend validation, or fails to save to database. The associated messages are:

- `submitted <application number>`
- `invalid`
- `db error`

Which can be filtered for by findstring to find the relevant logs.
