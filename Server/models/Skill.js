import mongoose from 'mongoose';

const PositionSchema = new mongoose.Schema(
  {
    top: { type: String, trim: true },
    left: { type: String, trim: true },
    right: { type: String, trim: true },
    bottom: { type: String, trim: true },
  },
  { _id: false }
);

const SkillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Skill cluster title is required'],
      trim: true,
    },
    skills: {
      type: [String],
      required: [true, 'Skills list array is required'],
      default: [],
    },
    position: {
      type: PositionSchema,
      default: () => ({ top: '10%', left: '10%' }),
    },
    rotation: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '#FFFFFF',
      trim: true,
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

SkillSchema.set('toJSON', {
  transform: (_, ret) => {
    delete ret._id;
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
    return ret;
  },
});

export default mongoose.model('Skill', SkillSchema);
