// const express = require('express');
// const app = express();

// const usersRoute = require('./routes/users');
// app.use("/users",usersRoute);
// module.exports=app

const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const doctorantRoutes = require('./routes/doctorantRoutes');
const enseignantRoutes = require('./routes/enseignantRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Routes
app.use('/auth', authRoutes);
app.use('/doctorant', doctorantRoutes);
app.use('/enseignant', enseignantRoutes);
app.use('/admin', adminRoutes);


