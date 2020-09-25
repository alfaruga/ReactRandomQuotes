Code used to quote

<hr>
I used this code to "clean" the raw data from Mr.Jakub Petriska (https://gist.github.com/JakubPetriska/060958fd744ca34f099e947cd080b540).

This code extracts all the text thas is between double quotes("")
then it saves it into an array.(arr).
<code>
let arr = str.match(/(".\*")/gm);
let emparr = [];
//Emp arr is used to create an array of objects that contains
// an id, author and the quote

for(let i=0; i<=arr.length; i++)
{
if(i>0&&i%2!==0)
{
let tempArr = arr[i].split('",');
emparr.push({id: i, author: tempArr[i-1], title: tempArr[i]})
}
}

</code>
Emparr is hosted in firebase (https://alfarugalibrary.firebaseio.com/)
from where i used axios to retrieve the single quote data
I'm not sure whether or not this makes the application faster, but it prevents
me to be dealing with a lot of text in my app
