"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getTimeOfDay, getTimeTheme, getDefaultTheme, isDarkPeriod, type TimeOfDay, type TimeTheme } from "@/lib/time-theme"

interface TimeThemeContextValue {
  theme: TimeTheme
  period: TimeOfDay
  isDark: boolean
}

const TimeThemeContext = createContext<TimeThemeContextValue>({
  theme: getDefaultTheme(),
  period: "morning",
  isDark: false,
})

export function useTimeTheme() {
  return useContext(TimeThemeContext)
}

export default function TimeThemeProvider({ children }: { children: ReactNode }) {
  const [period, setPeriod] = useState<TimeOfDay>("morning")

  useEffect(() => {
    // 클라이언트에서 현재 시간 감지
    const updatePeriod = () => {
      setPeriod(getTimeOfDay())
    }
    updatePeriod()

    // 1분마다 업데이트 (시간대 전환 감지)
    const interval = setInterval(updatePeriod, 60_000)
    return () => clearInterval(interval)
  }, [])

  const theme = getTimeTheme(period)
  const isDark = isDarkPeriod(period)

  return (
    <TimeThemeContext.Provider value={{ theme, period, isDark }}>
      {children}
    </TimeThemeContext.Provider>
  )
}
