const qoute = document.querySelector('.qoute');
const person = document.querySelector('.person');
const btn = document.querySelector('#new-quote');

const allqoutes = [
    {
        q: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,

        person: `Marilyn Monroe`
    },
    {
        q: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,

        person: `Albert Einstein`
    },
    {
        q: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,

        person: ` Bernard M. Baruch`
    },
    {
        q: `“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”`,

        person: ` William W. Purkey`
    },
    {
        q: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,

        person: ` Dr. Seuss`
    },
    {
        q: `“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead
        Walk beside me… just be my friend”`,

        person: ` Albert Camus`
    },
    {
        q: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,

        person: ` C.S. Lewis, The Four Loves`
    },
    {
        q: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,

        person: `Maya Angelou`
    },
]

btn.addEventListener('click',()=>{
    const random = Math.floor(Math.random()*allqoutes.length);
    qoute.textContent = allqoutes[random].q;
    person.textContent = allqoutes[random].person;
})