const mongoose = require('mongoose')
const encryption = require('../util/encryption')
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
  email: {type: mongoose.Schema.Types.String, required: '{PATH} is required', unique: true},
  hashedPass: {type: mongoose.Schema.Types.String, required: '{PATH} is required'},
  firstName: {type: mongoose.Schema.Types.String},
  lastName: {type: mongoose.Schema.Types.String},
  salt: {type: mongoose.Schema.Types.String},
  roles: [{type: mongoose.Schema.Types.String}],
  isAdmin: {type: Boolean, default: false},
  orders: [{type: ObjectId, ref: 'Order'}]
})

userSchema.method({   
  authenticate: function (password) {  
    if (encryption.generateHashedPassword(this.salt, password) === this.hashedPass) {
      return true 
    } else { 
      return false 
    }  
  }
})

const User = mongoose.model('User', userSchema)

User.seedAdminUser = async () => { 
  try {
    let users = await User.find()
    if (users.length > 0) return

    const salt = encryption.generateSalt()
        
    const hashedPass = encryption.generateHashedPassword(salt, '123')
        
    User.create({
      email: 'radimarinov@gmail.com', 
      firstName: 'admin',       
      lastName: 'admin', 
      salt,      
      hashedPass,
      roles: ['Admin'],
      orders: [],
      isAdmin: true})
  } catch (e) {
    console.log(e)
  }
}

module.exports = User