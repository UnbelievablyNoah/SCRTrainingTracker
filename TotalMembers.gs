function getUsers(roleID) {
  let supervisors = [];
  let apiResponse = UrlFetchApp.fetch(`https://groups.roblox.com/v1/groups/3620943/roles/${roleID}/users?limit=100&sortOrder=Asc`).getContentText();
  let apiResponseParsed = JSON.parse(apiResponse)

  SpreadsheetApp.getActive().getSheetByName("Training roles").getRange("G2:G").setValue("")
  
  // LD
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  console.log(supervisors)
  return supervisors
}

function updateStaff() {
  let sheet = SpreadsheetApp.getActive().getSheetByName("Training roles");
  let range = sheet.getRange("G2:G");
  range.setValue("")
  SpreadsheetApp.getActive().getSheetByName("Training roles").getRange("G2:G").setValue("")
  let supervisors = [];

  // LD
  supervisors = supervisors.concat(getUsers("24832809"))

  // SDS
  supervisors = supervisors.concat(getUsers("27002287"))
  
  // SGD
  supervisors = supervisors.concat(getUsers("39740301"))

  // SSG
  supervisors = supervisors.concat(getUsers("27002275"))

  // PRA
  supervisors = supervisors.concat(getUsers("24832773"))
  
  // MOS
  supervisors = supervisors.concat(getUsers("40996603"))
  
  // DM
  supervisors = supervisors.concat(getUsers("27002260"))
  
  // PM
  supervisors = supervisors.concat(getUsers("27002246"))
  
  // GM
  supervisors = supervisors.concat(getUsers("39740424"))
  
  // SM
  supervisors = supervisors.concat(getUsers("27002087"))
  
  // EM
  supervisors = supervisors.concat(getUsers("25161876"))
  
  // OM
  supervisors = supervisors.concat(getUsers("25161363"))
  
  // HOO
  supervisors = supervisors.concat(getUsers("50555430"))
  
  // BD
  supervisors = supervisors.concat(getUsers("24867706"))
  
  // MD
  supervisors = supervisors.concat(getUsers("24832772"))
  // FINAL CHECKS
  console.log("setting range...")
  console.log(supervisors)
  SpreadsheetApp.getActive().getSheetByName("Training roles").getRange(2, 7, supervisors.length, 1).setValues(supervisors)

}
