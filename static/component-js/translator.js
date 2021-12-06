var srcFonts = [{
  text: "Baybayin",
  value: "baybayin.json"
}];

$(function () {
  for (var i = 0; i < srcFonts.length; i++) {
    $("#ddl-src-font").append('<option value="' + srcFonts[i].value + '">' + srcFonts[i].text + '</option>');
  }
});

var map;
$("#ddl-src-font").change(function () {
  var current = this;
  $.getJSON($(current).val(), function (r) {
    map = r;
    $("#src").removeAttr("disabled");
  });
});

$("#src").change(function () {
  transform();
});

function transform() {
  var txt = $("#src").val(),
    newTxt = "",
    indexToForward = -1,
    forwardChars = map["forwardChars"],
    forwardSkipChars = map["forwardSkipChars"],
    backwardChars = map["backwardChars"],
    comboChars = map["comboChars"];
  for (var i = 0; i < txt.length; i++) {
    var char = txt[i],
      newChar = map[char];

    if (!newChar) {
      newChar = char;
    }

    if (backwardChars.indexOf(newChar) >= 0) {
      var l = newTxt.length;
      newTxt = newTxt.substr(0, l - 1) + newChar + newTxt[l - 1];
    } else if (startsWithAny(forwardSkipChars, newChar) && endsWithAny(forwardChars, newTxt)) {
      var l = newTxt.length;
      newTxt = newTxt.substr(0, l - 1) + newChar + newTxt[l - 1];
    } else {
      newTxt += newChar;
    }

    var comboKey = endsWithAnyProp(comboChars, newTxt)
    if (comboKey) {
      newTxt = newTxt.replace(new RegExp(comboKey + '$'), comboChars[comboKey]);
    }

    if (indexToForward >= 0) {
      // if new char ends with any forward skip char, need to retain forward char index for next time
      if (!endsWithAny(forwardSkipChars, newChar)) {
        // var l = newTxt.length;
        newTxt = newTxt.substr(0, indexToForward) + newTxt.substr(indexToForward + 1, newTxt.length) + newTxt[indexToForward];
        indexToForward = -1;
      }
    }

    if (forwardChars.indexOf(newChar) >= 0) {
      indexToForward = newTxt.length - 1;
    }
  }

  $("#dst").val(newTxt);
}

function endsWithAny(list, str) {
  for (var i = 0; i < list.length; i++) {
    if (str.endsWith(list[i])) {
      return true;
    }
  }
}

function endsWithAnyProp(obj, str) {
  for (var key in obj) {
    if (str.endsWith(key)) {
      return key;
    }
  }
}

function startsWithAny(list, str) {
  for (var i = 0; i < list.length; i++) {
    if (str.startsWith(list[i])) {
      return true;
    }
  }
}