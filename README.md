# Sea Animal Shuffle

The Sea Animal Shuffle game intends to help users develop their logical thinking skills.  The site is targeted at children from 5+ years of age up to adults.  The user is presented with four sea animal images.  The user needs to find the correct sequence of the images.  The sequence has already been decided by a random computer shuffle of the images.

![Responsive Mockup](/docs/am-i-responsive.png)

## Features

### Existing Features

- __Header__

    - The header shows the name of the game at the top of the page.  This name: Sea Animal Shuffle communicates the main purpose of the game to the user.

    - The font chosen is Fredoka which is a large rounded style font.  It is intended to introduce a fun element to the game.

    - The user is then presented with clear instructions on how to play the game i.e. figure out the sequence of the images by clicking on the images.

    - Finally, the user can click on start to start the game.  The game is already initialised on document load however this option allows the user to start a new game at any time.

![Header](/docs/navigation-bar.png)

- __Image Selection Area__

    - The onclick events for image selection are preloaded on document load.  The user can click on each image and toggle through the images of fish, octopus, crab, and seahorse.

    - The submit button click event is also preloaded on document load.  Once the user clicks on the submit button, the selection is compared against the random computer shuffle of the images.  This shuffle is generated using the Fisher-Yates algorithm.

    ![Hero Image](/docs/hero-image-index-page.png)

 - __Game Results__

    - The user image choice is first checked to make sure there is one of each image selected.  If this is not the case the user receives an alert to indicate which sea animal is missing.

     ![Sea animal missing](/docs/hero-image-index-page.png)    

    - Also, if there are correctly chosen images, the user receives feedback by having a border added around the sea animal.  If the selection is correct, the area is highlighted in green.  The incorrect selections are highlighted in red.

     ![Incorrect Border](/docs/hero-image-index-page.png)    

    - The user choice is also cloned and presented below the user choice.

     ![clone](/docs/hero-image-index-page.png)    

    - The game continues as the user selects new image sequences and clicks on the submit button. 

    - Once the user has selected the correct sequence, the alert will then congratulate the user and all of the images will be highlighted in green.

     ![Correct Sequence Border](/docs/hero-image-index-page.png)    

    - At this point, the image onclick and submit button click have been disabled temporarily.  The user can click the start button to reload the page to begin a new game.

    - The game is terminated if the user does not guess the correct sequence within 26 trys.

     ![26 trys](/docs/hero-image-index-page.png)  


### Features Left to Implement

- I would like to add a additional level where the number of images presented to the user is five.  

## Testing

Initially all device testing was simulated on the Developer Tools on Google Chrome Version Version 102.0.5005.63.  As each feature of the product was being developed, it was tested on Google Chrome to check that it was functioning correctly and also that the responsiveness was as expected.

### Responsiveness 
Further manual testing for responsiveness was completed using Developer Tools on Google Chrome and pyhsical devices.  The results are shown below.

| Device                    | Responsive >= 700px | Responsive < 699px | Notes:         |
| :------------             |   :---:             |   :---:            |  :---:         |
| iPhone SE                 |     n/a             |     Yes            | Virtual device |
| iPhone XR                 |     n/a             |     Yes            | Virtual device |
| iPhone 12 Pro             |     n/a             |     Yes            | Virtual device |
| iPhone 13                 |     n/a             |     Yes            | Physical device|
| Surface Duo               |     n/a             |     Yes            | Virtual device |
| Galaxy Fold               |     n/a             |     Yes            | Virtual device |
| Sansung Galaxy A51/71     |     n/a             |     Yes            | Virtual device |
| Pixel 5                   |     n/a             |     Yes            | Virtual device |
| Samsung Galaxy S8+        |     n/a             |     Yes            | Virtual device |
| Samsung Galaxy S20 Ultra  |     n/a             |     Yes            | Virtual device |
| iPad Air                  |     Yes             |     n/a            | Virtual device |
| iPad Mini                 |     Yes             |     n/a            | Virtual device |
| Surface Pro 7             |     Yes             |     n/a            | Virtual device |
| Nest Hub                  |     Yes             |     n/a            | Virtual device |
| Nest Hub Max              |     Yes             |     n/a            | Virtual device |
| Desktop <= 1024           |     Yes             |     n/a            | Physical device|
| Desktop > 1024            |     Yes             |     n/a            | Physical device|

### Browser Compatibility 
Browser testing was completed on the three primary desktop browsers.  The results are shown below.

