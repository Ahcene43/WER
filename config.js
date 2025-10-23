 // config.js - ملف الإعدادات الرئيسي مع دعم التحديثات في الوقت الحقيقي

// =============================================================================
// 🎯 الإعدادات الافتراضية للمتجر
// =============================================================================

let STORE_CONFIG = {
    PRODUCTS: {
        16: {
            name: "مودال 1",
            price: 3700,
            image: "https://raw.githubusercontent.com/Ahcene43/WER/main/images/1761141877869-modal12.jpg",
            description: "فستان بمواصفات خيالية",
            availableSizes: ["S", "M"],
            availableColors: ["كما في الصورة", "بنفسجي"]
        },
        17: {
            name: "مودال 2",
            price: 8000,
            image: "https://raw.githubusercontent.com/Ahcene43/WER/main/images/1761144949105-modal1.jpg",
            description: "فستان الملكات الساحرات",
            availableSizes: ["S", "M", "L", "XL", "XXL", "S1"],
            availableColors: ["كما في الصورة", "أسود", "زهري"]
        }
    },
    
    DELIVERY_PRICES: {
        "01 - أدرار": { home: 1100, desk: 600 },
        "02 - الشلف": { home: 700, desk: 400 },
        "03 - الأغواط": { home: 900, desk: 500 },
        "04 - أم البواقي": { home: 650, desk: 400 },
        "05 - باتنة": { home: 700, desk: 400 },
        "06 - بجاية": { home: 700, desk: 400 },
        "07 - بسكرة": { home: 900, desk: 500 },
        "08 - بشار": { home: 1100, desk: 600 },
        "09 - البليدة": { home: 500, desk: 250 },
        "10 - البويرة": { home: 700, desk: 400 },
        "11 - تمنراست": { home: 1300, desk: 800 },
        "12 - تبسة": { home: 700, desk: 400 },
        "13 - تلمسان": { home: 800, desk: 400 },
        "14 - تيارت": { home: 800, desk: 400 },
        "15 - تيزي وزو": { home: 700, desk: 400 },
        "16 - الجزائر": { home: 500, desk: 250 },
        "17 - الجلفة": { home: 900, desk: 500 },
        "18 - جيجل": { home: 700, desk: 400 },
        "19 - سطيف": { home: 700, desk: 400 },
        "20 - سعيدة": { home: 800, desk: 400 },
        "21 - سكيكدة": { home: 600, desk: 400 },
        "22 - سيدي بلعباس": { home: 700, desk: 400 },
        "23 - عنابة": { home: 700, desk: 400 },
        "24 - قالمة": { home: 600, desk: 400 },
        "25 - قسنطينة": { home: 600, desk: 400 },
        "26 - المدية": { home: 700, desk: 400 },
        "27 - مستغانم": { home: 700, desk: 400 },
        "28 - المسيلة": { home: 800, desk: 400 },
        "29 - معسكر": { home: 700, desk: 400 },
        "30 - ورقلة": { home: 900, desk: 500 },
        "31 - وهران": { home: 800, desk: 400 },
        "32 - البيض": { home: 800, desk: 500 },
        "33 - إليزي": { home: 1300, desk: 600 },
        "34 - برج بوعريريج": { home: 700, desk: 400 },
        "35 - بومرداس": { home: 700, desk: 400 },
        "36 - الطارف": { home: 700, desk: 400 },
        "37 - تندوف": { home: 1300, desk: 600 },
        "38 - تيسمسيلت": { home: 800, desk: 400 },
        "39 - الوادي": { home: 900, desk: 500 },
        "40 - خنشلة": { home: 700, desk: 500 },
        "41 - سوق أهراس": { home: 700, desk: 400 },
        "42 - تيبازة": { home: 700, desk: 400 },
        "43 - ميلة": { home: 500, desk: 350 },
        "44 - عين الدفلى": { home: 700, desk: 400 },
        "45 - النعامة": { home: 800, desk: 500 },
        "46 - عين تموشنت": { home: 800, desk: 400 },
        "47 - غرداية": { home: 900, desk: 500 },
        "48 - غليزان": { home: 700, desk: 400 },
        "49 - تيميمون": { home: 1100, desk: 600 },
        "50 - برج باجي مختار": { home: 1200, desk: 650 },
        "51 - أولاد جلال": { home: 900, desk: 500 },
        "52 - بني عباس": { home: 1100, desk: 600 },
        "53 - عين صالح": { home: 1300, desk: 700 },
        "54 - عين قزام": { home: 1300, desk: 700 },
        "55 - توقرت": { home: 950, desk: 550 },
        "56 - جانت": { home: 1100, desk: 500 },
        "57 - المغير": { home: 950, desk: 550 },
        "58 - المنيعة": { home: 1000, desk: 600 }
    },
    
    DISCOUNTS: {
        minQuantityForDiscount: 3,
        discountPerItem: 300
    },
    
    STORE_INFO: {
        name: "RIHAB12-Shopp",
        tagline: "متجر أفخم الملابس",
        phoneNumbers: ["0671466489", "0551102155"]
    },
    
    AGE_SIZES: {
        "6": "S1",
        "7": "S", 
        "8": "M",
        "9": "L",
        "10": "XL",
        "11": "XXL",
        "12": "S4"
    },
    
    AVAILABLE_COLORS: [
        "كما في الصورة",
        "أبيض",
        "أسود", 
        "رمادي",
        "أزرق",
        "أحمر",
        "أخضر",
        "زهري",
        "بنفسجي"
    ],
    
    AVAILABLE_SIZES: ["S", "M", "L", "XL", "XXL", "S1"]
};

