import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import FloatingHearts from './FloatingHearts'
import TeddyBear from './TeddyBear'

const QuestionScreen = ({ girlfriendName, onYesClick }) => {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
    const [noClickCount, setNoClickCount] = useState(0)
    const [teaseMessage, setTeaseMessage] = useState('')
    const [yesButtonScale, setYesButtonScale] = useState(1)
    const noButtonRef = useRef(null)

    // Set initial NO button position after component mounts
    useEffect(() => {
        const centerX = window.innerWidth / 2 + 100 // To the right of YES button
        const centerY = window.innerHeight / 2 + 20 // Same level as YES button
        setNoButtonPosition({ x: centerX, y: centerY })
    }, [])

    const teaseMessages = [
        "Hey! You can't say no 😜",
        "Aisa Mat karo baabuu😣",
        "Jhapar prega khikhihkhii😚",
        "Oops! Wrong button! Try the other one 💖",
        "I'll keep asking until you say yes! 😊",
        "Pretty please? 🥺💕"
    ]

    const handleNoHover = () => {
        // Move NO button to random position - anywhere on screen!
        const buttonWidth = 150
        const buttonHeight = 60
        const maxX = window.innerWidth - buttonWidth - 40
        const maxY = window.innerHeight - buttonHeight - 40

        setNoButtonPosition({
            x: Math.random() * maxX,
            y: Math.random() * maxY,
        })

        showRandomTeaseMessage()
    }

    const handleNoClick = (e) => {
        e.preventDefault()
        setNoClickCount(prev => prev + 1)
        setYesButtonScale(1.2)
        showRandomTeaseMessage()
    }

    const showRandomTeaseMessage = () => {
        const message = teaseMessages[Math.floor(Math.random() * teaseMessages.length)]
        setTeaseMessage(message)
        setTimeout(() => setTeaseMessage(''), 2000)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen animated-gradient flex items-center justify-center p-4 relative"
        >
            <FloatingHearts count={20} />

            {/* Teddy Bears in corners */}
            <TeddyBear pose="sitting" position="bottom-left" size="md" />
            <TeddyBear pose="wave" position="bottom-right" size="md" />

            {/* NO Button - Fixed position to move anywhere on screen */}
            <motion.button
                ref={noButtonRef}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                onClick={handleNoClick}
                style={{
                    position: 'fixed',
                    left: noButtonPosition.x,
                    top: noButtonPosition.y,
                    zIndex: 9999,
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 text-valentine-dark font-bold text-xl md:text-2xl px-8 md:px-16 py-4 md:py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
                {noClickCount >= 3 ? '🥺' : 'NO 😅'}
            </motion.button>

            {/* Main Card */}
            <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="glass-effect shimmer rounded-3xl p-12 max-w-2xl w-full shadow-2xl relative z-20"
            >
                {/* Title */}
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-handwriting text-6xl md:text-7xl text-gradient text-center mb-8"
                >
                    Hey {girlfriendName} ❤️
                </motion.h1>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center text-valentine-dark text-xl mb-8 space-y-3"
                >
                    <p>Every moment with you feels special…</p>
                    <p>So I just wanted to ask…</p>
                </motion.div>

                {/* Main Question */}
                <motion.h2
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                    className="font-handwriting text-5xl md:text-6xl text-gradient text-center mb-12 text-shadow-glow"
                >
                    Will you be my Valentine? 💖
                </motion.h2>

                {/* YES Button */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex justify-center"
                >
                    <motion.button
                        onClick={onYesClick}
                        whileHover={{ scale: 1.15, y: -8 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ scale: yesButtonScale }}
                        className="shimmer bg-gradient-to-r from-valentine-pink via-pink-500 to-valentine-dark text-white font-bold text-xl md:text-2xl px-8 md:px-16 py-4 md:py-5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 animate-glow relative overflow-hidden"
                    >
                        YES 💕
                    </motion.button>
                </motion.div>

                {/* Tease Message */}
                {teaseMessage && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-center mt-6 text-valentine-dark font-semibold text-lg"
                    >
                        {teaseMessage}
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    )
}

export default QuestionScreen