| Device                                | Intended Appearance | Intended Responsiveness | Notes:         |
| :------------                         |   :---:             |   :---:                 |  :---:         |
| Google Chrome Version 102.0.5005.63   |     Yes             |     Yes                 | Virtual device |
| Microsoft Edge Version 102.0.1245.39  |     Yes             |     Yes                 | Virtual device |
| Firefox Version 101.0.1               |     Yes             |     Yes                 | Virtual device |

### Bugs 
During developenent and testing, it became aparrent that the toggleImage function was not performaing as it should.  The problem arose when the counter number was equal to the counter number on the if/if else statement while at the same time the image previously selected was the same as that shown on the if/if else statement.  The inpact for the user was that they would need to click twice to move the image along.  While it would be intuitive for the user to click twice if the image did not change, it was decided to attempt to fix this issue.  The best solution was to replace the counter and the if statement section of the toggleImage function with a simpler method of changing the image.  The changes are shown below.

Before code.
After code.







### Validator Testing

- __HTML__
    - When the code is passed through the official W3C Validator, there are currently no errors or warnings showing.

    - In the early development stage the validator would show errors where div elements were not closed correctly.

    - When fixing some issues with performance and image size, the validator showed that there was a missing parameter on an img element using the srcset attribute.

- __CSS__   
    - When the code is passed through the official CSS W3C Jigsaw Validator, there are currently no errors or warnings showing.

- __Lighthouse__   
    - The Chrome Lighthouse tool was used to check performance, accessibility, best proctice and SEO.  Initially the performance was in the amber region for both desktop and mobile.  The largest image files were compressed, however there was still an amber result for both devices.  The Chrome Lighthouse tool suggested that the files be converted to .webp format.  This was subsequently done but there was still performance issues for mobile.  Further suggestions were to serve responsive images by creating media queries and using reduced size images for mobile devices.  The ImageMagick CLI was used to reduce the size of the file and the srcset attribute was applied to the img element to serve the smaller image to the media query for max-width: 480px.

    - The results for accessibility, best proctice and SEO were consistently high when tested with the Chrome Lighthouse tool.

    - The current results are shown below:

        ![Lighthouse Desktop](/docs/lighthouse-desktop.png)
        ![Lighthouse Mobile](/docs/lighthouse-mobile.png)

### Unfixed Bugs

An issue that is outstanding at the time of writing this readme is related to the materials section which uses Flexbox to wrap the line items.  The issue appears to show a wider margin on the right side of the listed materials.  The Chrome [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) shows however that there is an overflow on the right margin on the list of items on the left side.  The problem dissapears when the screen is reduced in size and the lines of materials start to wrap.  It is thought that the issue relates to the id "materials-list" and ul element where there is a flex-basis property setting along with left and right margins.  Further investigation is needed to resolve this issue.

![Materials Alignment Issue](/docs/materials-flexbox-issue.png)

Firefox Version 100 has a slightly grainy appearance for Open Sans in the header section.  At the time of writing this readme this has not been resolved.

## Deployment

- This site has been deployed to Github pages.  To deploy a project the following steps are necessary:

    - From repository list select the repository being deployed.
    - Select the settings tab for that repository.
    - Click on the Pages tab and find the Source section.
    - Click on the dropdown and select the Main branch.
    - The live link will be shown once the deployment is complete.

The live link is available on: https://teresabowe.github.io/sea-animal-shuffle/

## Credits

### Content

- Understanding and adapting code for Fisher-Yates array shuffle from [All Things JavaScript](https://www.youtube.com/watch?v=myL4xmtAVtw).

- Initially adapted to create image toggle from [Stack Overflow](https://stackoverflow.com/questions/25291730/change-images-on-click-cycle-through-3-images).  This code was later replaced with my own code to remove a bug.

- Code used to find missing elements from two arrays from [Borislav Hadzhiev](https://bobbyhadz.com/blog/javascript-get-difference-between-two-arrays). 

- Code used to compare two arrays from [Stack Overflow](https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript).

### Media

The sea animal images are from the [Flaticon](https://flaticon.com/) website.  Specifically these are:
- [Crab Image](<https://www.flaticon.com/free-icons/crab">) created by Freepik - Flaticon.
- [Octopus Image](<https://www.flaticon.com/free-icons/octopus>) created by Freepik - Flaticon.
- [Fish Image](https://www.flaticon.com/free-icons/fish) created by shmai and Freepik - Flaticon.
- [Seahorse](https://www.flaticon.com/free-icons/seahorse) created by BZZRINCANTATION - Flaticon.