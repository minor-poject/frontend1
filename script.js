// Complete menu data for all canteens
const canteenMenus = {
    "Captain Cuisine": [
        { id: 1, name: "Captain's Special Platter", price: 350, description: "Signature dish with grilled chicken, vegetables and special sauce", nutrition: { protein: "25g", carbs: "40g", fat: "15g" } },
        { id: 2, name: "Butter Chicken", price: 280, description: "Tender chicken in rich tomato and butter gravy", nutrition: { protein: "22g", carbs: "12g", fat: "18g" } },
        { id: 3, name: "Veg Biryani", price: 180, description: "Fragrant basmati rice with mixed vegetables and spices", nutrition: { protein: "8g", carbs: "60g", fat: "10g" } },
        { id: 4, name: "Paneer Tikka", price: 220, description: "Cottage cheese cubes marinated and grilled to perfection", nutrition: { protein: "18g", carbs: "8g", fat: "12g" } },
        { id: 5, name: "Chocolate Lava Cake", price: 120, description: "Warm chocolate cake with molten center, served with ice cream", nutrition: { protein: "5g", carbs: "45g", fat: "20g" } }
    ],
    "Utopia": [
        { id: 6, name: "Caramel Frappuccino", price: 180, description: "Blended coffee with caramel syrup and whipped cream", nutrition: { protein: "4g", carbs: "35g", fat: "10g" } },
        { id: 7, name: "Blueberry Muffin", price: 90, description: "Freshly baked muffin with blueberry chunks", nutrition: { protein: "3g", carbs: "40g", fat: "8g" } },
        { id: 8, name: "Club Sandwich", price: 160, description: "Triple-decker sandwich with veggies and mayo", nutrition: { protein: "12g", carbs: "35g", fat: "15g" } },
        { id: 9, name: "Iced Tea", price: 70, description: "Refreshing lemon iced tea", nutrition: { protein: "0g", carbs: "20g", fat: "0g" } },
        { id: 10, name: "Chocolate Chip Cookies", price: 60, description: "Soft cookies loaded with chocolate chips", nutrition: { protein: "2g", carbs: "25g", fat: "8g" } }
    ],
    "Capitol": [
        { id: 11, name: "Thali Meal", price: 200, description: "Complete meal with rice, roti, dal, two vegetables, raita and dessert", nutrition: { protein: "15g", carbs: "70g", fat: "12g" } },
        { id: 12, name: "Masala Dosa", price: 120, description: "Crispy fermented crepe with potato filling", nutrition: { protein: "6g", carbs: "50g", fat: "10g" } },
        { id: 13, name: "Chole Bhature", price: 150, description: "Spicy chickpea curry with fried bread", nutrition: { protein: "10g", carbs: "65g", fat: "20g" } },
        { id: 14, name: "Vegetable Pulao", price: 130, description: "Fragrant rice cooked with vegetables and spices", nutrition: { protein: "7g", carbs: "55g", fat: "8g" } },
        { id: 15, name: "Rasmalai", price: 80, description: "Soft cottage cheese balls in sweetened condensed milk", nutrition: { protein: "8g", carbs: "30g", fat: "12g" } }
    ],
    "Size Zero": [
        { id: 16, name: "Quinoa Salad Bowl", price: 200, description: "Quinoa with mixed greens, cherry tomatoes, avocado and lemon dressing", nutrition: { protein: "12g", carbs: "35g", fat: "10g" } },
        { id: 17, name: "Green Detox Smoothie", price: 150, description: "Blend of spinach, kale, apple and lemon", nutrition: { protein: "4g", carbs: "25g", fat: "2g" } },
        { id: 18, name: "Grilled Chicken Breast", price: 250, description: "Lean chicken breast with steamed vegetables", nutrition: { protein: "30g", carbs: "5g", fat: "8g" } },
        { id: 19, name: "Protein Shake", price: 180, description: "Whey protein shake with almond milk", nutrition: { protein: "25g", carbs: "10g", fat: "5g" } },
        { id: 20, name: "Avocado Toast", price: 120, description: "Whole wheat toast with smashed avocado and seeds", nutrition: { protein: "6g", carbs: "25g", fat: "15g" } }
    ],
    "Farki": [
        { id: 21, name: "Pasta in White Sauce", price: 160, description: "Penne pasta in creamy white sauce with herbs", nutrition: { protein: "10g", carbs: "45g", fat: "15g" } },
        { id: 22, name: "French Fries", price: 80, description: "Crispy golden fries with ketchup", nutrition: { protein: "3g", carbs: "40g", fat: "15g" } },
        { id: 23, name: "Veg Burger", price: 100, description: "Burger with veg patty, lettuce and sauce", nutrition: { protein: "8g", carbs: "35g", fat: "12g" } },
        { id: 24, name: "Cold Coffee", price: 110, description: "Chilled coffee with ice cream and chocolate syrup", nutrition: { protein: "5g", carbs: "30g", fat: "10g" } },
        { id: 25, name: "Garlic Bread", price: 90, description: "Toasted bread with garlic butter and herbs", nutrition: { protein: "4g", carbs: "30g", fat: "12g" } }
    ],
    "Belgian Waffle": [
        { id: 26, name: "Chocolate Belgian Waffle", price: 180, description: "Crispy waffle with chocolate sauce and whipped cream", nutrition: { protein: "6g", carbs: "50g", fat: "18g" } },
        { id: 27, name: "Strawberry Waffle", price: 170, description: "Waffle topped with fresh strawberries and syrup", nutrition: { protein: "5g", carbs: "45g", fat: "15g" } },
        { id: 28, name: "Nutella Waffle", price: 200, description: "Waffle generously topped with Nutella and nuts", nutrition: { protein: "7g", carbs: "55g", fat: "22g" } },
        { id: 29, name: "Ice Cream Waffle", price: 190, description: "Waffle served with two scoops of ice cream", nutrition: { protein: "6g", carbs: "60g", fat: "20g" } },
        { id: 30, name: "Plain Waffle with Maple Syrup", price: 120, description: "Classic waffle with pure maple syrup", nutrition: { protein: "5g", carbs: "40g", fat: "12g" } }
    ],
    "Cafe Hot Spot": [
        { id: 31, name: "Hot Spot Burger", price: 150, description: "Signature burger with special sauce and crispy veggies", nutrition: { protein: "15g", carbs: "40g", fat: "18g" } },
        { id: 32, name: "Cappuccino", price: 100, description: "Rich espresso with steamed milk and foam", nutrition: { protein: "4g", carbs: "8g", fat: "5g" } },
        { id: 33, name: "Chicken Wrap", price: 160, description: "Grilled chicken with veggies in tortilla wrap", nutrition: { protein: "18g", carbs: "30g", fat: "12g" } },
        { id: 34, name: "Hot Chocolate", price: 90, description: "Creamy hot chocolate with marshmallows", nutrition: { protein: "6g", carbs: "35g", fat: "12g" } },
        { id: 35, name: "French Toast", price: 130, description: "Golden brown toast with honey and fruits", nutrition: { protein: "8g", carbs: "45g", fat: "15g" } }
    ],
    "Cafe Appetito": [
        { id: 36, name: "Margherita Pizza", price: 200, description: "Classic pizza with tomato sauce, mozzarella and basil", nutrition: { protein: "12g", carbs: "55g", fat: "15g" } },
        { id: 37, name: "Pasta Alfredo", price: 180, description: "Fettuccine pasta in creamy Alfredo sauce", nutrition: { protein: "14g", carbs: "50g", fat: "20g" } },
        { id: 38, name: "Garlic Mushroom", price: 140, description: "Mushrooms sautéed in garlic butter", nutrition: { protein: "6g", carbs: "8g", fat: "12g" } },
        { id: 39, name: "Tiramisu", price: 120, description: "Classic Italian dessert with coffee-soaked ladyfingers", nutrition: { protein: "6g", carbs: "35g", fat: "18g" } },
        { id: 40, name: "Minestrone Soup", price: 100, description: "Hearty Italian vegetable soup", nutrition: { protein: "5g", carbs: "20g", fat: "5g" } }
    ],
    "La Pinoz Pizza": [
        { id: 41, name: "VEG TAMER", price: 275, description: "Special veg pizza with assorted toppings", nutrition: { protein: "10g", carbs: "35g", fat: "15g" } },
        { id: 42, name: "Giant Pizza", price: 60, description: "Large pizza with generous toppings", nutrition: { protein: "20g", carbs: "50g", fat: "15g" } },
        { id: 43, name: "Sweet Corns & Cheese", price: 350, description: "Pizza loaded with sweet corn and extra cheese", nutrition: { protein: "10g", carbs: "30g", fat: "18g" } },
        { id: 44, name: "PREMIUM VEG", price: 195, description: "Premium vegetable pizza with exotic toppings", nutrition: { protein: "10g", carbs: "35g", fat: "12g" } },
        { id: 45, name: "Cheese Dip Special", price: 445, description: "Cheese Dip, Jalapeno + Dip, Cheesey Macroni, Swirl of Makhani Gravy, Mushroom, Olives, Sweet Corns", nutrition: { protein: "10g", carbs: "30g", fat: "20g" } },
        { id: 46, name: "DOUBLE BURST PIZZA", price: 209, description: "Double cheese burst pizza with special sauce", nutrition: { protein: "20g", carbs: "40g", fat: "18g" } },
        { id: 47, name: "DOUBLE CHEESE MARGHERITA", price: 185, description: "Extra cheesy Margherita pizza for cheese lovers", nutrition: { protein: "20g", carbs: "35g", fat: "15g" } },
        { id: 48, name: "Onion Tomato Pizza", price: 65, description: "Onion, Tomatoes, Fresh Tomatoes, Capsicum", nutrition: { protein: "5g", carbs: "30g", fat: "8g" } },
        { id: 49, name: "Pineapple Pizza", price: 295, description: "Pizza with juicy pineapples and cheese", nutrition: { protein: "5g", carbs: "30g", fat: "10g" } },
        { id: 50, name: "Regular Pizza", price: 89, description: "Classic regular sized pizza", nutrition: { protein: "10g", carbs: "35g", fat: "12g" } },
        { id: 51, name: "Paneer Jalapeno Pizza", price: 295, description: "Onion, Capsicum, Paneer with Jalapenos Dip", nutrition: { protein: "15g", carbs: "30g", fat: "15g" } },
        { id: 52, name: "PESTO & BASIL VEG", price: 295, description: "Pizza with pesto sauce and fresh basil", nutrition: { protein: "5g", carbs: "30g", fat: "12g" } },
        { id: 53, name: "Onions & Cheese Pizza", price: 350, description: "Pizza loaded with onions and extra cheese", nutrition: { protein: "15g", carbs: "35g", fat: "18g" } },
        { id: 54, name: "INDIANA (Korma dip)", price: 295, description: "Pizza with Indian korma dip flavor", nutrition: { protein: "10g", carbs: "30g", fat: "15g" } },
        { id: 55, name: "Say Cheese", price: 165, description: "Simple cheese pizza for cheese lovers", nutrition: { protein: "15g", carbs: "35g", fat: "15g" } },
        { id: 56, name: "ENGLISH RETREAT", price: 295, description: "Pizza with English style toppings", nutrition: { protein: "5g", carbs: "30g", fat: "10g" } },
        { id: 57, name: "SPECIALITY VEG", price: 295, description: "Special vegetable pizza with unique toppings", nutrition: { protein: "5g", carbs: "30g", fat: "10g" } },
        { id: 58, name: "AUTHENTIC VEG", price: 295, description: "Authentic vegetable pizza recipe", nutrition: { protein: "10g", carbs: "30g", fat: "12g" } },
        { id: 59, name: "CHEESE LOVERS", price: 275, description: "Extra cheesy pizza for cheese enthusiasts", nutrition: { protein: "20g", carbs: "35g", fat: "18g" } },
        { id: 60, name: "SIMPLY VEG", price: 175, description: "Simple vegetable pizza", nutrition: { protein: "10g", carbs: "35g", fat: "12g" } },
        { id: 61, name: "ONION TWIST", price: 495, description: "Pizza with twisted onion flavors", nutrition: { protein: "5g", carbs: "30g", fat: "15g" } },
        { id: 62, name: "Large Pizza", price: 50, description: "Large sized pizza", nutrition: { protein: "15g", carbs: "40g", fat: "15g" } },
        { id: 63, name: "PESTO & BASIL SPECIAL", price: 765, description: "Special pesto and basil pizza", nutrition: { protein: "15g", carbs: "45g", fat: "20g" } },
        { id: 64, name: "VEG HAWAIIAN", price: 295, description: "Hawaiian style veg pizza with pineapple", nutrition: { protein: "8g", carbs: "35g", fat: "12g" } }
    ],
    "Chatoree": [
        { id: 65, name: "Pani Puri", price: 60, description: "Crispy puris filled with spicy tangy water", nutrition: { protein: "3g", carbs: "25g", fat: "8g" } },
        { id: 66, name: "Bhel Puri", price: 70, description: "Puffed rice with chutneys and vegetables", nutrition: { protein: "4g", carbs: "30g", fat: "6g" } },
        { id: 67, name: "Samosa Chaat", price: 80, description: "Crumbled samosa with chutneys and yogurt", nutrition: { protein: "5g", carbs: "35g", fat: "12g" } },
        { id: 68, name: "Dahi Puri", price: 75, description: "Crisp puris filled with yogurt and spices", nutrition: { protein: "6g", carbs: "28g", fat: "10g" } },
        { id: 69, name: "Aloo Tikki Chaat", price: 85, description: "Potato patties with chutneys and spices", nutrition: { protein: "4g", carbs: "40g", fat: "12g" } }
    ],
    "Konaseema Ruchulu": [
        { id: 70, name: "Andhra Chicken Curry", price: 280, description: "Spicy Andhra style chicken curry", nutrition: { protein: "25g", carbs: "10g", fat: "18g" } },
        { id: 71, name: "Andhra Meals", price: 220, description: "Traditional Andhra meal with rice and curries", nutrition: { protein: "12g", carbs: "65g", fat: "15g" } },
        { id: 72, name: "Gongura Chicken", price: 300, description: "Chicken cooked with sorrel leaves", nutrition: { protein: "28g", carbs: "8g", fat: "20g" } },
        { id: 73, name: "Prawn Fry", price: 320, description: "Crispy fried prawns with Andhra spices", nutrition: { protein: "30g", carbs: "5g", fat: "18g" } },
        { id: 74, name: "Rava Laddu", price: 50, description: "Sweet semolina balls", nutrition: { protein: "3g", carbs: "35g", fat: "10g" } }
    ],
    "Sri Rudra": [
        { id: 75, name: "Masala Dosa", price: 100, description: "Crispy dosa with potato masala", nutrition: { protein: "6g", carbs: "50g", fat: "10g" } },
        { id: 76, name: "Idli Sambar", price: 70, description: "Steamed rice cakes with lentil soup", nutrition: { protein: "8g", carbs: "40g", fat: "2g" } },
        { id: 77, name: "Vada Sambar", price: 80, description: "Fried lentil donut with sambar", nutrition: { protein: "7g", carbs: "35g", fat: "12g" } },
        { id: 78, name: "Pongal", price: 90, description: "Rice and lentil porridge with ghee", nutrition: { protein: "6g", carbs: "45g", fat: "10g" } },
        { id: 79, name: "Filter Coffee", price: 40, description: "Traditional South Indian filter coffee", nutrition: { protein: "2g", carbs: "10g", fat: "5g" } }
    ],
    "Indian Salt": [
        { id: 80, name: "Butter Chicken", price: 280, description: "Classic butter chicken with naan", nutrition: { protein: "22g", carbs: "15g", fat: "18g" } },
        { id: 81, name: "Paneer Butter Masala", price: 240, description: "Cottage cheese in creamy tomato gravy", nutrition: { protein: "18g", carbs: "12g", fat: "15g" } },
        { id: 82, name: "Dal Makhani", price: 180, description: "Creamy black lentils slow-cooked", nutrition: { protein: "12g", carbs: "25g", fat: "12g" } },
        { id: 83, name: "Garlic Naan", price: 50, description: "Soft bread with garlic butter", nutrition: { protein: "4g", carbs: "35g", fat: "8g" } },
        { id: 84, name: "Gulab Jamun", price: 60, description: "Sweet milk balls in sugar syrup", nutrition: { protein: "5g", carbs: "40g", fat: "12g" } }
    ],
    "Rajwadi Gola": [
        { id: 85, name: "Kala Khatta Gola", price: 60, description: "Crushed ice with black currant syrup", nutrition: { protein: "0g", carbs: "30g", fat: "0g" } },
        { id: 86, name: "Rose Gola", price: 50, description: "Crushed ice with rose syrup", nutrition: { protein: "0g", carbs: "25g", fat: "0g" } },
        { id: 87, name: "Mango Gola", price: 70, description: "Crushed ice with mango pulp", nutrition: { protein: "1g", carbs: "35g", fat: "0g" } },
        { id: 88, name: "Chocolate Gola", price: 80, description: "Crushed ice with chocolate syrup", nutrition: { protein: "2g", carbs: "40g", fat: "5g" } },
        { id: 89, name: "Mix Fruit Gola", price: 90, description: "Crushed ice with mixed fruit syrups", nutrition: { protein: "1g", carbs: "45g", fat: "0g" } }
    ],
    "Cafe Bollywood": [
        { id: 90, name: "Bollywood Special Thali", price: 250, description: "Thali with Bollywood themed dishes", nutrition: { protein: "15g", carbs: "60g", fat: "15g" } },
        { id: 91, name: "Tandoori Chicken", price: 280, description: "Chicken marinated in spices and grilled", nutrition: { protein: "30g", carbs: "5g", fat: "15g" } },
        { id: 92, name: "Veg Manchurian", price: 180, description: "Vegetable balls in Chinese style sauce", nutrition: { protein: "8g", carbs: "25g", fat: "10g" } },
        { id: 93, name: "Mango Lassi", price: 100, description: "Sweet yogurt drink with mango", nutrition: { protein: "6g", carbs: "30g", fat: "5g" } },
        { id: 94, name: "Gajar Halwa", price: 120, description: "Carrot pudding with nuts", nutrition: { protein: "5g", carbs: "40g", fat: "15g" } }
    ],
    "Krishna Food Canteen": [
        { id: 95, name: "Veg Combo Meal", price: 120, description: "Economical meal with rice, dal, sabzi and roti", nutrition: { protein: "10g", carbs: "55g", fat: "8g" } },
        { id: 96, name: "Rajma Chawal", price: 100, description: "Kidney beans curry with rice", nutrition: { protein: "12g", carbs: "50g", fat: "5g" } },
        { id: 97, name: "Aloo Paratha", price: 60, description: "Flatbread stuffed with potato", nutrition: { protein: "6g", carbs: "40g", fat: "10g" } },
        { id: 98, name: "Chole Kulche", price: 80, description: "Spicy chickpeas with soft bread", nutrition: { protein: "10g", carbs: "45g", fat: "8g" } },
        { id: 99, name: "Sweet Curd", price: 30, description: "Sweetened yogurt", nutrition: { protein: "5g", carbs: "20g", fat: "5g" } }
    ]
};

