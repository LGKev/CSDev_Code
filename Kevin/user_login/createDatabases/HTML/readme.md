I am currently just copying from Dechen's folder of HTML pages to here.

A symbollic link may be a better solution so when the HTML pages are changed, I am using the 
most up to date one in my server.

for now its jut copy and paste and if Dechen's HTML changes, then I have to re copy.

another solution, probably the best solution is to just pass the path to her folder. 
	not sure how that works because we have __dirname, which makes me think it will choose the directory
	packages.json is in.

i am slowly getting this compiled up.

i see this error for the style.css so i know that index.ejs is being brought in
cuz the error message renders as expected. but then the style sheet is not
applied. 

so i look at console inside chrome. wtf chrome and says refused to apply
loggedin:1 stylesheet from becasue its mime type 
apparently something about a comment inside the style sheet?
