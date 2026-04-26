import mongoose from 'mongoose';

const audienceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true,
    default: () => `SEG-${Math.floor(1000 + Math.random() * 9000)}`
  },
  name: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    enum: ['Meta Ads', 'Google Ads'],
    required: true
  },
  size: {
    type: String,
    required: true
  },
  conversionRate: {
    type: String,
    required: true
  },
  isOptimized: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Audience = mongoose.model('Audience', audienceSchema);
export default Audience;
