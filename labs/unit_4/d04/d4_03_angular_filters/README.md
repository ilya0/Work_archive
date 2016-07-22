# Angular Filters

## Learning Objectives

+ Understand what a filter does
+ Learn to use built-in Angular filters
+ Learn to create your own custom filters

## What is an Angular Filter?

A filter formats the value of an expression for display to the user. They can be used in view templates, controllers or services and it is easy to define your own filter.

## Built-in Angular Filters

Read the [docs](https://docs.angularjs.org/api/ng/filter) to learn about the built-in angular filters.

### Practice

Complete the following tasks:

1. Change the number 100 to display as currency.
2. Get the current date and display it in the following format 'mm/dd/yyyy'.
3. Using the data below, display the array as a list but limit the number of items displayed to 10.
4. Using the same data, order the list alphabetically.
5. Using the same data, create an input field that filters the list based on what you type.

```
[
  'Jon Snow',
  'Daenerys Targaryen',
  'Melisandre',
  'Arya Stark',
  'Sansa Stark',
  'Tyrion Lannister',
  'Cersei Lannister',
  'Gregor Clegane',
  'Khal Drogo',
  'Joffrey Baratheon',
  'Margaery Tyrell',
  'Bran Stark',
  'Ramsay Bolton',
  'Stannis Baratheon',
  'Theon Greyjoy',
  'Brienne of Tarth',
  'Ygritte',
  'Jamie Lannister'
]
```

## Custom Angular Filters

Read the [docs](https://docs.angularjs.org/guide/filter#using-filters-in-controllers-services-and-directives) to learn how to create your own custom angular filter.

### Practice

Create the following filters:

1. `nameco`: adds 'co' to the end of a string
2. `checkmark`: displays '\u2713' if the input is true and '\u2718' if the input is false
3. `price`: displays 'FREE' if the number is 0 otherwise displays the number
4.`stock`: displays 'Out of Stock' if the number is 0, displays 'Only x left in stock' if the number is less than 5, otherwise displays nothing.
5. `clean`: replaces any swear words (fuck, shit, bitch, ass) from the input with !@#$.

## Closing

+ How many arguments does a filter take?
+ How do you create a custom filter?
