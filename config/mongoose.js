const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://RK-Swain:Radha579@cluster0.v6ppunw.mongodb.net/?retryWrites=true&w=majority');
}