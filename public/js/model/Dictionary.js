const dictionary = [{
        word: "COMPUTER",
        definition: "a workspace"
    }, {
        word: "JAVA",
        definition: "a general-purpose computer programming language designed to produce programs that will run on any computer system."
    },
    {
        word: "PYTHON",
        definition: "a large heavy-bodied nonvenomous constrictor snake occurring throughout the Old World tropics."
    },
    {
        word: "LAW",
        definition: "the system of rules that a particular country or community recognizes as regulating the actions of its members and may enforce by the imposition of penalties."
    },
    {
        word: "RIGHT",
        definition: "morally good, justified, or acceptable."
    },
    {
        word: "FREEDOM",
        definition: "the power or right to act, speak, or think as one wants without hindrance or restraint."
    },
    {
        word: "SKILL",
        definition: "the ability to do something well; expertise."
    },
    {
        word: "CLAIM",
        definition: "state or assert that something is the case, typically without providing evidence or proof."
    },
    {
        word: "JOIN",
        definition: "unite to form one entity or group."
    },
    {
        word: "APPLY",
        definition: "make a formal application or request."
    },
    {
        word: "TATTOO",
        definition: "a form of body modification where a design is made by inserting ink."
    },
    {
        word: "ELECTRICITY",
        definition: "is the set of physical phenomena associated with the presence and motion of electric charge."
    }
]

var currentWord = getWord();

function getWord() {
    return dictionary[Math.floor(Math.random() * dictionary.length)]
}

function getDefinition() {
    return this.currentWord;
}