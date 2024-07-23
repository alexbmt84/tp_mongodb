import { JSX, SVGProps, useEffect, useState } from 'react';
import axios from "axios";
import { Button } from "@/components/ui/button";
import ReactModal from 'react-modal'; // Rename the imported Modal
import { BookTableModal } from "@/components/component/book-table-modal";
import {StarIcon} from "lucide-react";

ReactModal.setAppElement('#root-body'); // Use the renamed import

type Restaurant = {
    _id: number;
    name: string;
    location: string;
    image: string;
};

// @ts-ignore
const CustomModal = ({ isOpen, onClose, children, onRequestClose, contentLabel, className, overlayClassName }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export function RestaurantList() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/restaurants');
                if (response.data && Array.isArray(response.data.data)) {
                    setRestaurants(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const openModal = (restaurant: Restaurant) => {
        setSelectedRestaurant(restaurant);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedRestaurant(null);
    };

    if (restaurants.length === 0) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <>
            <CustomModal // Use the renamed import here
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Book Your Table Modal"
                className="Modal"
                overlayClassName="Overlay"
                onClose={closeModal}
            >
                <BookTableModal restaurant={selectedRestaurant} closeModal={closeModal} />
            </CustomModal>
            <h1 className={"text-center font-bold text-5xl mb-16"}>Our best tables</h1>
            <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {restaurants.map((restaurant, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img src={restaurant.image} alt={restaurant.name} className="h-48 w-full object-cover"/>
                        <div className="bg-white p-4">
                            <h3 className="text-lg font-medium">{restaurant.name}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{restaurant.location}</p>
                            <div className="flex items-center mb-2 mt-3">
                                <StarIcon className="w-4 h-4 fill-primary mr-1"/>
                                <StarIcon className="w-4 h-4 fill-primary mr-1"/>
                                <StarIcon className="w-4 h-4 fill-primary mr-1"/>
                                <StarIcon className="w-4 h-4 fill-primary mr-1"/>
                                <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground mr-1"/>
                                <span className="text-sm text-muted-foreground">(124)</span>
                            </div>
                            <Button onClick={() => openModal(restaurant)} variant="default" className="text-primary-foreground w-full mt-5">
                                Book a table
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