// =============================================================================
// 📍 قائمة الولايات الكاملة
// =============================================================================

const WILAYAS = [
    "01 - أدرار", "02 - الشلف", "03 - الأغواط", "04 - أم البواقي", "05 - باتنة",
    "06 - بجاية", "07 - بسكرة", "08 - بشار", "09 - البليدة", "10 - البويرة",
    "11 - تمنراست", "12 - تبسة", "13 - تلمسان", "14 - تيارت", "15 - تيزي وزو",
    "16 - الجزائر", "17 - الجلفة", "18 - جيجل", "19 - سطيف", "20 - سعيدة",
    "21 - سكيكدة", "22 - سيدي بلعباس", "23 - عنابة", "24 - قالمة", "25 - قسنطينة",
    "26 - المدية", "27 - مستغانم", "28 - المسيلة", "29 - معسكر", "30 - ورقلة",
    "31 - وهران", "32 - البيض", "33 - إليزي", "34 - برج بوعريريج", "35 - بومرداس",
    "36 - الطارف", "37 - تندوف", "38 - تيسمسيلت", "39 - الوادي", "40 - خنشلة",
    "41 - سوق أهراس", "42 - تيبازة", "43 - ميلة", "44 - عين الدفلى", "45 - النعامة",
    "46 - عين تموشنت", "47 - غرداية", "48 - غليزان", "49 - تيميمون", "50 - برج باجي مختار",
    "51 - أولاد جلال", "52 - بني عباس", "53 - عين صالح", "54 - عين قزام", "55 - توقرت",
    "56 - جانت", "57 - المغير", "58 - المنيعة"
];

// =============================================================================
// 🔄 نظام التحديثات في الوقت الحقيقي
// =============================================================================

/**
 * 🔄 تحميل الإعدادات من GitHub
 * @returns {Promise<boolean>} - نجاح العملية
 */
