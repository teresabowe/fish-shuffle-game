# Sea Animal Shuffle

The Sea Animal Shuffle game intends to help users develop their logical thinking skills.  The site is targeted at children from 5+ years of age up to adults.  The user is presented with four sea animal images.  The user needs to find the correct sequence of the images.  The sequence has already been decided by a random computer shuffle of the images.

![Responsive Mockup](/docs/am-i-responsive.png)

## Features

### Existing Features

- __Header__

    - The header shows the name of the game at the top of the page.  This name: Sea Animal Shuffle communicates to the the main purpose of the game to the user.

    - The font chosen is Fredoka which is a large rounded sytle font.  It is intended to introduce a fun element to the game.

    - The user is then presented with clear instructions on how to play the game i.e. figure out the sequence by clicking on the images.

    - Finally the user can click on start to start the game.  The game is already initialised on document load however this option allows the user to start a new game at any time.

    Talk about shuffle.


![Header](/docs/navigation-bar.png)

- __Landing Page Image__

    - The hero image gives an idea of what the finished shopper bag would look like.  The park setting is intended to give a relaxed casual feel to the user and also to highlight the shopper bag in the foreground.

    - The overlay text of "Make this bag yourself!" attempts to draw the user in to start thinking about making a bag.

    - The call to action of "Get started" offers both the beginner and the experienced crafter a link to the materials section of the page where details can be found about fabrics and tools needed.  The font family here is Montserrat also which is the same as the logo text in the navigation bar.

![Hero Image](/docs/hero-image-index-page.png)

 - __Bag Gallery Section__

    - The bag gallery shows images of the completed bag holding toys, gym training equipment, flowers and groceries.  The intention here is that the images will impress upon the user that it is a multifunctional item so it is worth making the effort to check out the materials needed and the steps involved in the following sections.

![Bag Gallery](/docs/bag-gallery.png)

- __Materials and Equipment Section__

    - This section tells the user exactly what quantity of material and which tools are essential to make the bag.

    - The icons also provide a visual representation to also quickly show the user these items e.g. sewing machine, thread, pins.  Many of these items most likely are owned by the user already.  It is intended that showing these icons provides some immediate imformation thereby putting the beginner crafer at ease.

![Materials and Equipment](/docs/materials-and-equipment.png)

- __Steps Section__

    - The steps section provides the user detailed instructions on how to construct the bag including information on how to prepare the materials.

    - The images show key points in each step such as creating the french seam or sewing the top of the bag.

    - The user also has the option of clicking through to the glossary page to check out definitions regarding relevant sewing terminology.  This feature is aimed at the beginner crafter.  The experienced crafter can continue on past the links to see quickly how the bag is constructed.

    - The links are a different colour to the other text which is intended to encourage a ckick through to the glossary.

    ![Step1](/docs/step1.png)
    ![Step1](/docs/step2.png)
    ![Step1](/docs/step3.png)
    ![Step1](/docs/step4.png)
    ![Step1](/docs/step5.png)

- __The Footer__

    - The footer call to action encourages the user interact with the social media channels.  In this case the most relevant channels are Facebook, Instagram and Pinterest.  
    
    - A new tab will be opened to allow the user to to navigate to the desired channel seamlessly.

     ![Footer](/docs/footer.png)

- __Glossary__

    - The glossary is available on the navigation bar on the main index page and also can be found via links from the steps section on the main index page.

    - The layout and design is potentially a familiar one and similar to any glossary found on Wikipedia with the terminology laid out in alphabetical order.  The letters are in capitals and separated by a line break before the glossary term and an indented description.

    - Each term is referenced by a number which is linked to the reference section at the bottom of the page.

    - The reference section offers the user, depending on their interest, an opportunity to explpore the references further.

    ![Step1](/docs/glossary-F-to-I.png)
    ![Step1](/docs/glossary-O-to-R.png)
    ![Step1](/docs/glossary-W-to-references.png)


- __Contact__

    - The contact page provides an opportunity for the user to send a message.  The user must enter their name, email address and the message.  All fields are required to be completed.  The name field must contain text.  The email address must be entered in the correct format i.e. must contain the @ and . characters.

    - Once the send button is clicked the user is presented with a thank you page which is triggered by a GET method in the form element.  This page is not visible from the navigation menu but contains the navigation bar to allow for further browsing by the user.

    ![Contact Page](/docs/contact-page.png)
    ![Thank YOu Page](/docs/thankyou-page.png)

### Features Left to Implement

- The creation and hosting of an instructional video was deemed to be not feasible for this release.

- I believe that a good deal of the site structure and content may be reusable in the future.  For examplethe layout and the styling of the glossary page may be reusable.  This opportunity perhaps was not fully thought out in terms of what the exact requirements were.  

## Testing

Initially all device testing was simulated on the Developer Tools on Google Chrome Version 101.0.4951.54.  As each feature of the product was being developed, it was tested on Google Chrome to check that it was functioning correctly and also that the responsiveness was as expected.  Any issues in the code were resolved as the project was being developed.

While the pages are developed for responsiveness using CSS Grid, some of the sections use Flexgrid. One of these is the header section.  An issue that was highlighted during the testing and proved challenging was the centering of both the Logo text and the navigation items once the header was wrapped for responsiveness.  The Chrome [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) showed that the problem existed on the navigation items where the contact link had a right hand margin.  The solution found was to create a specific id for the line item called "no-right-margin".  The CSS code then had a margin-right of 0px for this id.

Towards the end of the project the pages were tested on the following devices and browsers:

- Windows 11 Home on HP Pavilion Laptop with 1920p x 1080p display
    - Google Chrome Version 101.0.4951.54
    - Microsoft Edge Version 101.0.1210.32 
    - Firefox Version 100

- iOS 15.4.1 on iPhone with 2340p x 1080p display
    - iOS Safari

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