'use client'

import { useState, useEffect } from 'react';
import { 
  Home, Utensils, ShoppingCart, User, Search, 
  Leaf, Sparkles, Truck, Star, ArrowRight, 
  Plus, Minus, Trash2, MapPin, CreditCard, 
  CheckCircle, FireExtinguisher, Flame, ArrowLeft, Phone, Mail
} from 'lucide-react';

const tiffins = [
  { id: 't1', name: 'Masala Dosa', category: 'tiffins', price: 99, rating: 4.8, isVeg: true, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Crispy golden dosa served with delicious peanut chutney and sambar.' },
  { id: 't2', name: 'Idly (3 pcs)', category: 'tiffins', price: 60, rating: 4.7, isVeg: true, image: '/images/idly.jpg', description: 'Soft, fluffy steamed rice cakes served with sambar and two chutneys.' },
  { id: 't3', name: 'Medu Vada (2 pcs)', category: 'tiffins', price: 70, rating: 4.6, isVeg: true, image: '/images/vada.jpg', description: 'Crispy deep-fried lentil donuts served hot.' },
  { id: 't4', name: 'Poori (3 pcs)', category: 'tiffins', price: 85, rating: 4.5, isVeg: true, image: '/images/poori.jpg', description: 'Fluffy whole wheat pooris served with special potato curry.' },
  { id: 't5', name: 'Upma', category: 'tiffins', price: 55, rating: 4.3, isVeg: true, image: '/images/upma.jpg', description: 'Classic semolina breakfast dish cooked with veggies and ghee.' },
  { id: 't6', name: 'Ghee Karam Dosa', category: 'tiffins', price: 110, rating: 4.9, isVeg: true, image: '/images/karam_dosa.jpg', description: 'Spicy and rich dosa roasted in pure desi ghee with red chili paste.' },
  { id: 't7', name: 'Onion Dosa', category: 'tiffins', price: 85, rating: 4.6, isVeg: true, image: '/images/onion_dosa.jpg', description: 'Crispy dosa topped with finely chopped onions and green chilies.' },
  { id: 't8', name: 'Pesarattu (Moong Dal Dosa)', category: 'tiffins', price: 120, rating: 4.7, isVeg: true, image: '/images/pesarattu.jpg', description: 'Healthy green gram dosa served with ginger chutney.' },
  { id: 't9', name: 'Mysore Bonda (4 pcs)', category: 'tiffins', price: 75, rating: 4.8, isVeg: true, image: '/images/bonda.jpg', description: 'Golden fried round dumplings crisp on the outside, fluffy inside.' },
  { id: 't10', name: 'Ven Pongal', category: 'tiffins', price: 80, rating: 4.5, isVeg: true, image: '/images/pongal.jpg', description: 'Comforting rice and lentil dish cooked with black pepper and ghee.' },
  { id: 't11', name: 'Onion Uttapam', category: 'tiffins', price: 90, rating: 4.4, isVeg: true, image: '/images/uttapam.jpg', description: 'Thick, soft pancake made of dosa batter topped with onions.' },
  { id: 't12', name: 'Punugulu', category: 'tiffins', price: 65, rating: 4.6, isVeg: true, image: '/images/punugulu.jpg', description: 'Crispy deep-fried snack made from fermented rice and urad dal batter.' }
];

const biryanis = [
  { id: 'b1', name: 'Hyderabadi Chicken Dum Biryani', category: 'biryanis', price: 299, rating: 4.9, reviews: 1240, isVeg: false, bestseller: true, image: '/images/chicken_dum_biryani.jpg', description: 'Classic dum biryani with marinated tender chicken and fragrant long-grain basmati rice.' },
  { id: 'b2', name: 'Mutton Fry Piece Biryani', category: 'biryanis', price: 399, rating: 4.8, reviews: 850, isVeg: false, bestseller: false, image: '/images/mutton_biryani.jpg', description: 'Spicy and juicy mutton pieces served over aromatic biryani rice.' },
  { id: 'b3', name: 'Special Paneer Biryani', category: 'biryanis', price: 249, rating: 4.6, reviews: 420, isVeg: true, bestseller: false, image: '/images/paneer_biryani.jpg', description: 'Delicious vegetarian biryani loaded with fresh paneer cubes and whole spices.' },
  { id: 'b4', name: 'Egg Biryani', category: 'biryanis', price: 199, rating: 4.5, reviews: 310, isVeg: false, bestseller: false, image: '/images/egg_biryani.jpg', description: 'Flavorful biryani rice cooked with boiled eggs and special masala.' }
];

const curries = [
  { id: 'c1', name: 'Andhra Chicken Curry', category: 'curries', price: 220, rating: 4.8, reviews: 620, isVeg: false, bestseller: true, image: '/images/chicken_curry.jpg', description: 'Spicy and rich Andhra style chicken curry cooked with traditional spices.' },
  { id: 'c2', name: 'Mutton Curry', category: 'curries', price: 350, rating: 4.7, reviews: 410, isVeg: false, bestseller: false, image: '/images/mutton_curry.jpg', description: 'Tender mutton pieces slow-cooked in a thick, flavorful gravy.' },
  { id: 'c3', name: 'Fish Pulusu (Chepala Pulusu)', category: 'curries', price: 280, rating: 4.9, reviews: 530, isVeg: false, bestseller: true, image: '/images/fish_pulusu.jpg', description: 'Authentic Telugu style tangy and spicy fish curry made with tamarind.' },
  { id: 'c4', name: 'Prawns Iguru', category: 'curries', price: 320, rating: 4.6, reviews: 290, isVeg: false, bestseller: false, image: '/images/prawns_iguru.jpg', description: 'Succulent prawns roasted in a thick onion and tomato masala base.' },
  { id: 'c5', name: 'Telangana Natu Kodi Pulusu', category: 'curries', price: 340, rating: 4.9, reviews: 780, isVeg: false, bestseller: true, image: '/images/natu_kodi.jpg', description: 'Authentic Telangana style spicy country chicken curry with a rich gravy.' },
  { id: 'c6', name: 'Talakaya Kura (Goat Head Curry)', category: 'curries', price: 380, rating: 4.8, reviews: 450, isVeg: false, bestseller: false, image: '/images/talakaya.jpg', description: 'Traditional goat head curry slow-cooked with aromatic regional spices.' },
  { id: 'c7', name: 'Telangana Mutton Curry', category: 'curries', price: 360, rating: 4.7, reviews: 520, isVeg: false, bestseller: true, image: '/images/telangana_mutton.jpg', description: 'Fiery and flavorful mutton curry made with special Telangana roasted spices.' },
  { id: 'c8', name: 'Mutton Kheema Kura', category: 'curries', price: 310, rating: 4.6, reviews: 340, isVeg: false, bestseller: false, image: '/images/kheema.jpg', description: 'Spiced minced mutton cooked in a deep, savory, and spicy gravy.' },
  { id: 'c9', name: 'Gutti Vankaya Kura', category: 'curries', price: 180, rating: 4.8, reviews: 540, isVeg: true, bestseller: true, image: '/images/gutti_vankaya.jpg', description: 'Classic Andhra style stuffed eggplant curry cooked in a rich, spicy, and tangy peanut gravy.' },
  { id: 'c10', name: 'Paneer Butter Masala', category: 'curries', price: 220, rating: 4.7, reviews: 610, isVeg: true, bestseller: true, image: '/images/paneer_butter_masala.jpg', description: 'Soft paneer cubes simmered in a creamy, mildly spiced tomato and cashew butter gravy.' },
  { id: 'c11', name: 'Tomato Pappu (Dal)', category: 'curries', price: 120, rating: 4.5, reviews: 420, isVeg: true, bestseller: false, image: '/images/tomato_pappu.jpg', description: 'Comforting and home-style lentil curry cooked with tangy tomatoes and tempered with ghee.' },
  { id: 'c12', name: 'Mushroom Masala', category: 'curries', price: 240, rating: 4.6, reviews: 310, isVeg: true, bestseller: false, image: '/images/mushroom_masala.jpg', description: 'Earthy mushrooms cooked in a thick, flavorful, and aromatic onion-tomato gravy.' }
];

const drinks = [
  { id: 'd1', name: 'Fresh Lime Soda', category: 'drinks', price: 60, isVeg: true, image: '/images/lime_soda.jpg', description: 'Refreshing sweet and salt lime soda.' },
  { id: 'd2', name: 'Sweet Lassi', category: 'drinks', price: 75, isVeg: true, image: '/images/sweet_lassi.jpg', description: 'Thick and creamy traditional yogurt drink.' },
  { id: 'd3', name: 'Thums Up (500ml)', category: 'drinks', price: 40, isVeg: true, image: '/images/thums_up.jpg', description: 'Taste the thunder with chilled Thums Up.' },
  { id: 'd4', name: 'Sprite (500ml)', category: 'drinks', price: 40, isVeg: true, image: '/images/sprite.jpg', description: 'Clear, lemon-lime flavored soft drink.' },
  { id: 'd5', name: 'Majjiga (Spiced Buttermilk)', category: 'drinks', price: 45, isVeg: true, image: '/images/majjiga.jpg', description: 'Traditional Telugu-style refreshing buttermilk with ginger, green chili, and curry leaves.' },
  { id: 'd6', name: 'Badam Milk (Cold)', category: 'drinks', price: 85, isVeg: true, image: '/images/badam_milk.jpg', description: 'Rich, chilled milk flavored with almonds and saffron.' },
  { id: 'd7', name: 'Rose Milk', category: 'drinks', price: 70, isVeg: true, image: '/images/rose_milk.jpg', description: 'Classic sweet milk flavored with rose syrup.' },
  { id: 'd8', name: 'Mineral Water (1L)', category: 'drinks', price: 20, isVeg: true, image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Packaged drinking water.' }
];

const allMenu = [...tiffins, ...biryanis, ...curries, ...drinks];

export default function ManaVantillu() {
  const [currentView, setCurrentView] = useState('home');
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<any[]>([]);
  const [toastMessage, setToastMessage] = useState('');

  const deliveryFee = 40;
  
  const filteredMenu = (activeCategory === 'all' 
    ? allMenu 
    : allMenu.filter(item => item.category === activeCategory))
    .filter(item => {
      if (dietaryFilter === 'veg') return item.isVeg === true;
      if (dietaryFilter === 'non-veg') return item.isVeg === false;
      return true;
    })
    .filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartTotal = cartSubtotal > 0 ? cartSubtotal + deliveryFee : 0;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setCurrentView(event.state.view);
        if (event.state.category) {
          setActiveCategory(event.state.category);
        }
      } else {
        setCurrentView('home');
      }
    };
    
    window.history.replaceState({ view: 'home', category: 'all' }, '');
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: string, category: string = 'all') => {
    setCurrentView(view);
    if (view === 'menu') {
      setActiveCategory(category);
      setSearchQuery('');
    }
    
    window.history.pushState({ view, category }, '');
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 0 && currentView !== 'menu') {
      navigateTo('menu', 'all');
    }
  };

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to cart`);
  };

  const updateQuantity = (id: string, change: number) => {
    setCart(prev => {
      const updated = prev.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + change };
        }
        return item;
      });
      return updated.filter(item => item.quantity > 0);
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
    showToast('Item removed from cart');
  };

  const placeOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const address = formData.get('address') || '';
    const landmark = formData.get('landmark') || '';
    const pincode = formData.get('pincode') || '';
    const payment = formData.get('payment') || '';
    const suggestions = formData.get('suggestions') || '';

    let orderDetails = `*New Order from Mana Vantillu* 🍲\n\n`;
    orderDetails += `*Customer Details:*\n`;
    orderDetails += `Name: ${name}\n`;
    orderDetails += `Phone: ${phone}\n`;
    orderDetails += `Address: ${address}, ${pincode}\n`;
    if (landmark) orderDetails += `Landmark: ${landmark}\n`;
    orderDetails += `Payment Mode: ${payment.toString().toUpperCase()}\n\n`;
    
    orderDetails += `*Order Items:*\n`;
    cart.forEach(item => {
      orderDetails += `- ${item.name} x ${item.quantity} (₹${item.price * item.quantity})\n`;
    });
    
    if (suggestions) {
      orderDetails += `\n*Cooking Instructions / Suggestions:*\n_${suggestions}_\n`;
    }
    
    orderDetails += `\n*Subtotal:* ₹${cartSubtotal}\n`;
    orderDetails += `*Delivery Fee:* ₹${deliveryFee}\n`;
    orderDetails += `*Grand Total: ₹${cartTotal}*`;

    const encodedMessage = encodeURIComponent(orderDetails);
    window.open(`https://wa.me/918179157002?text=${encodedMessage}`, '_blank');

    navigateTo('success');
    setCart([]);
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-amber-200 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group mr-2" onClick={() => navigateTo('home')}>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-amber-700 text-white rounded-full flex items-center justify-center mr-2 shadow-md group-hover:scale-105 transition-transform">
                <Utensils className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-dark tracking-tight leading-none group-hover:text-primary transition-colors whitespace-nowrap">Mana Vantillu</span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest mt-1 hidden md:block">Taste of Home</span>
              </div>
            </div>
            
            {/* Main Menu Links */}
            <div className="hidden lg:flex space-x-8 items-center">
              <button onClick={() => navigateTo('home')} className={`text-base font-bold hover:text-primary transition-colors ${currentView === 'home' ? 'text-primary' : 'text-dark'}`}>Home</button>
              <button onClick={() => navigateTo('menu', 'all')} className={`text-base font-bold hover:text-primary transition-colors ${currentView === 'menu' && activeCategory === 'all' ? 'text-primary' : 'text-dark'}`}>Menu</button>
              <button onClick={() => navigateTo('menu', 'tiffins')} className={`text-base font-bold hover:text-primary transition-colors ${currentView === 'menu' && activeCategory === 'tiffins' ? 'text-primary' : 'text-dark'}`}>Tiffins</button>
              <button onClick={() => navigateTo('menu', 'biryanis')} className={`text-base font-bold hover:text-primary transition-colors ${currentView === 'menu' && activeCategory === 'biryanis' ? 'text-primary' : 'text-dark'}`}>Biryanis</button>
              <button onClick={() => navigateTo('menu', 'curries')} className={`text-base font-bold hover:text-primary transition-colors ${currentView === 'menu' && activeCategory === 'curries' ? 'text-primary' : 'text-dark'}`}>Curries</button>
              <button onClick={() => navigateTo('menu', 'drinks')} className={`text-base font-bold hover:text-primary transition-colors ${currentView === 'menu' && activeCategory === 'drinks' ? 'text-primary' : 'text-dark'}`}>Drinks</button>
            </div>
            
            {/* Search and Cart */}
            <div className="flex items-center space-x-3 md:space-x-4 justify-end">
              
              {/* Desktop Search Bar */}
              <div className="hidden md:flex relative items-center w-40 lg:w-48">
                <input 
                  type="text" 
                  placeholder="Search food..." 
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-9 pr-3 py-1.5 border border-amber-200 rounded-full bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-dark text-sm font-medium transition-all"
                />
                <Search className="absolute left-3 text-primary/70" size={16} />
              </div>

              {/* Mobile Search Icon */}
              <button onClick={() => { navigateTo('menu', 'all'); setTimeout(() => window.scrollTo({top: 0, behavior: 'smooth'}), 100); }} className="md:hidden relative text-dark hover:text-primary bg-amber-100/50 p-2.5 rounded-full transition-colors">
                <Search size={20} />
              </button>
              
              <button onClick={() => navigateTo('cart')} className="hidden md:block relative text-dark hover:text-primary bg-amber-100/50 p-2.5 rounded-full transition-colors">
                <ShoppingCart size={20} />
                {cartTotalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-amber-50">
                    {cartTotalItems}
                  </span>
                )}
              </button>
              
              <button onClick={() => navigateTo('menu')} className="hidden lg:block bg-primary hover:bg-amber-800 text-white px-6 py-2 rounded-full font-bold transition shadow-md text-sm">Order Now</button>
            </div>
          </div>
        </div>



        {/* Mobile Bottom Nav */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-3 z-50">
          <button onClick={() => navigateTo('home')} className={`flex flex-col items-center ${currentView === 'home' ? 'text-primary' : 'text-gray-500'}`}>
            <Home size={22} className="mb-1" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button onClick={() => navigateTo('menu', 'all')} className={`flex flex-col items-center ${currentView === 'menu' ? 'text-primary' : 'text-gray-500'}`}>
            <Utensils size={22} className="mb-1" />
            <span className="text-xs font-medium">Menu</span>
          </button>
          <button onClick={() => navigateTo('cart')} className={`flex flex-col items-center relative ${currentView === 'cart' ? 'text-primary' : 'text-gray-500'}`}>
            <ShoppingCart size={22} className="mb-1" />
            {cartTotalItems > 0 && (
              <span className="absolute -top-1 right-3 bg-red-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartTotalItems}
              </span>
            )}
            <span className="text-xs font-medium">Cart</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 md:pt-28 lg:pt-24">
        
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="relative bg-secondary overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="z-10">
                  <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Welcome to Mana Vantillu</span>
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 font-serif text-dark">
                    The Taste of Home, <br/> <span className="text-primary">Delivered to You.</span>
                  </h1>
                  <p className="text-lg text-gray-700 mb-8 max-w-lg font-medium">
                    Freshly prepared Tiffins, flavorful Biryanis, and refreshing drinks delivered straight to your doorstep.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <button onClick={() => navigateTo('menu')} className="bg-primary hover:bg-amber-800 text-white px-8 py-4 rounded-full font-bold transition shadow-lg text-lg flex items-center">Order Now <ArrowRight size={20} className="ml-2"/></button>
                    <button onClick={() => navigateTo('menu', 'all')} className="bg-white hover:bg-gray-50 text-dark border-2 border-amber-200 px-8 py-4 rounded-full font-bold transition shadow-sm text-lg text-center">Explore Menu</button>
                  </div>
                  
                  {/* Mobile Search Bar in Hero */}
                  <div className="md:hidden w-full mb-8 relative">
                    <input 
                      type="text" 
                      placeholder="Search for food..." 
                      value={searchQuery}
                      onChange={handleSearch}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-amber-200 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-primary text-dark font-bold text-lg"
                    />
                    <Search className="absolute left-4 top-4 text-primary" size={24} />
                  </div>

                  <div className="flex flex-wrap gap-4 items-center text-sm text-gray-700 font-bold">
                    <span className="flex items-center"><Leaf className="text-accent mr-2" size={18}/> Freshly Prepared</span>
                    <span className="flex items-center"><Sparkles className="text-accent mr-2" size={18}/> Hygienic</span>
                    <span className="flex items-center"><Truck className="text-accent mr-2" size={18}/> Fast Delivery</span>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-110"></div>
                  <img src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Delicious Biryani" className="relative rounded-3xl shadow-2xl object-cover h-[450px] md:h-[550px] w-full border-4 border-white" />
                </div>
              </div>
            </section>

            {/* Food Categories */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold font-serif text-dark mb-4">Discover Our Menu</h2>
                  <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Tiffins */}
                  <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tiffins" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h3 className="text-3xl font-bold text-white font-serif mb-2">Tiffins</h3>
                      <p className="text-amber-50 mb-6 text-sm font-medium">Freshly prepared South Indian breakfast and tiffin varieties.</p>
                      <button onClick={() => navigateTo('menu', 'tiffins')} className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition w-full shadow-lg">Explore Tiffins</button>
                    </div>
                  </div>
                  
                  {/* Biryanis */}
                  <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Biryanis" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h3 className="text-3xl font-bold text-white font-serif mb-2">Biryanis</h3>
                      <p className="text-amber-50 mb-6 text-sm font-medium">Rich, flavorful and aromatic biryanis prepared with quality ingredients.</p>
                      <button onClick={() => navigateTo('menu', 'biryanis')} className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition w-full shadow-lg">Explore Biryanis</button>
                    </div>
                  </div>

                  {/* Curries */}
                  <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <img src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Curries" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h3 className="text-3xl font-bold text-white font-serif mb-2">Curries</h3>
                      <p className="text-amber-50 mb-6 text-sm font-medium">Authentic, spicy non-veg and veg curries to pair with your meal.</p>
                      <button onClick={() => navigateTo('menu', 'curries')} className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition w-full shadow-lg">Explore Curries</button>
                    </div>
                  </div>
                  
                  {/* Drinks */}
                  <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Soft Drinks" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h3 className="text-3xl font-bold text-white font-serif mb-2">Drinks</h3>
                      <p className="text-amber-50 mb-6 text-sm font-medium">Refreshing beverages to complete your meal.</p>
                      <button onClick={() => navigateTo('menu', 'drinks')} className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition w-full shadow-lg">View Drinks</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Popular Tiffins */}
            <section className="py-20 bg-secondary">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <h2 className="text-4xl font-bold font-serif text-dark mb-2">Fresh Tiffins, Made with Love</h2>
                    <p className="text-gray-700 text-lg font-medium">Authentic South Indian breakfast classics.</p>
                  </div>
                  <button onClick={() => navigateTo('menu', 'tiffins')} className="hidden md:flex text-primary font-bold hover:underline items-center">View All <ArrowRight size={16} className="ml-1"/></button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {tiffins.slice(0, 8).map(item => (
                    <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-amber-100 flex flex-col group">
                      <div className="overflow-hidden h-56">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold font-serif text-dark">{item.name}</h3>
                            <span className="bg-green-100 text-accent text-xs px-2 py-1 rounded font-bold flex items-center whitespace-nowrap ml-2">
                              <Leaf size={12} className="mr-1"/> Veg
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.description}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex flex-col">
                            <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                            <span className="text-xs font-bold text-yellow-500 flex items-center"><Star size={12} className="fill-current mr-1"/> {item.rating}</span>
                          </div>
                          <button onClick={() => addToCart(item)} className="bg-primary hover:bg-amber-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition shadow-lg flex items-center">
                            <Plus size={16} className="mr-1" /> Add
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center md:hidden">
                    <button onClick={() => navigateTo('menu', 'tiffins')} className="text-primary font-bold hover:underline inline-flex items-center">View All Tiffins <ArrowRight size={16} className="ml-1"/></button>
                </div>
              </div>
            </section>
            
            {/* Customer Reviews */}
            <section className="py-20 bg-amber-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 text-amber-200/50 transform rotate-12">
                <Leaf size={300} />
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold font-serif text-dark mb-4">What Our Foodies Say</h2>
                  <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { name: 'Ramesh Reddy', location: 'Husnabad', review: 'The Hyderabadi Chicken Dum Biryani is absolutely fantastic! It truly tastes like home. Best food delivery in Siddipet district.', rating: 5 },
                    { name: 'Swathi P.', location: 'Husnabad', review: 'I order their Masala Dosa and Idly every weekend. The peanut chutney is authentic and the food is always delivered hot and fresh!', rating: 5 },
                    { name: 'Karthik Kumar', location: 'Siddipet', review: 'Tried the Natu Kodi Pulusu today. The spice level was perfect and the meat was very tender. Highly recommend their non-veg curries.', rating: 5 }
                  ].map((review, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-amber-100 hover:-translate-y-2 transition-transform duration-300">
                      <div className="flex text-yellow-400 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} className={i < review.rating ? "fill-current" : "text-gray-300"} />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-8 font-medium leading-relaxed">"{review.review}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-primary font-bold text-xl mr-4">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-dark">{review.name}</h4>
                          <p className="text-sm text-gray-500">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-primary text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Your Favorite Food, Delivered Fresh.</h2>
                <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto font-medium">Order your favorite Tiffins, Biryanis and Drinks from Mana Vantillu and enjoy them from the comfort of your home.</p>
                <button onClick={() => navigateTo('menu')} className="bg-white text-primary hover:bg-amber-50 px-12 py-5 rounded-full font-bold transition shadow-2xl text-xl flex items-center mx-auto">
                  <ShoppingCart className="mr-3" size={24} /> Order Now
                </button>
              </div>
            </section>
          </div>
        )}

        {currentView === 'menu' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in duration-300">
            
            {/* Mobile Search Bar inside Menu */}
            <div className="md:hidden mb-8">
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search our delicious menu..." 
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-dark font-medium"
                />
                <Search className="absolute left-4 top-3 text-primary/70" size={20} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <h1 className="text-4xl font-bold font-serif text-dark md:mb-0">Our Menu</h1>
              
              <div className="flex flex-col items-center gap-4">
                {/* Veg / Non-Veg Toggle */}
                <div className="flex items-center space-x-1 bg-white rounded-full p-1 border border-amber-200 shadow-sm self-center">
                  <button 
                    onClick={() => setDietaryFilter('all')} 
                    className={`px-5 py-2 rounded-full text-sm font-bold transition ${dietaryFilter === 'all' ? 'bg-amber-100 text-dark' : 'text-gray-500 hover:text-dark hover:bg-gray-50'}`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setDietaryFilter('veg')} 
                    className={`px-5 py-2 rounded-full text-sm font-bold transition flex items-center ${dietaryFilter === 'veg' ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:text-green-700 hover:bg-gray-50'}`}
                  >
                    <Leaf size={14} className="mr-1.5" /> Veg
                  </button>
                  <button 
                    onClick={() => setDietaryFilter('non-veg')} 
                    className={`px-5 py-2 rounded-full text-sm font-bold transition flex items-center ${dietaryFilter === 'non-veg' ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:text-red-700 hover:bg-gray-50'}`}
                  >
                    <Flame size={14} className="mr-1.5" /> Non-Veg
                  </button>
                </div>
              </div>
            </div>

            {searchQuery && (
              <div className="mb-8 p-4 bg-amber-50 rounded-xl border border-amber-200 font-medium text-dark flex justify-between items-center">
                <span>Showing search results for: <strong>"{searchQuery}"</strong></span>
                <button onClick={() => setSearchQuery('')} className="text-primary hover:underline font-bold text-sm">Clear Search</button>
              </div>
            )}

            {filteredMenu.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-amber-100">
                <Search className="mx-auto text-amber-200 mb-4" size={64} />
                <h2 className="text-2xl font-bold text-dark mb-2">No items found</h2>
                <p className="text-gray-500">We couldn't find any food matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredMenu.map(item => (
                  <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-amber-100 flex flex-col group">
                    <div className="h-56 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold font-serif text-dark pr-2 leading-tight">{item.name}</h3>
                          {item.isVeg ? (
                            <span className="text-accent border border-accent p-1 rounded bg-green-50 flex-shrink-0"><Leaf size={14}/></span>
                          ) : (
                            <span className="text-red-600 border border-red-600 p-1 rounded bg-red-50 flex-shrink-0"><Flame size={14}/></span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mb-4 font-medium">{item.description}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                        <button onClick={() => addToCart(item)} className="bg-primary hover:bg-amber-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition shadow-md flex items-center">
                          <Plus size={16} className="mr-1" /> Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {currentView === 'cart' && (
          <div className="w-full py-10 min-h-[60vh]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
              
              {cart.length === 0 ? (
                <div className="text-center py-24 bg-white shadow-sm border border-gray-200 mt-10">
                  <ShoppingCart className="mx-auto text-gray-300 mb-6" size={80} />
                  <h2 className="text-3xl font-bold text-dark mb-3">Your cart is empty</h2>
                  <p className="text-gray-500 mb-8 font-medium text-lg">You can go to home page to view more restaurants</p>
                  <button onClick={() => navigateTo('menu')} className="bg-[#fc8019] hover:bg-orange-600 text-white px-8 py-3 font-bold uppercase transition">See Restaurants near you</button>
                </div>
              ) : (
                <form onSubmit={placeOrder} className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
                  {/* Left Column: Account, Address, Payment */}
                  <div className="space-y-6">
                    {/* Stepper block 1 */}
                    <div className="bg-white p-6 sm:p-8 flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-[#282c3f] text-white flex items-center justify-center shadow-sm"><User size={20}/></div>
                        <div className="w-px h-full border-l border-dashed border-gray-400 mt-2 min-h-[40px]"></div>
                      </div>
                      <div className="flex-1 pb-4">
                        <h3 className="text-xl font-bold text-[#282c3f] mb-1">Account</h3>
                        <p className="text-gray-500 mb-6">To place your order now, enter your contact details.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                          <input type="text" name="name" placeholder="Full Name" required className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-green-600 font-medium" />
                          <input type="tel" name="phone" placeholder="Mobile Number" required className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-green-600 font-medium" />
                        </div>
                      </div>
                    </div>

                    {/* Stepper block 2 */}
                    <div className="bg-white p-6 sm:p-8 flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-white border shadow-sm flex items-center justify-center"><MapPin size={20} className="text-gray-600"/></div>
                        <div className="w-px h-full border-l border-dashed border-gray-400 mt-2 min-h-[40px]"></div>
                      </div>
                      <div className="flex-1 pb-4">
                        <h3 className="text-xl font-bold text-[#282c3f] mb-6">Delivery address</h3>
                        <div className="max-w-lg">
                          <textarea name="address" placeholder="Complete Address" required rows={2} className="w-full border border-gray-300 px-4 py-3 mb-4 focus:outline-none focus:border-green-600 font-medium"></textarea>
                          <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="landmark" placeholder="Landmark" className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-green-600 font-medium" />
                            <input type="text" name="pincode" placeholder="Pincode" required className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-green-600 font-medium" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stepper block 3 */}
                    <div className="bg-white p-6 sm:p-8 flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-white border shadow-sm flex items-center justify-center"><CreditCard size={20} className="text-gray-600"/></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#282c3f] mb-6">Payment</h3>
                        <div className="space-y-3 mb-8 max-w-lg">
                          <label className="flex items-center p-4 border border-gray-200 cursor-pointer hover:border-green-600 transition-colors">
                            <input type="radio" name="payment" value="upi" defaultChecked className="text-green-600 focus:ring-green-600 w-4 h-4" />
                            <span className="ml-3 font-bold text-gray-700">UPI (GPay, PhonePe)</span>
                          </label>
                          <label className="flex items-center p-4 border border-gray-200 cursor-pointer hover:border-green-600 transition-colors">
                            <input type="radio" name="payment" value="card" className="text-green-600 focus:ring-green-600 w-4 h-4" />
                            <span className="ml-3 font-bold text-gray-700">Credit / Debit Card</span>
                          </label>
                          <label className="flex items-center p-4 border border-gray-200 cursor-pointer hover:border-green-600 transition-colors">
                            <input type="radio" name="payment" value="cod" className="text-green-600 focus:ring-green-600 w-4 h-4" />
                            <span className="ml-3 font-bold text-gray-700">Cash on Delivery</span>
                          </label>
                        </div>
                        <button type="submit" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3.5 font-bold transition shadow-sm text-center text-lg flex justify-center items-center group tracking-wide">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 mr-3 fill-current group-hover:scale-110 transition-transform">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          Send Order via WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Swiggy Style Cart Summary */}
                  <div>
                    <div className="bg-white sticky top-24 shadow-sm pb-4">
                      {/* Restaurant Header */}
                      <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                        <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=150&q=80" alt="Restaurant" className="w-12 h-12 rounded object-cover shadow-sm"/>
                        <div>
                          <h3 className="font-bold text-[#282c3f] text-lg leading-tight">Mana Vantillu</h3>
                          <p className="text-[#686b78] text-sm">Husnabad</p>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="p-6 max-h-[45vh] overflow-y-auto custom-scrollbar">
                        {cart.map(item => (
                          <div key={item.id} className="flex items-start justify-between mb-4 text-sm">
                            <div className="flex items-start gap-3 max-w-[55%]">
                              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded shadow-sm border border-gray-100 flex-shrink-0" />
                              <div className="flex items-start gap-1.5">
                                {item.isVeg ? (
                                  <span className="text-green-600 border border-green-600 p-[1px] mt-0.5 rounded-sm flex-shrink-0" title="Veg"><Leaf size={10}/></span>
                                ) : (
                                  <span className="text-red-600 border border-red-600 p-[1px] mt-0.5 rounded-sm flex-shrink-0" title="Non-Veg"><Flame size={10}/></span>
                                )}
                                <span className="text-[#3e4152] font-medium leading-tight">{item.name}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center border border-gray-300 text-green-600 bg-white">
                                <button type="button" onClick={() => updateQuantity(item.id, -1)} className="p-1.5 px-2 hover:bg-gray-100 transition"><Minus size={12}/></button>
                                <span className="w-4 text-center font-bold text-xs">{item.quantity}</span>
                                <button type="button" onClick={() => updateQuantity(item.id, 1)} className="p-1.5 px-2 hover:bg-gray-100 transition"><Plus size={12}/></button>
                              </div>
                              <span className="font-medium text-[#535665] w-12 text-right">₹{item.price * item.quantity}</span>
                              <button type="button" onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition" title="Remove Item"><Trash2 size={16}/></button>
                            </div>
                          </div>
                        ))}
                        
                        <div className="mt-6 bg-[#f9f9f9] p-3 flex items-center text-[#535665] text-sm border border-gray-200 cursor-text focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 transition-all">
                          <span className="font-bold mr-2 text-xl -mt-2 text-gray-400">❝</span> 
                          <input type="text" name="suggestions" placeholder="Any suggestions? We will pass it on..." className="bg-transparent w-full focus:outline-none placeholder-gray-500" />
                        </div>
                        
                        <label className="mt-4 flex items-start gap-3 p-4 border border-gray-200 cursor-pointer hover:shadow-sm transition">
                          <input type="checkbox" className="mt-1 w-4 h-4 accent-green-600" />
                          <div className="text-sm">
                            <span className="font-bold text-[#3e4152] block mb-1">Opt in for No-contact Delivery</span>
                            <span className="text-[#7e808c] leading-tight block">Partner will safely place the order outside your door (not for COD)</span>
                          </div>
                        </label>
                      </div>

                      {/* Bill Details */}
                      <div className="px-6 bg-white border-t border-gray-100 pt-4">
                        <h4 className="font-bold text-[#3e4152] text-sm mb-4">Bill Details</h4>
                        <div className="space-y-2 text-sm text-[#535665] border-b border-gray-200 pb-4 mb-4">
                          <div className="flex justify-between">
                            <span>Item Total</span>
                            <span className="font-medium">₹{cartSubtotal}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Delivery Fee</span>
                            <span className="font-medium">₹{deliveryFee}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center font-bold text-[#282c3f]">
                          <span>TO PAY</span>
                          <span className="text-lg">₹{cartTotal}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {currentView === 'success' && (
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center min-h-[60vh] animate-in zoom-in duration-500">
            <div className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={64} />
            </div>
            <h1 className="text-5xl font-bold font-serif text-dark mb-6">Order Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-10 font-medium">Thank you for choosing Mana Vantillu. Your delicious food is being prepared.</p>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-amber-100 mb-10 max-w-md mx-auto text-left">
              <h3 className="font-bold text-2xl text-dark mb-6 border-b pb-4 font-serif">Order Status</h3>
              <div className="space-y-6">
                <div className="flex items-center text-green-600 font-bold text-lg">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4"><CheckCircle size={20} /></div> Order Confirmed
                </div>
                <div className="flex items-center text-primary font-bold text-lg">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4"><FireExtinguisher size={20} /></div> Preparing Food
                </div>
                <div className="flex items-center text-gray-400 font-medium text-lg">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4"><Truck size={20} /></div> Out for Delivery
                </div>
                <div className="flex items-center text-gray-400 font-medium text-lg">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4"><Home size={20} /></div> Delivered
                </div>
              </div>
            </div>
            
            <button onClick={() => navigateTo('home')} className="bg-primary hover:bg-amber-800 text-white px-10 py-4 rounded-full font-bold transition shadow-xl text-lg">Return to Home</button>
          </div>
        )}
        {currentView === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in duration-300">
            <h1 className="text-4xl font-bold font-serif text-dark mb-10 text-center">Contact Us</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-amber-100">
                <h3 className="text-2xl font-bold text-dark mb-6">Get in Touch</h3>
                <form onSubmit={(e) => { e.preventDefault(); showToast('Message sent successfully!'); }} className="space-y-5">
                  <input type="text" placeholder="Your Name" required className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium" />
                  <input type="email" placeholder="Your Email" required className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium" />
                  <textarea placeholder="Your Message" required rows={5} className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium"></textarea>
                  <button type="submit" className="w-full bg-primary hover:bg-amber-800 text-white py-4 rounded-xl font-bold transition shadow-md text-lg">Send Message</button>
                </form>
              </div>
              
              <div className="space-y-8">
                <div className="bg-secondary p-8 rounded-3xl shadow-sm border border-amber-100 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-dark mb-8 font-serif">Reach Out to Us</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full text-primary shadow-sm mr-4"><MapPin size={24} /></div>
                      <div>
                        <h4 className="font-bold text-lg text-dark">Location</h4>
                        <p className="text-gray-600 font-medium">Husnabad, Dist: Siddipet<br/>Telangana</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full text-primary shadow-sm mr-4"><Phone size={24} /></div>
                      <div>
                        <h4 className="font-bold text-lg text-dark">Phone</h4>
                        <p className="text-gray-600 font-medium">+91 8179157002</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full text-primary shadow-sm mr-4"><Mail size={24} /></div>
                      <div>
                        <h4 className="font-bold text-lg text-dark">Email</h4>
                        <p className="text-gray-600 font-medium">manavantillu5@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'faqs' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in duration-300 min-h-[60vh]">
            <h1 className="text-4xl font-bold font-serif text-dark mb-4 text-center">Frequently Asked Questions</h1>
            <p className="text-center text-gray-600 mb-10 font-medium text-lg">Everything you need to know about Mana Vantillu and our services.</p>
            
            <div className="space-y-4">
              {[
                { q: "What are your delivery hours?", a: "We deliver breakfast and tiffins from 7:00 AM to 11:30 AM, and lunch/biryanis from 12:30 PM to 4:00 PM. Evening orders are taken from 6:00 PM to 10:30 PM." },
                { q: "Do you offer free delivery?", a: "We charge a nominal delivery fee of ₹40 for all orders to ensure our delivery partners are paid fairly. Free delivery is available for orders above ₹999." },
                { q: "Are all your tiffins purely vegetarian?", a: "Yes! All our tiffins and breakfast items are 100% vegetarian and prepared in a separate hygienic kitchen area." },
                { q: "Which areas do you deliver to?", a: "We currently deliver in and around Husnabad, Siddipet District. You can enter your pincode on the checkout page to confirm delivery availability." },
                { q: "Do you take bulk catering orders?", a: "Absolutely! We undertake catering for small parties, birthdays, and corporate events. Please contact us at +91 8179157002 for bulk orders." },
                { q: "What payment methods do you accept?", a: "We accept all major UPI apps (Google Pay, PhonePe, Paytm), Credit/Debit cards, and Cash on Delivery (COD)." }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition">
                  <h3 className="text-xl font-bold text-dark mb-2">{faq.q}</h3>
                  <p className="text-gray-600 font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-amber-50 pt-20 pb-10 border-t-8 border-primary pb-28 md:pb-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6 cursor-pointer group" onClick={() => navigateTo('home')}>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber-700 text-white rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-105 transition-transform">
                  <Utensils size={24} />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-serif font-bold text-3xl text-white tracking-tight leading-none group-hover:text-primary transition-colors">Mana Vantillu</span>
                  <span className="text-[11px] text-primary font-bold uppercase tracking-widest mt-1">Taste of Home</span>
                </div>
              </div>
              <p className="text-amber-200 mb-8 italic text-lg">"The Taste of Home, Delivered to You."</p>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-white font-serif border-b border-amber-900 pb-3">Navigation</h4>
              <ul className="space-y-4 text-amber-200 font-medium">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => navigateTo('menu', 'all')} className="hover:text-white transition">Menu</button></li>
                <li><button onClick={() => navigateTo('menu', 'tiffins')} className="hover:text-white transition">Tiffins</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-white font-serif border-b border-amber-900 pb-3">Support</h4>
              <ul className="space-y-4 text-amber-200 font-medium">
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition">Contact Us</button></li>
                <li><button onClick={() => navigateTo('faqs')} className="hover:text-white transition">FAQs</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-white font-serif border-b border-amber-900 pb-3">Contact</h4>
              <ul className="space-y-4 text-amber-200 font-medium">
                <li className="flex items-start"><Phone size={20} className="mt-1 mr-3 text-primary flex-shrink-0" /> +91 8179157002</li>
                <li className="flex items-start"><Mail size={20} className="mt-1 mr-3 text-primary flex-shrink-0" /> manavantillu5@gmail.com</li>
                <li className="flex items-start"><MapPin size={20} className="mt-1 mr-3 text-primary flex-shrink-0" /> Husnabad, Dist: Siddipet</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-900 pt-8 text-center text-amber-500 font-medium">
            <p>&copy; 2026 Mana Vantillu. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918179157002" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-10 right-4 md:right-10 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform duration-300 ring-4 ring-green-100"
        title="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 md:bottom-28 right-4 md:right-10 bg-dark text-white px-6 py-4 rounded-xl shadow-2xl flex items-center z-50 animate-in slide-in-from-bottom duration-300 font-bold">
          <CheckCircle className="text-green-400 mr-3" size={24} />
          {toastMessage}
        </div>
      )}
    </div>
  );
}
