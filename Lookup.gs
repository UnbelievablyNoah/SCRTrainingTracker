function onLookup(e) {
  if(e.range.getSheet().getName() != "Lookup") return
  let activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = activeSpreadsheet.getSheetByName("Lookup");
  if(sheet.getRange("B8").getValue() != true) {
    return;
  }
  sheet.getRange("B8").setValue("FALSE");
  sheet.getRange("E3:Q").setValue("")
  sheet.getRange("A32:B").setValue("")

  console.log(sheet.getRange("B5").getValue(), sheet.getRange("B4").getValue(), sheet.getRange("C4").getValue(), sheet.getRange("B6").getValue())

  if(sheet.getRange("B5").getValue() != "") {
    let values = checkSpreadsheet(sheet.getRange("B5").getValue(), sheet.getRange("B4").getValue(), sheet.getRange("C4").getValue(), sheet.getRange("B6").getValue())
    if(values.length == 0) return;
    sheet.getRange(3, 5, values.length, 14).setValues(values)
  } else {
    let totalValues = [];
    let values = checkSpreadsheet("Qualified Driver", sheet.getRange("B4").getValue(), sheet.getRange("C4").getValue(), sheet.getRange("B6").getValue())
    totalValues = totalValues.concat(values)
    console.log(totalValues, values)
    
    values = checkSpreadsheet("Dispatcher", sheet.getRange("B4").getValue(), sheet.getRange("C4").getValue(), sheet.getRange("B6").getValue())
    totalValues = totalValues.concat(values)
    console.log(totalValues, values)
    
    values = checkSpreadsheet("Guard", sheet.getRange("B4").getValue(), sheet.getRange("C4").getValue(), sheet.getRange("B6").getValue())
    totalValues = totalValues.concat(values)
    console.log(totalValues, values)
    
    values = checkSpreadsheet("Signaller", sheet.getRange("B4").getValue(), sheet.getRange("C4").getValue(), sheet.getRange("B6").getValue())
    totalValues = totalValues.concat(values)
    console.log(totalValues, values)

    if(totalValues.length != 0) {
      sheet.getRange(3, 5, totalValues.length, 14).setValues(totalValues); 
      generateScoreboard(totalValues)
    }
  }



  sheet.getRange("B4:C6").setValue("")
}

function generateScoreboard(values) {
  let leaderboard = {};
  let activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let theirName = activeSpreadsheet.getSheetByName("Submit").getRange("C2").getValue()
  console.log(values)
  for(let i in values) {
    let list = values[i];
    list = list.slice(2, list.length)
    for(let j in list) {
      if(list[j] == "" || list[j] == theirName) continue;
      if(!leaderboard[list[j]]) leaderboard[list[j]] = 0;
      leaderboard[list[j]] = 1 + +leaderboard[list[j]];
    }
  }
  console.log(leaderboard)
  let leaderboardArray = []
  for(let j in leaderboard) {
    leaderboardArray.push({
      "name": j,
      "amount": leaderboard[j]
    })
  }
  console.log(leaderboardArray)

  let sorted = leaderboardArray.sort(function(a,b) {
    return b.amount - a.amount 
  })
  console.log(sorted)
  let valuesToPut = [];
  for(let i in sorted) {
    	valuesToPut.push([sorted[i].name, sorted[i].amount])
  }
  console.log("Putting", valuesToPut)
  activeSpreadsheet.getSheetByName("Lookup").getRange(32, 1, valuesToPut.length, 2).setValues(valuesToPut);
}


function checkSpreadsheet(spreadname, date1, date2, name) {
  let activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let lookupSheet = activeSpreadsheet.getSheetByName(spreadname)
  if(!lookupSheet) {
    console.log(spreadname, "does not exist")  
    return [];
  }
  let values = [];

  for(let i = 3; i <= lookupSheet.getMaxRows(); i++) {
    let valT = lookupSheet.getRange(i, 1, 1, 13).getValues()[0];
    if(valT[0] == "") continue;
    let pu = true;
    console.log(name)
    if(name != "") {
      if(!valT.slice(1, valT.length).includes(name)) pu = false;
      console.log(valT.slice(1, valT.length), name, pu)
    }
    if(pu) pu = isBetweenDate(valT[0], date1, date2);
    console.log(pu)
    if(pu) values.push([spreadname].concat(valT));
  }
  console.log(values)
  return values;
}

function isBetweenDate(date, date1, date2) {
  console.log(date1,date1 instanceof Date, !date1, date2, date2 instanceof Date, !date2)
  if(!date1 && !date2) return true;
  if((date1 && !(date1 instanceof Date)) && (date2 && !(date2 instanceof Date))) return true;
  if(!date || !(date instanceof Date)) return true;
  if((!date1 || !(date1 instanceof Date)) && date2) {
    date1 = date2;
    date2 = undefined;
  }
  if(date1 && (!date2 || !(date2 instanceof Date))) {
    if(date1.getFullYear() != date.getFullYear()) return false;
    if(date1.getMonth() != date.getMonth()) return false;
    if(date1.getDate() != date.getDate()) return false;
    return true;
  }
  
  let minDate = (date1.getTime() < date2.getTime()) ? date1 : date2;
  let maxDate = (date1.getTime() >= date2.getTime()) ? date1 : date2;
  minDate.setHours(0,0,0,0);
  maxDate.setHours(23,59,59,999);

  return (minDate.getTime() < date.getTime() && date.getTime() < maxDate.getTime());
}
