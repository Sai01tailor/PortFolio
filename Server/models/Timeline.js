import mongoose from 'mongoose';

const TimelineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Timeline title is required'],
      trim: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    year: {
      type: String,
      required: [true, 'Timeline year is required'],
      trim: true,
    },
    side: {
      type: String,
      enum: ['left', 'right'],
      default: 'left',
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

TimelineSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

TimelineSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model('Timeline', TimelineSchema);
