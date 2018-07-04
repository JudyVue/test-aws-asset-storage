'use strict';

import mongoose from 'mongoose';

const soundSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
  },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
}, { timestamps: true });


const skipInit = process.env.NODE_ENV === 'development';
export default mongoose.model('sounds', soundSchema, 'sounds', skipInit);
