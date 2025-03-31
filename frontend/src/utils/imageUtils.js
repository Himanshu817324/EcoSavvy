// Unsplash image URLs for different product categories
const productImages = {
  'Home & Kitchen': {
    'Eco-Friendly Water Bottle': 'https://images.unsplash.com/photo-1622483767028-3f908a1f3a1a?w=500&q=80',
    'Bamboo Cutting Board': 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80',
    'Organic Cotton Towels': 'https://images.unsplash.com/photo-1620627457920-dfef4ae1b8a5?w=500&q=80'
  },
  'Personal Care': {
    'Bamboo Toothbrush Set': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80',
    'Natural Soap Bar': 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&q=80',
    'Organic Face Cream': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80'
  },
  'Stationery': {
    'Recycled Paper Notebook': 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&q=80',
    'Bamboo Pen Set': 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&q=80',
    'Eco-Friendly Sticky Notes': 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&q=80'
  },
  'Fashion': {
    'Organic Cotton T-Shirt': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    'Recycled Denim Jeans': 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80',
    'Bamboo Socks': 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80'
  }
};

// Fallback image URL
const fallbackImage = 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&q=80';

// Function to get product image URL
export const getProductImage = (category, name) => {
  try {
    return productImages[category]?.[name] || fallbackImage;
  } catch (error) {
    console.error('Error getting product image:', error);
    return fallbackImage;
  }
};

// Function to check if an image exists
export const checkImageExists = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// Function to get a random image from a category
export const getRandomCategoryImage = (category) => {
  const categoryImages = Object.values(productImages[category] || {});
  if (categoryImages.length === 0) return fallbackImage;
  return categoryImages[Math.floor(Math.random() * categoryImages.length)];
}; 