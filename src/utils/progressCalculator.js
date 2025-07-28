// src/utils/progressCalculator.js
export class ProgressCalculator {
  static calculateModuleProgress(moduleId, completedLessons, totalLessons) {
    if (totalLessons === 0) return 0
    
    const moduleLessons = completedLessons.filter(lesson => 
      lesson.startsWith(`${moduleId}-`)
    )
    
    return (moduleLessons.length / totalLessons) * 100
  }

  static calculateOverallProgress(completedLessons, totalLessons) {
    if (totalLessons === 0) return 0
    return (completedLessons.length / totalLessons) * 100
  }

  static calculateLevel(points) {
    return Math.floor(points / 100) + 1
  }

  static getPointsToNextLevel(currentPoints) {
    const currentLevel = this.calculateLevel(currentPoints)
    const pointsForNextLevel = currentLevel * 100
    return pointsForNextLevel - currentPoints
  }

  static calculateStreakDays(completionDates) {
    if (completionDates.length === 0) return 0
    
    const sortedDates = completionDates
      .map(date => new Date(date).toDateString())
      .sort()
      .filter((date, index, arr) => arr.indexOf(date) === index) // Remove duplicatas
    
    let streak = 1
    let currentStreak = 1
    
    for (let i = 1; i < sortedDates.length; i++) {
      const prevDate = new Date(sortedDates[i - 1])
      const currentDate = new Date(sortedDates[i])
      const diffTime = currentDate - prevDate
      const diffDays = diffTime / (1000 * 60 * 60 * 24)
      
      if (diffDays === 1) {
        currentStreak++
        streak = Math.max(streak, currentStreak)
      } else {
        currentStreak = 1
      }
    }
    
    return streak
  }

  static getTimeSpentStudying(sessionTimes) {
    return sessionTimes.reduce((total, time) => total + time, 0)
  }

  static calculateAccuracy(correctAnswers, totalAttempts) {
    if (totalAttempts === 0) return 0
    return (correctAnswers / totalAttempts) * 100
  }
}
