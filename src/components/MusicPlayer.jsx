import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react'

const MusicPlayer = () => {
    const [currentSong, setCurrentSong] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(0.7)
    const [isMuted, setIsMuted] = useState(false)
    const audioRef = useRef(null)

    const songs = [
        {
            title: "Perfect Love",
            artist: "Romantic Piano",
            // Using a placeholder - you can replace with actual romantic song URLs
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            title: "All of Me",
            artist: "Soft Instrumental",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            title: "Thinking Out Loud",
            artist: "Acoustic Romance",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        }
    ]

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume
        }
    }, [volume, isMuted])

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const changeSong = (index) => {
        setCurrentSong(index)
        setIsPlaying(false)
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.load()
        }
    }

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="max-w-md mx-auto mt-8"
        >
            <div className="glass-effect rounded-2xl p-6 shadow-xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                    <Music className="text-valentine-pink" size={24} />
                    <h3 className="font-handwriting text-2xl text-valentine-dark">
                        Choose Our Song 🎵
                    </h3>
                </div>

                {/* Song Selection */}
                <div className="space-y-2 mb-6">
                    {songs.map((song, index) => (
                        <motion.button
                            key={index}
                            onClick={() => changeSong(index)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full text-left p-3 rounded-lg transition-all ${currentSong === index
                                    ? 'bg-valentine-pink text-white shadow-lg'
                                    : 'bg-white/50 text-valentine-dark hover:bg-white/70'
                                }`}
                        >
                            <div className="font-semibold">{song.title}</div>
                            <div className="text-sm opacity-80">{song.artist}</div>
                        </motion.button>
                    ))}
                </div>

                {/* Audio Element */}
                <audio ref={audioRef} src={songs[currentSong].url} loop />

                {/* Controls */}
                <div className="flex items-center gap-4">
                    {/* Play/Pause Button */}
                    <motion.button
                        onClick={togglePlay}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gradient-to-r from-valentine-pink to-valentine-dark text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
                    >
                        {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                    </motion.button>

                    {/* Volume Control */}
                    <div className="flex-1 flex items-center gap-2">
                        <button
                            onClick={toggleMute}
                            className="text-valentine-dark hover:text-valentine-pink transition-colors"
                        >
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={isMuted ? 0 : volume}
                            onChange={(e) => {
                                setVolume(parseFloat(e.target.value))
                                setIsMuted(false)
                            }}
                            className="flex-1 h-2 bg-white/50 rounded-lg appearance-none cursor-pointer accent-valentine-pink"
                        />
                    </div>
                </div>

                {/* Animated Music Bars */}
                {isPlaying && (
                    <div className="flex items-end justify-center gap-1 mt-4 h-12">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-2 bg-gradient-to-t from-valentine-pink to-valentine-purple rounded-full"
                                animate={{
                                    height: ['20%', '100%', '20%'],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default MusicPlayer
