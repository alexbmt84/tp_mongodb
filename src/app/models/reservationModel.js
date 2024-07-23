// models/Reservation.js
import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    message: String
}, { timestamps: true });

const Reservation = mongoose.models.Reservation || mongoose.model('Reservation', reservationSchema);

export default Reservation;
