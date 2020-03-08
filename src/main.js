//const env = require("./key.js");
const key = SPREAD_SHEET_KEY

function myFunction() {

      var spreadsheet = SpreadsheetApp.openById(key);
      var sheet = spreadsheet.getActiveSheet();
      
      for (var i=1; i<10; i++){
        var range = sheet.getRange("A"+i);
        var value = range.getValue();
        Logger.log(value);
        if(value == false){
            sheet.getRange("A"+i).setValue('insert_test')
            break;
          }
      }
    }
    
function doGet(e) {
  let data = {};  
  const spreadsheet = SpreadsheetApp.openById(key);
  const sheet = spreadsheet.getActiveSheet();
  let range = sheet.getRange(2,2,sheet.getLastRow()).getValues();
  console.log(uniq(range))
  let array = sheet.getRange(2,2,sheet.getLastRow()).getValues();
  data.result = uniq(array);
  data.success = true
  data = JSON.stringify(data);
  out =  ContentService.createTextOutput()
  out.setMimeType(ContentService.MimeType.JSON);
  out.setContent(data)
  
  return out
}

function doPost(e) {
  Logger.log(e);
  //var params = 'test'
  var params = JSON.parse(e.postData.getDataAsString()); 
  console.log(params);
  console.log(params.text)
  var tet = String(params);
  console.log(typeof tet);
  console.log(tet);
  var spreadsheet = SpreadsheetApp.openById(key);
  var sheet = spreadsheet.getActiveSheet();
  var date = new Date();
  
  console.log(JSON.stringify(date))
    
  var test = sheet.appendRow([date, tet]);
  //date = String(date)
  //data = date.getFullYear()+":" +(date.getMonth()+1)
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ success: true,
                                      d: date,
                                      w: tet
                                     }));
  //output.setContent(JSON.stringify({ d: date}));
  //output.setContent(JSON.stringify({ w: tet}));
  return output;
}


//chromeからきたgetをうけ実行、ユニークな配列を返す
//http通信部分を作る
function getSpreadSheet(){
    const spreadsheet = SpreadsheetApp.openById(key);
    const sheet = spreadsheet.getActiveSheet();
    let range = sheet.getRange(2,2,sheet.getLastRow()).getValues();
    Logger.log(uniq(range))
    }

function uniq(array) {
  const knownElements = new Set();
  for (const elem of array) {
    knownElements.add(String(elem[0])); // 同じ値を何度追加しても問題ない
  }
  return Array.from(knownElements);
}

function getDate(){
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = '' + ((hour > 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = '12';
  temp += ((minute < 10) ? ':0' : ':') + minute;
  temp += ((second < 10) ? ':0' : ':') + second;
  temp += (hour >= 12) ? ' P.M.' : ' A.M.';
  return temp;
};

function doPostTest() {
  //eの作成
 //var e = ContentService.createTextOutput();
 var obj = {
    postData: {getDataAsString: word},
    age: 30,
    area: 'Tokyo'
}
 //var e = {"name":"太郎","age":30,"area":"Tokyo"};
 var e = JSON.stringify( obj );
 //e.setMimeType(ContentService.MimeType.JSON);
 //e.setContent(JSON.stringify({ text: true}));
 
 Logger.log(JSON.parse(e));
 
 doPost(e);
}
    