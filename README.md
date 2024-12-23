# Dynamic Text Motion

Bu loyiha matnning fon rasmi bilan dinamik harakatlanishini va foydalanuvchi bilan interaktiv bog‘lanishini ta'minlaydigan veb-sahifa yaratish uchun HTML, CSS, va JavaScript-dan foydalanadi.

## Loyihada ishlatilgan texnologiyalar

- **HTML**:  
  Veb-sahifaning asosiy tuzilishini yaratish uchun ishlatilgan. `<div>` elementi orqali matn joylashtirilgan va sahifa tarkibi tashkil etilgan.
  
- **CSS**:  
  Sahifaning dizaynini va matnning vizual ko‘rinishini sozlash uchun ishlatilgan. **`background-clip: text`** usuli bilan fon rasmidan faqat matn ko‘rinishi yaratildi, va **`font-family`** orqali shrift tanlandi.  
  - **`body`** va **`.text`** klasslari orqali sahifa va matnning umumiy stilini o‘zgartirish imkoniyati berilgan.

- **JavaScript**:  
  Foydalanuvchi sichqonchasining harakati bilan matn fonining pozitsiyasini dinamik ravishda o‘zgartirish uchun ishlatilgan. **`mousemove`** hodisasi yordamida sichqonchaning x va y koordinatalariga qarab fonning harakati amalga oshiriladi.
