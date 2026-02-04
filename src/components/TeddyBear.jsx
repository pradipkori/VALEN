import { motion } from 'framer-motion'

const TeddyBear = ({ pose = 'sitting', position = 'bottom-left', size = 'md' }) => {
    const sizeClasses = {
        sm: 'text-6xl',
        md: 'text-8xl',
        lg: 'text-9xl',
    }

    const positionClasses = {
        'bottom-left': 'bottom-8 left-8',
        'bottom-right': 'bottom-8 right-8',
        'top-left': 'top-8 left-8',
        'top-right': 'top-8 right-8',
        'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    }

    const teddyEmojis = {
        sitting: '🧸',
        heart: '🧸💝',
        wave: '🧸👋',
    }

    const animations = {
        sitting: {
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
        },
        heart: {
            scale: [1, 1.1, 1],
            rotate: [0, -10, 10, 0],
        },
        wave: {
            rotate: [0, 15, -15, 15, 0],
        },
    }

    return (
        <motion.div
            className={`fixed ${positionClasses[position]} ${sizeClasses[size]} z-10 pointer-events-none select-none`}
            animate={animations[pose]}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            {teddyEmojis[pose]}
        </motion.div>
    )
}

export default TeddyBear
