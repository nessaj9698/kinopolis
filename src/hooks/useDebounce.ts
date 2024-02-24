import { useState, useEffect } from "react"

export function useDebounce<T>(
  value: T,
  delay: number,
): [T, (value: T) => void] {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value, delay])

  return [debouncedValue, setDebouncedValue]
}
