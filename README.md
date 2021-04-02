# The Odin Project - Foundations
# Project #3: Etch-a-Sketch

**Goal**: Create an interactive sketch pad allowing users to draw within a grid in a chosen style. This exercise can be found in The Odin Project [curriculum](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project).

**Live Link**: 👉 https://grumbeard.github.io/etch-a-sketch/

## Phase 1: Create a working sketch pad
At this point, the exercise requirements (+optional) are fulfilled:
- Grid cells are colored with a random hue on hover
- Cells are slightly darkened on rehover
- Reset button clears any drawing on sketch pad and prompts users to input number of squares to fill one side of grid
- On receiving valid input from user, a new grid is created with desired dimensions
- **All cells in new grid continue to be square in dimension**
- **New grid occupies same pixels on screen as before**
![image](https://user-images.githubusercontent.com/51464365/113272811-9bf0b200-930e-11eb-927f-5d1fe8b6fbcd.png)


## Phase 2: Making it fancy with more interactive elements
- **Slider implemented to allow dynamic (instant!) resizing of grid cells** (1x1 ~ 100x100)
- Dimensions of grid dynamically updated (based on no. of squares per side)
- Added an 'Erase' mode to paint over cells with base color
- **Users can toggle between 'Paint' and 'Erase' modes by clicking the respective image controls**
- Sketch pad placed into a responsive layout for different device widths

### Key Learnings
- Improved understanding of DOM manipulation and Event Handling, including prevention of unintended propagation (had to fix a bug!)
- First time creating a drag element (using mouseon/over/up events)
  - Implementing a slider for toggling the grid size was especially challenging (slider width was also dynamic)
  - [stackoverflow](https://stackoverflow.com/questions/14095880/simple-pure-javascript-drag-controller-slider) was helpful to get a basic understanding of how it might work, but eventual implementation was different (and heavily refactored after attempting various approaches)
  - Learnt how to obtain element width info using JavaScript ([offsetWidth property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth))
- Learnt to use CSS filters as alternative method of providing shadow effect under SVG paths

![image](https://user-images.githubusercontent.com/51464365/113398266-e470a400-93d0-11eb-8bfd-8a11bf5eadf7.png)
