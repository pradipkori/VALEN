import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const LoveLetter = ({ girlfriendName }) => {
    const [showLetter, setShowLetter] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShowLetter(true), 1000)
        return () => clearTimeout(timer)
    }, [])

    const letterContent = `My Dearest ${girlfriendName},

From the moment you came into my life, everything changed. Your smile lights up my darkest days, and your laughter is the sweetest melody I've ever heard.

Every moment spent with you feels like a beautiful dream I never want to wake up from. You make the ordinary extraordinary, and the simple moments unforgettable.

Your kindness, your warmth, your beautiful soul - everything about you makes my heart skip a beat. I find myself thinking about you constantly, smiling at random moments just remembering something you said or did.

You've become my favorite person, my best friend, my everything. Being with you feels like home - comfortable, safe, and filled with endless joy.

This Valentine's Day, I want you to know that you mean the world to me. You're not just my Valentine for today, but for every day that follows.

Thank you for being you, for being mine, for making life so incredibly beautiful.

Forever yours,
With all my love ❤️`

    return (
        <motion.div
            initial={{ scale: 0, rotateY: 90 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto"
        >
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-valentine-light relative overflow-hidden">
                {/* Paper texture overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')]"></div>

                {/* Decorative hearts in corners */}
                <div className="absolute top-4 left-4 text-4xl opacity-20">💕</div>
                <div className="absolute top-4 right-4 text-4xl opacity-20">💕</div>
                <div className="absolute bottom-4 left-4 text-4xl opacity-20">💕</div>
                <div className="absolute bottom-4 right-4 text-4xl opacity-20">💕</div>

                {/* Letter Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-center mb-8"
                >
                    <h2 className="font-handwriting text-5xl text-valentine-dark mb-2">
                        A Letter for You 💌
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-valentine-pink to-valentine-purple mx-auto rounded-full"></div>
                </motion.div>

                {/* Letter Content */}
                {showLetter && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="relative z-10"
                    >
                        <div className="font-handwriting text-lg md:text-xl text-valentine-dark leading-relaxed whitespace-pre-line">
                            {letterContent}
                        </div>
                    </motion.div>
                )}

                {/* Seal */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2, type: 'spring', stiffness: 200 }}
                    className="mt-8 text-center"
                >
                    <div className="inline-block bg-valentine-pink text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
                        ❤️
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default LoveLetter
