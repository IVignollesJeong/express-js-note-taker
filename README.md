# Express.js Note Taker

## Description

This project is a note-taking web application that utilizes Express.js middleware. The criteria for this project were as follows: 

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```
```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Installation

N/A, link to the live website can be found in the Usage section.</br> 

Source code for the application can be found here: [express-js-note-taker server.js file](https://github.com/IVignollesJeong/express-js-note-taker/blob/master/server.js).

## Usage

[Heroku deployed website](https://ian-vignolles-note-taker-9f9a31a5ae11.herokuapp.com/)

![Screenshot (17)](https://github.com/IVignollesJeong/express-js-note-taker/assets/131202032/86c5f33d-bdf1-495c-958d-cd4c477e432a)

![Screenshot (16)](https://github.com/IVignollesJeong/express-js-note-taker/assets/131202032/361935c2-4c9c-477b-a070-b7511b6a458b)



The application functions as follows:

- Upon arriving at the landing page, click the "get started" button to traverse to the notes page.
- On this "notes" page, users can click the plus icon on the top right of the page to create new notes.
- once the title and body sections have been filled out, click the save icon next to the add button to save the note to local storage.
- saved notes will persist even when the user refreshes the page or closes it.

## Credits

[Express.js docs](https://expressjs.com/en/guide/routing.html) </br>
[Geeksforgeeks router.use help](https://www.geeksforgeeks.org/express-js-router-use-function/?ref=lbp) </br>
[Heroku docs](https://devcenter.heroku.com/articles/deploying-nodejs) </br>
OSU Bootcamp </br>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) </br>

MIT License

Copyright (c) [2023] [Ian Vignolles-Jeong]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

