import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import LoveLetter from './LoveLetter'
import TeddyBear from './TeddyBear'

const CelebrationScreen = ({ girlfriendName }) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    const [showConfetti, setShowConfetti] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)

        // Stop confetti after 10 seconds
        const timer = setTimeout(() => setShowConfetti(false), 10000)

        return () => {
            window.removeEventListener('resize', handleResize)
            clearTimeout(timer)
        }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-br from-valentine-pink via-pink-400 to-valentine-dark overflow-y-auto py-12 px-4 relative"
        >
            {/* Confetti */}
            {showConfetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    recycle={true}
                    numberOfPieces={200}
                    colors={['#ff6b9d', '#c44569', '#ffc2d1', '#b983ff', '#ff1493']}
                />
            )}

            {/* Teddy Bear with Heart - Center */}
            <TeddyBear pose="heart" position="top-right" size="lg" />

            {/* Main Content */}
            <div className="max-w-5xl mx-auto relative z-10">
                {/* Celebration Title */}
                <motion.div
                    initial={{ scale: 0, y: -100 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <h1 className="font-handwriting text-6xl md:text-8xl text-white mb-4 text-shadow-soft">
                        YAY! I knew you'd say yes 😘💞
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-3xl md:text-4xl text-white/90 font-body"
                    >
                        Happy Valentine's Day ❤️
                    </motion.p>
                </motion.div>

                {/* Sparkles Effect */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [0, 1.5, 0],
                                opacity: [0, 1, 0],
                                rotate: 360,
                            }}
                            transition={{
                                duration: 1.5,
                                delay: Math.random() * 2,
                                repeat: Infinity,
                                repeatDelay: Math.random() * 3,
                            }}
                        />
                    ))}
                </div>

                {/* Love Letter */}
                <LoveLetter girlfriendName={girlfriendName} />

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                    className="text-center mt-12 mb-8"
                >
                    <p className="text-white text-2xl font-handwriting">
                        You make every day feel like Valentine's Day 💝
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default CelebrationScreen
