# Expo Starter Kit

**A ready-to-build mobile app template with Clerk authentication and a routing structure already set up.**

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Folder Structure](#folder-structure)
- [Images and Diagrams](#images-and-diagrams)
- [What I Learned](#what-i-learned)
- [Future Improvements](#future-improvements)

---

## About the Project

### Motivation

Every new mobile app starts with the same repetitive work: authentication, tab navigation, styling, fonts, images and a sensible folder structure. This project is a reusable starter so I can skip all of that and jump straight into the UI/UX and the core logic of each new app.

### What problem does it solve?

It removes the repeated setup of writing the same basics again and again for every new project. It was built mainly for my own use, but anyone can clone it and use it the same way.

### What it does

The template ships with a working authentication flow, a tab-based layout and a sample "subscription tracker" home screen. The sample screen shows how the pieces fit together: lists, modals, global state and reusable UI components.

### Why these technologies

- **Expo + Expo Router** for fast setup and file-based routing.
- **Clerk** so sign up, email verification, sign in and logout work out of the box.
- **NativeWind** to style with Tailwind-style class names in React Native.
- **Zustand-style store (`lib/subscriptionStore.ts`)** for simple global state.
- **dayjs** for easy date handling.

---

## Features

- **Clerk authentication already set up:** sign up, email verification, sign in and logout.
- **NativeWind pre-configured** with Expo, ready to style with class names.
- **Custom fonts pre-configured:** replace the files in `assets/fonts/` and the app uses your fonts.
- **Image setup done:** Expo and TypeScript already know how to import and handle images.
- **Routing structure:** separate `(auth)` and `(tabs)` route groups with tab navigation.
- **Ready-made folder structure** that shows exactly where to put screens, components, constants and logic, so you can focus on the front end, back end and API calls.
- **Sample home screen** with a balance card, an "Upcoming" horizontal list, an "All Subscriptions" vertical list and a create-subscription modal.

---

## Tech Stack

| Area        | Tool                          |
| ----------- | ----------------------------- |
| Framework   | React Native with Expo        |
| Routing     | Expo Router                   |
| Auth        | Clerk                         |
| Styling     | NativeWind (Tailwind CSS)     |
| Language    | TypeScript                    |
| Dates       | dayjs                         |

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root and add your Clerk publishable key:

   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

4. **Start the app**

   ```bash
   npx expo start
   ```

   Then open it in Expo Go or an emulator, and you are good to go.

---

## How to Use

1. Sign up with your email and enter the verification code sent to you.
2. After signing in you land on the tabs: **Home**, **Subscriptions**, **Insights** and **Settings**.
3. On Home, tap the **+** button to add a subscription with the create-subscription modal.
4. To build your own app:
   - Replace the dummy data in `constants/` with your own.
   - Add or edit screens in `app/(tabs)/`.
   - Build reusable components in `components/ui/`.
   - Add your own logic, API calls and state in `lib/`.

### Credentials

There are no shared test credentials. Authentication uses real email sign-up through Clerk, so you need your own [Clerk](https://clerk.com) account and publishable key in the `.env` file.

---

## Folder Structure

```
scriby/
├── app/                      # Screens and routes (Expo Router, file-based)
│   ├── (auth)/               # Auth flow screens, shown when signed out
│   │   ├── _layout.tsx       # Layout/redirect logic for auth screens
│   │   ├── sign-in.tsx       # Sign in screen
│   │   ├── sign-up.tsx       # Sign up screen
│   │   └── verify-code.tsx   # Email verification code screen
│   ├── (tabs)/               # Main app screens, shown when signed in
│   │   ├── _layout.tsx       # Bottom tab bar setup
│   │   ├── index.tsx         # Home tab
│   │   ├── insights.tsx      # Insights tab
│   │   ├── settings.tsx      # Settings tab
│   │   └── subscriptions.tsx # Subscriptions tab
│   └── _layout.tsx           # Root layout (providers, fonts, global styles)
├── assets/
│   ├── expo.icon/            # App icon
│   ├── fonts/                # Custom fonts (swap these to change the app's fonts)
│   ├── icons/                # Icon images
│   └── images/               # Images used in the app
├── components/
│   ├── auth/                 # Auth-specific components
│   │   ├── AuthInput.tsx     # Reusable input for auth forms
│   │   └── AuthLogo.tsx      # Logo shown on auth screens
│   └── ui/                   # Reusable UI components
│       ├── Button.tsx
│       ├── CreateSubscriptionModal.tsx
│       ├── ListHeading.tsx
│       ├── SubscriptionCard.tsx
│       └── UpcomingSubscriptionCard.tsx
├── constants/                # Dummy data, icons, images and theme in one place
│   ├── data.ts               # Dummy/sample data
│   ├── icons.ts              # Icon exports
│   ├── images.ts             # Image exports
│   └── theme.ts              # Colors and theme values
├── lib/
│   ├── subscriptionStore.ts  # Global state for subscriptions
│   └── utils.ts              # Helper functions (e.g. formatCurrency)
├── .env                      # Environment variables (Clerk key), not committed
├── .gitignore                # Files Git should ignore
├── AGENTS.md                 # Instructions for AI coding assistants
├── app.json                  # Expo app configuration
├── eslint.config.js          # Linting rules
├── expo-env.d.ts             # Expo's auto-generated TypeScript types
├── image.d.ts                # Tells TypeScript/React Native how to import images
├── metro.config.js           # Metro bundler config (NativeWind setup)
├── nativewind-env.d.ts       # NativeWind TypeScript types
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS config for Tailwind/NativeWind
├── tsconfig.json             # TypeScript configuration
└── type.d.ts                 # Shared TypeScript types for objects used in the app
```

---

## Images and Diagrams

Add your screenshots and diagrams here once they are ready.

**How to add an image:**

1. Create a folder called `docs/` (or `readme-images/`) in the project root and put your image inside it, for example `docs/architecture-diagram.png`.
2. Add a line like this in the README where you want the image to appear:

   ```md
   ![Architecture diagram](./docs/architecture-diagram.png)
   ```

   The text in `[ ]` is the alt text shown if the image fails to load. The path in `( )` is the image's location relative to the README.

**Diagram (replace this block after you create it):**

<!-- ![Architecture diagram](./docs/architecture-diagram.png) -->

_Diagram coming soon._

**App screenshots (replace after adding):**

<!--
![Sign in](./docs/sign-in.png)
![Home](./docs/home.png)
-->

_Screenshots coming soon._

---

## What I Learned

- Setting up **custom fonts** in an Expo project.
- Setting up **images** so React Native and TypeScript can import them.
- Adding **NativeWind** to an Expo project.
- The basics of **file-based routing** with Expo Router, including route groups like `(auth)` and `(tabs)`.
- Using **FlatList** to render lists, including two FlatLists (one horizontal, one vertical) on a single screen.
- Building and using a **modal** (the create-subscription modal).
- Setting up **Clerk authentication**: sign up, email verification, sign in and logout.
- Fixing common TypeScript issues, such as a missing required property (`daysLeft`) on an object type.

---

## Future Improvements

- Add a backend and API calls to store data instead of using dummy data.
- Add push notifications for upcoming renewals.
- Add analytics (for example PostHog).
- Add more reusable UI components and screen examples.

---

## Author

Built by **[Your Name]**. Every day is a learning day.