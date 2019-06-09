const fs = require('fs');


const addAdvocate = async (advocate) => {
    let data = fs.readFileSync('./data.json','utf-8');
     data = JSON.parse(data);
    let doesExist = data['advocates'].findIndex(x => x.advocate == advocate.advocate);
    if(doesExist === -1){
        data['advocates'].push(advocate); 
        let displayData = [...data.advocates];
        data = JSON.stringify(data);
        let saveData = fs.writeFileSync('./data.json',data); 
        console.log(`Output: 
        Advocate added ${advocate.advocate}`);    
    } else {
        console.log('Error: Advocate already exist')
        return false
    }
}


const juniorAdvocate = (junior) => {
    let data = fs.readFileSync('./data.json','utf-8');
    data = JSON.parse(data);
   let doesExist = data['advocates'].findIndex(x => x.advocate == junior.seniorId);
   if(doesExist === -1){
       console.log(`Error: Senior Advocate not found`);
       return false;
   } else {
    let currentAdvocate = data.advocates[doesExist];
    if(!currentAdvocate.juniorAdvocate){
        currentAdvocate.juniorAdvocate = [];
    }
    let alreadyExist = currentAdvocate.juniorAdvocate.findIndex(x => x.juniorId == junior.juniorId);
    if(alreadyExist === -1){
        currentAdvocate.juniorAdvocate.push({juniorId:junior.juniorId});
        data = JSON.stringify(data);
        let saveData = fs.writeFileSync('./data.json',data);
        console.log(`Output: 
          Advocate added ${junior.juniorId} under ${junior.seniorId}
        `)
    } else {
        console.log('Error: Junior Advocate ID already Exist');
        return false;
    }
   }
}


const addState = (state) => {
    let data = fs.readFileSync('./data.json','utf-8');
    data = JSON.parse(data);
   let doesExist = data['advocates'].findIndex(x => x.advocate == state.advocateId);
   if(doesExist === -1){
       console.log(`Error: Senior Advocate not found`);
       return false
   } else {
       data.advocates[doesExist].practicingState = state.state;
       data = JSON.stringify(data);
       let saveData = fs.writeFileSync('./data.json',data);
       console.log(`Output: 
         State added ${state.state} for ${state.advocateId}
       `)

   }
}


const addCase = (caseInfo) => {
 let data = fs.readFileSync('./data.json','utf-8');
    data = JSON.parse(data);
   let doesExist = data['advocates'].findIndex(x => x.advocate == caseInfo.advocateId);
   if(doesExist === -1){
    console.log(`Error: Senior Advocate not found`);
     return false;  
   } else{
    let currentAdvocate = data.advocates[doesExist];
    if(!currentAdvocate.cases){
        currentAdvocate.cases = [];
    }
    let alreadyExist = currentAdvocate.cases.findIndex(x => x == caseInfo.case+caseInfo.state);
    if(alreadyExist === -1){
        currentAdvocate.cases.push(caseInfo.case + caseInfo.state);
        data = JSON.stringify(data);
        let saveData = fs.writeFileSync('./data.json',data);
        console.log(`Output: 
          Case ${caseInfo.case} added for ${caseInfo.advocateId}
        `)
    } else {
        console.log('Error: Case already added');
        return false;
    }
   }
}

const blockCase = (caseInfo) => {
    let data = fs.readFileSync('./data.json','utf-8');
       data = JSON.parse(data);
      let doesExist = data['advocates'].findIndex(x => x.advocate == caseInfo.advocateId);
      if(doesExist === -1){
       console.log(`Error: Senior Advocate not found`);
        return false;  
      } else{
       let currentAdvocate = data.advocates[doesExist];
       if(!currentAdvocate.blockedCases){
           currentAdvocate.blockedCases = [];
       }
       let alreadyExist = currentAdvocate.cases.findIndex(x => x == caseInfo.case+caseInfo.state);
       if(alreadyExist === -1){
           currentAdvocate.blockedCases.push(caseInfo.case + caseInfo.state);
           data = JSON.stringify(data);
           let saveData = fs.writeFileSync('./data.json',data);
           console.log(`Output: 
             Case ${caseInfo.case} added in block list for ${caseInfo.advocateId}
           `)
       } else {
           console.log('Error: Case already added to blocked list');
           return false;
       }
      }
   }


const listAdvocates = (state) => {
    let data = fs.readFileSync('./data.json','utf-8');
    data = JSON.parse(data);
   let doesExist = data['advocates'].findIndex(x => x.practicingState == state.state);
   let currentAdvocate = data.advocates[doesExist];
   if(doesExist === -1){
    console.log(`Error: State not found`);
     return false;  
   } else {
   let juniorAdvocate = currentAdvocate.juniorAdvocate.map(function(x){
        return x.juniorId;
    }).join(",");
       console.log(`
       Output:
       ${currentAdvocate.advocate} : ${currentAdvocate.cases.toString('')},
       ${juniorAdvocate}
       `)
   }
}

// Export All Methods
module.exports = {
    addAdvocate,
    juniorAdvocate,
    addState,
    addCase,
    blockCase,
    listAdvocates
}
