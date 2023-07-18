## AM - Module 8
- Github projects and issues
  - Show how to create a project
		- Each card is called "notes" by github
	- Github issues can also be used as cards
		- Chores, bugs, and feature requests are types of issues
		- Chores are just mundane tasks like updating a version of a package, fixing some misspelling, refactoring using certain naming conventions
		- Bugs are problems with your code
		- Feature requests are requests for new or improved functionality
		- Show how to create an issue on github-> on a repository, then import that issue as a card
	- Quiz hints:
		- Common columns: done, upcoming, inprogress
		- Abilities of github projects: 
			- Sharing links for specific cards
			- Prioritizng issues and pull requests by organizing them in multiple columns
			- Automating the movement of cards based off other actions taken on github
	- Standard labels for github issues: help wanted, good first issue, (show the rest on the github issue page on github)
- Writing user stories- show slides and give examples as if im building amazon for the first time
	- Assessment- they will have to write a user story
- Markdown
	- Show the documentation link from the slide
	- Go through platform and Make an example md file
- Pair Programming- Explain the benefits of pair programming and how it applies here and in the industry

## PM - Module 7
- You can run through the platform's examples to show 
- Overview-> use slide to show folder structure and say that git is better
- Version Control and Setup (use slides until social coding with git and github)
	1. Difference between git and github
	2. Git- command line
	3. Git and github use idea of repositories
	4. Github is a website for the code to go on
	5. You can sync repositories between git and github
	6. Have class configure git using the git config - platform
	7. Show how they can see if a project is a git repository by looking for the .git folder
- Git basics
	1. Use git workspaces slide
		1. A commit is basically just a snapshot - slide
	2. Use Git workflow slide
	3. Use platform and walk through the examples
		1. Git diff will show you difference between the staged files and the committed version of those files
- Pushing and Pulling
	1. Show how to push to github with the existing repository
	2. Git remote add origin -> origin is the name we gave to this repository
- Forking and cloning
	- Difference between forking and cloning
		- Cloning: if you clone a repo, then modify that code/add files etc;, then try to git push-> you'll be asking to push up the change to that original  repository. Use case-> if it’s a team repository, you can clone it and push back to it for teamwork on the same repository. You need to be a member of that repository to be able to push to that repository -> git push origin
		- Forking: you can have your own version of that repository that you can push to and its all yours and you can clone the fork you made. When you push to origin, its to your own repository on github. 
			- Its possible to take the changes on your fork and push it to the original as well if you want. In this case, use a pull request. 
			- You can do both forking and cloning if you want, they are not mutually exclusive. Forking and cloning are separate processes but don’t have to be.
		- When you clone, you should not clone inside of an existing repository (a folder that already has .git)
					
