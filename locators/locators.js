/**
 *
 * //2025-12-09 lesson
 
<html>
    <body>
        <div>
            <input></input>
            <button></button>
        </div>

        <button></button>
    </body>
</html>

----Xpath
//html/body/input -- absolute xpath

----Css paths
html>body>input
no '//' when satrting
if its immediate tag, we need to use '>' instead of '/'

//button -- relative xpath

//input -- relative xpath (we cannot use this if we have multiple occurences)

in that case, we follow below way to get through this
//div/input 
css--> div>input

if we need to call the Input, we need to use
//body/input

---------------------------------------------

when we use an attribute
//input[@id='userName']         --> css ->          input[id='username']
   

common form
attribute - can be a id, class
//tag[@attribute='attribute_value']

we can use two attributes
//input[@type='text' and @name='email']        css ->       input[type='text'][name='email']

---------------------------------------------

to identify a text inside a page. we user 'text()' function for that
//h1[text(), 'Text Box']

---------------------------------------------

sample structure - we need to call the second input

<div>
    <input></input>
    <input></input>
</div>

//div/input[2]        css ->       div>input:nth-child(2)


---------------------------------------------

<input type="text" id=user123></input>         css ->       input[id ^='user')]

//input[contains(@id, "user")]        css ->       input[id $='123']


//input[starts-with(@id, "user")]

---------------------------------------------

Css paths

<button id='clickme' class='styleMe'></button>

button[id='clickme']
button#clickme
button.styleMe


---------------------------------------------

check the wildcard method - when we have inputs after this

//div[@id='userName']/input
//*div[@id='userName']/input


#userName/input



input[id='userName']
input[id='userEmail']

no match found
input[id='currentAddress']


input[id='permanentAddress']


button[id='submit']


//div[@class='element-group'][1]//li[@id='item-0']



 */