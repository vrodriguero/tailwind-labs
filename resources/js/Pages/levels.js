export const levels = [
    {
        title: 'Level 1: Flex Direction',
        description: 'You need to use flex direction to control the direction of cats',
        hint: 'You need to use row-reverse to make the cats eat in their bowl',
        completed: (userInput, errorMessage, level) => {
            if (userInput.value === 'flex-row-reverse') {
                errorMessage.value = false
                level.value.startCompleteAnimation();
            }
            else if (userInput.value === 'flex-row' || userInput.value === 'row-reverse') {
                errorMessage.value = "you are this 👌🏼 close to the answer. Try again!"
            }
            else if (userInput.value.length === 0) {
                errorMessage.value = "you need to write something!!"
            }
            else {
                errorMessage.value = "Nope! that's not it."
            }
        },
        catOrder: ['Orange', 'Black', 'Gray'], // orange, black, grey
        bowlOrder: ['Black', 'Orange', 'Gray'],
        orangeCatWalk: {
            moveTo: '512px',
            startingLocation: '200px',
        },
        greyCatWalk: {
            moveTo: '512px',
            startingLocation: '200px',
        },
        blackCatWalk: {
            moveTo: '512px',
            startingLocation: '200px',
        },
    },
]
