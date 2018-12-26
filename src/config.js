export let splitURLs = [null, null]
if (process.env.REACT_APP_API_BASE_URL) {
  splitURLs = process.env.REACT_APP_API_BASE_URL.split(',')
}

export const API_BASE_URL = splitURLs[0] || 'http://localhost:8080/api'
export const BASENAME = splitURLs[1] || 'localhost:3000'
 