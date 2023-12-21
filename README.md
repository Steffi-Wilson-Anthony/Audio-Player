## Christmas Greetings

#### Screenshots

<img width="949" alt="Screenshot 2023-12-21 141710" src="https://github.com/Steffi-Wilson-Anthony/Audio-Player/assets/114890864/c2cc74ee-0c98-4f26-9c7c-9b769372c350">
<img width="947" alt="Screenshot 2023-12-21 141821" src="https://github.com/Steffi-Wilson-Anthony/Audio-Player/assets/114890864/ca400ea8-e102-4368-b925-ff06492faf31">
## Steps

- There is the index.css file with all the css for the main page and the popup.

#### 
- The data.js contains a list of objects. Each object contains properties of a song such as id, name, url.
- The url of each song is imported from the assets folder.

#### Import List,Title and Popup components in App.jsx
- They will be rendered on the main page.
- The popup is rendered on clicking the Play button.
- For this I have used the useState hook. The triggerButton is initially set false. On clicking the Play button the setTrigger will updates the triggerButton to true and displays the popup on the screen.

#### Set the List component
- Import data from data.js and also the components Song and List_Title.
- The List_Title is the title for the list
- The Song component represents each song name in the list.
- It also has a Play button that will trigger the popup.

#### Set the Popup component
- Fisrt style the component. Add a title and a close button. Then add the current song title, seek-bar, and the forward, backward and Play/Pause button. I have used the react icons for the Play/Pause, forward and backward buttons.
- The useEffect hook will be used to play and pause the current song.
- The audioElement will always refer to the current song.
- The useState hook is used to set the songs list, current song and change the state of current song (play/pause)

#### Set the Player component
- Get the current song.
- Set the function to change the css of seek-bar based on the progress of the bar.
- Set the functionality for the play/pause, forward and backward buttons.
