
# ChatApp


## Installation
After cloning the repository, go to the app root directory and install add dependencias with:
```
yarn install
```  
or just:
```
yarn
```

**Android**

To run your app on Android,  first open an Emulator or plug a physical device in  development mode and the run:
```
yarn android
```

**iOS**

To run your app on iOS,  you need to first install all Pod by running:
```
npx pod-install ios
```
and then :
```
yarn ios
```

## How to use the app:
Just sign up using a valid email, your name (at least 2 characters) and a password and have fun!

![Simulator Screen Recording - iPhone 14 - 2023-01-25 at 22 28 41](https://user-images.githubusercontent.com/13825245/214740910-8a343856-7635-4e74-b891-e20d72913878.gif)


## Firebase
Firebase was the choice to implement the backend. For real-time data storage  [Firestore](https://firebase.google.com/products/firestore) is being used to store all user and chats infos.
Also in this project [Firebase Auth](https://firebase.google.com/products/auth) is being used to handle the email/password authenticantion.

## Design System and Theme
For this project [Styled Components](https://styled-components.com/) was chosen handle the components styling and theming. A `defaultTheme` with most of the app's styling props is shared globally with `ThemeProvider` and applied to the components.

## Tests
To run the apps' tests just type:
````
yarn test
````
ans watch the results. In this project [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) , Jest and other dependencies like `jest-styled-components` were used to create all test suites. Due to time constraints, only a few tests were added but enough to showcase the knowledge on the matter.

## Suggested improvements/Next steps...
Here is a list of actions I would take next if I was continuing working over this project:

 - Implement a `Unread messages` indicator as proposed in the Figma Design
 - Implement a `Active Now` indicator as proposed in the Figma Design
 - Use Firebase to dispatch notifications on new messages
 - Replace some implementions in the app for Firebase cloud functions (ex.: update `latestMessage` and `udpatedAt` on a chat.
 - Add sounds and animations for new messages
 - Add reordering animation in the chats list
 - Add pagination for collection fetching
 - Increase test coverage
 - Refactor code to apply more SOLID concepts like separation of concerns
 - Plan future features like: 
	 - share sounds/images/videos
	 - add profile image upload on sign up
	 - create session management system
	 - and much more...

