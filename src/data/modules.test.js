import { describe, it, expect } from 'vitest'
import { modules } from '../data/modules.js'

describe('Modules Data', () => {
  it('should have at least one module', () => {
    expect(modules.length).toBeGreaterThan(0)
  })

  it('each module should have required properties', () => {
    modules.forEach((module) => {
      expect(module).toHaveProperty('id')
      expect(module).toHaveProperty('title')
      expect(module).toHaveProperty('description')
      expect(module).toHaveProperty('lessons')
      expect(Array.isArray(module.lessons)).toBe(true)
    })
  })

  it('each lesson should have required properties', () => {
    modules.forEach((module) => {
      module.lessons.forEach((lesson) => {
        expect(lesson).toHaveProperty('id')
        expect(lesson).toHaveProperty('title')
        expect(lesson).toHaveProperty('theory')
        expect(lesson).toHaveProperty('exercise')
      })
    })
  })

  it('each exercise should have valid structure', () => {
    modules.forEach((module) => {
      module.lessons.forEach((lesson) => {
        const exercise = lesson.exercise
        expect(exercise).toHaveProperty('type')
        expect(exercise).toHaveProperty('question')
        expect(exercise).toHaveProperty('answer')
        expect(['code', 'text']).toContain(exercise.type)
      })
    })
  })

  it('module IDs should be unique', () => {
    const ids = modules.map((m) => m.id)
    const uniqueIds = [...new Set(ids)]
    expect(ids.length).toBe(uniqueIds.length)
  })
})
