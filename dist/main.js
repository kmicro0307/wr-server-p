function myFunction() {
    //https://script.google.com/macros/s/AKfycbzxbdMdOHZ0q3dk4FvdQzEfEbp5Ps5caJOtlIVRx6jjYYmPjdM/exec
    
      var key = '1j3TCklBwyLIFWw55Q0HLGSqTqbNK28f_NuGHEm1k2YA'
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
      const key = '1j3TCklBwyLIFWw55Q0HLGSqTqbNK28f_NuGHEm1k2YA'
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
    //https://script.google.com/macros/s/AKfycbzxbdMdOHZ0q3dk4FvdQzEfEbp5Ps5caJOtlIVRx6jjYYmPjdM/exec
      Logger.log(e);
      var params = JSON.parse(e.postData.getDataAsString()); 
      console.log(params);
      console.log('dsfsag');
      console.log(params.text)
      var tet = String(params);
      console.log(typeof tet);
      console.log(tet);
      var key = '1j3TCklBwyLIFWw55Q0HLGSqTqbNK28f_NuGHEm1k2YA';
      var spreadsheet = SpreadsheetApp.openById(key);
      var sheet = spreadsheet.getActiveSheet();
      var date = Date.now();
      
      console.log(date)
        
      var test = sheet.appendRow([date, tet]);
      
      var output = ContentService.createTextOutput();
      output.setMimeType(ContentService.MimeType.JSON);
      output.setContent(JSON.stringify({ success: true}));
      output.setContent(JSON.stringify({ d: date}));
      output.setContent(JSON.stringify({ w: tet}));
      return output;
    }

    //chromeからきたgetをうけ実行、ユニークな配列を返す
    //http通信部分を作る
    function getSpreadSheet(){
        const key = '1j3TCklBwyLIFWw55Q0HLGSqTqbNK28f_NuGHEm1k2YA'
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
    