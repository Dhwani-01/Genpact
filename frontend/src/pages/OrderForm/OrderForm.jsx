import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode'; // Library to decode JWT token
import { StoreContext } from '../../components/StoreContext/StoreContext';
import './OrderForm.css'; // Import CSS file for styling

const OrderForm = () => {
    const { restaurantId, foodItemId } = useParams();
    const { url, token } = useContext(StoreContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        quantity: 1,
        payment: ''
    });
    const [foodItem, setFoodItem] = useState(null);
    //const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(foodItemId);
    console.log(token);

    const userId = token ? jwtDecode(token).id : null;
    console.log('User Id:', userId);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userId) {
            alert('User is not authenticated.');
            return;
        }
        try {
            const { name, email, phone, street, city, state, country, pincode, quantity, payment } = formData;
            if (!name || !email || !phone || !street || !city || !state || !country || !pincode) {
                alert('Please fill in all required fields.');
                return;
            }
            const response = await axios.post(`${url}/api/order/placeOrder`, {
                restaurantId,
                userId,
                foodId: foodItemId,
                foodName: foodItem.item,
                foodPrice: foodItem.price,
                quantity,
                totalAmount: foodItem.price * quantity,
                payment,
                name,
                email,
                phone,
                street,
                city,
                state,
                country,
                pincode
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error.response ? error.response.data : error.message);
            alert('Error placing order');
        }
    };

    const fetchFoodItem = async () => {
        try {
            console.log('Fetching food item:', `${url}/api/food-items/food/${foodItemId}`);
            const response = await axios.get(`${url}/api/food-items/food/${foodItemId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Food item response:', response.data);
            setFoodItem(response.data.foodItem);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching food item:', error);
            setError('Error fetching food item details');
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchFoodItem();
        // if (token) {
        //     try {
        //         const decodedToken = jwtDecode(token);
        //         setUserId(decodedToken.userId);
        //         console.log(userId);
        //     } catch (error) {
        //         console.error('Error decoding token:', error);
        //     }
        // }
    }, [foodItemId, url, token]);

    return (
        <div className="order-form-container">
            <h1>Place Your Order</h1>
            {loading ? (
                <div className="loading-message">Loading food item details...</div>
            ) : error ? (
                <div className="error-message">{error}</div>
            ) : foodItem ? (
                <form onSubmit={handleSubmit} className="order-form">
                    <h2>{foodItem.item}</h2>
                    <p>Price: ${foodItem.price}</p>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Street:</label>
                        <input type="text" name="street" value={formData.street} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>City:</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>State:</label>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Country:</label>
                        <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Pincode:</label>
                        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Quantity:</label>
                        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" required />
                    </div>
                    <div className="form-group">
                        <label>Payment Method:</label>
                        <input type="text" name="payment" value={formData.payment} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="submit-button">Place Order</button>
                </form>
            ) : (
                <p>No food item found.</p>
            )}
        </div>
    );
};

export default OrderForm;
