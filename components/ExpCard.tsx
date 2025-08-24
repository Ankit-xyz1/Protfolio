'use client'
import { AnimatePresence , motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
interface props{
    item:any
}
const ExpCard = ({item}:props) => {
    const [expanded, setexpanded] = useState(false)
    return (
        <>
            <div
                className="flex flex-col gap-2 p-4 border border-zinc-800 rounded-xl bg-zinc-900/80 shadow-md w-full"
            >
                {/* Company + Role */}
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">{item.role}</h3>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-400 hover:underline"
                        >
                            {item.name}
                        </a>
                    </div>
                    {item.type && (
                        <span className="text-xs px-2 py-1 rounded-full bg-zinc-700 text-zinc-300">
                            {item.type}
                        </span>
                    )}
                </div>

                {/* Dates, Duration & Mode */}
                <p className="text-xs text-zinc-400">
                    {item.startDate} - {item.endDate}{" "}
                    {item.duration && <span> · {item.duration}</span>}
                    {item.mode && <span> · {item.mode}</span>}
                </p>

                {/* Description with See More */}
                <AnimatePresence>
                    {expanded && (
                        <motion.ul
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="list-disc list-inside space-y-1 text-sm text-zinc-300 overflow-hidden"
                        >
                            {item.description.map((point: string, i: number) => (
                                <li key={i}>{point}</li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                {/* Toggle button */}
                {item.description && (
                    <button
                        onClick={() => setexpanded(!expanded)}
                        className="mt-2 flex items-center text-xs text-blue-400 hover:underline cursor-pointer"
                    >
                        {expanded ? (
                            <>
                                See less <ChevronUp className="w-4 h-4 ml-1" />
                            </>
                        ) : (
                            <>
                                See more <ChevronDown className="w-4 h-4 ml-1" />
                            </>
                        )}
                    </button>
                )}
            </div>
        </>
    )
}

export default ExpCard