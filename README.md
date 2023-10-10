# restaurant-page
### This is a fictional website for the restaurant in the hulu show "The Bear"

`I used the menu, location, and contact info from the restaurant that the show took inspiration from`

<div align="center"><img src="https://i.postimg.cc/DwwjPLDc/website-capture.png" alt="screenshot of website" width="900" /></div>

**Note:** This Website works best with High Resolution Screens (1080p and up).

This project was completed for The Odin Project Javascript Restaurant Page Assignment. The aim of the project was to make a functional multi page Restaurant website using WebPack to bundle files.

## Built With 

- Vanilla JS
- HTML5
- CSS3
- Webpack

## Live Demo

[The Original Beef of Chicagoland](https://ghmacg.github.io/restaurant-page/) :point_left:

## Getting Started

In order to setup and work on this project on your own, you will need to:

1. Clone this project:  
`git clone https://github.com/ghmacg/restaurant-page.git`

2. Once you have cloned this project, you can install the required dependencies by using:  
`npm install`

3. A live demo of the project can be started by using:  
`npm start`

4. Distribution files can be produced using:  
`npm run build`

### Usage

##### Once you are on the Home Page, you have three links in the navbar
- **Home**.- To return to the Home Page.
- **Menu**.- Dishes and drinks that we serve.
- **Contact**.- Contact Us section with contact information and location.

## Deployed on GitHub Pages

Deployed on [GitHub Pages](https://pages.github.com/)  

In order to deploy this project on GitHub Pages, you will need to:

1. Create new branch:  
`git branch gh-deploy`

2. Once you have created the new branch, you have to add & commit the distribution files:
`git add dist/`
`git commit -m "My commit message"` 

3. Then you need to push it:  
`npm run gh-deploy`

4. To finish make sure the right path is selected in the Setting of your GitHub repo.

**Note:** To prevent having to copy and paste the same lengthy git command each time, I created a npm script:  
`"scripts": { "gh-deploy": "git subtree push --prefix dist origin gh-pages" }`

## Acknowledgement

Design inspired by [michalosman](https://michalosman.github.io/restaurant-page/) and [SultanBadri](https://sultanbadri.github.io/restaurant-page/)

README file inspired by [pret3nti0u5](https://github.com/pret3nti0u5/Restaurant-Page/tree/master)