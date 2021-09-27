function onEdit(e) {
  if(!e) {
    console.log("weird");
    return;
  }
  if(e.range.getSheet().getName() != "Submit") return;
  var as = e.source.getSheetByName("Submit");
  if(as.getRange("C3").getValue() == "") {
    as.getRange("C4:C15").setValue("")
    as.getRange("D5:D15").setValue("")
    return;
  }
  var type = as.getRange("C3").getValue();
  if(e.range.getA1Notation() == "C3") {
    if(type == "Signaller") {
      as.getRange("D5:D7").setValue("Assessor")
      as.getRange("D8:D12").setValue("Driver")
      as.getRange("D13:D15").setValue("")
    }
    if(type == "Guard") {
      as.getRange("D5:D8").setValue("Assessor")
      as.getRange("D9:D10").setValue("Dispatcher")
      as.getRange("D11:D11").setValue("Signaller")
      as.getRange("D12:D15").setValue("")
    }
    if(type == "Dispatcher") {
      as.getRange("D5:D8").setValue("Assessor")
      as.getRange("D9:D10").setValue("Guard")
      as.getRange("D11:D11").setValue("Signaller")
      as.getRange("D12:D15").setValue("")
    }
    if(type == "Qualified Driver") {
      as.getRange("D5:D10").setValue("Assessor")
      as.getRange("D11:D15").setValue("")
    }
    return;
  }
  if(as.getRange("C4").getValue() == "") {
    as.getRange("C5:C15").setValue("")
    return;
  }
  if(as.getRange("C5").getValue() == "") {
    as.getRange("C5:C15").setValue("")
    return;
  }
  var checkbox = as.getRange("C16")
  if(checkbox.isChecked()) {
    checkbox.setValue("FALSE")
    var Data = e.source.getSheetByName(type);
    if(type == "Qualified Driver") {
      let others = []
      let assessors = [];
      for(let i = 0; i < 10; i++) {
        let role = as.getRange(6 + i, 4).getValue();
        let name = as.getRange(6 + i, 3).getValue();
        if(role == "") {
          others.push(name)
        }
        if(role == "Assessor") {
          assessors.push(name)
        }
      }
      let hostRole = as.getRange("D5").getValue();
      if(hostRole == "Assessor") {
        assessors.push("");
      }
      let values = [as.getRange("C4").getValue(),
        as.getRange("C5").getValue()];
      values = values.concat(assessors);
      values = values.concat(others);
      Data.appendRow(values)
    }
    if(type == "Guard") {
      let others = []
      let assessors = [];
      let dispatchers = [];
      let signaller = [];
      for(let i = 0; i < 10; i++) {
        let role = as.getRange(6 + i, 4).getValue();
        let name = as.getRange(6 + i, 3).getValue();
        if(role == "") {
          others.push(name)
        }
        if(role == "Assessor") {
          assessors.push(name)
        }
        if(role == "Dispatcher") {
          dispatchers.push(name)
        }
        if(role == "Signaller") {
          signaller.push(name)
        }
      }
      let hostRole = as.getRange("D5").getValue();
      if(hostRole == "Assessor") {
        assessors.push("");
      }
      if(hostRole == "Dispatcher") {
        dispatchers.push("");
      }
      if(hostRole == "Signaller") {
        signaller.push("");
      }
      let values = [as.getRange("C4").getValue(),
        as.getRange("C5").getValue()];
      values = values.concat(assessors);
      values = values.concat(dispatchers);
      values = values.concat(signaller);
      values = values.concat(others);
      Data.appendRow(values)
    }
    if(type == "Dispatcher") {
      let others = []
      let assessors = [];
      let guards = [];
      let signaller = [];
      for(let i = 0; i < 10; i++) {
        let role = as.getRange(6 + i, 4).getValue();
        let name = as.getRange(6 + i, 3).getValue();
        if(role == "") {
          others.push(name)
        }
        if(role == "Assessor") {
          assessors.push(name)
        }
        if(role == "Guard") {
          guards.push(name)
        }
        if(role == "Signaller") {
          signaller.push(name)
        }
      }
      let hostRole = as.getRange("D5").getValue();
      if(hostRole == "Assessor") {
        assessors.push("");
      }
      if(hostRole == "Guard") {
        guards.push("");
      }
      if(hostRole == "Signaller") {
        signaller.push("");
      }
      let values = [as.getRange("C4").getValue(),
        as.getRange("C5").getValue()];
      values = values.concat(assessors);
      values = values.concat(guards);
      values = values.concat(signaller);
      values = values.concat(others);
      Data.appendRow(values)
    }
    if(type == "Signaller") {
      let others = []
      let assessors = [];
      let drivers = [];
      for(let i = 0; i < 10; i++) {
        let role = as.getRange(6 + i, 4).getValue();
        let name = as.getRange(6 + i, 3).getValue();
        if(role == "") {
          others.push(name)
        }
        if(role == "Assessor") {
          assessors.push(name)
        }
        if(role == "Driver") {
          drivers.push(name)
        }
      }
      let hostRole = as.getRange("D5").getValue();
      if(hostRole == "Assessor") {
        assessors.push("");
      }
      if(hostRole == "Driver") {
        drivers.push("");
      }
      let values = [as.getRange("C4").getValue(),
        as.getRange("C5").getValue()];
      values = values.concat(assessors);
      values = values.concat(drivers);
      values = values.concat(others);
      Data.appendRow(values)
    }
    let copyFrom = Data.getRange(3,1, 1, Data.getMaxColumns());
    copyFrom.copyFormatToRange(Data, 1, Data.getMaxColumns() - 1, Data.getLastRow(), Data.getLastRow());
    as.getRange("C3:C15").setValue("")
    as.getRange("D5:D15").setValue("")
  }

}
