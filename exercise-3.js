function highestScore(students) {

    var output = {
  
    }   //var menampung output
  
  
  
  
    for (let i = 0; i < students.length; i++) {  //periksa array input 1 1
  
  
  
  
      if (Object.keys(output).includes(students[i].class)) {  //apabila terdapat Key di object output yang sama dengan class object input yang sedang di periksa
  
        if (students[i].score >= output[students[i].class].score) {  //override data bila score lebih besar
          output[students[i].class].name = students[i].name
          output[students[i].class].score = students[i].score
        }
  
  
  
  
      } else {  //bila tidak ada key yang sama, buat objek baru di dalam object output
  
        output[students[i].class] = {
          name: students[i].name,
          score: students[i].score
        }
  
      }
  
    }
  
    return output
  
  }
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
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
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}

  //Arjuna Sarumpaet