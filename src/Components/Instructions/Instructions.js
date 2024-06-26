import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

import plusCircle from '../../images/plus_circle.svg';
import minusCircle from '../../images/minus_circle.svg';
import trashIcon from '../../images/trash_icon.svg';
import undoIcon from '../../images/undo_icon.svg';

import canvasWriting from '../../images/canvas-writing.png';

import './Instructions.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: '',
        }
    }

    render() {
        return (
            <div className="instructions-component">
            
                    <Collapsible
                        trigger="How To Use This Application"
                        transitionTime={50}
                        open={false}>
                        <div className="getting-started">
                            <h5><u>Getting Started</u></h5>
                            <p>This application is able to generate an alphabetical handwritten Font from a single drawn character of your choice:</p>
                            <p className="center">Supported characters are A-Z capital</p>
                            <p>Draw a character on the sketchpad below, click "Generate Font" and see the minted Font.</p>
                            <p>Make Sure:</p>
                            <ol>
                                <li>That the drawn character is readable</li>
                                <li>You Write a single character</li>
                                <li>You can keep trying till you are satisfied with the generated font</li>
                            </ol>
                            <img className="canvasWriting" src={canvasWriting} alt=""></img>
                        </div>

                        <div className="instructions-toolbar">
                            <h5><u>Canvas Toolbar</u></h5>
                            <img className="trashIcon" src={trashIcon} alt=""></img>
                            <p>Clear canvas</p>
                            <br/>
                            <img className="undoIcon" src={undoIcon} alt=""></img>
                            <p>Undo last drawing line</p>
                            <br/>
                            <img className="plusCircle" src={plusCircle} alt=""></img>
                            <img className="minusCircle" src={minusCircle} alt=""></img>
                            <p>Resize canvas</p>
                            <br/>
                        </div>
                    </Collapsible>
                    <Collapsible
                        trigger="Best Results"
                        transitionTime={50}
                        open={false}>
                        <div className="best-results">
                            <p className="center"><i>"How can I achieve the most accurate prediction?"</i></p>
                            <h5><u>1. Space your characters</u></h5>
                            <p>The most common pitfall: not having enough horizontal space between characters. The result will be LESS characters than one anticipates.</p>
                            <p><b>Example #1: Common Scenario</b></p>
                            <p><b>Description:</b> The above image will not return what is expected because the "H" and "e" are too close to each other. Fortunately, the space between "e" and "y" is good.</p>
                            <p><b>Result:</b> "He" will be predicted as one letter, and "y" as another. There will be 2 characters predicted instead of 3.</p>
                            <p><b>The Fix:</b> Add a little more space between the "H" and the "e" so that all 3 letters will be predicted seperately.</p>
                            <p><b>Example #2: "Hanging" characters</b></p>
                            <p><b>Description:</b> Do not write underneath characters. There needs to be some horizontal space.</p>
                            <p><b>Result:</b> The first "Tu" will be predicted as one letter. Fortunately, the 2nd "T" and "u" have enough space to be predicted seperately. There will be 3 characters predicted instead of 4.</p>
                            <p><b>The Fix:</b> Move the 1st "u" out from under the "T", and give it some horizontal space like the 2nd "u".</p>
                            <p><b>Example #3: A helping hand</b></p>
                            <p><b>Description:</b> We are allowed to be a little messy when writing. If we leave a few "breaks" inside of letters, the algorithm will help us out.</p>
                            <p><b>Result:</b> The broken "H" will be read as one letter. Just as intended!</p>
                            <h5><u>2. Uppercase vs Lowercase</u></h5>
                            <p>For letters where the only difference in casing is the size - write relatively large for uppercase, and relatively small for lowercase. </p>
                            <p><b>Casing Caveat:</b></p>
                            <p>Due to the constrains of the chosen dataset, the lowercase "i" samples rely off of image height to determine casing. The first "i" below would return "i" and the second "i" would return capital "I".</p>
                            <p>At the risk of hard-coding the neural net's prediction too much, this result has been left alone.</p>
                            <h5><u>3. Add spaces in your prediction</u></h5>
                            <p>For some flair, you can give yourself a large horizontal space to indicate an actual text-space in your prediction.</p>
                            <p><b>Result:</b> The added space will give us the prediction "Hey You" instead of "HeyYou".</p>
                            <h5><u>4. Write neatly</u></h5>
                            <p>This app is capable of predicting some messy handwriting. However, if you are aiming for a perfect prediction: write neatly and slowly.</p>
                        </div>
                    </Collapsible>
            </div>
        )
    }
}

export default Header