var contacts = [{
    Id: 1,
    name: 'Andi',
    gender: 'male',
    group_ids: [1,2,3]
  },{
    Id: 2,
    name: 'Budi',
    gender: 'male',
    group_ids: [1,2]
  },{
    Id: 3,
    name: 'Cindy',
    gender: 'male',
    group_ids: [1]
  },{
    Id: 4,
    name: 'David',
    gender: 'male',
    group_ids: [1,2]
  },{
    Id: 5,
    name: 'Emily',
    gender: 'male',
    group_ids: [1,2,3]
  }]

  var groups = [{
    id: 1,
    name: 'Teman SMP' 
  }, {
    id: 2,
    name: 'Teman SMA' 
  }, {
    id: 3,
    name: 'Teman Kuliah' 
  }]

  function showContactByGroup(groupName) {
    
    var outArr = []
    var searchID = 0

    for (let i = 0; i < groups.length; i++) {
        
        if (groupName == groups[i].name) {

            searchID = groups[i].id
            break
        }
       
    }

    for (let i = 0; i < contacts.length; i++) {
        
        if (contacts[i].group_ids.includes(searchID)) {

            outArr.push(contacts[i].name)
            
        }
        
    }
    
    console.log(outArr)

  }
  

//   Contoh 1 : 
 showContactByGroup('Teman Kuliah')

// //result yang diharapkan : 
// ["Andi", "Emily"]



// Contoh 2 : 
showContactByGroup('Teman SMA')

// //result yang diharapkan : 
// ["Andi", "Budi", "David", "Emily"]


// Contoh 3 : 
 showContactByGroup('Teman SMP')

// //result yang diharapkan : 
// ["Andi", "Budi", "Cindy", "David", "Emily"]


