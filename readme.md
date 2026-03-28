# Mod 5: Lab 2 - Interactive User Registration Form

Building an interactive user registration form applying my knowledge of DOM manipulation, event handling, HTML5, JavaScript form validation, and localStorage. The form will provide real-time feedback to the user and demonstrate how to handle user input effectively and persist simple data.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
In this lab, I am imagining I am a junior front-end developer at a startup. The team is building a new web application, and my first task is to create the client-side functionality for the user registration page. It’s crucial that this form is user-friendly, provides clear validation feedback to prevent errors, and perhaps remembers some basic user input for convenience.

**focus: Creating a responsive and interactive form.**

### Screenshots

  - Placeholder

## My process

Began by creating my local folder structure, and creating the index.html, script.js, and styles.css files by using the specifications in the assignment. initially, expanded upong the starter code index.html code to include validation attributes that power the Constraint Validation API, and make sure each <span> error element is correctly configured. In order to stay focused and because javascript adds and removes CSS classes to trigger the visual element changes, I moved into coding the stylesheet in accordance with the starter code and the additional html code, while thinking logically about what the javascript elements would be.

And now onto the javascript... Started coding the DOM and localStorage elements at the top of script.js, with dev tools open I continued writing the javascript code that syncs with the Constraint Validation API (helper/error handling), and completed validation checks directly in the dev tools console. After completing the validation section of the form, I moved onto coding the event listeners, event handlers, submit listener, and decreased my use of console.log[ging] removing some of the previous console logs I had written into the code.

After the submit listener was completed, I added a console.log for the submit-listener, tested the form fields, and debugged/corrected issues with the code, then proceeded to code a storage inspection utility. 

### Built with

- Semantic HTML5 markup
- Custom CSS
- LocalStorage
- Constraint Validation API
- javascript form validation
  - DOM Manipulation
  - event listeners
  - HTML5 validation attributes
  - Dynamic Error Message handling

### What I learned

  1. Progressive console logging and intermediate usage of console logging in terminal and synchronicity with chrome dev tools. This really helped me out when coding typos, or I had invalid variables present. I could correct them on the spot.
  
  Practicing console logging checks and balances with chrome dev tools added a considerable amount of time to my completion of this assessment, and I will be more conservative with my console logging (especially those left in this script) on future projects. 

  3. Using the Constraint Validation API error handling and validations.

  3. Adding complexity requirements and validations to form fields.

## AI Collaboration

  - ChatGBT
    - debugging and Q&A
    - muted hex color style recommendations
    - debug odd web tools behavior which turned out to be a typo. expected form.reset(); was coded as form.requestFullscreen(); - resolved

## Author

Zac White

## Acknowledgments

HTML attribute: pattern
  - [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/pattern).  
  - [MDN autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete)
  - [html.spec.whatwg.org](html.spec.whatwg.org)
  - [stackoverflow.com](https://stackoverflow.com/questions/19619428/html5-form-validation-pattern-alphanumeric-with-spaces) -username
  
DOM Manipulation
  - [youtube.com](https://www.youtube.com/@TraversyMedia/search?query=DOM%20crash) Traversy Media
  - [jshint.com](https://jshint.com/) 

## Reflections

1. How did event.preventDefault() help in handling form submission?

--

2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

--

3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

--

4. Describe a challenge you faced in implementing the real-time validation and how you solved it.

--

5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

--