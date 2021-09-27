# SCRTrainingTracker
Manual training tracker that work with trainings with SCR

## Features
* Automatically sorts trainings
* Lookup system
  * Filter by date and between dates
  * Filter by name of hosts or that is included in co hosts
  * Filter by type
  * Leaderboard of amount of trainings you done with someone - based of filters
  * total trainings, also per type - based of filters
* Nice format in the tabs (except first tab)

## Setup
1. Go to https://docs.google.com/spreadsheets/d/1wxzEEFucPektf0dO63EozcEKnGirJa23D6Bqrwea09s
2. Click on `file -> make a copy`, and put in optional info. Then press ok
3. If you have created a copy go to, `tools -> script editor`
4. Now you have a script editor. On the left you see the explorer. You should see files now otherwise click on one of the 5 icons that is named `editor`.
5. Right from files click the plus and make 3 scripts. Named: `SubmitTraining` | `TotalMembers` | `Lookup`
6. When made put in the code shown here according to the file names. So for example `SubmitTraining` should contain everything from [SubmitTraining](https://github.com/lavaglijder/SCRTrainingTracker/blob/main/SubmitTraining.gs) When pasted make sure to do `Ctrl + s` to ensure everything is saved
7. Now go to the explorer on the left you should see a icon named `Triggers`. Click on it
8. Now click on `Add Trigger` bottom right
9. Choose which function to run should be: `updateStaff`
10. Choose which deployment should run should be: `Head`
11. Select event source should be: `Time-driven`
12. Select type of time based trigger should be: `Week timer`
13. Select day of week should for example be: `Every Monday`, but could be any day you like. Like sunday cause most results are announced saturday.
14. Select time of day should be: `Midnight to 1am`
15. Press `save` bottom right
16. Choose your google account
17. Click on `advanced` bottom left
18. At the bottom click on `Go to (your spreadsheet name)`
19. Then press allow bottom right
20. Go back to the spreadsheet
21. Go to `Submit` sheet and put your name at the top slot

