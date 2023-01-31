const { Schema, model } = require('mongoose');
import { isEmail } from 'validator';

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


    }
);

const User = model('user', userSchema);

module.exports = User;

