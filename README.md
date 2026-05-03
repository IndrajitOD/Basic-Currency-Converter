# 💱 Global Currency Converter

> A real-time currency converter built using JavaScript, integrating live exchange rates with a modern interactive UI.

---

## 🌐 Live Demo

👉 https://basic-web-currency-converter.indrajitbhowmick.workers.dev

---

## 📸 Preview

<p align="center">
  <img width="1917" height="954" alt="image" src="https://github.com/user-attachments/assets/32a3695c-d1ef-4305-9a0a-f8858e533c33" />
>
</p>

---

## 🎯 Purpose of This Project

This project was developed to strengthen my understanding of:

- API integration using `fetch`
- Asynchronous JavaScript (`async/await`)
- Dynamic DOM manipulation
- Building custom UI components (dropdowns)
- Handling real-time data updates

It focuses on combining **frontend design with real-world data processing**.

---

## 🚀 Features

### 💱 Currency Conversion
- Real-time exchange rate fetching from API :contentReference[oaicite:0]{index=0}  
- Supports multiple global currencies  
- Accurate conversion with formatted output  

### 🔄 Smart Interactions
- Swap currencies instantly  
- Auto flag update based on selected currency  
- Input validation (prevents invalid values)  

### 🎨 UI / UX Highlights
- Glassmorphism design with smooth transitions :contentReference[oaicite:1]{index=1}  
- Custom dropdown with flags  
- Animated convert button (glow effect)  
- Responsive layout (mobile-friendly)  

### ⚙️ Custom Components
- Fully custom dropdown (not native `<select>`)  
- Dynamic population of currency list  
- Interactive footer animation  

---

## 🛠️ Tech Stack

- **HTML5** – Structure  
- **CSS3** – Styling, animations, responsive design  
- **JavaScript (Vanilla)** – Logic, API calls, DOM handling  
- **Currency API** – Real-time exchange rates  

---

## ⚙️ How It Works

1. User enters an amount  
2. Selects currencies (From → To)  
3. App fetches exchange rate from API  
4. Calculates and displays converted value  

```js
const URL = `${BASE_URL}/${from}.json`;
