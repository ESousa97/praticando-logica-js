import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProgressStore } from '../stores/progress.js'

// Mock localStorage
const localStorageMock = {
  store: {},
  getItem: vi.fn((key) => localStorageMock.store[key] || null),
  setItem: vi.fn((key, value) => {
    localStorageMock.store[key] = value
  }),
  clear: vi.fn(() => {
    localStorageMock.store = {}
  }),
  removeItem: vi.fn((key) => {
    delete localStorageMock.store[key]
  }),
}

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true,
})

describe('Progress Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorageMock.clear()
    vi.clearAllMocks()
  })

  it('should initialize with empty progress', () => {
    const store = useProgressStore()
    expect(store.completedLessons).toEqual({})
    expect(store.completedModules).toEqual([])
  })

  it('should complete a lesson', () => {
    const store = useProgressStore()

    store.completeLesson('module1', 'lesson1')

    expect(store.completedLessons['module1']).toContain('lesson1')
  })

  it('should not duplicate completed lessons', () => {
    const store = useProgressStore()

    store.completeLesson('module1', 'lesson1')
    store.completeLesson('module1', 'lesson1')

    expect(store.completedLessons['module1'].length).toBe(1)
  })

  it('should complete a module', () => {
    const store = useProgressStore()

    store.completeModule('module1')

    expect(store.completedModules).toContain('module1')
  })

  it('should check if lesson is completed', () => {
    const store = useProgressStore()

    store.completeLesson('module1', 'lesson1')

    expect(store.isLessonCompleted('module1', 'lesson1')).toBe(true)
    expect(store.isLessonCompleted('module1', 'lesson2')).toBe(false)
  })

  it('should check if module is completed', () => {
    const store = useProgressStore()

    store.completeModule('module1')

    expect(store.isModuleCompleted('module1')).toBe(true)
    expect(store.isModuleCompleted('module2')).toBe(false)
  })

  it('should persist to localStorage', () => {
    const store = useProgressStore()

    store.completeLesson('module1', 'lesson1')

    const saved = JSON.parse(localStorage.getItem('completedLessons') || '{}')
    expect(saved['module1']).toContain('lesson1')
  })
})
