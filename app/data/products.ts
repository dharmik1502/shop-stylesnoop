// Dry fruit catalogue. Edit freely; nothing regenerates this file automatically.
export type Product = {
  id: number;
  slug: string;
  title: string;
  price: number;
  /** Optional list price (MRP). When omitted, getMrp() derives one from the price. */
  mrp?: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string[];
  similar: number[];
  category: string;
  offers: number;
  freeDelivery: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "california-almonds-500g",
    title: "California Almonds – Premium Whole Badam, Raw & Unsalted, 500 g",
    price: 179,
    mrp: 249,
    rating: 4.5,
    reviews: 2841,
    images: ["/images/products/1-1.webp", "/images/products/1-2.webp"],
    description: [
      "Our California almonds are large, evenly sized whole kernels with a smooth golden-brown skin and a clean, naturally sweet crunch. They are sorted to remove broken and shrivelled pieces, so every handful looks and tastes premium.",
      "Almonds are a good source of plant protein, dietary fibre, vitamin E and magnesium. Many families soak 6–8 almonds overnight, peel them and eat them first thing in the morning, a habit that makes them softer and easier to digest.",
      "Use them in badam milk, kheer, halwa, smoothies, granola and salads, roast them with a pinch of salt for a quick snack, or blend them into almond butter.",
      "Packed in a food-grade, airtight zip-lock pouch to keep the crunch locked in. After opening, store in a cool, dry place or refrigerate in summer.",
      "Pack size: 500 g · Variety: California, Non-Pareil · Type: Raw, unsalted, whole · Shelf life: 9 months from packing · Country of origin: USA.",
    ],
    similar: [2, 4, 3, 22],
    category: "nuts",
    offers: 3,
    freeDelivery: true,
  },
  {
    id: 2,
    slug: "whole-cashews-w320-500g",
    title: "Whole Cashews W320 – Premium Kaju, Plain & Unsalted, 500 g",
    price: 189,
    mrp: 259,
    rating: 4.6,
    reviews: 2210,
    images: ["/images/products/2-1.webp", "/images/products/2-2.webp"],
    description: [
      "W320 is the most popular grade of whole cashew: about 320 kernels per pound, creamy white, plump and perfectly curved. Our kaju are sourced from Goa and Kerala processors and hand-sorted to keep out splits and pieces.",
      "They have a buttery, mildly sweet taste and a satisfying bite. Cashews provide healthy fats, protein, copper, magnesium and zinc, making them a filling snack between meals.",
      "Toss them into pulao, biryani, shahi paneer and korma, grind them into a rich cashew paste for gravies, or roast them in a little ghee with salt and pepper for an evening snack.",
      "Packed fresh in an airtight resealable pouch. Keep in a cool, dry place away from sunlight; refrigerate after opening in humid weather.",
      "Pack size: 500 g · Grade: W320 whole · Type: Plain, unsalted · Shelf life: 9 months from packing · Country of origin: India.",
    ],
    similar: [1, 3, 23, 21],
    category: "nuts",
    offers: 3,
    freeDelivery: true,
  },
  {
    id: 3,
    slug: "roasted-salted-pistachios-250g",
    title: "Roasted & Salted Pistachios – Iranian Pista in Shell, 250 g",
    price: 159,
    mrp: 219,
    rating: 4.4,
    reviews: 1532,
    images: ["/images/products/3-1.webp", "/images/products/3-2.webp"],
    description: [
      "Big, naturally opened Iranian pistachios, slow-roasted and lightly salted for a moreish snack. The shells split open easily, and the green kernels inside are crunchy with a rich, nutty flavour.",
      "Pistachios are one of the lower-calorie nuts and contain protein, fibre, vitamin B6 and antioxidants such as lutein. Cracking the shells slows you down, which makes them a smart snack for mindful eating.",
      "Enjoy them straight from the pack, or shell and chop them for kulfi, barfi, phirni, baklava and ice cream toppings.",
      "Packed in an airtight zip-lock pouch to keep them crisp. Reseal after every use.",
      "Pack size: 250 g · Type: Roasted, salted, in shell · Shelf life: 6 months from packing · Country of origin: Iran.",
    ],
    similar: [1, 2, 5, 22],
    category: "nuts",
    offers: 2,
    freeDelivery: true,
  },
  {
    id: 4,
    slug: "walnut-kernels-250g",
    title: "Walnut Kernels – Light Halves (Akhrot Giri), 250 g",
    price: 149,
    mrp: 209,
    rating: 4.3,
    reviews: 1186,
    images: ["/images/products/4-1.webp", "/images/products/4-2.webp"],
    description: [
      "Light-coloured walnut halves and large pieces with a mild, buttery flavour and none of the bitterness of old stock. They are freshly shelled and sorted so you get clean kernels, ready to eat.",
      "Walnuts are well known for their plant-based omega-3 fatty acid (ALA), along with polyphenols, protein and fibre. A small handful a day is an easy addition to a balanced diet.",
      "Add them to oats, salads, brownies, banana bread and walnut fudge, or eat them with a couple of dates for a quick energy boost.",
      "Because walnuts are rich in natural oils, refrigerate the pouch after opening to keep them fresh for longer.",
      "Pack size: 250 g · Grade: Light halves · Shelf life: 6 months from packing · Country of origin: Chile.",
    ],
    similar: [1, 5, 7, 21],
    category: "nuts",
    offers: 2,
    freeDelivery: true,
  },
  {
    id: 5,
    slug: "hazelnuts-200g",
    title: "Turkish Hazelnuts – Whole Shelled Kernels, Raw, 200 g",
    price: 159,
    mrp: 219,
    rating: 4.4,
    reviews: 486,
    images: ["/images/products/5-1.webp", "/images/products/5-2.webp"],
    description: [
      "Plump, round hazelnuts from the Black Sea coast of Turkey, the world's biggest hazelnut-growing region. Each kernel has a thin brown skin and a sweet, toasty flavour that deepens when roasted.",
      "Hazelnuts contain healthy monounsaturated fats, vitamin E, manganese and fibre.",
      "Roast them for 10 minutes at 170 °C and rub off the skins to bring out their aroma. They are perfect for homemade chocolate spread, praline, cakes, cookies and coffee.",
      "Store in an airtight container in a cool, dry place.",
      "Pack size: 200 g · Type: Raw, whole, shelled · Shelf life: 9 months from packing · Country of origin: Turkey.",
    ],
    similar: [4, 6, 7, 8],
    category: "nuts",
    offers: 1,
    freeDelivery: true,
  },
  {
    id: 6,
    slug: "macadamia-nuts-250g",
    title: "Macadamia Nuts – Pre-Cracked in Shell, 250 g",
    price: 169,
    mrp: 239,
    rating: 4.2,
    reviews: 312,
    images: ["/images/products/6-1.webp", "/images/products/6-2.webp"],
    description: [
      "Macadamias are often called the most luxurious nut in the world, prized for their creamy, buttery taste. These come in the shell with a ready-made slit, so they are easy to open with the opener key included in the pack.",
      "They are rich in monounsaturated fats, along with thiamine, manganese and fibre.",
      "Eat them as they are, chop them into white-chocolate cookies, or add them to salads and stir-fries for a rich crunch.",
      "Keep the pack sealed in a cool, dry place. Opened kernels are best eaten within a few weeks.",
      "Pack size: 250 g (in shell) · Type: Natural, pre-cracked · Shelf life: 9 months from packing · Country of origin: Australia.",
    ],
    similar: [5, 7, 8, 9],
    category: "nuts",
    offers: 1,
    freeDelivery: true,
  },
  {
    id: 7,
    slug: "pecan-halves-200g",
    title: "Pecan Halves – Premium Shelled Pecans, Raw, 200 g",
    price: 179,
    mrp: 249,
    rating: 4.3,
    reviews: 274,
    images: ["/images/products/7-1.webp", "/images/products/7-2.webp"],
    description: [
      "Large, unbroken pecan halves with a deep amber colour and a sweet, maple-like flavour. Softer than walnuts and never bitter, they are a favourite for baking and snacking.",
      "Pecans contain healthy fats, fibre, zinc and antioxidants.",
      "Use them in pecan pie, brownies, granola and salads, or candy them with a little jaggery and cinnamon.",
      "Refrigerate after opening to keep the natural oils fresh.",
      "Pack size: 200 g · Type: Raw halves · Shelf life: 6 months from packing · Country of origin: USA.",
    ],
    similar: [4, 6, 8, 5],
    category: "nuts",
    offers: 1,
    freeDelivery: true,
  },
  {
    id: 8,
    slug: "brazil-nuts-200g",
    title: "Brazil Nuts – Whole Shelled Kernels, Raw, 200 g",
    price: 169,
    mrp: 239,
    rating: 4.2,
    reviews: 198,
    images: ["/images/products/8-1.webp"],
    description: [
      "Big, creamy Brazil nuts harvested from wild trees in the Amazon rainforest. They have a rich, smooth texture and a mild, earthy flavour.",
      "Brazil nuts are one of the richest natural sources of selenium, so just one or two a day is plenty for most adults.",
      "Snack on them as they are, chop them into trail mix and muesli, or blend them into a creamy plant-based milk.",
      "Store in an airtight container in a cool, dry place and refrigerate after opening.",
      "Pack size: 200 g · Type: Raw, whole · Shelf life: 6 months from packing · Country of origin: Bolivia.",
    ],
    similar: [6, 7, 5, 9],
    category: "nuts",
    offers: 1,
    freeDelivery: true,
  },
  {
    id: 9,
    slug: "pine-nuts-100g",
    title: "Pine Nuts – Shelled Kernels, Raw, 100 g",
    price: 189,
    mrp: 259,
    rating: 4.1,
    reviews: 156,
    images: ["/images/products/9-1.webp", "/images/products/9-2.webp"],
    description: [
      "Soft, ivory pine nut kernels with a delicate, resinous sweetness. They are already shelled, so they are ready to use straight from the pack.",
      "Pine nuts provide healthy fats, protein, vitamin E and magnesium.",
      "Toast them lightly in a dry pan and sprinkle them over salads and pasta, blend them into fresh basil pesto, or add them to pulao and desserts.",
      "Pine nuts are delicate, so keep the pack refrigerated after opening.",
      "Pack size: 100 g · Type: Raw, shelled · Shelf life: 6 months from packing · Country of origin: China.",
    ],
    similar: [5, 6, 7, 1],
    category: "nuts",
    offers: 1,
    freeDelivery: true,
  },
  {
    id: 10,
    slug: "medjool-dates-500g",
    title: "Medjool Dates – Jumbo Soft Khajur, 500 g",
    price: 199,
    mrp: 279,
    rating: 4.7,
    reviews: 1678,
    images: ["/images/products/10-1.webp", "/images/products/10-2.webp", "/images/products/10-3.webp"],
    description: [
      "Known as the king of dates, Medjool dates are large, soft and juicy, with a rich caramel and honey taste. Ours are jumbo-grade fruit with a thin, wrinkled skin and a moist, fudgy inside.",
      "Dates are naturally sweet and contain fibre, potassium, magnesium and iron. They are a popular choice for breaking fasts and for a quick pre-workout boost.",
      "Stuff them with almonds, walnuts or peanut butter, blend them into smoothies and date shakes, or use them as a natural sweetener in laddoos and energy balls.",
      "Contains pits. Store in the refrigerator to keep them soft and fresh for longer.",
      "Pack size: 500 g · Grade: Jumbo · Type: Natural, with seed, no added sugar · Shelf life: 9 months from packing · Country of origin: Jordan.",
    ],
    similar: [11, 13, 14, 22],
    category: "dates-raisins",
    offers: 3,
    freeDelivery: true,
  },
  {
    id: 11,
    slug: "afghan-anjeer-250g",
    title: "Afghan Anjeer – Premium Dried Figs, 250 g",
    price: 169,
    mrp: 239,
    rating: 4.4,
    reviews: 1063,
    images: ["/images/products/11-1.webp", "/images/products/11-2.webp"],
    description: [
      "Soft, sun-dried figs with a honey-like sweetness and a pleasant crunch from the tiny seeds inside. Our anjeer are thick, meaty and carefully selected for colour and size.",
      "Figs are a good source of dietary fibre, calcium and potassium. Soaking 2 figs in water overnight and eating them in the morning is a common traditional habit.",
      "Enjoy them as a snack, chop them into oats and yoghurt, or make anjeer barfi, anjeer milkshake and sugar-free sweets.",
      "Refrigerate after opening, especially in hot and humid weather.",
      "Pack size: 250 g · Type: Natural, sun-dried · Shelf life: 6 months from packing · Country of origin: Afghanistan.",
    ],
    similar: [10, 12, 17, 16],
    category: "dried-fruits",
    offers: 2,
    freeDelivery: true,
  },
  {
    id: 12,
    slug: "turkish-dried-apricots-250g",
    title: "Turkish Dried Apricots – Seedless Khubani, 250 g",
    price: 119,
    mrp: 169,
    rating: 4.3,
    reviews: 742,
    images: ["/images/products/12-1.webp", "/images/products/12-2.webp"],
    description: [
      "Bright, plump, seedless apricots from Malatya in Turkey, the apricot capital of the world. They are soft and chewy, with a sweet-tangy flavour.",
      "Dried apricots are a source of fibre, potassium, iron and beta-carotene.",
      "Snack on them straight from the pack, dice them into couscous, salads and muesli, or cook them into khubani ka meetha, the classic Hyderabadi dessert.",
      "Reseal the pouch after every use and store in a cool, dry place.",
      "Pack size: 250 g · Type: Seedless, soft-dried · Shelf life: 9 months from packing · Country of origin: Turkey.",
    ],
    similar: [11, 16, 17, 10],
    category: "dried-fruits",
    offers: 2,
    freeDelivery: true,
  },
  {
    id: 13,
    slug: "green-kishmish-500g",
    title: "Indian Green Kishmish – Long Seedless Raisins, 500 g",
    price: 99,
    mrp: 139,
    rating: 4.4,
    reviews: 1914,
    images: ["/images/products/13-1.webp"],
    description: [
      "Long, slender green raisins from the vineyards of Nashik and Sangli. They are naturally shade-dried, so they keep their light green-golden colour and a fresh, sweet-sour flavour.",
      "Raisins give you natural sugars for quick energy, along with fibre, iron and potassium.",
      "Kishmish is a must for sheera, kheer, halwa, pulao, biryani and fruit cake. Soak a few in water overnight for a traditional morning snack.",
      "Store in an airtight container in a cool, dry place.",
      "Pack size: 500 g · Type: Seedless, shade-dried · Shelf life: 9 months from packing · Country of origin: India.",
    ],
    similar: [14, 15, 10, 22],
    category: "dates-raisins",
    offers: 2,
    freeDelivery: true,
  },
  {
    id: 14,
    slug: "black-raisins-seedless-250g",
    title: "Black Raisins – Seedless Kali Kishmish, 250 g",
    price: 69,
    mrp: 99,
    rating: 4.3,
    reviews: 875,
    images: ["/images/products/14-1.webp", "/images/products/14-2.webp"],
    description: [
      "Juicy, seedless black raisins with a deep, rich sweetness. They are dried from dark grapes and naturally have a soft, chewy bite.",
      "Black raisins contain iron, potassium, fibre and antioxidants. Many people soak 8–10 overnight and eat them on an empty stomach in the morning.",
      "Add them to oats, salads, cakes and cookies, or blend them into chutneys for a natural sweetness.",
      "Keep the pouch sealed and store in a cool, dry place.",
      "Pack size: 250 g · Type: Seedless · Shelf life: 9 months from packing · Country of origin: India.",
    ],
    similar: [13, 15, 10, 16],
    category: "dates-raisins",
    offers: 1,
    freeDelivery: true,
  },
  {
    id: 15,
    slug: "mixed-raisins-500g",
    title: "Mixed Raisins – Golden & Brown Kishmish, 500 g",
    price: 109,
    mrp: 149,
    rating: 4.2,
    reviews: 523,
    images: ["/images/products/15-1.webp", "/images/products/15-2.webp"],
    description: [
      "A colourful mix of golden, amber and brown raisins in one pack, each with its own flavour, from honey-sweet to tangy.",
      "Raisins are a natural source of quick energy, fibre and potassium.",
      "A great all-rounder for baking, trail mixes, cereals, desserts and festive cooking.",
      "Store in an airtight container in a cool, dry place.",
      "Pack size: 500 g · Type: Seedless, mixed varieties · Shelf life: 9 months from packing.",
    ],
    similar: [13, 14, 16, 21],
    category: "dates-raisins",
    offers: 1,
    freeDelivery: true,
  },
  {
    id: 16,
    slug: "dried-cranberries-200g",
    title: "Dried Cranberries – Sweetened & Sliced, 200 g",
    price: 119,
    mrp: 169,
    rating: 4.3,
    reviews: 691,
    images: ["/images/products/16-1.webp", "/images/products/16-2.webp"],
    description: [
      "Ruby-red cranberries, lightly infused with cane sugar and gently dried, so they are soft and chewy with a perfect sweet-tart balance.",
      "Cranberries are known for their antioxidants, especially proanthocyanidins.",
      "Toss them into salads, oats, granola bars, muffins and cookies, or mix them with nuts for a colourful trail mix.",
      "Reseal after use and store in a cool, dry place.",
      "Pack size: 200 g · Type: Sliced, sweetened with cane sugar · Shelf life: 9 months from packing · Country of origin: USA.",
    ],
    similar: [12, 17, 14, 21],
    category: "dried-fruits",
    offers: 1,
    freeDelivery: true,
  },
  {
    id: 17,
    slug: "pitted-prunes-250g",
    title: "Pitted Prunes – Soft Dried Plums, 250 g",
    price: 139,
    mrp: 189,
    rating: 4.2,
    reviews: 364,
    images: ["/images/products/17-1.webp"],
    description: [
      "Soft, juicy dried plums with the stones removed, with a deep, jammy sweetness.",
      "Prunes are well known for supporting digestion thanks to their fibre and natural sorbitol. They also provide potassium and vitamin K.",
      "Eat 3–4 prunes a day as a snack, chop them into porridge and yoghurt, or bake them into cakes and breads.",
      "Refrigerate after opening to keep them soft.",
      "Pack size: 250 g · Type: Pitted, no added sugar · Shelf life: 9 months from packing · Country of origin: Chile.",
    ],
    similar: [11, 12, 16, 10],
    category: "dried-fruits",
    offers: 1,
    freeDelivery: true,
  },
  {
    id: 18,
    slug: "phool-makhana-200g",
    title: "Phool Makhana – Jumbo Fox Nuts (Lotus Seeds), 200 g",
    price: 119,
    mrp: 169,
    rating: 4.5,
    reviews: 1342,
    images: ["/images/products/18-1.webp", "/images/products/18-2.webp"],
    description: [
      "Big, crunchy, snow-white makhana popped from the seeds of the Euryale ferox water lily, grown in the ponds of Mithila, Bihar. Our jumbo grade is hand-picked for size, with very few broken pieces.",
      "Makhana is light, low in fat and gluten-free, with protein, fibre, magnesium and potassium. It is a favourite fasting (vrat) food and a guilt-free alternative to chips.",
      "Roast it in a little ghee with salt, pepper or peri-peri, or cook it into makhana kheer and makhana curry.",
      "Keep the pouch tightly sealed so the makhana stays crisp. If it softens, dry-roast it for 3–4 minutes.",
      "Pack size: 200 g · Grade: Jumbo · Type: Plain, unroasted · Shelf life: 6 months from packing · Country of origin: India.",
    ],
    similar: [19, 20, 1, 21],
    category: "seeds-makhana",
    offers: 2,
    freeDelivery: true,
  },
  {
    id: 19,
    slug: "pumpkin-seeds-250g",
    title: "Pumpkin Seeds – Whole In-Shell, Lightly Roasted, 250 g",
    price: 89,
    mrp: 119,
    rating: 4.3,
    reviews: 812,
    images: ["/images/products/19-1.webp", "/images/products/19-2.webp"],
    description: [
      "Whole pumpkin seeds in their cream-coloured shells, lightly roasted for a mild, nutty taste and a satisfying crunch. Crack them open like sunflower seeds, or eat them shell and all for extra fibre.",
      "Pumpkin seeds are a rich plant source of protein, magnesium, zinc and iron.",
      "Enjoy them as a crunchy tea-time snack, toss them in a pan with a pinch of salt and chilli, or shell them and sprinkle the green kernels over salads, soups and oats.",
      "Store in an airtight container in a cool, dry place.",
      "Pack size: 250 g · Type: Whole, in shell, lightly roasted, unsalted · Shelf life: 6 months from packing.",
    ],
    similar: [20, 18, 4, 1],
    category: "seeds-makhana",
    offers: 1,
    freeDelivery: true,
  },
  {
    id: 20,
    slug: "chia-seeds-250g",
    title: "Chia Seeds – Raw, 250 g",
    price: 79,
    mrp: 109,
    rating: 4.4,
    reviews: 1097,
    images: ["/images/products/20-1.webp", "/images/products/20-2.webp"],
    description: [
      "Tiny, nutrient-dense chia seeds that swell up to ten times their size in liquid and form a smooth gel.",
      "Chia seeds are a good source of fibre, plant-based omega-3 (ALA), protein and calcium.",
      "Soak 1–2 tablespoons in milk or water for 20 minutes to make chia pudding, stir them into lemonade, smoothies and overnight oats, or use them as an egg substitute in baking.",
      "Store in an airtight container in a cool, dry place.",
      "Pack size: 250 g · Type: Raw · Shelf life: 12 months from packing · Country of origin: Mexico.",
    ],
    similar: [19, 18, 16, 1],
    category: "seeds-makhana",
    offers: 1,
    freeDelivery: true,
  },
  {
    id: 21,
    slug: "mixed-dry-fruits-500g",
    title: "Mixed Dry Fruits – Nuts & Berries Trail Mix, 500 g",
    price: 189,
    mrp: 259,
    rating: 4.4,
    reviews: 968,
    images: ["/images/products/21-1.webp"],
    description: [
      "A ready-to-eat mix of almonds, cashews, walnuts, pistachios, raisins, apricots and cranberries, so you get a little of everything in every handful.",
      "It is a balanced mix of protein, healthy fats, fibre and natural sugars that keeps you full for longer.",
      "Keep a jar on your desk, take it on trips, add it to breakfast bowls, or serve it to guests at festivals.",
      "Reseal after use and store in a cool, dry place.",
      "Pack size: 500 g · Contains: Almonds, cashews, walnuts, pistachios, raisins, apricots, cranberries · Shelf life: 6 months from packing.",
    ],
    similar: [22, 23, 1, 2],
    category: "gift-boxes",
    offers: 2,
    freeDelivery: true,
  },
  {
    id: 22,
    slug: "festive-dry-fruit-gift-box",
    title: "Festive Dry Fruit Gift Box – Almonds, Cashews, Pistachios & Raisins, 800 g",
    price: 199,
    mrp: 279,
    rating: 4.6,
    reviews: 742,
    images: ["/images/products/22-1.webp"],
    description: [
      "A premium four-in-one gift box with 200 g each of California almonds, W320 cashews, roasted salted pistachios and green kishmish, packed in separate sealed pouches inside a sturdy gift box.",
      "Ideal for Diwali, Raksha Bandhan, weddings, housewarmings and corporate gifting. Each pouch can be opened separately, so the rest stays fresh.",
      "Bulk and corporate orders with custom messages are available on request. Email us with your quantity and delivery city.",
      "Store in a cool, dry place away from sunlight.",
      "Net weight: 800 g (4 × 200 g) · Contains: Almonds, cashews, pistachios, raisins · Shelf life: 6 months from packing.",
    ],
    similar: [23, 21, 1, 2],
    category: "gift-boxes",
    offers: 3,
    freeDelivery: true,
  },
  {
    id: 23,
    slug: "almond-cashew-combo-1kg",
    title: "Almond & Cashew Combo – California Almonds 500 g + Cashews W320 500 g",
    price: 199,
    mrp: 279,
    rating: 4.5,
    reviews: 1124,
    images: ["/images/products/23-1.webp"],
    description: [
      "Our two best sellers in one value pack: 500 g of California almonds and 500 g of whole W320 cashews, each in its own airtight zip-lock pouch.",
      "A smart buy for families who use both every day in cooking, sweets and snacking, and it costs less than buying them separately.",
      "Both are plain, unsalted and ready to eat or cook with.",
      "Store in a cool, dry place and refrigerate after opening in hot weather.",
      "Net weight: 1 kg (2 × 500 g) · Shelf life: 9 months from packing.",
    ],
    similar: [1, 2, 22, 21],
    category: "gift-boxes",
    offers: 3,
    freeDelivery: true,
  },
];

