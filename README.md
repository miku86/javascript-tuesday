# D3 for Beginners

## Basic Instructions

### Get the materials

#### If you are NOT familiar with Git

- Download it: [here](https://github.com/miku86-workshops/d3-beginners/archive/master.zip)
- Extract it on your machine
- Go into the folder

#### If you are familiar with Git

- Clone repo via terminal (HTTPS): `git clone https://github.com/miku86-workshops/d3-beginners.git`
- Clone repo via terminal (SSH): `git clone git@github.com:miku86-workshops/d3-beginners.git`
- Go into the folder

### Folder Structure

```
- README.md (the file you are currently reading)
- v1
  - index.html
  - script.js
- v2
  - index.html
  - script.js
...
```

Every folder named `v[number]` has these files:

- `index.html`: this is where your HTML lives
- `script.js`: this is where your JavaScript lives

`script.js` and `index.html` are connected by a `<script>`-tag in `index.html`. Some basic styling is in the `head` of `index.html`, to keep the complexity of the file structure low (less files, less complexity)

---

## General Information

### What is D3?

`D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life. For example, you can use D3 to generate an HTML table from an array of numbers. Or, use the same data to create an interactive SVG bar chart with smooth transitions and interaction.`

---

## V1:

What:

- find out how to add D3 / an external JavaScript package/library
- selecting elements
- using data

Why:

- to actually use D3
- to get a basic understanding what D3 can do
- to learn some basics tools: selecting and manipulating elements

Steps:

- read documentation to add D3
- add D3 from internet
- `index.html`: heading with text `D3 for Beginners`
- `script.js`: select, transition, style (docs!)
- `script.js`: add some random data (array)
- `index.html`: container for chart, add border
- `script.js`: select, selectAll, data, enter, append, text, style

What we've learned:

- `select()`
- `selectAll()`
- `style()`
- `data()`
- `enter()`
- `append()`
- `text()`
- => general workflow

---

## V2:

What:

- get some more practice in selecting and manipulating elements

Why:

- to get comfortable understanding the mental models

Steps:

- create empty HTML page
- add HTML5 skeleton with connection to js file
- `index.html`: create an empty div
- `script.js`: find out if files are connected
- `script.js`: add a svg element with a width and height of 200px into the div
- `script.js`: add a 3px red border to the svg
- `script.js`: add a grey background to the svg
- `script.js`: add a new rectangle into the svg with a width and height of 50px
- `script.js`: fill the rectangle with blue color
- `script.js`: add a new circle into the svg with a radius of 50px
- `script.js`: the circle should start at 150/150
- `script.js`: fill the circle with yellow color
- `script.js`: add a new line into the svg that goes from the top-left to the bottom-right corner
- `script.js`: make the line purple

What we've learned:

- `select()`
- `append()`
- `attr()`
- `style()`
- => general workflow
