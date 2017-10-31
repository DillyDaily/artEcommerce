let bcrypt = require('bcrypt')
let SALT_WORK_FACTOR = 10;
//should represent how many characters you salt w/ & how expensive computational time

module.exports = {

  hash: function(user){
    //taking in a user object
    return new Promise((resolve, reject)=>{
      bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        //replacing the user.password (overwriting it) to encrypt it
          if (err) reject(err);

          // hash the password using our new salt
          bcrypt.hash(user.password, salt, function(err, hash) {
              if (err) reject(err);

              // override the cleartext password with the hashed one
              user.password = hash;
              resolve(user);
          });
      });
    })

  },

  check: function(encryptedUser, user){
    return new Promise((resolve, reject)=>{
      bcrypt.compare(user.password, encryptedUser.password, function(err, isMatch) {
          if (err) reject(err);
          resolve(isMatch);
      });
    })

  }


}