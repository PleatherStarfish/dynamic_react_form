# About dynamic_react_form

This is a small ReactJS app built on [Create React App](https://github.com/facebook/create-react-app) that constructs a form from a JSON array. 

The app evaluates a conditional field in any item in the input array which determines if that field will render.

The app updates state on submission of the form. It would probably be more user friendly to update on change (since no one wants to discover another form field after they click submit!). That would be my next step if I were building this out more.

The way handleSubmit works could be improved. Getting the form field name from the id isn't ideal since it quickly leads to problems with dates and checkboxes, etc. A better way would be to use the id to look up the original form field name, possibly with another hook that indexes data to unique ids.