// Canteen data with additional details
const canteens = [
    { name: "Captain Cuisine", type: "restaurant", description: "Fine dining experience with international cuisine", timings: "11:00 AM - 10:00 PM", location: "West Campus, Block A", rating: 4 },
    { name: "Utopia", type: "cafe", description: "Cozy cafe perfect for studying and light snacks", timings: "8:00 AM - 11:00 PM", location: "Library Building, Ground Floor", rating: 5 },
    { name: "Capitol", type: "restaurant", description: "Traditional meals with a homely feel", timings: "7:00 AM - 9:00 PM", location: "Main Campus, Near Auditorium", rating: 4 },
    { name: "Size Zero", type: "specialty", description: "Healthy and diet-friendly food options", timings: "9:00 AM - 8:00 PM", location: "Sports Complex", rating: 4 },
    { name: "Farki", type: "cafe", description: "Quick bites and beverages for students on the go", timings: "7:30 AM - 10:00 PM", location: "East Campus, Near Hostel", rating: 3 },
    { name: "Belgian Waffle", type: "specialty", description: "Dedicated dessert and waffle shop", timings: "10:00 AM - 9:00 PM", location: "Food Court, Central Plaza", rating: 5 },
    { name: "Cafe Hot Spot", type: "cafe", description: "Trendy spot with coffee and fast food", timings: "8:00 AM - 11:30 PM", location: "Student Center, 1st Floor", rating: 4 },
    { name: "Cafe Appetito", type: "cafe", description: "Italian-inspired cafe with pasta and pizza", timings: "10:00 AM - 10:00 PM", location: "Arts Building, Ground Floor", rating: 4 },
    { name: "La Pinoz Pizza", type: "restaurant", description: "Specialty pizza restaurant with various toppings", timings: "11:00 AM - 11:00 PM", location: "Food Court, Central Plaza", rating: 5 },
    { name: "Chatoree", type: "specialty", description: "Authentic Indian street food and chaat", timings: "12:00 PM - 9:00 PM", location: "East Campus, Near Parking", rating: 4 },
    { name: "Konaseema Ruchulu", type: "restaurant", description: "Andhra cuisine with spicy and flavorful dishes", timings: "11:00 AM - 10:00 PM", location: "South Campus, Block B", rating: 4 },
    { name: "Sri Rudra", type: "restaurant", description: "Pure vegetarian restaurant with South Indian specialties", timings: "7:00 AM - 10:00 PM", location: "Main Campus, Near Temple", rating: 4 },
    { name: "Indian Salt", type: "restaurant", description: "North Indian cuisine with rich gravies and breads", timings: "11:00 AM - 10:30 PM", location: "West Campus, Block C", rating: 5 },
    { name: "Rajwadi Gola", type: "specialty", description: "Refreshing drinks and ice golas", timings: "10:00 AM - 7:00 PM", location: "Sports Complex, Near Pool", rating: 3 },
    { name: "Cafe Bollywood", type: "cafe", description: "Bollywood-themed cafe with Indian fusion food", timings: "9:00 AM - 11:00 PM", location: "Cultural Center", rating: 4 },
    { name: "Krishna Food Canteen", type: "restaurant", description: "Economical meals for students on a budget", timings: "7:00 AM - 9:00 PM", location: "Hostel Area, Building 5", rating: 4 }
];