async function loadRemoteConfig() {
    try {
        const timestamp = new Date().getTime();
        const configUrl = `https://raw.githubusercontent.com/Ahcene43/WAW/main/config.js?t=${timestamp}`;
        
        console.log('🔄 جاري تحميل الإعدادات المحدثة من GitHub...');
        const response = await fetch(configUrl);
        
        if (response.ok) {
            const configContent = await response.text();
            
            // استخراج STORE_CONFIG من المحتوى باستخدام regex محسن
            const configMatch = configContent.match(/let STORE_CONFIG\s*=\s*({[\s\S]*?});/);
            if (configMatch && configMatch[1]) {
                try {
                    // تنظيف النص قبل التحليل
                    let configText = configMatch[1]
                        .replace(/(\w+):/g, '"$1":') // إضافة quotes للمفاتيح
                        .replace(/'/g, '"'); // استبدال الـ single quotes بـ double quotes
                    
                    const remoteConfig = JSON.parse(configText);
                    
                    // تحديث الإعدادات الحالية مع الحفاظ على الهيكل
                    STORE_CONFIG = deepMerge(STORE_CONFIG, remoteConfig);
                    
                    // حفظ الإعدادات محلياً
                    localStorage.setItem('storeConfig', JSON.stringify(STORE_CONFIG));
                    localStorage.setItem('lastConfigUpdate', new Date().toISOString());
                    
                    console.log('✅ تم تحميل وتحديث الإعدادات من GitHub');
                    console.log('📊 عدد المنتجات المحدثة:', Object.keys(STORE_CONFIG.PRODUCTS).length);
                    
                    // إرسال حدث التحديث
                    window.dispatchEvent(new CustomEvent('configUpdated', { 
                        detail: STORE_CONFIG 
                    }));
                    
                    return true;
                } catch (parseError) {
                    console.error('❌ خطأ في تحليل الإعدادات:', parseError);
                    console.log('📝 المحتوى المستلم:', configMatch[1].substring(0, 200) + '...');
                }
            } else {
                console.error('❌ لم يتم العثور على STORE_CONFIG في الملف');
            }
        } else {
            console.error('❌ فشل في جلب الملف من GitHub:', response.status);
        }
    } catch (error) {
        console.log('⚠️ استخدام الإعدادات المحلية بسبب الخطأ:', error.message);
    }
    
    return false;
}

/**
 * 🔍 دمج عميق للكائنات
 * @param {Object} target - الكائن الهدف
 * @param {Object} source - الكائن المصدر
 * @returns {Object} - الكائن المدمج
 */
function deepMerge(target, source) {
    const result = { ...target };
    
    for (const key in source) {
        if (source[key] instanceof Object && key in target && target[key] instanceof Object) {
            result[key] = deepMerge(target[key], source[key]);
        } else {
            result[key] = source[key];
        }
    }
    
    return result;
}

/**
 * 🔍 التحقق من وجود تحديثات على GitHub
 * @returns {Promise<boolean>} -是否存在 تحديثات
 */
async function checkForUpdates() {
    try {
        const lastUpdate = localStorage.getItem('lastConfigUpdate');
        const timestamp = new Date().getTime();
        const checkUrl = `https://api.github.com/repos/Ahcene43/WAW/commits?path=config.js&per_page=1&t=${timestamp}`;
        
        const response = await fetch(checkUrl);
        if (response.ok) {
            const commits = await response.json();
            if (commits && commits[0]) {
                const lastCommitDate = new Date(commits[0].commit.committer.date);
                const lastUpdateDate = lastUpdate ? new Date(lastUpdate) : new Date(0);
                
                if (lastCommitDate > lastUpdateDate) {
                    console.log('🔄 يوجد تحديثات جديدة، جاري التحميل...');
                    return await loadRemoteConfig();
                } else {
                    console.log('✅ الإعدادات محدثة بالفعل');
                }
            }
        }
    } catch (error) {
        console.log('⚠️ لا يمكن التحقق من التحديثات:', error.message);
    }
    
    return false;
}

/**
 * 💾 تحميل الإعدادات المحفوظة
 * @returns {boolean} - نجاح العملية
 */
function loadLocalConfig() {
    try {
        const savedConfig = localStorage.getItem('storeConfig');
        if (savedConfig) {
            const parsedConfig = JSON.parse(savedConfig);
            STORE_CONFIG = deepMerge(STORE_CONFIG, parsedConfig);
            console.log('✅ تم تحميل الإعدادات المحفوظة');
            console.log('📦 عدد المنتجات المحملة:', Object.keys(STORE_CONFIG.PRODUCTS).length);
            return true;
        }
    } catch (error) {
        console.error('❌ خطأ في تحميل الإعدادات المحلية:', error);
    }
    return false;
}

/**
 * 💾 حفظ الإعدادات محلياً
 * @returns {boolean} - نجاح العملية
 */
function saveLocalConfig() {
    try {
        localStorage.setItem('storeConfig', JSON.stringify(STORE_CONFIG));
        localStorage.setItem('lastConfigUpdate', new Date().toISOString());
        console.log('✅ تم حفظ الإعدادات محلياً');
        return true;
    } catch (error) {
        console.error('❌ خطأ في حفظ الإعدادات:', error);
        return false;
    }
}

// =============================================================================
// 🔧 دوال التحديث المحسنة للمقاسات والألوان
// =============================================================================

/**
 * 📏 تحديث مقاسات المنتج مع دعم الإزالة
 * @param {string} productId - معرّف المنتج
 * @param {string} size - المقاس
 * @param {boolean} isChecked - حالة الاختيار
 * @returns {boolean} - نجاح العملية
 */
function updateProductSizes(productId, size, isChecked) {
    console.log(`🔄 تحديث مقاسات المنتج ${productId}: ${size} -> ${isChecked ? 'مفعل' : 'معطل'}`);
    
    if (!STORE_CONFIG.PRODUCTS[productId]) {
        console.error('❌ المنتج غير موجود:', productId);
        showNotification('المنتج غير موجود', 'error');
        return false;
    }
    
    // التأكد من وجود مصفوفة المقاسات
    if (!STORE_CONFIG.PRODUCTS[productId].availableSizes) {
        STORE_CONFIG.PRODUCTS[productId].availableSizes = [];
    }
    
    if (isChecked) {
        // إضافة المقاس إذا لم يكن موجوداً
        if (!STORE_CONFIG.PRODUCTS[productId].availableSizes.includes(size)) {
            STORE_CONFIG.PRODUCTS[productId].availableSizes.push(size);
            console.log(`✅ تم إضافة المقاس ${size} للمنتج ${productId}`);
        }
    } else {
        // إزالة المقاس إذا كان موجوداً
        const initialLength = STORE_CONFIG.PRODUCTS[productId].availableSizes.length;
        STORE_CONFIG.PRODUCTS[productId].availableSizes = STORE_CONFIG.PRODUCTS[productId].availableSizes.filter(s => s !== size);
        const finalLength = STORE_CONFIG.PRODUCTS[productId].availableSizes.length;
        
        if (finalLength < initialLength) {
            console.log(`🗑️ تم إزالة المقاس ${size} من المنتج ${productId}`);
        }
    }
    
    // حفظ التغييرات وإرسال حدث التحديث
    const saved = saveLocalConfig();
    if (saved) {
        window.dispatchEvent(new CustomEvent('configUpdated', { 
            detail: STORE_CONFIG 
        }));
        showNotification(`تم تحديث مقاسات المنتج: ${STORE_CONFIG.PRODUCTS[productId].availableSizes.join(', ') || 'لا توجد مقاسات'}`, 'success');
    }
    
    return saved;
}

/**
 * 🎨 تحديث ألوان المنتج مع دعم الإزالة
 * @param {string} productId - معرّف المنتج
 * @param {string} color - اللون
 * @param {boolean} isChecked - حالة الاختيار
 * @returns {boolean} - نجاح العملية
 */
function updateProductColors(productId, color, isChecked) {
    console.log(`🔄 تحديث ألوان المنتج ${productId}: ${color} -> ${isChecked ? 'مفعل' : 'معطل'}`);
    
    if (!STORE_CONFIG.PRODUCTS[productId]) {
        console.error('❌ المنتج غير موجود:', productId);
        showNotification('المنتج غير موجود', 'error');
        return false;
    }
    
    // التأكد من وجود مصفوفة الألوان
    if (!STORE_CONFIG.PRODUCTS[productId].availableColors) {
        STORE_CONFIG.PRODUCTS[productId].availableColors = [];
    }
    
    if (isChecked) {
        // إضافة اللون إذا لم يكن موجوداً
        if (!STORE_CONFIG.PRODUCTS[productId].availableColors.includes(color)) {
            STORE_CONFIG.PRODUCTS[productId].availableColors.push(color);
            console.log(`✅ تم إضافة اللون ${color} للمنتج ${productId}`);
        }
    } else {
        // إزالة اللون إذا كان موجوداً
        const initialLength = STORE_CONFIG.PRODUCTS[productId].availableColors.length;
        STORE_CONFIG.PRODUCTS[productId].availableColors = STORE_CONFIG.PRODUCTS[productId].availableColors.filter(c => c !== color);
        const finalLength = STORE_CONFIG.PRODUCTS[productId].availableColors.length;
        
        if (finalLength < initialLength) {
            console.log(`🗑️ تم إزالة اللون ${color} من المنتج ${productId}`);
        }
    }
    
    // حفظ التغييرات وإرسال حدث التحديث
    const saved = saveLocalConfig();
    if (saved) {
        window.dispatchEvent(new CustomEvent('configUpdated', { 
            detail: STORE_CONFIG 
        }));
        showNotification(`تم تحديث ألوان المنتج: ${STORE_CONFIG.PRODUCTS[productId].availableColors.join(', ') || 'لا توجد ألوان'}`, 'success');
    }
    
    return saved;
}

/**
 * 🔄 تحديث جميع مقاسات منتج مرة واحدة
 * @param {string} productId - معرّف المنتج
 * @param {Array} selectedSizes - المقاسات المختارة
 * @returns {boolean} - نجاح العملية
 */
function updateAllProductSizes(productId, selectedSizes) {
    console.log(`🔄 تحديث جميع مقاسات المنتج ${productId}:`, selectedSizes);
    
    if (!STORE_CONFIG.PRODUCTS[productId]) {
        console.error('❌ المنتج غير موجود:', productId);
        showNotification('المنتج غير موجود', 'error');
        return false;
    }
    
    // تعيين المقاسات الجديدة مباشرة
    STORE_CONFIG.PRODUCTS[productId].availableSizes = [...selectedSizes];
    
    // حفظ التغييرات وإرسال حدث التحديث
    const saved = saveLocalConfig();
    if (saved) {
        window.dispatchEvent(new CustomEvent('configUpdated', { 
            detail: STORE_CONFIG 
        }));
        showNotification(`تم تحديث مقاسات المنتج: ${selectedSizes.join(', ') || 'لا توجد مقاسات'}`, 'success');
    }
    
    return saved;
}

/**
 * 🎨 تحديث جميع ألوان منتج مرة واحدة
 * @param {string} productId - معرّف المنتج
 * @param {Array} selectedColors - الألوان المختارة
 * @returns {boolean} - نجاح العملية
 */
function updateAllProductColors(productId, selectedColors) {
    console.log(`🔄 تحديث جميع ألوان المنتج ${productId}:`, selectedColors);
    
    if (!STORE_CONFIG.PRODUCTS[productId]) {
        console.error('❌ المنتج غير موجود:', productId);
        showNotification('المنتج غير موجود', 'error');
        return false;
    }
    
    // تعيين الألوان الجديدة مباشرة
    STORE_CONFIG.PRODUCTS[productId].availableColors = [...selectedColors];
    
    // حفظ التغييرات وإرسال حدث التحديث
    const saved = saveLocalConfig();
    if (saved) {
        window.dispatchEvent(new CustomEvent('configUpdated', { 
            detail: STORE_CONFIG 
        }));
        showNotification(`تم تحديث ألوان المنتج: ${selectedColors.join(', ') || 'لا توجد ألوان'}`, 'success');
    }
    
    return saved;
}

// =============================================================================
// 🎯 دوال مساعدة للوصول للإعدادات
// =============================================================================

/**
 * 🏪 الحصول على معلومات المتجر
 * @returns {Object} - معلومات المتجر
 */
function getStoreInfo() {
    return STORE_CONFIG.STORE_INFO || {};
}

/**
 * 📦 الحصول على قائمة المنتجات
 * @returns {Object} - كائن المنتجات
 */
function getProducts() {
    return STORE_CONFIG.PRODUCTS || {};
}

/**
 * 🚚 الحصول على أسعار التوصيل
 * @returns {Object} - أسعار التوصيل
 */
function getDeliveryPrices() {
    return STORE_CONFIG.DELIVERY_PRICES || {};
}

/**
 * 💰 الحصول على إعدادات الخصم
 * @returns {Object} - إعدادات الخصم
 */
function getDiscountSettings() {
    return STORE_CONFIG.DISCOUNTS || {};
}

/**
 * 👶 الحصول على جدول الأعمار والقياسات
 * @returns {Object} - جدول الأعمار
 */
function getAgeSizes() {
    return STORE_CONFIG.AGE_SIZES || {};
}

/**
 * 🎨 الحصول على الألوان المتاحة
 * @returns {Array} - مصفوفة الألوان
 */
function getAvailableColors() {
    return STORE_CONFIG.AVAILABLE_COLORS || [];
}

/**
 * 📏 الحصول على القياسات المتاحة
 * @returns {Array} - مصفوفة القياسات
 */
function getAvailableSizes() {
    return STORE_CONFIG.AVAILABLE_SIZES || [];
}

/**
 * 🗺️ الحصول على قائمة الولايات
 * @returns {Array} - مصفوفة الولايات
 */
function getWilayas() {
    return WILAYAS;
}

/**
 * 🔍 الحصول على منتج معين
 * @param {string|number} productId - معرّف المنتج
 * @returns {Object|null} - بيانات المنتج
 */
function getProduct(productId) {
    return STORE_CONFIG.PRODUCTS ? STORE_CONFIG.PRODUCTS[productId] : null;
}

/**
 * 💵 الحصول على سعر التوصيل لولاية معينة
 * @param {string} wilaya - اسم الولاية
 * @param {string} type - نوع التوصيل (home/desk)
 * @returns {number} - سعر التوصيل
 */
function getDeliveryPrice(wilaya, type = 'home') {
    if (STORE_CONFIG.DELIVERY_PRICES && STORE_CONFIG.DELIVERY_PRICES[wilaya]) {
        return STORE_CONFIG.DELIVERY_PRICES[wilaya][type] || 0;
    }
    return 0;
}

// =============================================================================
// 🔄 دوال التحديث الديناميكي
// =============================================================================

/**
 * 🔄 تحديث إعدادات المتجر ديناميكياً
 * @param {Object} newConfig - الإعدادات الجديدة
 * @returns {boolean} - نجاح العملية
 */
function updateStoreConfig(newConfig) {
    try {
        STORE_CONFIG = deepMerge(STORE_CONFIG, newConfig);
        const saved = saveLocalConfig();
        
        if (saved) {
            // إرسال حدث التحديث
            window.dispatchEvent(new CustomEvent('configUpdated', { 
                detail: STORE_CONFIG 
            }));
            
            console.log('✅ تم تحديث إعدادات المتجر');
            return true;
        }
    } catch (error) {
        console.error('❌ خطأ في تحديث الإعدادات:', error);
        showNotification('خطأ في تحديث الإعدادات', 'error');
    }
    return false;
}

/**
 * ✏️ تحديث منتج معين
 * @param {string|number} productId - معرّف المنتج
 * @param {Object} productData - بيانات المنتج الجديدة
 * @returns {boolean} - نجاح العملية
 */
function updateProduct(productId, productData) {
    if (!STORE_CONFIG.PRODUCTS) {
        STORE_CONFIG.PRODUCTS = {};
    }
    
    STORE_CONFIG.PRODUCTS[productId] = { 
        ...(STORE_CONFIG.PRODUCTS[productId] || {}), 
        ...productData 
    };
    
    return updateStoreConfig({ PRODUCTS: STORE_CONFIG.PRODUCTS });
}

/**
 * ➕ إضافة منتج جديد
 * @param {Object} productData - بيانات المنتج الجديد
 * @returns {number} - معرّف المنتج الجديد
 */
function addNewProduct(productData) {
    const existingIds = Object.keys(STORE_CONFIG.PRODUCTS || {}).map(Number);
    const newId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
    
    updateProduct(newId, productData);
    return newId;
}

/**
 * 🗑️ حذف منتج
 * @param {string|number} productId - معرّف المنتج
 * @returns {boolean} - نجاح العملية
 */
function deleteProduct(productId) {
    if (STORE_CONFIG.PRODUCTS && STORE_CONFIG.PRODUCTS[productId]) {
        delete STORE_CONFIG.PRODUCTS[productId];
        return updateStoreConfig({ PRODUCTS: STORE_CONFIG.PRODUCTS });
    }
    return false;
}

/**
 * 🚚 تحديث أسعار التوصيل
 * @param {string} wilaya - اسم الولاية
 * @param {number} homePrice - سعر التوصيل للمنزل
 * @param {number} deskPrice - سعر التوصيل للمكتب
 * @returns {boolean} - نجاح العملية
 */
function updateDeliveryPrices(wilaya, homePrice, deskPrice) {
    if (!STORE_CONFIG.DELIVERY_PRICES) {
        STORE_CONFIG.DELIVERY_PRICES = {};
    }
    
    STORE_CONFIG.DELIVERY_PRICES[wilaya] = { 
        home: parseInt(homePrice), 
        desk: parseInt(deskPrice) 
    };
    
    return updateStoreConfig({ DELIVERY_PRICES: STORE_CONFIG.DELIVERY_PRICES });
}

/**
 * 🏪 تحديث معلومات المتجر
 * @param {Object} storeInfo - معلومات المتجر الجديدة
 * @returns {boolean} - نجاح العملية
 */
function updateStoreInfo(storeInfo) {
    STORE_CONFIG.STORE_INFO = { ...STORE_CONFIG.STORE_INFO, ...storeInfo };
    return updateStoreConfig({ STORE_INFO: STORE_CONFIG.STORE_INFO });
}

/**
 * 💰 تحديث إعدادات الخصم
 * @param {Object} discountSettings - إعدادات الخصم الجديدة
 * @returns {boolean} - نجاح العملية
 */
function updateDiscountSettings(discountSettings) {
    STORE_CONFIG.DISCOUNTS = { ...STORE_CONFIG.DISCOUNTS, ...discountSettings };
    return updateStoreConfig({ DISCOUNTS: STORE_CONFIG.DISCOUNTS });
}

/**
 * 👶 تحديث جدول الأعمار والقياسات
 * @param {Object} ageSizes - جدول الأعمار الجديد
 * @returns {boolean} - نجاح العملية
 */
function updateAgeSizes(ageSizes) {
    STORE_CONFIG.AGE_SIZES = { ...STORE_CONFIG.AGE_SIZES, ...ageSizes };
    return updateStoreConfig({ AGE_SIZES: STORE_CONFIG.AGE_SIZES });
}

/**
 * 🎨 تحديث الألوان المتاحة
 * @param {Array} colors - الألوان الجديدة
 * @returns {boolean} - نجاح العملية
 */
function updateAvailableColors(colors) {
    STORE_CONFIG.AVAILABLE_COLORS = [...colors];
    return updateStoreConfig({ AVAILABLE_COLORS: STORE_CONFIG.AVAILABLE_COLORS });
}

/**
 * 📏 تحديث القياسات المتاحة
 * @param {Array} sizes - القياسات الجديدة
 * @returns {boolean} - نجاح العملية
 */
function updateAvailableSizes(sizes) {
    STORE_CONFIG.AVAILABLE_SIZES = [...sizes];
    return updateStoreConfig({ AVAILABLE_SIZES: STORE_CONFIG.AVAILABLE_SIZES });
}

// =============================================================================
// 🌐 دعم GitHub Integration للإدارة
// =============================================================================

/**
 * 💾 حفظ الإعدادات على GitHub
 * @param {string} token - توكن GitHub
 * @param {string} username - اسم المستخدم
 * @param {string} repo - اسم المستودع
 * @param {string} branch - الفرع (افتراضي: main)
 * @returns {Promise<Object>} - نتيجة العملية
 */
async function saveConfigToGitHub(token, username, repo, branch = 'main') {
    try {
        const configContent = `// config.js - ملف الإعدادات الرئيسي مع دعم التحديثات في الوقت الحقيقي\n\nlet STORE_CONFIG = ${JSON.stringify(STORE_CONFIG, null, 2)};\n\nconst WILAYAS = ${JSON.stringify(WILAYAS, null, 2)};\n\n${loadRemoteConfig.toString()}\n${deepMerge.toString()}\n${checkForUpdates.toString()}\n${loadLocalConfig.toString()}\n${saveLocalConfig.toString()}\n${updateProductSizes.toString()}\n${updateProductColors.toString()}\n${updateAllProductSizes.toString()}\n${updateAllProductColors.toString()}\n${showNotification.toString()}\n${refreshStoreInterface.toString()}\n${initializeConfigSystem.toString()}\n${initializeRemoteConfig.toString()}\n\nwindow.StoreConfig = {\n    getConfig: () => STORE_CONFIG,\n    getWilayas: () => WILAYAS,\n    getStoreInfo: ${getStoreInfo.toString()},\n    getProducts: ${getProducts.toString()},\n    getProduct: ${getProduct.toString()},\n    getDeliveryPrices: ${getDeliveryPrices.toString()},\n    getDeliveryPrice: ${getDeliveryPrice.toString()},\n    getDiscountSettings: ${getDiscountSettings.toString()},\n    getAgeSizes: ${getAgeSizes.toString()},\n    getAvailableColors: ${getAvailableColors.toString()},\n    getAvailableSizes: ${getAvailableSizes.toString()},\n    updateProductSizes: ${updateProductSizes.toString()},\n    updateProductColors: ${updateProductColors.toString()},\n    updateAllProductSizes: ${updateAllProductSizes.toString()},\n    updateAllProductColors: ${updateAllProductColors.toString()},\n    updateConfig: ${updateStoreConfig.toString()},\n    updateProduct: ${updateProduct.toString()},\n    addNewProduct: ${addNewProduct.toString()},\n    deleteProduct: ${deleteProduct.toString()},\n    updateDeliveryPrices: ${updateDeliveryPrices.toString()},\n    updateStoreInfo: ${updateStoreInfo.toString()},\n    updateDiscountSettings: ${updateDiscountSettings.toString()},\n    updateAgeSizes: ${updateAgeSizes.toString()},\n    updateAvailableColors: ${updateAvailableColors.toString()},\n    updateAvailableSizes: ${updateAvailableSizes.toString()},\n    loadRemote: ${loadRemoteConfig.toString()},\n    saveToGitHub: ${saveConfigToGitHub.toString()},\n    checkForUpdates: ${checkForUpdates.toString()},\n    refresh: ${refreshStoreInterface.toString()},\n    showNotification: ${showNotification.toString()},\n    initialize: ${initializeConfigSystem.toString()}\n};\n\ninitializeConfigSystem();\n\nconsole.log('✅ تم تحميل ملف الإعدادات بنجاح - مع إصلاح مشكلة المقاسات والألوان!');`;
        
        const content = btoa(unescape(encodeURIComponent(configContent)));
        
        // الحصول على SHA للملف الموجود (إذا كان موجوداً)
        let sha = '';
        try {
            const existingFileResponse = await fetch(
                `https://api.github.com/repos/${username}/${repo}/contents/config.js`,
                {
                    headers: {
                        'Authorization': `token ${token}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }
            );
            
            if (existingFileResponse.ok) {
                const fileData = await existingFileResponse.json();
                sha = fileData.sha;
                console.log('📁 وجدنا ملف موجود، سيتم تحديثه');
            }
        } catch (error) {
            console.log('📄 سيتم إنشاء ملف جديد');
        }

        const response = await fetch(
            `https://api.github.com/repos/${username}/${repo}/contents/config.js`,
            {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/vnd.github.v3+json'
                },
                body: JSON.stringify({
                    message: 'تحديث إعدادات المتجر - ' + new Date().toLocaleString('ar-EG'),
                    content: content,
                    sha: sha,
                    branch: branch
                })
            }
        );

        if (response.ok) {
            const result = await response.json();
            console.log('✅ تم الحفظ على GitHub بنجاح');
            
            // تحديث وقت آخر تحديث
            localStorage.setItem('lastConfigUpdate', new Date().toISOString());
            showNotification('تم حفظ الإعدادات على GitHub بنجاح', 'success');
            
            return result;
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message || `فشل في الحفظ على GitHub: ${response.status}`);
        }
    } catch (error) {
        console.error('❌ Error saving to GitHub:', error);
        showNotification('خطأ في الحفظ على GitHub: ' + error.message, 'error');
        throw error;
    }
}

// =============================================================================
// 📱 دوال مساعدة للواجهة
// =============================================================================

/**
 * 🔔 إظهار إشعار للمستخدم
 * @param {string} message - نص الرسالة
 * @param {string} type - نوع الإشعار (info/success/warning/error)
 */
function showNotification(message, type = 'info') {
    if (typeof window.showNotification === 'function') {
        window.showNotification(message, type);
    } else {
        console.log(`📢 ${type.toUpperCase()}: ${message}`);
        
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : type === 'warning' ? '#ff9800' : '#2196F3'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            font-family: 'Cairo', sans-serif;
            max-width: 300px;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 3000);
    }
}

/**
 * 🔄 تحديث واجهة المتجر
 */
function refreshStoreInterface() {
    window.dispatchEvent(new CustomEvent('configUpdated', { 
        detail: STORE_CONFIG 
    }));
}

/**
 * 📤 تصدير الإعدادات الحالية
 * @returns {string} - الإعدادات بصيغة JSON
 */
function exportCurrentConfig() {
    return JSON.stringify(STORE_CONFIG, null, 2);
}

/**
 * 📥 استيراد الإعدادات
 * @param {string} configString - الإعدادات بصيغة JSON
 * @returns {boolean} - نجاح العملية
 */
function importConfig(configString) {
    try {
        const importedConfig = JSON.parse(configString);
        return updateStoreConfig(importedConfig);
    } catch (error) {
        console.error('❌ خطأ في استيراد الإعدادات:', error);
        showNotification('خطأ في استيراد الإعدادات', 'error');
        return false;
    }
}

/**
 * 🔄 إعادة تعيين الإعدادات للافتراضية
 * @returns {boolean} - نجاح العملية
 */
function resetToDefault() {
    const defaultConfig = {
        PRODUCTS: {
            16: {
                name: "مودال 1",
                price: 3700,
                image: "https://raw.githubusercontent.com/Ahcene43/WER/main/images/1761141877869-modal12.jpg",
                description: "فستان بمواصفات خيالية",
                availableSizes: ["S", "M"],
                availableColors: ["كما في الصورة", "بنفسجي"]
            },
            17: {
                name: "مودال 2", 
                price: 8000,
                image: "https://raw.githubusercontent.com/Ahcene43/WER/main/images/1761144949105-modal1.jpg",
                description: "فستان الملكات الساحرات",
                availableSizes: ["S", "M", "L", "XL", "XXL", "S1"],
                availableColors: ["كما في الصورة", "أسود", "زهري"]
            }
        },
        DISCOUNTS: {
            minQuantityForDiscount: 3,
            discountPerItem: 300
        },
        STORE_INFO: {
            name: "RIHAB12-Shopp",
            tagline: "متجر أفخم الملابس",
            phoneNumbers: ["0671466489", "0551102155"]
        }
    };
    
    return updateStoreConfig(defaultConfig);
}

// =============================================================================
// 📊 دوال الإحصائيات
// =============================================================================

/**
 * 📈 الحصول على إحصائيات المتجر
 * @returns {Object} - إحصائيات المتجر
 */
function getStoreStats() {
    return {
        totalProducts: Object.keys(STORE_CONFIG.PRODUCTS || {}).length,
        totalWilayas: Object.keys(STORE_CONFIG.DELIVERY_PRICES || {}).length,
        availableColors: (STORE_CONFIG.AVAILABLE_COLORS || []).length,
        availableSizes: (STORE_CONFIG.AVAILABLE_SIZES || []).length,
        ageSizes: Object.keys(STORE_CONFIG.AGE_SIZES || {}).length,
        lastUpdate: localStorage.getItem('lastConfigUpdate') || 'غير متوفر'
    };
}

/**
 * 📋 الحصول على تقرير مفصل عن المنتجات
 * @returns {Array} - تقرير المنتجات
 */
function getProductsReport() {
    const products = STORE_CONFIG.PRODUCTS || {};
    return Object.keys(products).map(id => {
        const product = products[id];
        return {
            id: id,
            name: product.name,
            price: product.price,
            hasImage: !!product.image,
            sizes: product.availableSizes?.length || 0,
            colors: product.availableColors?.length || 0
        };
    });
}

// =============================================================================
// 🚀 التهيئة والأحداث
// =============================================================================

/**
 * 🚀 تهيئة النظام عند تحميل الصفحة
 */
function initializeConfigSystem() {
    console.log('🚀 بدء تحميل إعدادات المتجر...');
    
    // تحميل الإعدادات المحلية
    const hasLocalConfig = loadLocalConfig();
    
    // إعداد استماع للأحداث
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', async () => {
            await initializeRemoteConfig(hasLocalConfig);
        });
    } else {
        initializeRemoteConfig(hasLocalConfig);
    }
}

