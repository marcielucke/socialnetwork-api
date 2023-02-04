const { Schema, model } = require('mongoose');



const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],

    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },

  },

);


userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length
  });


const User = model('user', userSchema);
module.exports = User;


