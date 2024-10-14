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

    const titleHeading = document.createElement('h2');
    titleHeading.textContent = question.text;

    titleBlock.append(titleHeading);
    questionDisplay.append(titleBlock);

    const answersBlock = document.createElement('div');
    answersBlock.id = questions.id + "-questions";
    answersBlock.classList.add('answer-options');

    question.answers.forEach(answer => {
      const answerBlock = document.createElement('div');
      answerBlock.classList.add('answer-block');
      answerBlock.addEventListener('click', () => handleClick(question.id, answer.text));

      const answerImage = document.createElement('img');
      answerImage.setAttribute('src', answer.image);
      answerImage.setAttribute('alt', answer.alt);

      const answerTitle = document.createElement('h3');
      answerTitle.textContent = answer.text;

      const answerInfo = document.createElement('p');
      
      const imageLink = document.createElement('a');
      imageLink.setAttribute('href', answer.credit);
      imageLink.textContent = answer.credit;

      const sourceLink = document.createElement('a');
      sourceLink.textContent = 'Unsplash';
      sourceLink.setAttribute('src', 'https://unsplash.com/');

      answerInfo.append(imageLink, ' to ', sourceLink);

      answerBlock.append(answerImage, answerTitle, answerInfo);
      answersBlock.append(answerBlock);
    });

    questionDisplay.apppend(answersBlock);
  })
}

populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
  console.log(questionId + ', ' + chosenAnswer);
}