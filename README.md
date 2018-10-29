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
