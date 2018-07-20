/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/


var TaylorSwift = document.getElementById('name1');
TaylorSwift.innerHTML = 'Tay-Tay'


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var DJKahled = document.getElementById('position2');
DJKahled.innerHTML = 'Project Manager';




/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var Piko = document.getElementById('alias3');
Piko.innerHTML = 'Concatenation'



/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/



var Prince = document.getElementsByClassName('profile');
Prince[0].innerHTML = '"She wore a raspberry barrett"';




/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/


var bruceLee = document.getElementsByClassName('profile');
bruceLee[1].innerHTML = '"The key to immoratlity is first living a life worth remembering"';




/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/


var samJack = document.getElementsByClassName('alias');
samJack[2].innerHTML = 'Nick Fury';




/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/



var peterG = document.createElement('div');
peterG.id = 'name7';
peterG.innerHTML = 'Peter Griffin';
nameParent.appendChild(peterG);


 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/


var timDuncan = document.createElement('div');
timDuncan.id = 'alias8';
timDuncan.innerHTML = 'Old Man Riverwalk';
aliasParent.appendChild(timDuncan);




//Final Boss
/*9. Create your own profile.*/

var myName = document.createElement('div');
myName.id = 'name9';
myName.innerHTML = 'Rick Sanchez';

var blockClass = document.getElementsByClassName('block3 col-sm-4');
blockClass[2].appendChild(myName);

var myPosition = document.createElement('div');
myPosition.id = 'position9';
myPosition.innerHTML = 'Best Grandpa Ever';
blockClass[2].appendChild(myPosition);


var myAlias = document.createElement('div');
myAlias.id = 'alias9';
myAlias.innerHTML = 'Rick C137';
blockClass[2].appendChild(myAlias);

var myBio = document.createElement('div');
myBio.id = 'bio9';
myBio.innerHTML = '"Wubba Lubba Dubb Dubb"'
blockClass[2].appendChild(myBio);

//var myImage = document.getElementsByTag('img');
/*myImage[8].src = 'https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728';
blockClass[2].appendChild(myImage);*/

