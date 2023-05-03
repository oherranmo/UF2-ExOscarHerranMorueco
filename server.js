const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');


app.use(cors());

port = 3080;
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234Abcd!',
  database: 'UNIOscarHerran'
});
db.connect((err)=>{
  if (err) throw err;
  console.log('Connectat a la BDD!');
});
app.get('/exercici1', (req, res) => {
  db.query('SELECT ASSIGNATURES.ASSIG_CODI, ASSIGNATURES.ASSIG_NOM FROM ASSIGNATURES, DEPARTAMENT, PROFESSOR, ASSIGNATURES_PROFESSOR WHERE DEPARTAMENT.DEPT_NOM = \'INFORMATICA I MATEMATICA APLICADA\'AND DEPARTAMENT.DEPT_PROF_DNI = PROFESSOR.PROF_DNI AND ASSIGNATURES_PROFESSOR.ASSIGPROF_PROF_DNI = PROFESSOR.PROF_DNI AND ASSIGNATURES_PROFESSOR.ASSIGPROF_ASSIG_CODI = ASSIGNATURES.ASSIG_CODI', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});


app.post('/exercici2', function(req, res) {
  const sql = 'ALTER TABLE ALUMNES ADD COLUMN ALUMN_ZODIAC VARCHAR(100)';

  db.query(sql, function(error, results, fields) {
    if (error) {
      if (error.code === 'ER_DUP_FIELDNAME') {
        res.status(200).send('Noi vas tard, ja està creat');
      } else {
        res.status(500).send(error);
      }
    } else {
      res.status(100).send('OK');
    }
  });
});




