// models/Restaurant.js

import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    contact: String,
    tables: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Table' }]
});

export default mongoose.models.Restaurant || mongoose.model('Restaurant', restaurantSchema);