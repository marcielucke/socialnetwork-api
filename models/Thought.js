const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: Schema.Types.ObjectId,
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
            ref: 'user',
        },
        createdAt: {
            type: Date,
            default: Date.now
        },

    });

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },

        createdAt: {
            type: Date,
            default: Date.now
        },

        username: {
            type: String,
            required: true,
            ref: 'user',
        },
        reactions: [reactionSchema],

    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },

    });
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;


