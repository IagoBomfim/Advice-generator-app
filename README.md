# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Under development](#Under-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Screenshot](./screenshots/advice-app.png)

Tablet screenshot

![](./screenshots/chrome_screenshot_1672773918593.png)

### Links

- Solution URL: [GitHub](https://github.com/IagoBomfim/Advice-generator-app)
- Live Site URL: [Advice Generator](https://main--advice-generator13.netlify.app/)

## My process

### Built with

-  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- [<img align="center" alt="Ract JS" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>](https://reactjs.org/) - JS library

- [<img align="center" alt="Ract JS" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>](https://styled-components.com/) - For styles

### What I learned


Developing learning with API consumption through Http requests, with the axios framework:

```js
import axios from "axios";

export const Api = axios.create({
    baseURL: "https://api.adviceslip.com"
});

```

Improvement of css knowledge with the styled components framework:

```js
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
     width: 100%;
     height: 100%;

     min-height: 100%;
     min-height: 100vh;

     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;

export const Box = styled.div`
    padding: 25px;
    padding-bottom: 50px;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgb(50, 58, 73);
`;

```

### Continued development

- Css and Styled Components
- Html
- React Js
- API consumption with axios

## Under development

- Advice history
- Native advice sharing
- Login account with profile picture, nickname
- Responsiveness on mobile devices

## Author

- Frontend Mentor - [@IagoBomfim](https://www.frontendmentor.io/profile/IagoBomfim)

- GitHub - [@IagoBomfim](https://github.com/IagoBomfim/)
"# Advice-app" 
