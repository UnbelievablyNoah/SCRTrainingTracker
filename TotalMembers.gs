function updateStaff(e) {
  let sheet = SpreadsheetApp.getActive().getSheetByName("Training roles");
  let range = sheet.getRange("G2:G");
  range.setValue("")

  let supervisors = [];
  let apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/24832809/users?limit=100&sortOrder=Asc").getContentText();
  let apiResponseParsed = JSON.parse(apiResponse)
  
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
  
  // SDS
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/27002287/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // SGD
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/39740301/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // SSG
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/27002275/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // PRA
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/24832773/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // MOS
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/40996603/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // DM
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/27002260/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // PM
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/27002246/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // GM
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/39740424/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // SM
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/27002087/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // EM
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/25161876/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // OM
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/25161363/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // HOO
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/50555430/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // BD
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/24867706/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // MD
  apiResponse = UrlFetchApp.fetch("https://groups.roblox.com/v1/groups/3620943/roles/24832772/users?limit=100&sortOrder=Asc").getContentText();
  apiResponseParsed = JSON.parse(apiResponse)
  
  if(apiResponseParsed.data) {
    console.log(apiResponseParsed)
    for(let value in apiResponseParsed.data) {
      console.log(apiResponseParsed.data[value])
      supervisors.push([apiResponseParsed.data[value].username])
    }
  } else {
    console.log(apiResponseParsed)
  }
  
  // FINAL CHECKS
  let emptySlots = range.getNumRows() - supervisors.length;
  console.log(range.getNumRows(), supervisors.length, emptySlots)
  for(let i = 0; i < emptySlots; i++) {
    supervisors.push([""]);
  }
  console.log("setting range...")
  console.log(supervisors)
  SpreadsheetApp.getActive().getSheetByName("Training roles").getRange("G2:G").setValues(supervisors)

}
