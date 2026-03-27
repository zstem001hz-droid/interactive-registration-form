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

  1. There isn't a need for a HTML "remove" button tag, the remove button is created entirely in javascript and added to the DOM dynamically with document.createElement('button') which then attaches the removeItem function directly to the item.

  2. Consistently validating code with console.log[ging] and working with chrome dev tools - elements console.

  3. li.appendChild(span) and li.appendChild(RemoveButton) assembles the <li> in memory first, then cart.appendChild(li) adds it to the page in one operation, more efficient than adding incomplete elements to the DOM in pieces.

## AI Collaboration

  - ChatGBT
    - debugging and Q&A

## Author

Zac White

## Acknowledgmentss

  # HTML attribute: pattern
  - [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/pattern)
  - [stackoverflow.com](https://stackoverflow.com/questions/19619428/html5-form-validation-pattern-alphanumeric-with-spaces)
  
  # DOM Manipulation
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
	