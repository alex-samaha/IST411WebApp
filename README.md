# IST411WebApp
Platform for researchers to post surveys and have participants take part in whichever they want

## Sprint 1
| Backlog #     | Task Description | Story Point Estimate  | Story Point Actual | Status |
|:-------------:|:----------------:|:---------------------:|:------------------:|:------:|
| 1             | Create Account   | 10                    | 10                 | Done   |
| 2             | Save Login Info  | 6                     | 6                  | Done   |
| 3             | User Login UI    | 8                     | 8                  | Done   |
| 4             | Authentication   | 10                    | 10                 | Done   |
| 5             | User Survey UI   | 6                     | 6                  | Done   |

In this sprint, we have implemented user login and account creation functionality which can be accessed and utilized through the navigation bar on the top of the page. User accounts will be stored in our database, and when a user attempts to login, the database will run a query to determine if there are matching credentials. If the user is successfully authenticated, they are taken to the home page. If a user attempts to access the home page without being logged in, they will be redirected back to the login page. No duplicate usernames are allowed, otherwise the account creation will fail and redirect the user back to the account creation page. Lastly, the UI for the user survey page has been setup and is accessible through the user home page.

## Sprint 2
| Backlog #     | Task Description | Story Point Estimate  | Story Point Actual | Status |
|:-------------:|:----------------:|:---------------------:|:------------------:|:------:|
| 6             | Create Survey    | 6                     | 6                  | Done   |
| 7             | Add Survey UI    | 6                     | 6                  | Done   |
| 8             | Comment UI       | 5                     | 5                  | Done   |
| 9             | Create Comment   | 5                     | 5                  | Done   |
| 13            | Delete Survey    | 8                     | 8                  | Done   |
| 14            | Edit Survey UI   | 6                     | 6                  | Done   |
| 15            | Edit Survey      | 8                     | 8                  | Done   |

In sprint two, we deviated slightly changed plans and switched out the eligibility filter aspect of this and replaced it with deleting a survey, and updating a survey so that we could turn in a deliverable that implemented all elements of CRUD. Moving on, the additions in this sprint include allowing the user to create a survey, adding comments to a survey, deleting a survey, and having the user be able to edit any of their existing surveys. I reccomend creating a new account for this sprint because the database was modified and the user table may have undergone migrations. There is currently one test survey in the database, but more can be made. 


## Sprint 3
| Backlog #     | Task Description | Story Point Estimate  | Story Point Actual | Status |
|:-------------:|:----------------:|:---------------------:|:------------------:|:------:|
| 22            | Create Search UI | 12                    | 6                  | Done   |
| 23            | Search Engine    | 12                    | 8                  | Done   |
| 8             | Delete Comment UI| 8                     | 5                  | Done   |
| 9             | Delete Comment   | 8                     | 5                  | Done   |


In sprint three, there was not as many different features left to implement, but the main big one that we created was the search engine for researchers to utilize. The search engine runs a comprehensive google scholar search to look for research papers given keyword(s). The API that we are utililzing is still under development and so it is very slow at the moment, but does return useful results to the researcher. Unfortunately it can take up to a minute for the results to be returned, but it does a deep search and so more relevant papers are returned to the user. Additionally, we added the ability for a user to delete their own comments only so we almost have CRUD for two different entities.
