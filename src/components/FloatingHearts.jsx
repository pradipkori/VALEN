import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingHearts = ({ count = 20 }) => {
    const [hearts, setHearts] = useState([])
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '💞', '🌹', '✨', '💐']

    useEffect(() => {
        const newHearts = Array.from({ length: count }, (_, i) => ({
            id: i,
            emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
            left: Math.random() * 100,
            delay: Math.random() * 8,
            duration: Math.random() * 4 + 6,
        }))
        setHearts(newHearts)
    }, [count])

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-2xl"
                    style={{ left: `${heart.left}%` }}
                    initial={{ y: '100vh', opacity: 0, rotate: 0 }}
                    animate={{
                        y: '-100px',
                        opacity: [0, 0.8, 0.8, 0],
                        rotate: 360,
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: 'easeIn',
                    }}
                >
                    {heart.emoji}
                </motion.div>
            ))}
        </div>
    )
}

export default FloatingHearts
