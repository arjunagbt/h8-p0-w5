function graduates (students) {
    
    var output = {}  //tampung output

    for (let i = 0; i < students.length; i++) {  //periksa 1 1 array input
        
        if(Object.keys(output).includes(students[i].class)){  //bila class dari student yang sedang diperiksa adalah bagian dari key output
            if(students[i].score >= 75){
                output[students[i].class].push({name: students[i].name, score: students[i].score}) //push ke key yang bersangkutan apaila nilainya memenuhi kondisi
            }
        }else{  //bila class belum ada di object output
            output[students[i].class] = []    //buat key baru berisi array kosong
            if(students[i].score >= 75){  
                output[students[i].class].push({name: students[i].name, score: students[i].score})  //bila skor memenuhi syarat, push data ke array
            }
        }

        
    }
return output

  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}


  //Arjuna Sarumpaet