/** Products shown on the home page, in order. */
export const FEATURED_IDS: number[] = [1, 2, 10, 3, 18, 4, 11, 22, 13, 12, 21, 23, 14, 20, 16, 5, 19, 17, 15, 6, 7, 9, 8];

export const PRODUCTS_BY_ID = new Map(PRODUCTS.map((p) => [p.id, p]));

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeatured(): Product[] {
  return FEATURED_IDS.map((id) => PRODUCTS_BY_ID.get(id)).filter((p): p is Product => Boolean(p));
}

export function getByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getSimilar(product: Product, limit = 8): Product[] {
  const picked = product.similar.map((id) => PRODUCTS_BY_ID.get(id)).filter((p): p is Product => Boolean(p));
  if (picked.length < limit) {
    for (const p of getByCategory(product.category)) {
      if (picked.length >= limit) break;
      if (p.id !== product.id && !picked.includes(p)) picked.push(p);
    }
  }
  return picked.slice(0, limit);
}

export function formatPrice(price: number, decimals = 2): string {
  return `₹${price.toFixed(decimals)}`;
}

/**
 * List price (MRP) shown struck through next to the selling price.
 * Uses the explicit `mrp` when a product has one; otherwise derives a stable
 * value from the id so every product shows a 60–80% discount. The selling
 * `price` is never changed by this.
 */
export function getMrp(product: Product): number {
  if (product.mrp && product.mrp > product.price) return product.mrp;
  const discounts = [60, 65, 70, 75, 80];
  const pct = discounts[product.id % discounts.length];
  const raw = product.price / (1 - pct / 100);
  // Round to a "shop" price ending in 9 (e.g. 1,999) and keep it above the selling price.
  const rounded = Math.round(raw / 10) * 10 - 1;
  return Math.max(rounded, product.price + 10);
}

/** Whole-number percentage off between the MRP and the selling price. */
export function getDiscountPercent(product: Product): number {
  const mrp = getMrp(product);
  return Math.round(((mrp - product.price) / mrp) * 100);
}
