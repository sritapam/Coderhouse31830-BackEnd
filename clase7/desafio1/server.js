const express =  require('express');

const app = express(); 

const frase = 'Hola mundo como estan';


app.get('/api/frase', (req, res)=>{
  res.json({
      frase: frase
  })
})

app.get('/api/letras/:num', (req, res)=>{
  let num = parseInt(req.params.num)
  if (!isNaN(num)){
    if(num>=1 && num <= frase.length){
      res.json({letra: frase[num-1]})
    }
    else{
      res.send({error: 'El parámetro está fuera de rango'})
    }
  }
  else{
    res.send({error: 'El parámetro ingresado no es un numero'})
  }
}
)



const PORT  = 8080;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);