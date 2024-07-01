const questionDisplay = document.querySelector('#questions');
const answerDisplay = document.querySelector('#answer');
const questions = [
  {
    id: 0,
    text: "Pick an test answer:",
    answers: [
      {
        text: "yes",
        image: "",
        alt: "Yes answer",
        credit: "Image's credit"
      },
      {
        text: "no",
        image: "",
        alt: "No answer",
        credit: "Image's credit"
      },
      {
        text: "maybe",
        image: "",
        alt: "Maybe answer",
        credit: "Image's credit"
      }
    ]
  },
  {
    id: 1,
    text: "Pick an test answer 2:",
    answers: [
      {
        text: "yes2",
        image: "",
        alt: "Yes answer",
        credit: "Image's credit"
      },
      {
        text: "no2",
        image: "",
        alt: "No answer",
        credit: "Image's credit"
      },
      {
        text: "maybe2",
        image: "",
        alt: "Maybe answer",
        credit: "Image's credit"
      }
    ]
  }
]

const populateQuestions = () => {
  questions.forEach(question => {
    const titleBlock = document.createElement('div');
    titleBlock.id = question.id;
    titleBlock.classList.add('title-block');
  })
}