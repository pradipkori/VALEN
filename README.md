# 💕 Valentine's Day Website - React Edition

A beautiful, romantic, animated single-page React application to ask your special someone to be your Valentine!

## ✨ Features

### 🎨 Beautiful Design
- Romantic gradient backgrounds (pink, purple, red)
- Glassmorphism UI effects
- Smooth Framer Motion animations
- Responsive mobile-first design
- Custom Google Fonts (Dancing Script + Poppins)

### 🧸 Cute Elements
- **Animated Teddy Bears** in corners with bouncing animations
- Different teddy poses: sitting, waving, holding heart
- Teddy bears appear in confetti celebration

### 💖 Interactive Features
- **YES Button**: Glowing, pulsing button that triggers celebration
- **NO Button**: Playful behavior - moves away when hovered, shrinks when clicked
- Teasing messages when NO is attempted
- Floating hearts background animation

### 🎵 Music System
- **3 Romantic Song Options**:
  1. Perfect Love - Romantic Piano
  2. All of Me - Soft Instrumental
  3. Thinking Out Loud - Acoustic Romance
- Full music player controls (play/pause, volume, mute)
- Animated music visualizer bars
- Song selection interface

### 💌 Love Letter
- Heartfelt personalized letter for "Allu Balluu Thalluu"
- Beautiful handwritten font styling
- Paper texture background
- Decorative hearts and wax seal
- Smooth reveal animation

### 🎉 Celebration Screen
- Confetti explosion with 200 pieces
- Sparkles animation (30 sparkles)
- Success message with animations
- Teddy bear holding heart
- Love letter display
- Music player integration

## 🚀 Getting Started

### Installation
```bash
cd valentine-react
npm install
```

### Development
```bash
npm run dev
```
The app will open automatically at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎨 Customization

### Change Girlfriend's Name
In `src/App.jsx`, line 8:
```javascript
const girlfriendName = "Allu Balluu Thalluu" // Change this
```

### Customize Colors
In `tailwind.config.js`, modify the color values:
```javascript
colors: {
  'valentine-pink': '#ff6b9d',
  'valentine-dark': '#c44569',
  'valentine-light': '#ffc2d1',
  'valentine-purple': '#b983ff',
}
```

### Add Your Own Songs
In `src/components/MusicPlayer.jsx`, replace the song URLs:
```javascript
const songs = [
  {
    title: "Your Song Title",
    artist: "Artist Name",
    url: "path/to/your/song.mp3" // Replace with your song URL
  },
  // Add more songs...
]
```

### Customize Love Letter
Edit the letter content in `src/components/LoveLetter.jsx`, line 14:
```javascript
const letterContent = `Your custom message here...`
```

### Adjust Animations
- **Floating Hearts**: Change count in `src/components/QuestionScreen.jsx`, line 61
- **Confetti**: Adjust numberOfPieces in `src/components/CelebrationScreen.jsx`, line 42
- **Sparkles**: Change count in array on line 68

## 📁 Project Structure

```
valentine-react/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── QuestionScreen.jsx      # Main question screen
│   │   ├── CelebrationScreen.jsx   # Success celebration screen
│   │   ├── LoveLetter.jsx          # Love letter component
│   │   ├── MusicPlayer.jsx         # Music player with controls
│   │   ├── FloatingHearts.jsx      # Background hearts animation
│   │   └── TeddyBear.jsx           # Animated teddy bear
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Confetti** - Confetti effects

## 💝 Component Details

### QuestionScreen
- Displays the main question
- Animated title with girlfriend's name
- YES/NO buttons with interactions
- Floating hearts background
- Teddy bears in corners
- Teasing messages

### CelebrationScreen
- Full-screen celebration
- Confetti animation
- Sparkles effect
- Love letter display
- Music player
- Teddy bear with heart

### LoveLetter
- Personalized romantic message
- Paper texture background
- Decorative elements
- Wax seal animation
- Smooth reveal effect

### MusicPlayer
- 3 song options
- Play/pause control
- Volume slider
- Mute toggle
- Animated visualizer
- Song selection

### FloatingHearts
- Randomized heart emojis
- Continuous floating animation
- Customizable count and speed

### TeddyBear
- Multiple poses (sitting, wave, heart)
- Customizable position and size
- Bouncing animations
- Cute emoji-based design

## 🎯 Usage Tips

1. **Test the NO button** - Hover over it to see it move away!
2. **Try clicking NO** - Watch it shrink and see teasing messages
3. **Click YES** - Enjoy the celebration with confetti and sparkles
4. **Read the letter** - A heartfelt message appears
5. **Play music** - Choose from 3 romantic songs
6. **Adjust volume** - Use the slider or mute button

## 📱 Responsive Design

- **Mobile** (< 480px): Optimized for phones
- **Tablet** (768px): Adjusted layouts
- **Desktop** (1920px+): Full experience

## 🎁 Special Features

- **Easter Egg**: Konami code support (if you want to add it)
- **Smooth Transitions**: All screen changes use Framer Motion
- **Performance**: Optimized animations using CSS transforms
- **Accessibility**: Proper ARIA labels and semantic HTML

## 📝 Notes

- The music URLs are placeholders - replace with your own romantic songs
- Confetti stops after 10 seconds to improve performance
- All animations are hardware-accelerated for smooth 60fps
- The app is fully responsive and works on all devices

## ❤️ Made with Love

Created with React, Tailwind CSS, and lots of love for your special Valentine!

Enjoy! 💕