/**
 * 🔄 تهيئة الإعدادات البعيدة
 * @param {boolean} hasLocalConfig -是否存在 إعدادات محلية
 */
async function initializeRemoteConfig(hasLocalConfig) {
    try {
        const hasUpdates = await checkForUpdates();
        
        if (!hasLocalConfig && !hasUpdates) {
            console.log('ℹ️ استخدام الإعدادات الافتراضية');
            saveLocalConfig();
        }
        
        // إرسال حدث أن الإعدادات جاهزة
        window.dispatchEvent(new CustomEvent('configReady', { 
            detail: STORE_CONFIG 
        }));
        
        console.log('🎉 تم تهيئة نظام الإعدادات بنجاح');
        
    } catch (error) {
        console.error('❌ خطأ في تهيئة الإعدادات:', error);
    }
    
    // التحقق من التحديثات كل 30 ثانية
    setInterval(async () => {
        await checkForUpdates();
    }, 30000);
}

// =============================================================================
// 🌍 تصدير الدوال للاستخدام العالمي
// =============================================================================

window.StoreConfig = {
    // الإعدادات الأساسية
    getConfig: () => STORE_CONFIG,
    getWilayas: () => WILAYAS,
    
    // الوصول للبيانات
    getStoreInfo,
    getProducts,
    getProduct,
    getDeliveryPrices,
    getDeliveryPrice,
    getDiscountSettings,
    getAgeSizes,
    getAvailableColors,
    getAvailableSizes,
    
    // التحديثات المحسنة للمقاسات والألوان
    updateProductSizes,
    updateProductColors,
    updateAllProductSizes,
    updateAllProductColors,
    
    // التحديثات العامة
    updateConfig: updateStoreConfig,
    updateProduct,
    addNewProduct,
    deleteProduct,
    updateDeliveryPrices,
    updateStoreInfo,
    updateDiscountSettings,
    updateAgeSizes,
    updateAvailableColors,
    updateAvailableSizes,
    
    // المزامنة
    loadRemote: loadRemoteConfig,
    saveToGitHub: saveConfigToGitHub,
    checkForUpdates,
    
    // الاستيراد والتصدير
    exportConfig: exportCurrentConfig,
    importConfig,
    resetToDefault,
    
    // الإحصائيات
    getStats: getStoreStats,
    getProductsReport,
    
    // المساعدة
    refresh: refreshStoreInterface,
    showNotification,
    
    // التحكم
    initialize: initializeConfigSystem
};

// =============================================================================
// 🔧 إصلاح مشكلة الـ Admin Panel
// =============================================================================

// دالة مساعدة للواجهة الإدارية
function setupAdminCheckboxes() {
    // هذا سيعمل عندما يتم تحميل الـ admin panel
    document.addEventListener('DOMContentLoaded', function() {
        console.log('🔧 جاري إعداد نظام checkboxes للإدارة...');
        
        // إعادة تحميل إدارة المنتجات عند التحديث
        if (typeof loadProductsManagement === 'function') {
            setTimeout(() => {
                loadProductsManagement();
                console.log('✅ تم إعادة تحميل إدارة المنتجات');
            }, 1000);
        }
    });
}

// =============================================================================
// 🚀 بدء تشغيل النظام
// =============================================================================

// تهيئة النظام عند تحميل الصفحة
initializeConfigSystem();
setupAdminCheckboxes();

console.log('✅ تم تحميل ملف الإعدادات بنجاح - مع إصلاح مشكلة المقاسات والألوان!');
