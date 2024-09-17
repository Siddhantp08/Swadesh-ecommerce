import incenseSticksImage from '../images/incense_sticks.jpg'
import brassDiyaImage from '../images/brass_diya.jpg'

const Products = {
  "Puja Materials": [
    {
      "id": 1,
      "name": "Sandalwood Incense Sticks",
      "description": "Natural sandalwood incense sticks for puja and meditation.",
      "price": 449.25,
      "image": incenseSticksImage,
      "category": "Puja Materials",
      "rating": 5,
      "stock": 50
    },
    {
      "id": 3,
      "name": "Brass Diya (Oil Lamp)",
      "description": "Handcrafted brass diya for traditional rituals and festivals.",
      "price": 974.25,
      "image": brassDiyaImage,
      "category": "Puja Materials",
      "rating": 5,
      "stock": 30
    },
    {
      "id": 4,
      "name": "Handmade Clay Idols (Ganesh & Lakshmi)",
      "description": "Beautifully crafted Ganesh and Lakshmi clay idols for puja and home decor.",
      "price": 2249.25,
      "image": "",
      "category": "Puja Materials",
      "rating": 4,
      "stock": 15
    },
    {
      "id": 6,
      "name": "Rudraksha Mala",
      "description": "Sacred Rudraksha mala with 108 beads, ideal for meditation and spiritual use.",
      "price": 1874.25,
      "image": "./images/rudraksha_mala.jpg",
      "category": "Puja Materials",
      "rating": 4,
      "stock": 40
    },
    {
      "id": 7,
      "name": "Puja Thali Set",
      "description": "Complete puja thali set with brass utensils for performing religious rituals.",
      "price": 1499.25,
      "image": "./images/puja_thali.jpg",
      "category": "Puja Materials",
      "rating": 4,
      "stock": 25
    },
    {
      "id": 9,
      "name": "Turmeric Powder (Organic)",
      "description": "Pure organic turmeric powder used in cooking and religious rituals.",
      "price": 674.25,
      "image": "./images/turmeric_powder.png",
      "category": "Puja Materials",
      "rating": 5,
      "stock": 100
    },
    {
      "id": 10,
      "name": "Handcrafted Wooden Krishna Idol",
      "description": "Intricately designed wooden Krishna idol for worship and home decor.",
      "price": 3749.25,
      "image": "./images/krishna_idol.jpg",
      "category": "Puja Materials",
      "rating": 5,
      "stock": 5
    },
    {
      "id": 18,
      "name": "Kumkum (Vermilion Powder)",
      "description": "High-quality vermilion powder used in religious rituals and weddings.",
      "price": 374.25,
      "image": "./images/Kumkum.webp",
      "category": "Puja Materials",
      "rating": 5,
      "stock": 150
    },
    {
      "id": 19,
      "name": "Organic Ghee",
      "description": "Pure organic ghee used for cooking and religious purposes.",
      "price": 1874.25,
      "image": "./images/organic_ghee.webp",
      "category": "Puja Materials",
      "rating": 5,
      "stock": 50
    }
  ],
  "Ethnic Clothing": [
    {
      "id": 2,
      "name": "Ethnic Silk Saree",
      "description": "Handwoven silk saree perfect for traditional occasions and festivals.",
      "price": 5999.25,
      "image": "",
      "category": "Ethnic Clothing",
      "rating": 4,
      "stock": 20
    },
    {
      "id": 5,
      "name": "Traditional Kanjeevaram Saree",
      "description": "Authentic Kanjeevaram saree with intricate gold thread work.",
      "price": 11249.25,
      "image": "",
      "category": "Ethnic Clothing",
      "rating": 5,
      "stock": 10
    },
    {
      "id": 8,
      "name": "Handwoven Dhoti",
      "description": "Traditional white cotton dhoti worn during religious ceremonies.",
      "price": 1949.25,
      "image": "https://example.com/dhoti.jpg",
      "category": "Ethnic Clothing",
      "rating": 4,
      "stock": 35
    },
    {
      "id": 11,
      "name": "Organic Cotton Kurta",
      "description": "Eco-friendly handwoven cotton kurta perfect for festivals and everyday wear.",
      "price": 2699.25,
      "image": "",
      "category": "Ethnic Clothing",
      "rating": 4,
      "stock": 50
    },
    {
      "id": 12,
      "name": "Pashmina Shawl",
      "description": "Luxurious Pashmina shawl handwoven in Kashmir, perfect for winter ceremonies.",
      "price": 14999.25,
      "image": "./images/pashmina_shawl.jpg",
      "category": "Ethnic Clothing",
      "rating": 5,
      "stock": 10
    },
    {
      "id": 13,
      "name": "Handwoven Cotton Dupatta",
      "description": "Beautiful handwoven cotton dupatta for traditional wear.",
      "price": 1199.25,
      "image": "./images/Cotton_Dupatta.jpg",
      "category": "Ethnic Clothing",
      "rating": 4,
      "stock": 30
    }
  ],
  "Home Decor": [
    {
      "id": 14,
      "name": "Tanjore Painting",
      "description": "Traditional Tanjore painting of Hindu deities on wood, decorated with gold foil.",
      "price": 22499.25,
      "image": "./images/Tanjore_Painting.webp",
      "category": "Home Decor",
      "rating": 5,
      "stock": 8
    },
    {
      "id": 15,
      "name": "Handloom Wall Hanging",
      "description": "Handwoven wall hanging depicting Indian folk art.",
      "price": 4499.25,
      "image": "./images/Wall_Hanging.webp",
      "category": "Home Decor",
      "rating": 4,
      "stock": 12
    },
    {
      "id": 16,
      "name": "Brass Urli",
      "description": "Traditional brass urli used for home decor and puja.",
      "price": 7499.25,
      "image": "./images/brass_urli.webp",
      "category": "Home Decor",
      "rating": 5,
      "stock": 20
    },
    {
      "id": 17,
      "name": "Hand-painted Terracotta Pots",
      "description": "Beautiful terracotta pots with hand-painted Indian folk designs.",
      "price": 1499.25,
      "image": "./images/terracotta_pots.webp",
      "category": "Home Decor",
      "rating": 4,
      "stock": 25
    },
    {
      "id": 31,
      "name": "Embroidered Cushion Covers",
      "description": "Traditional hand-embroidered cushion covers with intricate Indian designs.",
      "price": 2624.25,
      "image": "./images/Cushion_Covers.webp",
      "category": "Home Decor",
      "rating": 5,
      "stock": 10
    }
  ],
  "Health & Wellness": [
    {
      "id": 20,
      "name": "Ayurvedic Herbal Soap",
      "description": "Handmade herbal soap made from pure ayurvedic ingredients.",
      "price": 524.25,
      "image": "./images/Herbal_Soap.webp",
      "category": "Health & Wellness",
      "rating": 5,
      "stock": 100
    },
    {
      "id": 21,
      "name": "Natural Henna Powder",
      "description": "Organic henna powder for traditional body art and hair care.",
      "price": 749.25,
      "image": "./images/henna_powder.webp",
      "category": "Health & Wellness",
      "rating": 4,
      "stock": 80
    },
    {
      "id": 22,
      "name": "Tulsi Herbal Tea",
      "description": "Organic Tulsi tea, a traditional ayurvedic herbal infusion for wellness.",
      "price": 974.25,
      "image": "./images/tulsi_tea.webp",
      "category": "Health & Wellness",
      "rating": 5,
      "stock": 40
    },
    {
      "id": 23,
      "name": "Jasmine Essential Oil",
      "description": "Pure jasmine essential oil, ideal for aromatherapy and religious ceremonies.",
      "price": 2249.25,
      "image": "./images/jasmine_oil.webp",
      "category": "Health & Wellness",
      "rating": 5,
      "stock": 30
    },
    {
      "id": 24,
      "name": "Coconut Oil (Cold-Pressed)",
      "description": "Organic cold-pressed coconut oil for cooking and personal care.",
      "price": 1124.25,
      "image": "./images/coconut_oil.webp",
      "category": "Health & Wellness",
      "rating": 5,
      "stock": 50
    },
    {
      "id": 25,
      "name": "Herbal Face Mask (Multani Mitti)",
      "description": "Natural multani mitti face mask for glowing skin.",
      "price": 674.25,
      "image": "./images/Multani_Mitti.webp",
      "category": "Health & Wellness",
      "rating": 4,
      "stock": 60
    }
  ],
  "Handicrafts": [
    {
      "id": 26,
      "name": "Handmade Jute Bag",
      "description": "Eco-friendly handmade jute bag with Indian folk designs.",
      "price": 1874.25,
      "image": "./images/jute_bag.webp",
      "category": "Handicrafts",
      "rating": 5,
      "stock": 20
    },
    {
      "id": 27,
      "name": "Wooden Elephant Sculpture",
      "description": "Hand-carved wooden elephant sculpture, a symbol of strength and prosperity.",
      "price": 2999.25,
      "image": "./images/wooden_elephant.webp",
      "category": "Handicrafts",
      "rating": 5,
      "stock": 12
    },
    {
      "id": 28,
      "name": "Bamboo Wind Chimes",
      "description": "Handcrafted bamboo wind chimes with soothing sound, perfect for home decor.",
      "price": 1499.25,
      "image": "./images/Bamboo Wind Chimes.webp",
      "category": "Handicrafts",
      "rating": 4,
      "stock": 30
    },
    {
      "id": 29,
      "name": "Terracotta Jewelry Set",
      "description": "Beautiful terracotta jewelry set, hand-painted with intricate designs.",
      "price": 2249.25,
      "image": "./images/terracotta_jewelry.webp",
      "category": "Handicrafts",
      "rating": 5,
      "stock": 15
    },
    {
      "id": 30,
      "name": "Handwoven Bamboo Basket",
      "description": "Eco-friendly handwoven bamboo basket for storage and decor.",
      "price": 1124.25,
      "image": "",
      "category": "Handicrafts",
      "rating": 4,
      "stock": 25
    }
  ],
  "Sweets": [
    {
      "id": 32,
      "name": "Kaju Katli",
      "description": "Diamond-shaped cashew fudge with a delicate silver foil topping.",
      "price": 599.00,
      "image": "./images/kaju_katli.webp",
      "category": "Sweets",
      "rating": 5,
      "stock": 100
    },
    {
      "id": 33,
      "name": "Rasgulla",
      "description": "Soft, spongy cheese balls soaked in light sugar syrup.",
      "price": 449.00,
      "image": "./images/rasgulla.webp",
      "category": "Sweets",
      "rating": 4,
      "stock": 80
    },
    {
      "id": 34,
      "name": "Motichoor Ladoo",
      "description": "Tiny gram flour balls bound together with cardamom flavored sugar syrup.",
      "price": 499.00,
      "image": "./images/motichoor_ladoo.webp",
      "category": "Sweets",
      "rating": 5,
      "stock": 90
    },
    {
      "id": 35,
      "name": "Gulab Jamun",
      "description": "Deep-fried milk solid balls soaked in rose flavored sugar syrup.",
      "price": 399.00,
      "image": "./images/gulab_jamun.webp",
      "category": "Sweets",
      "rating": 5,
      "stock": 120
    },
    {
      "id": 36,
      "name": "Jalebi",
      "description": "Crispy, pretzel-shaped deep-fried batter soaked in saffron sugar syrup.",
      "price": 349.00,
      "image": "./images/jalebi.webp",
      "category": "Sweets",
      "rating": 4,
      "stock": 150
    }
  ]
};

export default Products;