// Shopping cart functionality
let cart = JSON.parse(localStorage.getItem('collegeCanteenCart')) || [];

// DOM Elements
const canteenContainer = document.getElementById('canteen-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const canteenCount = document.getElementById('canteen-count');
const modal = document.getElementById('canteen-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTimings = document.getElementById('modal-timings');
const modalLocation = document.getElementById('modal-location');
const modalMenu = document.getElementById('modal-menu');

// Cart elements
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeCartModal = document.getElementById('close-cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const clearCartBtn = document.getElementById('clear-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');

// Toast element
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderCanteens(canteens);
    
    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterCanteens(filter);
        });
    });
    
    // Search input event listener
    searchInput.addEventListener('input', function() {
        filterCanteensBySearch(this.value);
    });
    
    // Close modal event listener
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close cart modal event listener
    closeCartModal.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    // Cart icon click event
    cartIcon.addEventListener('click', function() {
        openCartModal();
    });
    
    // Clear cart button
    clearCartBtn.addEventListener('click', function() {
        clearCart();
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        checkout();
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});

// Render canteens to the page
function renderCanteens(canteenList) {
    canteenContainer.innerHTML = '';
    
    if (canteenList.length === 0) {
        canteenContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No canteens found</h3>
                <p>Try adjusting your search or filter to find what you're looking for.</p>
            </div>
        `;
        canteenCount.textContent = '0';
        return;
    }
    
    canteenCount.textContent = canteenList.length;
    
    canteenList.forEach(canteen => {
        // Get color based on canteen type
        let color;
        switch(canteen.type) {
            case 'cafe': color = '#5d4037'; break;
            case 'restaurant': color = '#2e7d32'; break;
            case 'specialty': color = '#6a1b9a'; break;
            default: color = '#283593';
        }
        
        // Get menu items for this canteen
        const menuItems = canteenMenus[canteen.name] || [];
        const menuPreview = menuItems.slice(0, 3); // Show first 3 items as preview
        
        // Generate star rating HTML
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= canteen.rating) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        
        const card = document.createElement('div');
        card.className = 'canteen-card';
        card.innerHTML = `
            <div class="card-header" style="background-color: ${color}">
                <i class="fas fa-${canteen.type === 'cafe' ? 'coffee' : canteen.type === 'restaurant' ? 'utensils' : 'star'}"></i>
            </div>
            <div class="card-body">
                <h3>${canteen.name}</h3>
                <p>${canteen.description}</p>
                <div class="menu-items-preview">
                    ${menuPreview.map(item => `<span class="menu-tag">${item.name}</span>`).join('')}
                    ${menuItems.length > 3 ? `<span class="menu-tag">+${menuItems.length - 3} more</span>` : ''}
                </div>
                <div class="rating">
                    ${stars}
                </div>
            </div>
            <div class="card-footer">
                <span><i class="fas fa-map-marker-alt"></i> ${canteen.location}</span>
                <button class="view-btn" data-name="${canteen.name}">View Menu</button>
            </div>
        `;
        
        // Add event listener to the view button
        const viewBtn = card.querySelector('.view-btn');
        viewBtn.addEventListener('click', function() {
            showCanteenMenu(canteen.name);
        });
        
        canteenContainer.appendChild(card);
    });
}

// Filter canteens by type
function filterCanteens(filterType) {
    let filteredCanteens;
    
    if (filterType === 'all') {
        filteredCanteens = canteens;
    } else {
        filteredCanteens = canteens.filter(canteen => canteen.type === filterType);
    }
    
    // Apply search filter if there's a search term
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredCanteens = filteredCanteens.filter(canteen => {
            const menuItems = canteenMenus[canteen.name] || [];
            const hasMatchingMenuItem = menuItems.some(item => 
                item.name.toLowerCase().includes(searchTerm) || 
                item.description.toLowerCase().includes(searchTerm)
            );
            
            return canteen.name.toLowerCase().includes(searchTerm) || 
                   canteen.description.toLowerCase().includes(searchTerm) ||
                   hasMatchingMenuItem;
        });
    }
    
    renderCanteens(filteredCanteens);
}

// Filter canteens by search term
function filterCanteensBySearch(searchTerm) {
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    
    let filteredCanteens;
    if (activeFilter === 'all') {
        filteredCanteens = canteens;
    } else {
        filteredCanteens = canteens.filter(canteen => canteen.type === activeFilter);
    }
    
    if (searchTerm) {
        filteredCanteens = filteredCanteens.filter(canteen => {
            const menuItems = canteenMenus[canteen.name] || [];
            const hasMatchingMenuItem = menuItems.some(item => 
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            
            return canteen.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   canteen.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   hasMatchingMenuItem;
        });
    }
    
    renderCanteens(filteredCanteens);
}

// Show canteen menu in modal
function showCanteenMenu(canteenName) {
    const canteen = canteens.find(c => c.name === canteenName);
    const menuItems = canteenMenus[canteenName] || [];
    
    if (canteen) {
        modalTitle.textContent = canteen.name;
        modalDescription.textContent = canteen.description;
        modalTimings.textContent = canteen.timings;
        modalLocation.textContent = canteen.location;
        
        // Generate menu HTML
        let menuHTML = '';
        
        if (menuItems.length > 0) {
            menuHTML = `
                <div class="menu-section">
                    <h4>Menu Items (${menuItems.length} items)</h4>
                    ${menuItems.map(item => {
                        const cartItem = cart.find(ci => ci.id === item.id);
                        const quantity = cartItem ? cartItem.quantity : 0;
                        
                        return `
                            <div class="menu-item">
                                <div class="menu-item-info">
                                    <div class="menu-item-name">${item.name}</div>
                                    <div class="menu-item-desc">${item.description}</div>
                                    <div class="menu-item-nutrition">
                                        <span><strong>Protein:</strong> ${item.nutrition.protein}</span>
                                        <span><strong>Carbs:</strong> ${item.nutrition.carbs}</span>
                                        <span><strong>Fat:</strong> ${item.nutrition.fat}</span>
                                    </div>
                                </div>
                                <div class="menu-item-price">₹${item.price}</div>
                                <div class="menu-item-actions">
                                    ${quantity > 0 ? `
                                        <div class="quantity-controls">
                                            <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                                            <span class="quantity">${quantity}</span>
                                            <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                                        </div>
                                    ` : ''}
                                    <button class="add-to-cart-btn ${quantity > 0 ? 'added' : ''}" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-canteen="${canteenName}">
                                        <i class="fas fa-${quantity > 0 ? 'check' : 'cart-plus'}"></i>
                                        ${quantity > 0 ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else {
            menuHTML = `
                <div class="menu-section">
                    <h4>Menu</h4>
                    <p>Menu information is currently unavailable for this canteen.</p>
                </div>
            `;
        }
        
        modalMenu.innerHTML = menuHTML;
        
        // Add event listeners to the buttons in the menu modal
        const addToCartButtons = modalMenu.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const name = this.getAttribute('data-name');
                const price = parseInt(this.getAttribute('data-price'));
                const canteen = this.getAttribute('data-canteen');
                
                addToCart(id, name, price, canteen);
                
                // Update the button state
                const cartItem = cart.find(item => item.id === id);
                if (cartItem) {
                    this.innerHTML = `<i class="fas fa-check"></i> Added to Cart`;
                    this.classList.add('added');
                    
                    // Show quantity controls
                    const menuItem = this.closest('.menu-item');
                    const quantityControls = menuItem.querySelector('.quantity-controls');
                    if (!quantityControls) {
                        const actionsDiv = menuItem.querySelector('.menu-item-actions');
                        const quantityHTML = `
                            <div class="quantity-controls">
                                <button class="quantity-btn decrease-btn" data-id="${id}">-</button>
                                <span class="quantity">${cartItem.quantity}</span>
                                <button class="quantity-btn increase-btn" data-id="${id}">+</button>
                            </div>
                        `;
                        actionsDiv.insertAdjacentHTML('afterbegin', quantityHTML);
                        
                        // Add event listeners to the new buttons
                        const decreaseBtn = actionsDiv.querySelector('.decrease-btn');
                        const increaseBtn = actionsDiv.querySelector('.increase-btn');
                        
                        decreaseBtn.addEventListener('click', function() {
                            decreaseQuantity(id);
                        });
                        
                        increaseBtn.addEventListener('click', function() {
                            increaseQuantity(id);
                        });
                    } else {
                        const quantitySpan = quantityControls.querySelector('.quantity');
                        quantitySpan.textContent = cartItem.quantity;
                    }
                }
            });
        });
        
        // Add event listeners to quantity buttons if they exist
        const decreaseButtons = modalMenu.querySelectorAll('.decrease-btn');
        const increaseButtons = modalMenu.querySelectorAll('.increase-btn');
        
        decreaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                decreaseQuantity(id);
            });
        });
        
        increaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                increaseQuantity(id);
            });
        });
        
        modal.style.display = 'flex';
    }
}

// Cart functionality
function addToCart(id, name, price, canteen) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            canteen: canteen,
            quantity: 1
        });
    }
    
    updateCart();
    showToast(`${name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
        updateCart();
        
        // Update quantity in menu modal if open
        const quantitySpan = document.querySelector(`.decrease-btn[data-id="${id}"]`)?.nextElementSibling;
        if (quantitySpan) {
            quantitySpan.textContent = item.quantity;
        }
    }
}

function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            // Remove item if quantity becomes 0
            removeFromCart(id);
            
            // Update button in menu modal if open
            const addButton = document.querySelector(`.add-to-cart-btn[data-id="${id}"]`);
            if (addButton) {
                addButton.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
                addButton.classList.remove('added');
                
                // Remove quantity controls
                const quantityControls = addButton.closest('.menu-item').querySelector('.quantity-controls');
                if (quantityControls) {
                    quantityControls.remove();
                }
            }
            return;
        }
        
        updateCart();
        
        // Update quantity in menu modal if open
        const quantitySpan = document.querySelector(`.decrease-btn[data-id="${id}"]`)?.nextElementSibling;
        if (quantitySpan) {
            quantitySpan.textContent = item.quantity;
        }
    }
}

function updateCart() {
    // Save to localStorage
    localStorage.setItem('collegeCanteenCart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // If cart modal is open, update it
    if (cartModal.style.display === 'flex') {
        renderCartItems();
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function openCartModal() {
    renderCartItems();
    cartModal.style.display = 'flex';
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add items from the menu to get started!</p>
            </div>
        `;
        cartTotalPrice.textContent = '₹0';
        return;
    }
    
    let totalPrice = 0;
    let cartHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <p>${item.canteen}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease-cart-btn" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase-cart-btn" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-total">₹${itemTotal}</div>
                    <button class="remove-item-btn" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = cartHTML;
    cartTotalPrice.textContent = `₹${totalPrice}`;
    
    // Add event listeners to cart buttons
    const decreaseButtons = cartItems.querySelectorAll('.decrease-cart-btn');
    const increaseButtons = cartItems.querySelectorAll('.increase-cart-btn');
    const removeButtons = cartItems.querySelectorAll('.remove-item-btn');
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            decreaseQuantity(id);
        });
    });
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            increaseQuantity(id);
        });
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        updateCart();
        showToast('Cart cleared!');
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add items before checkout.');
        return;
    }
    
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const orderSummary = cart.map(item => 
        `${item.quantity}x ${item.name} (${item.canteen}) - ₹${item.price * item.quantity}`
    ).join('\n');
    
    alert(`Order Summary:\n\n${orderSummary}\n\nTotal: ₹${totalPrice}\n\nYour order has been placed! It will be ready for pickup in 20-30 minutes.`);
    
    // Clear cart after successful checkout
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}