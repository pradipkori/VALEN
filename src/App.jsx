import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import QuestionScreen from './components/QuestionScreen'
import CelebrationScreen from './components/CelebrationScreen'

function App() {
    const [showCelebration, setShowCelebration] = useState(false)
    const girlfriendName = "Allu Balluu Thalluu"

    const handleYesClick = () => {
        setShowCelebration(true)
    }

    return (
        <div className="min-h-screen overflow-hidden">
            <AnimatePresence mode="wait">
                {!showCelebration ? (
                    <QuestionScreen
                        key="question"
                        girlfriendName={girlfriendName}
                        onYesClick={handleYesClick}
                    />
                ) : (
                    <CelebrationScreen
                        key="celebration"
                        girlfriendName={girlfriendName}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}

export default App
