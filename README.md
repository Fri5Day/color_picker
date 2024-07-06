# Color Picker

## Environment 

- Vue Version: ^3.0.0
- Node Version: v12 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/BTaCtEWnbggQzhICStwqUw/ezgif.com-video-to-gif-2.gif)

## Functionality Requirements
The component will have the following functionalities:

- There is a selectedColor div, which is a div with the data-testid attribute as 'selectedColor'. This div shows the chosen color.

- Initially, the color of this div is set by props property initialSelectedColor which is a string denoting a valid CSS color name (e.g., “red” or “#efefef”).

- There is a color list, which is a div with the data-testid attribute as 'colorPickerOptions'.  Clicking any color from this list changes the color of the selectedColor div.

- Please note that backgroundColor of the clicked div in this list is the color to be set as backgroundColor of selectedColor div.  The colors in this list are passed as props via the property 'colorPickerOptions' which is an array of strings, where each string is a valid CSS color name.

## Testing Requirements
The following data-testid attributes are required in the component for the tests to pass:

- The selectedColor div should have the data-testid attribute 'selectedColor'.
- Color list should have the data-testid attribute 'colorPickerOptions'.

Please note that the colors are set by backgroundColor style specifically. Tests rely on this to pass. The component have certain classes and ids for rendering purpose. It is advised not to change them.

## Project Specifications

**Read Only Files**
- `__tests__/*`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
