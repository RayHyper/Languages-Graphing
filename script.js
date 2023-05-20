let xlabels = []
let yData = []
chartIt()

async function chartIt(){
    await getData()
    
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: xlabels,
    datasets: [{
      label: 'Number of words in a language',
      data: yData,
      borderWidth: 1,
      borderColor: "yellowgreen",
      backgroundColor: "#a7eb15"
    
    
    }]
  },
 
  options: {
    scales: {
        
        x: {
            ticks: {
                autoSkip: false,
                maxRotation: 90,
      
        padding: 8,
        autoSkip: false,
        color:"darkgreen",

        font: {
            size: 13, // Adjust the font size as needed
          },
            }
        },

        y: {
            ticks: {
        color: "blue",
    
            }
        }
    }
}



});


}


async function getData(){
    const response = await fetch("Number of Words in a Language.csv")
    const data = await response.text()
    
    const rows = data.split("\n").slice(1)


    for(let i =0; i<rows.length; i++){
        const row = rows[i].split(",")
        const language = row[0]
        const words = row[1]

        xlabels.push(language)
        yData.push(words)

        console.log(language,words)
    }
}




