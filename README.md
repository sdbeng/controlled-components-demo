This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# controlled-components-demo

## git daily tips

### Spelled last commit message wrong - 
This will open up your editor and allow you to make a change to that last commit message.
```git commit --amend```

### Spelling mistake on branch name

```git branch -m feature-brunch feature-branch```

### Accidentally committed all changes to the master branch
So you are working on a new feature and in your haste, you forgot to open a new branch for it. You have already committed a load of files and now those commits are all sitting on the master branch.

So we can roll back all those changes to a new branch with the following three commands:

Note: Make sure you commit or stash your changes first, or all will be lost!

This creates a new branch, then rolls back the master branch to where it was before you made changes, before finally checking out your new branch with all your previous chnages intact.

```git branch feature-branch```
```git reset HEAD~ --hard```
```git checkout feature-branch```

### Added a wrong file in the repo
What if you've added a file that you did not want to commit? a .env file, a huge image or a config file saved to the wrong folder? Yes, you can fix it.

If all you did was stage the file and you haven't commited yet, it's as simple as resetting that staged file:

```git reset /assets/images/my-huge-bg.jpg```

If gone so far as commiting that change, just run:

```git reset --soft HEAD~1```
```git reset /assets/images/my-huge-bg.jpg```
```rm /assets/images/my-huge-bg.jpg```
```git commit ```

This will undo the commit, rm img, then add a new commit in it place.

### foobar
### foobar
### foobar