const express = require('express');
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Amit", marks: 85 }
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  const { name, marks } = req.body;
  const newStudent = { id: students.length + 1, name, marks };
  students.push(newStudent);
  res.json(newStudent);
});

app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

app.listen(3000, () => console.log('Server running on port 3000'));
