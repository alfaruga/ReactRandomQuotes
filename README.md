# Random quote generator

A one page React app that show interesting quotes.<a href="https://alfaruga.github.io/ReactRandomQuotes/" target="_blank">See project</a>
 
  <h3>Itroduction</h3>
  <hr>
  <p>This project was part of the freecodecamp's <strong><a href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine"> Front End Library Projects </a></strong>. I decided to include this project because it helped me to implement React in a single page app.<p>
    <br>
 
  <h3>Tech Stack</h3>
  <hr>
  <p>In this project the next technologies were used: ReactJS, React libraries (Axios for http requests, gh-pages to publish, FontAwsesome to add icons and CSS modules) ,HTML5, CSS,Git (with Github), Ubuntu Linux operating system and VSCode.</p><br>
<br>

  <h3>Objectives</h3>
  <hr>
  <ol>
  <li>Create a simple app that makes a simple HTTP request</li>
  <li>Render elements by accesing the app state properties</li>
  <li>Use props to modify the page layout</li>
  <li>Style the compoents using CSS modules</li>
  <li>Make a button that tweets the current quote on screen</li>
  </ol>
  <br>
 
 <h3>What did I learn?</h3>
  <hr>
  <p>I applied my basic ReactJs knowledge to create a webapp that makes HTTP requests and is more simple than a normal HTML5, CSS and vanilla JS web.<p>




## Code used to quote
<hr>
<p>I used this code to "clean" the raw data from Mr.Jakub Petriska (https://gist.github.com/JakubPetriska/060958fd744ca34f099e947cd080b540). This code extracts all the text thas is between double quotes("") then it saves it into an array.(arr).</p>


`let arr = str.match(/(".\*")/gm);
let emparr = [];`


<p>emparr is used to create an array of objects that contains an id, author and the  quote</p>


`for(let i=0; i<=arr.length; i++)
{
if(i>0&&i%2!==0)
{
let tempArr = arr[i].split('",');
emparr.push({id: i, author: tempArr[i-1], title: tempArr[i]})
}
}`

<p>emparr is hosted in firebase (https://alfarugalibrary.firebaseio.com/) from where i used axios to retrieve the single quote data. I'm not sure whether or not this makes the application faster, but it prevents me to be dealing with a lot of text in my app. </p>
