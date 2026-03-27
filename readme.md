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

Began by creating my local folder structure, and creating the index.html, script.js, and styles.css files by using the specifications in the assignment.

### Built with

- Semantic HTML5 markup
- Custom CSS
- LocalStorage
- javascript form validation
  - DOM Manipulation
  - event listeners
  - HTML5 validation attributes
  - Constraint Validation API
  - Dynamic Error Message handling

### What I learned

  1. Vertically stacking longer input containers rather than writing them out horozontally-linear-inline, makes them easier to structure, code, and digest, vscode's click, automated, document formatting restructures the code inline. I would suggest you only trigger the "Format Document" option after you are sure that your input specifications were structured how you want them to be. 

  2. Unicode emoji's can be placed directly into the index.html code. 

  3. nonvalidate disables the browser's native error bubbles to stop conflicting code variables. 

## AI Collaboration

  - ChatGBT
    - debugging and Q&A

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

	1. The addProduct button is very dynamic, with coding that removes whitespace, converts the price input string to a decimal number, creates new list items in memory, stores the price, and adds the removeItem button directly as a click listener.  
	
	2. Most of the price code was already written in the starter code. Writing the updateTotalPrice(price) code inside the addProduct function ensured accurate updates to the total price. 
	
	3. The if (name) and if (isNAN) statements handle invalid input for product name or price. 
    - if (name === '') checks if the name field is empty. If it is, it alerts the user. 
    - if (isNaN(price)) catches anything that isn't a number, like letters or blanks, or... 
    - if (price <= 0) catches zero or negative numbers. 
	
	4. Initially I thought I'd have to write a removeItem <button> tag into the HTML. 
	