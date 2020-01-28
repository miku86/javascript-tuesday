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
