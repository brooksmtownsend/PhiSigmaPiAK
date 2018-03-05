# The official Phi Sigma Pi Alpha Kappa Chapter mobile application!
This application is written in react-native, with help from the React-Navigation library.

# Documentation
## Our Stack
- React Native
- React Navigation for tab organization and app navigation
- Jest for robust testing

## Screens Functionality
The code for each ‘page’ or ‘view’ of the application can be found in the screens folder of the app directory. The function of each screen is as follows:

### Attendance.js
> Displays a field where users may enter a tinyurl path that directs them to tinyurl.com/<URLpath> when they push “Click Here to Sign In”. This screen is to be used in conjunction with the Recording Secretary, who generates attendance sign-in pages. The URLs of these sign-in pages should be converted into tinyurls, whose path names will serve as the ‘attendance code’ that users enter to sign in on the app. For example, if the URL for a sign-in page is tinyurl.com/phisigmapi, the user will enter “phisigmapi” as the attendance code in order to sign in.
### UsefulLinks.js
>Displays a WebView (React Native’s implementation of opening a browser within an application) that shows the Useful Links page on the Phi Sigma Pi website: https://phisigmapi.web.unc.edu/useful-links/. This page should be frequently modified to reflect current information, and this may be done through web.unc.edu .
### YellowPages.js
> Basically like the contacts app on your phone. Displays a list of Siblings that is pulled from directory.js in the ‘data’ folder of the ‘app’ directory. When a Sibling’s name is clicked on, a new page will open that displays more of that Sibling’s personal information.
### UserDetail.js
>The ‘view’ that is opened when a Sibling is selected from the YellowPages.js ‘view’. Displays a Sibling’s profile picture, name, pronouns, email address, phone number, and initiate class.

# Installation / Modification
If you want to edit this app or contribute (ex: Future IT committee) then you'll need to follow these steps:
1. Clone the repository by running 
>```git clone https://github.com/brooksmtownsend/PhiSigmaPiAK.git```
2. run ```npm install``` in the directory that you cloned the app into.
3. You'll need to setup your device based on what platform you have. To run android you need to download Android Studio. To run iOS, you need to be on a Mac and download XCode.
4. Open the project's corresponding folder ```./android``` or ```./ios``` in the IDE, run and build the project.

# COMING SOON

### Firebase Integration
> Allowing users to authenticate and log in so that apps can be released publicly to the play store without exposure of personal information
> Notifications that can inform users of important Phi Sig events
