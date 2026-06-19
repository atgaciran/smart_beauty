# Smart Beauty - Frontend Case Study

A minimalist mini e-commerce flow that simulates an AI skin analysis. Users select their skin type, wait for a simulated analysis, and get personalized product recommendations that they can add to an interactive cart.

🚀 **Live Demo:** https://smart-beauty-sigma.vercel.app/

## ✨ Features

- **Skin Type Selection:** Users can choose between Dry, Oily, and Combination skin.
- **AI Simulation:** A 3-second delay with skeleton loaders to simulate background processing.
- **Product Grid:** Dynamic product listing based on the user's selected skin type.
- **Interactive Cart:** A slide-out drawer to add/remove items, update quantities, and calculate the total price in real-time.

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom brand color: `#332470`)
- **State Management:** Zustand
- **Testing:** Vitest

## 🏃‍♂️ How to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/atgaciran/smart_beauty
   cd smart_beauty
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

4. **Run unit tests:**

   ```bash
   npm run test
   ```

---

## 📁 Project Structure

```text
src/
├── app/          # Main pages and global layout
├── components/   # Reusable UI elements and feature-specific components
├── lib/          # TypeScript types and mock data functions
├── store/        # Zustand global state management
└── __tests__/    # Vitest test files
```

### Directory Overview

| Directory | Description |
|-----------|-------------|
| `src/app/` | Main pages and application layout |
| `src/components/` | Reusable UI components and feature-specific elements |
| `src/lib/` | TypeScript types, utilities, and mock data |
| `src/store/` | Zustand-based global state management |
| `src/__tests__/` | Unit and integration tests using Vitest |